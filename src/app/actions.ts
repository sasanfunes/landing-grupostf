"use server";

import { headers } from "next/headers";
import { after } from "next/server";
import { notifyNewContact } from "@/lib/notify";
import { createAdminClient } from "@/lib/supabase/server";
import {
  checkEmail,
  checkMax,
  checkName,
  checkOptionalUrl,
  normalizeUrl,
  text,
  type FieldErrors,
} from "@/lib/validation";

export type FormState = {
  status: "idle" | "success" | "error";
  error?: "validation" | "server";
  fields?: FieldErrors;
  /** Valores enviados, para no vaciar el formulario cuando hay un error. */
  values?: Record<string, string>;
};

function langOf(form: FormData): "es" | "en" {
  return text(form, "lang") === "en" ? "en" : "es";
}

/** Campo trampa: los bots lo llenan, las personas no lo ven. */
function isBot(form: FormData): boolean {
  return text(form, "company_website") !== "";
}

async function userAgent(): Promise<string | null> {
  const h = await headers();
  return h.get("user-agent")?.slice(0, 400) ?? null;
}

function missingConfig(kind: string): FormState {
  // Sólo en local (`npm run dev`) se simula el envío para probar la interfaz.
  // En cualquier deployment de Vercel (producción o preview) es un error visible.
  if (process.env.VERCEL) {
    console.error(`[${kind}] Faltan NEXT_PUBLIC_SUPABASE_URL / SUPABASE_SECRET_KEY en este deployment.`);
    return { status: "error", error: "server" };
  }
  console.warn(`[${kind}] Supabase no está configurado: el envío no se guardó (sólo local).`);
  return { status: "success" };
}

export async function submitContact(_prev: FormState, form: FormData): Promise<FormState> {
  if (isBot(form)) return { status: "success" };

  const name = text(form, "name");
  const email = text(form, "email").toLowerCase();
  const message = text(form, "message");

  const fields: FieldErrors = {};
  checkName(name, fields);
  checkEmail(email, fields);
  checkMax(message, 5000, fields, "message");
  const values = { name, email, message };
  if (Object.keys(fields).length) return { status: "error", error: "validation", fields, values };

  const supabase = createAdminClient();
  if (!supabase) return missingConfig("contact");

  const locale = langOf(form);
  const { data, error } = await supabase
    .from("contact_messages")
    .insert({
      full_name: name,
      email,
      message: message || null,
      locale,
      user_agent: await userAgent(),
    })
    .select("id")
    .single();

  if (error) {
    console.error("[contact] Error al guardar el mensaje:", error.message);
    return { status: "error", error: "server", values };
  }

  // Aviso por correo después de responder: no retrasa al visitante y, si falla,
  // el mensaje ya quedó guardado.
  after(() => notifyNewContact({ id: data?.id, name, email, message, locale }));

  return { status: "success" };
}

export async function submitApplication(_prev: FormState, form: FormData): Promise<FormState> {
  if (isBot(form)) return { status: "success" };

  const slug = text(form, "job_slug").slice(0, 120);
  const jobTitle = text(form, "job_title").slice(0, 200);
  const name = text(form, "name");
  const email = text(form, "email").toLowerCase();
  const phone = text(form, "phone");
  const profile = text(form, "profile_url");

  const fields: FieldErrors = {};
  checkName(name, fields);
  checkEmail(email, fields);
  checkMax(phone, 40, fields, "phone");
  checkOptionalUrl(profile, fields, "profile_url");
  if (!slug) fields.job_slug = true;
  const values = { name, email, phone, profile_url: profile };
  if (Object.keys(fields).length) return { status: "error", error: "validation", fields, values };

  const supabase = createAdminClient();
  if (!supabase) return missingConfig("application");

  const { data: job } = await supabase
    .from("job_openings")
    .select("id, title_es")
    .eq("slug", slug)
    .maybeSingle();

  const { error } = await supabase.from("job_applications").insert({
    job_id: job?.id ?? null,
    job_slug: slug,
    job_title: job?.title_es ?? jobTitle,
    full_name: name,
    email,
    phone: phone || null,
    profile_url: normalizeUrl(profile),
    locale: langOf(form),
    user_agent: await userAgent(),
  });

  if (error) {
    console.error("[application] Error al guardar la postulación:", error.message);
    return { status: "error", error: "server", values };
  }
  return { status: "success" };
}
