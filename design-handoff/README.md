# Handoff: Grupo STF — Sitio corporativo (One Pager)

## Overview
Single-page corporate website for **Grupo STF**, a Honduran group with international presence operating five business units (Inmobiliario, Construcción, Comercial, Logística, Servicios) in Honduras, México and España. Bilingual ES/EN. Sections: Hero → marquee band → Nosotros (+ cifras) → Negocios → Presencia (interactive map) → Carrera (job openings) → Contacto → Footer.

## About the Design Files
The files in this bundle are **design references created in HTML** — prototypes showing intended look and behavior, **not production code to copy directly**. Recreate them in the target codebase's environment (React/Next.js, Vue, Astro, etc.) using its established patterns. If no environment exists yet, **Next.js (App Router) + TypeScript + CSS Modules or Tailwind** is recommended; the map should use `d3-geo` + `topojson-client` as in the reference.

- `Grupo STF One Pager.dc.html` — the full page. Opens directly in a browser (needs a local server, e.g. `npx serve .`). Template markup is in the `<x-dc>` block; logic (copy ES/EN, data, state, animations) is the `class Component` in the `<script data-dc-script>` tag.
- `Mapa Presencia.html` — standalone interactive map, embedded via `<iframe>` (`?lang=es|en`). In production, convert it into a native component (no iframe).
- `_ds/…` — Grupo STF design system: tokens (`tokens/*.css`) and component bundle (`_ds_bundle.js`, namespace `GrupoSTFDesignSystem_eeb8eb`). Components used: `Eyebrow`, `SectionHeading`, `SectionNumber`, `Stat`, `Button`, `CircleButton`, `Input`, `Textarea`.
- `support.js` — runtime for the prototype only. Not needed in production.

## Fidelity
**High-fidelity.** Final colors, typography, spacing, copy and interactions. Recreate pixel-perfectly.

## Design Tokens
**Colors**
- Azul STF (primary) `#0C2743`
- Navy dark `#071A2D` (header on scroll at 92% alpha, Presencia band, footer, mobile menu)
- Oro STF (accent only) `#BF9A5B`
- Blanco cálido `#F7F5F0` (Nosotros, Contacto)
- White `#FFFFFF` (marquee, Negocios, Carrera)
- Ink (body text) `#102337`
- Muted `#6D7780`
- Line / hairline `rgba(12,39,67,0.16)`
- On dark: white text at alpha 1 / .78 / .68 / .6; dark hairline `rgba(255,255,255,0.12)`

**Typography**
- Serif: **DM Serif Display** 400 (roman + italic): headlines, unit names, job titles, big numbers.
- Sans: **Manrope** 400/500/700: body, UI, labels.
- H1 hero: serif, `clamp(3.2rem, 6.4vw, 7rem)`, line-height .95, letter-spacing −0.04em; final word italic in gold.
- Section headings: DS `SectionHeading` size `h3` (eyebrow + serif title + gold italic emphasis on the last word; titles use `\n` line breaks).
- Body lead: 16–18px / 1.65–1.7.
- Micro labels: 10–12px, uppercase, letter-spacing .12–.22em, weight 500–700.

**Spacing**
- Section padding: `130px 7vw` (hero full-height). Header height 76px. Side rail section numbers at `left: 3vw; top: 130px`.
- Grid gaps: 5–6vw between columns; 40–48px row gaps.

**Shape**: radius 0 everywhere. Only circles: 30px round icon buttons and the 4px marquee dots. No shadows.

## Screens / Sections

### Header (fixed)
- 76px tall, `padding: 0 4vw`, flex space-between.
- Transparent at top; after scrolling > 40px → `rgba(7,26,45,0.92)` + `backdrop-filter: blur(16px)` + bottom hairline. Transition 300ms.
- Left: white logo (`assets/grupo-stf-white.png`, 38px tall).
- Center nav (≥900px): Nosotros · Negocios · Presencia · Carrera. 11px uppercase, .12em tracking, white at .78 opacity → 1 when active/hover. Active section gets a 1px gold underline (scaleX 0→1, 180ms). Clicking smooth-scrolls to the section (offset −76px).
- Right: ES | EN toggle (11px bold, inactive .45 opacity) + `CircleButton` "Contacto →" (desktop). <900px: hamburger (two 17×1px lines crossing into ×) opens a full-screen navy menu with 32px serif links.
- 3px gold scroll-progress bar fixed at top.

