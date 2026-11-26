# Grupo STF — Sitio corporativo (landing)

One-pager bilingüe (ES/EN) de Grupo STF construido a partir del handoff de diseño
(`Grupo STF One Pager.dc.html`). Responsivo para teléfonos, tablets y escritorio.

**Stack:** Next.js 16 (App Router, Cache Components) · React 19 · TypeScript · CSS Modules ·
Supabase (Postgres + RLS) · Vercel.

```
/                     → versión en español (por defecto)
/en                   → versión en inglés (mismo contenido, prerenderizado en inglés)
/aviso-de-privacidad  → Aviso de privacidad (ES)
/en/privacy-notice    → Privacy notice (EN)
```

El botón ES | EN cambia el idioma al instante y actualiza la URL (`/` ↔ `/en`) sin recargar.

> **Sección Carrera desactivada.** Las vacantes y postulaciones están apagadas hasta una
> actualización posterior (panel de administración). El código sigue en el repo; para
> reactivarla cambia `FEATURES.careers` a `true` en `src/lib/site.ts`. Con `false` la sección
> no se muestra, no aparece en el menú, la numeración lateral se ajusta sola y no se consulta
> Supabase.

---

## Estructura

```
src/
  app/
    layout.tsx            Fuentes (DM Serif Display + Manrope), metadata base
    page.tsx / en/page.tsx  Páginas ES / EN (estáticas, con hreflang)
    aviso-de-privacidad/, en/privacy-notice/  Aviso de privacidad ES / EN
    actions.ts            Server Actions: contacto y postulaciones → Supabase
    api/revalidate/       POST para refrescar vacantes al instante
    sitemap.ts, robots.ts, icon.png, apple-icon.png
  components/
    ds/                   Design system de Grupo STF portado a React
                          (Eyebrow, SectionHeading, SectionNumber, Stat, Button,
                           CircleLink, Input, Textarea)
    landing/              Secciones: Header, Hero, Marquee, About, Units,
                          Presence (+ PresenceMap con d3-geo), Careers, Contact, Footer
    legal/                Página y texto del Aviso de privacidad (privacyContent.tsx)
  lib/
    i18n.ts               TODO el texto ES/EN
    site.ts               Datos de contacto, cifras y foto del hero (editar aquí)
    jobs.ts               Tipos y vacantes de ejemplo (fallback sin Supabase)
    jobs.server.ts        Lectura de vacantes desde Supabase (en caché)
    supabase/             Clientes de Supabase (público y secreto, sólo servidor)
supabase/
  migrations/             Esquema + RLS + vacantes de ejemplo
  config.jsonc            Config del CLI de Supabase
design-handoff/           Prototipo HTML y design system originales (referencia, no se publica)
```

## Desarrollo local

```bash
npm install
```

```bash
cp .env.example .env.local
```

```bash
npm run dev
```

Abre http://localhost:3000. **Sin variables de Supabase el sitio funciona igual**: muestra las
vacantes de ejemplo y los formularios simulan el envío (se avisa en la consola del servidor).
En Vercel (producción y previews) un envío sin Supabase configurado muestra un error en el formulario.

Otros comandos: `npm run build`, `npm run start`, `npm run lint`.

---

## Supabase

### Tablas

| Tabla | Acceso público (`anon`) | Uso |
| --- | --- | --- |
| `job_openings` | Sólo **lectura** de filas con `is_active = true` (RLS) | Vacantes de la sección Carrera (ES/EN) |
| `contact_messages` | Ninguno | Mensajes del formulario de contacto |
| `job_applications` | Ninguno | Postulaciones (nombre, correo, teléfono, LinkedIn/CV) |

Las escrituras las hace el servidor de Next.js con la **llave secreta**; el navegador nunca
habla directo con la base. Todas las tablas tienen RLS y permisos (`grant`) explícitos, así que
funcionan igual con o sin la exposición automática del Data API.

### Aplicar el esquema

Opción A — CLI (recomendado):

```bash
npx supabase@3.4.0 login
```

```bash
npx supabase@3.4.0 link --project-ref <project-ref>
```

```bash
npx supabase@3.4.0 db push --remote
```

Opción B — Dashboard: pega en **SQL Editor** el contenido de
`supabase/migrations/20261126141621_landing_schema.sql` y después
`supabase/migrations/20261126141623_seed_job_openings.sql`.

