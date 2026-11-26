"use client";

import { SectionHeading, SectionNumber } from "@/components/ds";
import { UNIT_KEYS } from "@/lib/i18n";
import { useLang } from "./LangContext";
import s from "./landing.module.css";

export function Units() {
  const { t } = useLang();
  return (
    <section id="negocios" className={`${s.section} ${s.bgWhite}`} aria-labelledby="negocios-title">
      <SectionNumber>02</SectionNumber>
      <div data-reveal className={s.unitsHead}>
        <SectionHeading
          id="negocios-title"
          eyebrow={t.unitsEyebrow}
          title={t.unitsT}
          emphasis={t.unitsEmph}
          size="h3"
        />
      </div>
      <ul data-stagger className={s.units}>
        {UNIT_KEYS.map((k, idx) => (
          <li key={k} className={s.unit}>
            <span className={s.unitLine} aria-hidden="true" />
            <span className={s.unitIndex} aria-hidden="true">
              0{idx + 1}
            </span>
            <h3 className={s.unitName}>{t.units[k].name}</h3>
            <p className={s.unitShort}>{t.units[k].short}</p>
            <span className={s.unitArrow} aria-hidden="true">
              →
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
