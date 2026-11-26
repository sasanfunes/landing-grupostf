"use client";

import { COUNTRY_KEYS, UNIT_KEYS } from "@/lib/i18n";
import { useLang } from "./LangContext";
import s from "./landing.module.css";

export function Marquee() {
  const { t } = useLang();
  const base = [...UNIT_KEYS.map((k) => t.units[k].name), ...COUNTRY_KEYS.map((k) => t.countries[k])];
  // Cada mitad repite la lista para cubrir pantallas muy anchas sin huecos.
  const words = [...base, ...base];
  return (
    <div className={s.marquee} aria-hidden="true">
      <div className={s.marqueeTrack}>
        {[0, 1].map((copy) =>
          words.map((w, i) => (
            <span key={`${copy}-${i}`} className={s.marqueeItem}>
              <span className={s.marqueeWord}>{w}</span>
              <span className={s.marqueeDot} />
            </span>
          )),
        )}
      </div>
    </div>
  );
}
