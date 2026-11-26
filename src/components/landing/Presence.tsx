"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { SectionHeading, SectionNumber } from "@/components/ds";
import { COUNTRY_KEYS } from "@/lib/i18n";
import { sectionNumber } from "@/lib/site";
import { useLang } from "./LangContext";
import s from "./landing.module.css";
import m from "./PresenceMap.module.css";

// d3-geo + topojson + atlas sólo se descargan cuando la sección se acerca.
const PresenceMap = dynamic(() => import("./PresenceMap"), { ssr: false });

export function Presence() {
  const { t } = useLang();
  const frameRef = useRef<HTMLElement>(null);
  const [near, setNear] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = frameRef.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      const id = setTimeout(() => {
        setNear(true);
        setVisible(true);
      });
      return () => clearTimeout(id);
    }
    // Precarga con margen; anima cuando el mapa entra al 80% del viewport.
    const pre = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setNear(true);
          pre.disconnect();
        }
      },
      { rootMargin: "600px 0px" },
    );
    const show = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          show.disconnect();
        }
      },
      { rootMargin: "0px 0px -20% 0px" },
    );
    pre.observe(el);
    show.observe(el);
    return () => {
      pre.disconnect();
      show.disconnect();
    };
  }, []);

  return (
    <section id="presencia" className={`${s.section} ${s.bgNavy}`} aria-labelledby="presencia-title">
      <SectionNumber>{sectionNumber("presencia")}</SectionNumber>
      <div data-reveal className={s.presence}>
        <div className={s.presenceAside}>
          <SectionHeading
            id="presencia-title"
            eyebrow={t.mapEyebrow}
            title={t.mapT}
            emphasis={t.mapEmph}
            onDark
            size="h3"
          />
          <ol className={s.countries}>
            {COUNTRY_KEYS.map((k, idx) => (
              <li key={k} className={s.country}>
                <span className={s.countryIdx}>0{idx + 1}</span>
                <span className={s.countryName}>{t.countries[k]}</span>
              </li>
            ))}
          </ol>
        </div>
        <figure className={m.frame} ref={frameRef}>
          <div className={m.canvas}>{near && <PresenceMap play={visible} />}</div>
          <figcaption className={m.legend}>
            <i className={m.legendSwatch} aria-hidden="true" />
            {t.mapLegend}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
