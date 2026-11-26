import { cacheLife } from "next/cache";
import type { Lang } from "@/lib/i18n";
import { getJobOpenings } from "@/lib/jobs.server";
import { FEATURES } from "@/lib/site";
import { LandingClient } from "./LandingClient";

async function currentYear() {
  "use cache";
  cacheLife("days");
  return new Date().getFullYear();
}

/** Página completa en el idioma indicado. Se prerenderiza (vacantes en caché). */
export async function Landing({ lang }: { lang: Lang }) {
  const [jobs, year] = await Promise.all([
    FEATURES.careers ? getJobOpenings() : Promise.resolve([]),
    currentYear(),
  ]);
  return <LandingClient lang={lang} jobs={jobs} year={year} />;
}
