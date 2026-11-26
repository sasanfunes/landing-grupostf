"use client";

import { useEffect } from "react";
import type { Lang } from "@/lib/i18n";
import type { JobOpening } from "@/lib/jobs";
import { FEATURES } from "@/lib/site";
import { About } from "./About";
import { Careers } from "./Careers";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { LangProvider } from "./LangContext";
import { Marquee } from "./Marquee";
import { Presence } from "./Presence";
import { Units } from "./Units";
import { setupReveal } from "./motion";

export function LandingClient({ lang, jobs, year }: { lang: Lang; jobs: JobOpening[]; year: number }) {
  useEffect(() => setupReveal(), []);

  return (
    <LangProvider initialLang={lang}>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Units />
        <Presence />
        {FEATURES.careers && <Careers jobs={jobs} />}
        <Contact />
      </main>
      <Footer year={year} />
    </LangProvider>
  );
}
