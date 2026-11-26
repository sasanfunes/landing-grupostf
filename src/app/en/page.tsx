import type { Metadata } from "next";
import { Landing } from "@/components/landing/Landing";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Grupo STF — We build value for the long term" },
  description: SITE.descriptionEn,
  alternates: {
    canonical: "/en",
    languages: { es: "/", en: "/en", "x-default": "/" },
  },
  openGraph: {
    title: "Grupo STF — We build value for the long term",
    description: SITE.descriptionEn,
    url: "/en",
    locale: "en_US",
  },
};

export default function Page() {
  return <Landing lang="en" />;
}
