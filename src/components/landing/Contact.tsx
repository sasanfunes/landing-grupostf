"use client";

import { useActionState } from "react";
import { submitContact, type FormState } from "@/app/actions";
import { Button, Input, SectionHeading, SectionNumber, Textarea } from "@/components/ds";
import { SITE, sectionNumber } from "@/lib/site";
import { Honeypot } from "./Honeypot";
import { useLang } from "./LangContext";
import s from "./landing.module.css";

const initial: FormState = { status: "idle" };

export function Contact() {
  const { t, lang } = useLang();
  const [state, action, pending] = useActionState(submitContact, initial);
  const f = state.fields ?? {};
  const v = state.values ?? {};
  const { address, phone, email } = SITE.contact;

  return (
    <section id="contacto" className={`${s.section} ${s.bgWarm}`} aria-labelledby="contacto-title">
      <SectionNumber>{sectionNumber("contacto")}</SectionNumber>
      <div data-reveal className={`${s.split} ${s.alignStart}`}>
        <div className={s.contactAside}>
          <SectionHeading
            id="contacto-title"
            eyebrow={t.contactEyebrow}
            title={t.contactT}
            emphasis={t.contactEmph}
            size="h3"
          />
          <address className={s.contactInfo}>
            <span>{address}</span>
            <span>
              <a href={`tel:${phone.replace(/[^+\d]/g, "")}`}>{phone}</a>
              <span aria-hidden="true"> · </span>
              <a href={`mailto:${email}`}>{email}</a>
            </span>
          </address>
        </div>
        <div className={s.card}>
          {state.status === "success" ? (
            <div className={s.sent} role="status">
              <p className={s.sentT}>
                {t.sentT} <em>{t.sentEmph}</em>
              </p>
              <p className={s.sentP}>{t.sentP}</p>
            </div>
          ) : (
            <form action={action} className={s.contactForm}>
              <input type="hidden" name="lang" value={lang} />
              <Honeypot />
              <div className={s.formRow}>
                <Input
                  id="contact-name"
                  name="name"
                  label={t.fName}
                  required
                  autoComplete="name"
                  maxLength={120}
                  defaultValue={v.name}
                  error={!!f.name}
                />
                <Input
                  id="contact-email"
                  name="email"
                  type="email"
                  label={t.fEmail}
                  required
                  autoComplete="email"
                  maxLength={254}
                  defaultValue={v.email}
                  error={!!f.email}
                />
              </div>
              <Textarea id="contact-msg" name="message" label={t.fMsg} rows={4} maxLength={5000} defaultValue={v.message} error={!!f.message} />
              {state.status === "error" && (
                <p className={s.formError} role="alert">
                  {state.error === "validation" ? t.errValidation : t.errServer}
                </p>
              )}
              <div>
                <Button type="submit" variant="primary" size="lg" icon="→" disabled={pending}>
                  {pending ? t.sending : t.fSend}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
