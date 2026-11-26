import type { CountryKey, Lang, UnitKey, WorkMode } from "./i18n";

export type JobOpening = {
  slug: string;
  unit: UnitKey;
  country: CountryKey;
  workMode: WorkMode;
  title: Record<Lang, string>;
  description: Record<Lang, string>;
  requirements: Record<Lang, string>;
};

/** Fila tal como vive en `public.job_openings`. */
export type JobOpeningRow = {
  slug: string;
  unit: UnitKey;
  country: CountryKey;
  work_mode: WorkMode;
  title_es: string;
  title_en: string;
  description_es: string;
  description_en: string;
  requirements_es: string;
  requirements_en: string;
};

export const JOB_COLUMNS =
  "slug, unit, country, work_mode, title_es, title_en, description_es, description_en, requirements_es, requirements_en";

export function fromRow(r: JobOpeningRow): JobOpening {
  return {
    slug: r.slug,
    unit: r.unit,
    country: r.country,
    workMode: r.work_mode,
    title: { es: r.title_es, en: r.title_en },
    description: { es: r.description_es, en: r.description_en },
    requirements: { es: r.requirements_es, en: r.requirements_en },
  };
}

/**
 * Vacantes de ejemplo del diseño. Se usan sólo cuando Supabase todavía no
 * está configurado (desarrollo local o un preview sin variables de entorno).
 * Las mismas filas se cargan en la base con la migración de seed.
 */
export const SAMPLE_JOBS: JobOpening[] = [
  {
    slug: "gerente-desarrollo-inmobiliario",
    unit: "inmobiliario",
    country: "honduras",
    workMode: "full_time",
    title: { es: "Gerente de Desarrollo Inmobiliario", en: "Real Estate Development Manager" },
    description: {
      es: "Lidera proyectos desde la factibilidad hasta la entrega, coordinando equipos de diseño, construcción y comercialización.",
      en: "Lead projects from feasibility to delivery, coordinating design, construction and leasing teams.",
    },
    requirements: {
      es: "8+ años en desarrollo inmobiliario · Finanzas de proyecto · Liderazgo de equipos",
      en: "8+ years in real estate development · Project finance · Team leadership",
    },
  },
  {
    slug: "superintendente-de-obra",
    unit: "construccion",
    country: "honduras",
    workMode: "full_time",
    title: { es: "Superintendente de Obra", en: "Construction Superintendent" },
    description: {
      es: "Supervisa la ejecución en sitio garantizando calidad, seguridad, tiempo y costo.",
      en: "Oversee on-site execution ensuring quality, safety, schedule and cost.",
    },
    requirements: {
      es: "Ingeniería civil · 5+ años en obra · Normas de seguridad",
      en: "Civil engineering · 5+ years on site · Safety standards",
    },
  },
  {
    slug: "coordinador-operaciones-logisticas",
    unit: "logistica",
    country: "mexico",
    workMode: "full_time",
    title: { es: "Coordinador de Operaciones Logísticas", en: "Logistics Operations Coordinator" },
    description: {
      es: "Optimiza la operación de centros de distribución y la relación con clientes industriales.",
      en: "Optimize distribution center operations and relationships with industrial clients.",
    },
    requirements: {
      es: "Logística o ingeniería industrial · 3+ años · Manejo de WMS",
      en: "Logistics or industrial engineering · 3+ years · WMS experience",
    },
  },
  {
    slug: "lider-de-comercializacion",
    unit: "comercial",
    country: "honduras",
    workMode: "full_time",
    title: { es: "Líder de Comercialización", en: "Leasing Lead" },
    description: {
      es: "Diseña la mezcla comercial y cierra acuerdos con marcas para nuestros centros.",
      en: "Shape the tenant mix and close agreements with brands for our centers.",
    },
    requirements: {
      es: "Leasing comercial · Negociación · 4+ años",
      en: "Retail leasing · Negotiation · 4+ years",
    },
  },
  {
    slug: "ingeniero-facility-management",
    unit: "servicios",
    country: "mexico",
    workMode: "full_time",
    title: { es: "Ingeniero de Facility Management", en: "Facility Management Engineer" },
    description: {
      es: "Gestiona el mantenimiento y la operación de instalaciones corporativas.",
      en: "Manage maintenance and operation of corporate facilities.",
    },
    requirements: {
      es: "Ingeniería electromecánica · 3+ años · Gestión de proveedores",
      en: "Electromechanical engineering · 3+ years · Vendor management",
    },
  },
  {
    slug: "analista-de-inversiones",
    unit: "inmobiliario",
    country: "espana",
    workMode: "hybrid",
    title: { es: "Analista de Inversiones", en: "Investment Analyst" },
    description: {
      es: "Evalúa oportunidades de inversión y prepara modelos financieros para el comité.",
      en: "Evaluate investment opportunities and build financial models for the committee.",
    },
    requirements: {
      es: "Finanzas · Modelado financiero · Inglés avanzado",
      en: "Finance · Financial modeling · Fluent English",
    },
  },
];