### 1. Hero (`#inicio`)
- `height: max(680px, 100vh)`, navy bg.
- Full-bleed photo: Unsplash `https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=2400&q=80&auto=format&fit=crop` (glass towers, low angle), `object-fit: cover; object-position: center 40%`.
- Overlay: `linear-gradient(90deg, rgba(7,26,45,.9) 0%, rgba(7,26,45,.55) 50%, rgba(7,26,45,.1) 90%), linear-gradient(0deg, rgba(7,26,45,.6) 0%, transparent 35%)`.
- Content bottom-left (`left/right: 7vw; bottom: 12vh; max-width: 860px`): Eyebrow "Grupo STF" (gold, with rule) → H1 "Construimos valor para el *largo plazo.*" → lead (500px max) → gold `Button` lg "Nuestros negocios →" (scrolls to #negocios).
- Bottom-right: "DESPLAZAR ↓" with bouncing gold arrow.
- **Animations:** image Ken Burns scale 1.12→1 over 2.6s `cubic-bezier(.2,.7,.2,1)`; parallax translateY(scrollY × 0.3); text blocks stagger in (opacity 0→1, translateY 32px→0, 900ms, delays 200 + i×140ms).

### 2. Marquee band
- White bg, 22px vertical padding, bottom hairline.
- Infinite horizontal scroll (40s linear, translateX 0 → −50%, content duplicated) of unit names + country names: Manrope 12px, weight 500, .22em tracking, uppercase, navy; separated by 4px gold dots with 44px gaps.

### 3. Nosotros (`#nosotros`) — bg `#F7F5F0`
- Rail number "01".
- 2-col grid (auto-fit, min 420px): `SectionHeading` eyebrow "Quiénes somos", title "Soluciones que\ntrascienden", emphasis "fronteras." | paragraph 18px: "Grupo STF es una organización hondureña con presencia internacional, dedicada a desarrollar soluciones de alto impacto que generan valor duradero en cada mercado donde opera."
- Stats row (90px top margin, auto-fit min 200px): DS `Stat` ×4 — 28 Años de trayectoria · 3 Países con operación · 14,500+ Colaboradores · 5 Unidades de negocio.
- **Animations:** counters count from 0 with ease-out-cubic over 1800ms when the section enters the viewport; stats stagger in (110ms per item).

### 4. Negocios (`#negocios`) — bg white
- Rail "02". `SectionHeading` "Unidades de negocio" / "Cinco sectores,\nuna sola" / "visión."
- **No boxes.** Open columns: ≥1200px `repeat(5, 1fr)` in parallel; below that `repeat(auto-fit, minmax(220px, 1fr))` (wraps to 2–4 cols on tablet, 1 col on mobile). Gap `48px 3vw`.
- Each column: top 1px hairline, padding-top 30px; index "01" (serif 14px gold) → name (serif `clamp(24px, 2.1vw, 30px)`, navy) → description (14px muted) → 30px circle with "→".
- Hover: 2px gold line grows across the top (width 0→100%, 450ms), name turns gold and lifts −4px, arrow rotates −45° with gold border (350ms).
- Units/copy:
  1. Inmobiliario — Desarrollo y administración de activos residenciales, corporativos y de usos mixtos.
  2. Construcción — Edificación, obra civil e infraestructura con estándares internacionales.
  3. Comercial — Centros y plazas comerciales que conectan marcas con comunidades.
  4. Logística — Parques industriales y redes de distribución para la región.
  5. Servicios — Servicios corporativos y administración de instalaciones.

### 5. Presencia (`#presencia`) — bg `#071A2D`
- Rail "03". Grid ≥900px: `minmax(0,.8fr) minmax(0,1.6fr)`; <900px: single column.
- Left: `SectionHeading` (onDark) "Presencia" / "Tres países,\nuna misma" / "visión." + list of countries (no cities): rows `40px | 1fr`, hairlines, "01 Honduras", "02 México", "03 España" (serif 30px). Hover: padding-left 14px + bg `rgba(255,255,255,.04)`.
- Right: interactive map (aspect 1000/560, 1px `rgba(255,255,255,.12)` border). Loads when the section reaches 80% of viewport.
- **Map spec (`Mapa Presencia.html`):** d3 `geoNaturalEarth1` fitted to lon −112…8, lat 8…46; world-atlas `countries-110m.json`. Countries with presence (Honduras, Mexico, Spain) fill `rgba(191,154,91,.32)` stroke `rgba(191,154,91,.7)`; others `rgba(255,255,255,.06)` / `.14`. Graticule `rgba(255,255,255,.05)`. One point per country (Honduras = hub at −86.6,14.8; México −101.5,22.5; España −3.7,40.2): gold dot r5 (hub) / r3.5 with pulsing ring (2.4s). Labels: country name, 10px uppercase .14em. Arcs: quadratic curves from the hub to each country; they **draw in** (stroke-dashoffset, 1200ms ease-cubic-in-out, staggered 250ms) and then flow continuously (dash 3/4, 1.6s linear). Dots fade in staggered. **No hover/tooltip.** Legend bottom-left: "Países con operación".

### 6. Carrera (`#carreras`) — bg white
- Rail "04". Heading "Carrera" / "Crece con un grupo\nque piensa a" / "largo plazo." + lead.
- Filter tabs: Todas + 5 units. 11px bold uppercase; active navy with 1px gold underline, inactive muted.
- Job list (top hairline, each row bottom hairline). Row grid ≥900px: `2.2fr 1fr 1fr 30px` → title (serif 22–28px) · unit (10px bold gold uppercase) · "País · Tipo" (13px muted) · 30px "+" circle. <900px: `1fr 30px`.
- Click row → accordion expands: description (15px) | requirements (13px muted) + primary `Button` "Postularme →". Open state: "+" rotates 45° and fills gold. After clicking apply, the button is replaced by a gold ✓ circle + "POSTULACIÓN ENVIADA". (Production: connect to ATS / application form.)
- Sample jobs (replace with real data): Gerente de Desarrollo Inmobiliario (Inmobiliario, Honduras), Superintendente de Obra (Construcción, Honduras), Coordinador de Operaciones Logísticas (Logística, México), Líder de Comercialización (Comercial, Honduras), Ingeniero de Facility Management (Servicios, México), Analista de Inversiones (Inmobiliario, España, Híbrido).

### 7. Contacto (`#contacto`) — bg `#F7F5F0`
- Rail "05". Left: heading "Contacto" / "Hablemos de lo" / "que sigue." + address/phone/email (placeholder: update to the real HQ).
- Right: white card, 1px line border, padding `44px clamp(24px,4vw,52px)`: `Input` Nombre completo (required) + `Input` Correo electrónico (email, required) in 2 cols; `Textarea` Mensaje (4 rows); primary `Button` lg "Enviar mensaje →". On submit → replaced by "Gracias por *escribirnos.*" + confirmation text.

### Footer — bg `#071A2D`
- `padding: 44px 7vw`, flex space-between wrap: white logo (36px) · "© 2026 GRUPO STF · AVISO DE PRIVACIDAD" (10px uppercase .6 alpha) · `CircleButton` "Volver arriba ↑".

## Interactions & Behavior (summary)
- Scroll reveal: elements with `data-reveal` fade + rise 24px over 700ms when 15% visible; `data-stagger` containers reveal children one by one (110ms step, 40px rise). Elements already in view on load are not hidden.
- Scroll-spy updates the active nav item (section top < 200px).
- Respect `prefers-reduced-motion` (disable all animations).
- Breakpoints: 900px (nav ↔ hamburger, 2-col layouts ↔ stacked), 1200px (Negocios 5-col).

## State
`lang ('es'|'en')`, `active` section, `scrolled`, `mobile` menu open, `countP` (counter progress 0–1), `hoverUnit`, `mapOn`, `jobCat`, `openJob`, `appliedJobs`, `sent` (contact form). All copy for both languages lives in the `COPY` object in the logic class; jobs in `JOBS`.

## Assets
- Logos: `assets/grupo-stf-white.png` (used), `assets/grupo-stf-navy.png` (for light backgrounds). PNG only — never redraw the symbol.
- Hero photo: Unsplash (URL above) — replace with licensed brand photography if available.
- Map data: `https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-110m.json`.
- Fonts: Google Fonts (DM Serif Display, Manrope) via `tokens/fonts.css`.
- Icons: unicode glyphs only (→ ↑ ↓ + ✓); no icon library.

## Content caveats
Figures (28 años, 14,500+ colaboradores), job openings and contact details are placeholders. The contact address still shows Ciudad de México — confirm the real HQ.
