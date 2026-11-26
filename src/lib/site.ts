import { SECTION_IDS, type Lang, type SectionId } from "./i18n";

/**
 * Secciones opcionales. `careers` (vacantes + postulaciones) está desactivada
 * hasta la actualización con el panel de administración: con `false` no se
 * muestra la sección, no aparece en el menú y no se consulta Supabase.
 */
export const FEATURES = {
  careers: false,
} as const;

/** Rutas por idioma. */
export const PATHS: Record<"home" | "privacy", Record<Lang, string>> = {
  home: { es: "/", en: "/en" },
  privacy: { es: "/aviso-de-privacidad", en: "/en/privacy-notice" },
};

/** Secciones visibles, en orden (definen el menú y la numeración lateral). */
export const ACTIVE_SECTIONS: SectionId[] = SECTION_IDS.filter((id) => id !== "carreras" || FEATURES.careers);

/** Número de la sección en el riel lateral ("01", "02", …). */
export function sectionNumber(id: SectionId): string {
  return String(ACTIVE_SECTIONS.indexOf(id) + 1).padStart(2, "0");
}

/**
 * Datos editables del sitio. Las cifras y los datos de contacto son
 * marcadores de posición del diseño: confírmalos antes de publicar.
 */
const HQ_ADDRESS = "2da Avenida, 18 Calle NO, Zona de Cervecería, San Pedro Sula, Cortés, Honduras";
const CONTACT_EMAIL = "contacto@grupostf.hn";

export const SITE = {
  name: "Grupo STF",
  description:
    "Grupo STF es una organización hondureña con presencia internacional en cinco sectores: inmobiliario, construcción, comercial, logística y servicios.",
  descriptionEn:
    "Grupo STF is a Honduran organization with an international presence across five sectors: real estate, construction, retail, logistics and services.",
  contact: {
    address: HQ_ADDRESS,
    // TODO: marcador del diseño (número de México); reemplazar por el teléfono real.
    phone: "+52 55 5000 7800",
    email: CONTACT_EMAIL,
  },
  /**
   * Datos del responsable para el Aviso de privacidad.
   * TODO: confirmar la razón social exacta y revisar el aviso con el área legal.
   */
  legal: {
    controller: "Grupo STF",
    address: HQ_ADDRESS,
    privacyEmail: CONTACT_EMAIL,
    updated: { es: "26 de noviembre de 2026", en: "November 26, 2026" },
  },
  stats: [
    { value: 28, suffix: "" },
    { value: 3, suffix: "" },
    { value: 14500, suffix: "+" },
    { value: 5, suffix: "" },
  ],
  heroImage:
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=2400&q=80&auto=format&fit=crop",
} as const;

/** URL pública del sitio (para metadata, sitemap y Open Graph). */
export function siteUrl(): URL {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return new URL(explicit);
  const vercelProd = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercelProd) return new URL(`https://${vercelProd}`);
  return new URL("http://localhost:3000");
}
