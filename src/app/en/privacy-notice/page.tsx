import type { Metadata } from "next";
import { PrivacyPage } from "@/components/legal/PrivacyPage";
import { PATHS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy notice",
  description:
    "How Grupo STF collects, uses and protects the personal data it receives through its website, and how to exercise your rights.",
  alternates: {
    canonical: PATHS.privacy.en,
    languages: { es: PATHS.privacy.es, en: PATHS.privacy.en, "x-default": PATHS.privacy.es },
  },
  openGraph: { title: "Privacy notice · Grupo STF", url: PATHS.privacy.en, locale: "en_US" },
};

export default function Page() {
  return <PrivacyPage lang="en" />;
}
