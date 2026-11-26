export const LANGS = ["es", "en"] as const;
export type Lang = (typeof LANGS)[number];

export const SECTION_IDS = ["nosotros", "negocios", "presencia", "carreras", "contacto"] as const;
export type SectionId = (typeof SECTION_IDS)[number];

export const UNIT_KEYS = ["inmobiliario", "construccion", "comercial", "logistica", "servicios"] as const;
export type UnitKey = (typeof UNIT_KEYS)[number];

export const COUNTRY_KEYS = ["honduras", "mexico", "espana"] as const;
export type CountryKey = (typeof COUNTRY_KEYS)[number];

export const WORK_MODES = ["full_time", "part_time", "hybrid", "remote"] as const;
export type WorkMode = (typeof WORK_MODES)[number];

type Copy = {
  nav: Record<SectionId, string>;
  menu: string;
  closeMenu: string;
  langLabel: string;
  heroT: string;
  heroEmph: string;
  heroLead: string;
  heroCta: string;
  heroImgAlt: string;
  scroll: string;
  aboutEyebrow: string;
  aboutT: string;
  aboutEmph: string;
  aboutP: string;
  stats: [string, string, string, string];
  unitsEyebrow: string;
  unitsT: string;
  unitsEmph: string;
  units: Record<UnitKey, { name: string; short: string }>;
  mapEyebrow: string;
  mapT: string;
  mapEmph: string;
  mapTitle: string;
  mapLegend: string;
  countries: Record<CountryKey, string>;
  jobsEyebrow: string;
  jobsT: string;
  jobsEmph: string;
  jobsLead: string;
  all: string;
  workModes: Record<WorkMode, string>;
  apply: string;
  applied: string;
  appliedP: string;
  noJobs: string;
  noJobsInUnit: string;
  aName: string;
  aEmail: string;
  aPhone: string;
  aProfile: string;
  aProfileHint: string;
  aSend: string;
  aCancel: string;
  contactEyebrow: string;
  contactT: string;
  contactEmph: string;
  fName: string;
  fEmail: string;
  fMsg: string;
  fSend: string;
  sending: string;
  sentT: string;
  sentEmph: string;
  sentP: string;
  errValidation: string;
  errServer: string;
  privacy: string;
  top: string;
};

