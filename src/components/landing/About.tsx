"use client";

import { useEffect, useRef, useState } from "react";
import { SectionHeading, SectionNumber, Stat } from "@/components/ds";
import { SITE, sectionNumber } from "@/lib/site";
import { useLang } from "./LangContext";
import { prefersReducedMotion } from "./motion";
import s from "./landing.module.css";

export function About() {
  const { t, lang } = useLang();
  const statsRef = useRef<HTMLDivElement>(null);
  // El HTML del servidor trae las cifras finales; el conteo es una mejora en cliente.
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    const el = statsRef.current;
    if (!el || prefersReducedMotion() || !("IntersectionObserver" in window)) return;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return;

    let raf = 0;
    setProgress(0);
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const t0 = performance.now();
        const step = (now: number) => {
          const p = Math.min(1, (now - t0) / 1800);
          setProgress(1 - Math.pow(1 - p, 3));
          if (p < 1) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  const fmt = (v: number) => Math.round(v).toLocaleString(lang === "en" ? "en-US" : "es-MX");

  return (
    <section id="nosotros" className={`${s.section} ${s.bgWarm}`} aria-labelledby="nosotros-title">
      <SectionNumber>{sectionNumber("nosotros")}</SectionNumber>
      <div data-reveal className={`${s.split} ${s.alignEnd}`}>
        <SectionHeading
          id="nosotros-title"
          eyebrow={t.aboutEyebrow}
          title={t.aboutT}
          emphasis={t.aboutEmph}
          size="h3"
        />
        <p className={s.aboutP}>{t.aboutP}</p>
      </div>
      <div ref={statsRef} data-stagger className={s.stats}>
        {SITE.stats.map((st, idx) => (
          <Stat key={idx} value={fmt(st.value * progress)} suffix={st.suffix} label={t.stats[idx]} />
        ))}
      </div>
    </section>
  );
}
