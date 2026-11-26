import "server-only";
import { SITE } from "./site";

type ContactNotice = {
  id?: number;
  name: string;
  email: string;
  message: string;
  locale: "es" | "en";
};

const RESEND_ENDPOINT = "https://api.resend.com/emails";
const DEFAULT_FROM = "Grupo STF <notificaciones@grupostf.hn>";

const escapeHtml = (v: string) =>
  v.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/** Quita saltos de línea de lo que va en el asunto. */
const oneLine = (v: string) => v.replace(/[\r\n]+/g, " ").trim();

/**
 * Envía un aviso por correo cuando llega un mensaje de contacto (vía Resend).
 *
 * Variables:
 * - RESEND_API_KEY      (requerida; sin ella no se envía nada)
 * - CONTACT_NOTIFY_TO   (opcional; destinatarios separados por coma, por defecto SITE.contact.email)
 * - CONTACT_FROM_EMAIL  (opcional; remitente de un dominio verificado en Resend)
 *
 * Nunca lanza: si falla, sólo deja el error en los logs. El mensaje ya quedó
 * guardado en Supabase antes de llamar a esta función.
 */
export async function notifyNewContact(m: ContactNotice): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.info("[notify] RESEND_API_KEY no configurada: no se envió el aviso por correo.");
    return;
  }

  const to = (process.env.CONTACT_NOTIFY_TO || SITE.contact.email)
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  const from = process.env.CONTACT_FROM_EMAIL || DEFAULT_FROM;
  const name = oneLine(m.name);

  const when = new Intl.DateTimeFormat("es-HN", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "America/Tegucigalpa",
  }).format(new Date());
  const lang = m.locale === "en" ? "Inglés" : "Español";
  const message = m.message || "(sin mensaje)";
  const ref = process.env.SUPABASE_PROJECT_REF;
  const tableUrl = ref ? `https://supabase.com/dashboard/project/${ref}/editor` : null;

  const text = [
    "Nuevo mensaje desde el formulario de contacto de grupostf.hn",
    "",
    `Nombre: ${name}`,
    `Correo: ${m.email}`,
    `Idioma: ${lang}`,
    `Fecha: ${when} (hora de Honduras)`,
    "",
    "Mensaje:",
    message,
    "",
    "Responde a este correo para contestarle directamente.",
    ...(tableUrl ? [`Todos los mensajes: ${tableUrl}`] : []),
  ].join("\n");

  const row = (label: string, value: string) =>
    `<tr><td style="padding:6px 16px 6px 0;color:#6d7780;font-size:12px;text-transform:uppercase;letter-spacing:.1em;vertical-align:top;white-space:nowrap">${label}</td><td style="padding:6px 0;color:#102337;font-size:15px">${value}</td></tr>`;

  const html = `<!doctype html><html><body style="margin:0;background:#f7f5f0;font-family:Helvetica,Arial,sans-serif">
<div style="max-width:560px;margin:0 auto;padding:32px 20px">
  <div style="background:#071a2d;color:#fff;padding:20px 24px">
    <div style="color:#bf9a5b;font-size:11px;letter-spacing:.2em;text-transform:uppercase;font-weight:bold">Grupo STF</div>
    <div style="font-family:Georgia,serif;font-size:24px;margin-top:6px">Nuevo mensaje de contacto</div>
  </div>
  <div style="background:#fff;border:1px solid rgba(12,39,67,.16);border-top:0;padding:24px">
    <table style="border-collapse:collapse;width:100%">
      ${row("Nombre", escapeHtml(name))}
      ${row("Correo", `<a href="mailto:${escapeHtml(m.email)}" style="color:#0c2743">${escapeHtml(m.email)}</a>`)}
      ${row("Idioma", lang)}
      ${row("Fecha", `${escapeHtml(when)} <span style="color:#6d7780">(hora de Honduras)</span>`)}
    </table>
    <div style="margin-top:18px;padding-top:18px;border-top:1px solid rgba(12,39,67,.16);color:#102337;font-size:15px;line-height:1.6;white-space:pre-wrap">${escapeHtml(message)}</div>
  </div>
  <p style="color:#6d7780;font-size:12px;line-height:1.6;margin:16px 0 0">
    Responde a este correo para contestarle directamente a ${escapeHtml(name)}.${
      tableUrl ? ` <a href="${tableUrl}" style="color:#0c2743">Ver todos los mensajes en Supabase</a>.` : ""
    }
  </p>
</div></body></html>`;

  try {
    const res = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        ...(m.id ? { "Idempotency-Key": `contact-message-${m.id}` } : {}),
      },
      body: JSON.stringify({
        from,
        to,
        reply_to: m.email,
        subject: `Nuevo mensaje de contacto: ${name}`.slice(0, 180),
        text,
        html,
      }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) {
      const detail = (await res.text().catch(() => "")).slice(0, 500);
      console.error(`[notify] Resend respondió ${res.status}: ${detail}`);
    }
  } catch (err) {
    console.error("[notify] No se pudo enviar el aviso por correo:", err instanceof Error ? err.message : err);
  }
}