### Administrar vacantes (cuando se reactive Carrera)

En **Table Editor → job_openings**: agrega filas (título, descripción y requisitos en ES y EN),
o pon `is_active = false` para ocultar una vacante. Valores válidos:

- `unit`: `inmobiliario`, `construccion`, `comercial`, `logistica`, `servicios`
- `country`: `honduras`, `mexico`, `espana`
- `work_mode`: `full_time`, `part_time`, `hybrid`, `remote`
- `sort_order`: menor = aparece primero

El sitio refresca la lista cada hora. Para que se actualice **al instante**, crea un
Database Webhook (Database → Webhooks) sobre `job_openings` (insert/update/delete):

- Método `POST` a `https://<tu-dominio>/api/revalidate`
- Header `Authorization: Bearer <REVALIDATE_SECRET>`

Los mensajes y postulaciones se consultan en **Table Editor** (`contact_messages`,
`job_applications`); ambas tienen una columna `status` para darles seguimiento.

---

## Despliegue en Vercel

1. En Vercel: **Add New → Project** e importa este repositorio de GitHub
   (Framework: Next.js, sin configuración extra).
2. Conecta Supabase:
   - **Proyecto nuevo:** en el proyecto de Vercel, **Storage / Integrations → Supabase**.
     La integración crea las variables de entorno automáticamente.
   - **Proyecto existente:** agrega las variables a mano en
     **Settings → Environment Variables** (Production y Preview).
3. Opcional: `NEXT_PUBLIC_SITE_URL` con el dominio final (y `REVALIDATE_SECRET` cuando se
   reactive Carrera).
4. Aplica el esquema (sección anterior) y vuelve a desplegar.

### Variables de entorno

| Variable | Dónde se usa | Notas |
| --- | --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | Servidor | También acepta `SUPABASE_URL` |
| `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` | Servidor (lectura de vacantes; sin uso mientras Carrera esté apagada) | También acepta `NEXT_PUBLIC_SUPABASE_ANON_KEY` / `SUPABASE_ANON_KEY` |
| `SUPABASE_SECRET_KEY` | Servidor (inserts) | **Secreta.** También acepta `SUPABASE_SERVICE_ROLE_KEY` |
| `REVALIDATE_SECRET` | `/api/revalidate` | `openssl rand -hex 32`. Sólo hace falta con Carrera activa |
| `NEXT_PUBLIC_SITE_URL` | Canonical, sitemap, OG | Opcional; por defecto usa el dominio de producción de Vercel |

Los previews de Vercel envían `robots: noindex` automáticamente.

---

## Responsivo

Se probó sin desbordamiento horizontal en 320, 360, 375, 390 y 430 px (teléfonos),
600, 768, 820 y 1024 px (tablets, vertical y horizontal), teléfono en horizontal (844×390)
y escritorio (1280, 1440).

- `< 900px`: menú hamburguesa a pantalla completa (incluye Contacto), layouts apilados
  (y vacantes en dos líneas cuando Carrera está activa).
- `< 600px`: márgenes de 24px, títulos ajustados al ancho, cifras en 2×2, mapa con etiquetas
  escaladas y leyenda debajo.
- Teléfonos en horizontal: hero compacto para que el texto y el botón entren en pantalla.
- Inputs a 16px en táctil (evita el zoom automático de iOS), áreas seguras (`safe-area-inset`)
  y `prefers-reduced-motion` respetado.

## Pendientes de contenido

- Cifras (28 años, 14,500+ colaboradores) en `src/lib/site.ts`: son marcadores del diseño.
- **Teléfono de contacto:** sigue el número de ejemplo del diseño (+52 55…, México). La dirección
  (San Pedro Sula) y el correo (`contacto@grupostf.hn`) ya son los reales.
- Carrera: panel de administración para vacantes y postulaciones (actualización posterior).
- **Aviso de privacidad:** confirmar la razón social en `SITE.legal`
  (`src/lib/site.ts`) y que lo revise el área legal. El texto está en
  `src/components/legal/privacyContent.tsx` y describe lo que el sitio hace hoy (formulario de
  contacto, sin cookies ni analítica, foto del hero desde Unsplash): si se agrega analítica,
  cookies o nuevos formularios, hay que actualizarlo y cambiar la fecha en `SITE.legal.updated`.
- Foto del hero: Unsplash; reemplazar por fotografía con licencia de la marca si existe.
