"use client";

import Image from "next/image";
import type { MouseEvent } from "react";
import logoWhite from "@/assets/brand/grupo-stf-white.png";
import { CircleLink } from "@/components/ds";
import { useLang } from "./LangContext";
import { scrollToId } from "./motion";
import s from "./landing.module.css";

export function Footer({ year }: { year: number }) {
  const { t } = useLang();
  const top = (e: MouseEvent) => {
    e.preventDefault();
    scrollToId("inicio");
  };
  return (
    <footer className={s.footer}>
      <Image src={logoWhite} alt="Grupo STF" className={s.footerLogo} sizes="90px" />
      <span className={s.footerLegal}>
        © {year} Grupo STF · {t.privacy}
      </span>
      <CircleLink href="#inicio" onClick={top} label={t.top} icon="↑" />
    </footer>
  );
}
