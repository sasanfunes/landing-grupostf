"use client";

import Image, { type ImageLoader } from "next/image";
import { useEffect, useRef, type CSSProperties, type MouseEvent } from "react";
import { ButtonLink, Eyebrow } from "@/components/ds";
import { SITE } from "@/lib/site";
import { useLang } from "./LangContext";
import { prefersReducedMotion, scrollToId } from "./motion";
import s from "./landing.module.css";

/** Pide a Unsplash el ancho exacto (sin pasar por el optimizador de imágenes). */
const unsplashLoader: ImageLoader = ({ src, width, quality }) => {
  const u = new URL(src);
  u.searchParams.set("w", String(width));
  u.searchParams.set("q", String(quality ?? 75));
  u.searchParams.set("auto", "format");
  u.searchParams.set("fit", "crop");
  return u.toString();
};

const i = (n: number) => ({ "--i": n }) as CSSProperties;

export function Hero() {
  const { t } = useLang();
  const imgRef = useRef<HTMLDivElement>(null);

  // Parallax suave de la imagen.
  useEffect(() => {
    if (prefersReducedMotion()) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      if (imgRef.current && y < window.innerHeight * 1.2) {
        imgRef.current.style.transform = `translate3d(0, ${y * 0.3}px, 0)`;
      }
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const go = (e: MouseEvent) => {
    e.preventDefault();
    scrollToId("negocios");
  };

  return (
    <section id="inicio" className={s.hero} aria-labelledby="hero-title">
      <div ref={imgRef} className={s.heroMedia}>
        <Image
          loader={unsplashLoader}
          src={SITE.heroImage}
          alt={t.heroImgAlt}
          fill
          preload
          fetchPriority="high"
          sizes="100vw"
          quality={80}
          className={s.heroImg}
        />
      </div>
      <div className={s.heroOverlay} aria-hidden="true" />
      <div className={s.heroContent}>
        <div className={s.heroItem} style={i(0)}>
          <Eyebrow tone="gold" rule>
            Grupo STF
          </Eyebrow>
        </div>
        <h1 id="hero-title" className={`${s.heroTitle} ${s.heroItem}`} style={i(1)}>
          {t.heroT} <em>{t.heroEmph}</em>
        </h1>
        <p className={`${s.heroLead} ${s.heroItem}`} style={i(2)}>
          {t.heroLead}
        </p>
        <div className={`${s.heroActions} ${s.heroItem}`} style={i(3)}>
          <ButtonLink href="#negocios" onClick={go} variant="gold" size="lg" icon="→">
            {t.heroCta}
          </ButtonLink>
        </div>
      </div>
      <div className={`${s.heroScroll} ${s.heroItem}`} style={i(4)} aria-hidden="true">
        {t.scroll} <span className={s.heroArrow}>↓</span>
      </div>
    </section>
  );
}
