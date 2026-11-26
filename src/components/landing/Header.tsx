"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import { CircleLink } from "@/components/ds";
import { LANGS, type SectionId } from "@/lib/i18n";
import { ACTIVE_SECTIONS } from "@/lib/site";
import logoWhite from "@/assets/brand/grupo-stf-white.png";
import { useLang } from "./LangContext";
import { scrollToId } from "./motion";
import s from "./Header.module.css";

// Contacto va como botón aparte en escritorio.
const NAV = ACTIVE_SECTIONS.filter((id) => id !== "contacto");

export function Header() {
  const { t, lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<SectionId | "">("");
  const [open, setOpen] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  // Progreso, scroll-spy y estado del header (throttled con rAF).
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const h = document.documentElement;
      const y = h.scrollTop;
      const max = h.scrollHeight - h.clientHeight || 1;
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${Math.min(1, y / max)})`;
      let current: SectionId | "" = "";
      for (const id of ACTIVE_SECTIONS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < 200) current = id;
      }
      setActive(current);
      setScrolled(y > 40);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  // Menú móvil: bloquea el scroll del fondo, cierra con Escape o al pasar a escritorio.
  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    const prev = root.style.overflow;
    root.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const mq = window.matchMedia("(min-width: 900px)");
    const onMq = () => mq.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => {
      root.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
    };
  }, [open]);

  const go = (id: string) => (e: MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    document.documentElement.style.overflow = "";
    requestAnimationFrame(() => scrollToId(id));
  };

  const solid = scrolled || open;

  return (
    <>
      <div ref={progressRef} className={s.progress} aria-hidden="true" />
      <header className={s.header} data-solid={solid || undefined} data-scrolled={scrolled || undefined}>
        <a href="#inicio" onClick={go("inicio")} className={s.logo} aria-label="Grupo STF — inicio">
          <Image src={logoWhite} alt="Grupo STF" className={s.logoImg} sizes="90px" />
        </a>

        <nav className={s.nav} aria-label={lang === "es" ? "Principal" : "Main"}>
          {NAV.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={go(id)}
              className={s.navLink}
              aria-current={active === id ? "true" : undefined}
            >
              {t.nav[id]}
            </a>
          ))}
        </nav>

        <div className={s.right}>
          <div className={s.langs} role="group" aria-label={t.langLabel}>
            {LANGS.map((l, i) => (
              <span key={l} className={s.langItem}>
                {i > 0 && <span className={s.langSep} aria-hidden="true" />}
                <button
                  type="button"
                  className={s.langBtn}
                  aria-pressed={lang === l}
                  onClick={() => setLang(l)}
                  lang={l}
                >
                  {l.toUpperCase()}
                </button>
              </span>
            ))}
          </div>
          <CircleLink
            href="#contacto"
            onClick={go("contacto")}
            label={t.nav.contacto}
            icon="→"
            className={s.cta}
          />
          <button
            type="button"
            className={s.burger}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.closeMenu : t.menu}
            onClick={() => setOpen((v) => !v)}
            data-open={open || undefined}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      {open && (
        <nav id="mobile-menu" className={s.mobile} aria-label={lang === "es" ? "Menú" : "Menu"}>
          {ACTIVE_SECTIONS.map((id) => (
            <a key={id} href={`#${id}`} onClick={go(id)} className={s.mobileLink}>
              <span>{t.nav[id]}</span>
              <span className={s.mobileArrow} aria-hidden="true">
                →
              </span>
            </a>
          ))}
        </nav>
      )}
    </>
  );
}
