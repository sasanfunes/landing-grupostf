import type { Metadata } from "next";
import { PrivacyPage } from "@/components/legal/PrivacyPage";
import { PATHS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Aviso de privacidad",
  description:
    "Cómo Grupo STF recaba, usa y protege los datos personales que recibe a través de su sitio web, y cómo ejercer tus derechos.",
  alternates: {
    canonical: PATHS.privacy.es,
    languages: { es: PATHS.privacy.es, en: PATHS.privacy.en, "x-default": PATHS.privacy.es },
  },
  openGraph: { title: "Aviso de privacidad · Grupo STF", url: PATHS.privacy.es, locale: "es_HN" },
};

export default function Page() {
  return <PrivacyPage lang="es" />;
}
