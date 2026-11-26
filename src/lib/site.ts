/**
 * Datos editables del sitio. Las cifras y los datos de contacto son
 * marcadores de posición del diseño: confírmalos antes de publicar.
 */
export const SITE = {
  name: "Grupo STF",
  description:
    "Grupo STF es una organización hondureña con presencia internacional en cinco sectores: inmobiliario, construcción, comercial, logística y servicios.",
  descriptionEn:
    "Grupo STF is a Honduran organization with an international presence across five sectors: real estate, construction, retail, logistics and services.",
  contact: {
    // TODO: confirmar la sede corporativa real.
    address: "Paseo de la Reforma 2620, Lomas Altas, 11950, Ciudad de México",
    phone: "+52 55 5000 7800",
    email: "contacto@grupostf.mx",
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