export const COPY: Record<Lang, Copy> = {
  es: {
    nav: {
      nosotros: "Nosotros",
      negocios: "Negocios",
      presencia: "Presencia",
      carreras: "Carrera",
      contacto: "Contacto",
    },
    menu: "Abrir menú",
    closeMenu: "Cerrar menú",
    langLabel: "Idioma",
    heroT: "Construimos valor para el",
    heroEmph: "largo plazo.",
    heroLead:
      "Integramos capacidades, experiencia y visión en cinco sectores estratégicos para crear oportunidades con impacto sostenible.",
    heroCta: "Nuestros negocios",
    heroImgAlt: "Torres corporativas de vidrio vistas desde abajo",
    scroll: "Desplazar",
    aboutEyebrow: "Quiénes somos",
    aboutT: "Soluciones que\ntrascienden",
    aboutEmph: "fronteras.",
    aboutP:
      "Grupo STF es una organización hondureña con presencia internacional, dedicada a desarrollar soluciones de alto impacto que generan valor duradero en cada mercado donde opera.",
    stats: ["Años de trayectoria", "Países con operación", "Colaboradores", "Unidades de negocio"],
    unitsEyebrow: "Unidades de negocio",
    unitsT: "Cinco sectores,\nuna sola",
    unitsEmph: "visión.",
    units: {
      inmobiliario: {
        name: "Inmobiliario",
        short: "Desarrollo y administración de activos residenciales, corporativos y de usos mixtos.",
      },
      construccion: {
        name: "Construcción",
        short: "Fabricación y distribución de materiales de construcción de primera calidad para el mercado.",
      },
      comercial: {
        name: "Comercial",
        short: "Representación y distribución de marcas de primer nivel, con amplia cobertura y respaldo comercial.",
      },
      logistica: {
        name: "Logística",
        short: "Soluciones logísticas que garantizan el traslado seguro y oportuno de mercancías a nivel nacional.",
      },
      servicios: {
        name: "Servicios",
        short: "Servicios corporativos integrales que respaldan la operación de empresas en distintos ámbitos.",
      },
    },
    mapEyebrow: "Presencia",
    mapT: "Tres países,\nuna misma",
    mapEmph: "visión.",
    mapTitle: "Mapa de presencia de Grupo STF en Honduras, México y España",
    mapLegend: "Países con operación",
    countries: { honduras: "Honduras", mexico: "México", espana: "España" },
    jobsEyebrow: "Carrera",
    jobsT: "Crece con un grupo\nque piensa a",
    jobsEmph: "largo plazo.",
    jobsLead:
      "Buscamos personas que quieran construir con nosotros. Explora las vacantes abiertas en nuestras unidades de negocio y postúlate.",
    all: "Todas",
    workModes: {
      full_time: "Tiempo completo",
      part_time: "Medio tiempo",
      hybrid: "Híbrido",
      remote: "Remoto",
    },
    apply: "Postularme",
    applied: "Postulación enviada",
    appliedP: "Gracias. Revisaremos tu perfil y te contactaremos si avanzas en el proceso.",
    noJobs: "Por ahora no hay vacantes abiertas. Escríbenos desde Contacto y conservaremos tu perfil.",
    noJobsInUnit: "No hay vacantes abiertas en esta unidad por ahora.",
    aName: "Nombre completo",
    aEmail: "Correo electrónico",
    aPhone: "Teléfono",
    aProfile: "LinkedIn o CV (URL)",
    aProfileHint: "Opcional. Enlace a tu perfil o a tu CV en la nube.",
    aSend: "Enviar postulación",
    aCancel: "Cancelar",
    contactEyebrow: "Contacto",
    contactT: "Hablemos de lo",
    contactEmph: "que sigue.",
    fName: "Nombre completo",
    fEmail: "Correo electrónico",
    fMsg: "Mensaje",
    fSend: "Enviar mensaje",
    sending: "Enviando…",
    sentT: "Gracias por",
    sentEmph: "escribirnos.",
    sentP: "Un miembro de nuestro equipo te contactará en breve.",
    errValidation: "Revisa los campos marcados e inténtalo de nuevo.",
    errServer: "No pudimos enviar tu mensaje. Inténtalo de nuevo en unos minutos.",
    privacy: "Aviso de privacidad",
    top: "Volver arriba",
  },
  en: {
    nav: {
      nosotros: "About",
      negocios: "Businesses",
      presencia: "Presence",
      carreras: "Careers",
      contacto: "Contact",
    },
    menu: "Open menu",
    closeMenu: "Close menu",
    langLabel: "Language",
    heroT: "We build value for the",
    heroEmph: "long term.",
    heroLead:
      "We bring together capabilities, experience and vision across five strategic sectors to create opportunities with sustainable impact.",
    heroCta: "Our businesses",
    heroImgAlt: "Glass corporate towers seen from below",
    scroll: "Scroll",
    aboutEyebrow: "Who we are",
    aboutT: "Solutions that\nreach beyond",
    aboutEmph: "borders.",
    aboutP:
      "Grupo STF is a Honduran organization with an international presence, dedicated to delivering high-impact solutions that create lasting value in every market where it operates.",
    stats: ["Years of history", "Countries of operation", "Employees", "Business units"],
    unitsEyebrow: "Business units",
    unitsT: "Five sectors,\none single",
    unitsEmph: "vision.",
    units: {
      inmobiliario: {
        name: "Real Estate",
        short: "Development and management of residential, corporate and mixed-use assets.",
      },
      construccion: {
        name: "Construction",
        short: "Manufacturing and distribution of premium-quality construction materials for the market.",
      },
      comercial: {
        name: "Retail",
        short: "Representation and distribution of top-tier brands, with broad coverage and commercial support.",
      },
      logistica: {
        name: "Logistics",
        short: "Logistics solutions that ensure the safe, timely transport of goods nationwide.",
      },
      servicios: {
        name: "Services",
        short: "Comprehensive corporate services that support business operations across diverse areas.",
      },
    },
    mapEyebrow: "Presence",
    mapT: "Three countries,\none",
    mapEmph: "vision.",
    mapTitle: "Map of Grupo STF presence in Honduras, Mexico and Spain",
    mapLegend: "Countries with operations",
    countries: { honduras: "Honduras", mexico: "Mexico", espana: "Spain" },
    jobsEyebrow: "Careers",
    jobsT: "Grow with a group\nthat thinks",
    jobsEmph: "long term.",
    jobsLead:
      "We look for people who want to build with us. Explore open positions across our business units and apply.",
    all: "All",
    workModes: { full_time: "Full time", part_time: "Part time", hybrid: "Hybrid", remote: "Remote" },
    apply: "Apply now",
    applied: "Application sent",
    appliedP: "Thank you. We will review your profile and reach out if you move forward in the process.",
    noJobs: "There are no open positions right now. Write to us through Contact and we will keep your profile on file.",
    noJobsInUnit: "There are no open positions in this unit right now.",
    aName: "Full name",
    aEmail: "Email",
    aPhone: "Phone",
    aProfile: "LinkedIn or résumé (URL)",
    aProfileHint: "Optional. Link to your profile or to your résumé in the cloud.",
    aSend: "Send application",
    aCancel: "Cancel",
    contactEyebrow: "Contact",
    contactT: "Let’s talk about",
    contactEmph: "what’s next.",
    fName: "Full name",
    fEmail: "Email",
    fMsg: "Message",
    fSend: "Send message",
    sending: "Sending…",
    sentT: "Thank you for",
    sentEmph: "reaching out.",
    sentP: "A member of our team will contact you shortly.",
    errValidation: "Please review the highlighted fields and try again.",
    errServer: "We couldn’t send your message. Please try again in a few minutes.",
    privacy: "Privacy notice",
    top: "Back to top",
  },
};

export type { Copy };
