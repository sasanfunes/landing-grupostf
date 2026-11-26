import type { Metadata } from "next";
import { Landing } from "@/components/landing/Landing";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  description: SITE.description,
  alternates: {
    canonical: "/",
    languages: { es: "/", en: "/en", "x-default": "/" },
  },
  openGraph: {
    title: "Grupo STF — Construimos valor para el largo plazo",
    description: SITE.description,
    url: "/",
    locale: "es_HN",
  },
};

export default function Page() {
  return <Landing lang="es" />;
}
