"use client";

import { useActionState, useEffect, useId, useState } from "react";
import { submitApplication, type FormState } from "@/app/actions";
import { Button, Input, SectionHeading, SectionNumber } from "@/components/ds";
import { UNIT_KEYS, type UnitKey } from "@/lib/i18n";
import type { JobOpening } from "@/lib/jobs";
import { useLang } from "./LangContext";
import { Honeypot } from "./Honeypot";
import s from "./landing.module.css";

export function Careers({ jobs }: { jobs: JobOpening[] }) {
  const { t, lang } = useLang();
  const [cat, setCat] = useState<UnitKey | "all">("all");
  const [open, setOpen] = useState<string | null>(null);
  const [applying, setApplying] = useState<string | null>(null);
  const [applied, setApplied] = useState<Record<string, true>>({});
  const baseId = useId();

  const list = cat === "all" ? jobs : jobs.filter((j) => j.unit === cat);
  const chips: Array<UnitKey | "all"> = ["all", ...UNIT_KEYS];

  return (
    <section id="carreras" className={`${s.section} ${s.bgWhite}`} aria-labelledby="carreras-title">
      <SectionNumber>04</SectionNumber>
      <div data-reveal className={`${s.split} ${s.alignEnd} ${s.careersHead}`}>
        <SectionHeading
          id="carreras-title"
          eyebrow={t.jobsEyebrow}
          title={t.jobsT}
          emphasis={t.jobsEmph}
          size="h3"
        />
        <p className={s.jobsLead}>{t.jobsLead}</p>
      </div>

      {jobs.length > 0 && (
        <div data-reveal className={s.chips} role="group" aria-label={t.jobsEyebrow}>
          {chips.map((c) => (
            <button
              key={c}
              type="button"
              className={s.chip}
              aria-pressed={cat === c}
              onClick={() => {
                setCat(c);
                setOpen(null);
              }}
            >
              {c === "all" ? t.all : t.units[c].name}
            </button>
          ))}
        </div>
      )}

      <div className={s.jobs}>
        {jobs.length === 0 && <p className={s.jobsEmpty}>{t.noJobs}</p>}
        {jobs.length > 0 && list.length === 0 && <p className={s.jobsEmpty}>{t.noJobsInUnit}</p>}
        {list.map((j) => {
          const isOpen = open === j.slug;
          const panelId = `${baseId}-${j.slug}-panel`;
          const btnId = `${baseId}-${j.slug}-btn`;
          return (
            <div key={j.slug} className={s.job} data-open={isOpen || undefined}>
              <button
                id={btnId}
                type="button"
                className={s.jobRow}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : j.slug)}
              >
                <span className={s.jobTitle}>{j.title[lang]}</span>
                <span className={s.jobSub}>
                  <span className={s.jobUnit}>{t.units[j.unit].name}</span>
                  <span className={s.jobMeta}>
                    {t.countries[j.country]} · {t.workModes[j.workMode]}
                  </span>
                </span>
                <span className={s.jobToggle} aria-hidden="true">
                  +
                </span>
              </button>
              {isOpen && (
                <div id={panelId} role="region" aria-labelledby={btnId} className={s.jobPanel}>
                  <p className={s.jobDesc}>{j.description[lang]}</p>
                  <div className={s.jobSide}>
                    <span className={s.jobReq}>{j.requirements[lang]}</span>
                    {applied[j.slug] ? (
                      <div className={s.applied} role="status">
                        <span className={s.appliedBadge}>
                          <span className={s.appliedCheck} aria-hidden="true">
                            ✓
                          </span>
                          {t.applied}
                        </span>
                        <span className={s.appliedP}>{t.appliedP}</span>
                      </div>
                    ) : applying === j.slug ? (
                      <ApplicationForm
                        job={j}
                        onCancel={() => setApplying(null)}
                        onDone={() => {
                          setApplied((v) => ({ ...v, [j.slug]: true }));
                          setApplying(null);
                        }}
                      />
                    ) : (
                      <Button variant="primary" icon="→" onClick={() => setApplying(j.slug)}>
                        {t.apply}
                      </Button>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

const initial: FormState = { status: "idle" };

function ApplicationForm({
  job,
  onCancel,
  onDone,
}: {
  job: JobOpening;
  onCancel: () => void;
  onDone: () => void;
}) {
  const { t, lang } = useLang();
  const [state, action, pending] = useActionState(submitApplication, initial);
  const f = state.fields ?? {};
  const v = state.values ?? {};
  const idp = `ap-${job.slug}`;

  useEffect(() => {
    if (state.status === "success") onDone();
  }, [state.status, onDone]);

  return (
    <form action={action} className={s.applyForm}>
      <input type="hidden" name="job_slug" value={job.slug} />
      <input type="hidden" name="job_title" value={job.title.es} />
      <input type="hidden" name="lang" value={lang} />
      <Honeypot />
      <div className={s.formRow}>
        <Input
          id={`${idp}-name`}
          name="name"
          label={t.aName}
          required
          autoComplete="name"
          maxLength={120}
          defaultValue={v.name}
          error={!!f.name}
        />
        <Input
          id={`${idp}-email`}
          name="email"
          type="email"
          label={t.aEmail}
          required
          autoComplete="email"
          maxLength={254}
          defaultValue={v.email}
          error={!!f.email}
        />
      </div>
      <div className={s.formRow}>
        <Input
          id={`${idp}-phone`}
          name="phone"
          type="tel"
          label={t.aPhone}
          autoComplete="tel"
          maxLength={40}
          defaultValue={v.phone}
          error={!!f.phone}
        />
        <Input
          id={`${idp}-profile`}
          name="profile_url"
          type="text"
          inputMode="url"
          label={t.aProfile}
          hint={t.aProfileHint}
          maxLength={500}
          defaultValue={v.profile_url}
          error={!!f.profile_url}
        />
      </div>
      {state.status === "error" && (
        <p className={s.formError} role="alert">
          {state.error === "validation" ? t.errValidation : t.errServer}
        </p>
      )}
      <div className={s.formActions}>
        <Button type="submit" variant="primary" icon="→" disabled={pending}>
          {pending ? t.sending : t.aSend}
        </Button>
        <Button variant="ghost" onClick={onCancel} disabled={pending}>
          {t.aCancel}
        </Button>
      </div>
    </form>
  );
}
