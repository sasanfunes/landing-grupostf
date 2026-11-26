-- Grupo STF · landing corporativa
-- Tablas: vacantes (lectura pública), mensajes de contacto y postulaciones (sólo servidor).
--
-- Modelo de acceso:
--   * job_openings      → `anon`/`authenticated` sólo pueden LEER vacantes activas (RLS).
--   * contact_messages  → sin acceso público. Inserta el servidor (Next.js) con la llave secreta.
--   * job_applications  → sin acceso público. Inserta el servidor con la llave secreta.

-- ─────────────────────────────────────────────────────────────
-- Utilidad: mantener updated_at
-- ─────────────────────────────────────────────────────────────
create or replace function public.set_updated_at()
returns trigger
language plpgsql
security invoker
set search_path = ''
as $$
begin
  new.updated_at := now();
  return new;
end;
$$;

revoke execute on function public.set_updated_at() from public, anon, authenticated;

-- ─────────────────────────────────────────────────────────────
-- Vacantes
-- ─────────────────────────────────────────────────────────────
create table public.job_openings (
  id bigint generated always as identity primary key,
  slug text not null unique
    check (slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$' and char_length(slug) <= 120),
  unit text not null
    check (unit in ('inmobiliario', 'construccion', 'comercial', 'logistica', 'servicios')),
  country text not null
    check (country in ('honduras', 'mexico', 'espana')),
  work_mode text not null default 'full_time'
    check (work_mode in ('full_time', 'part_time', 'hybrid', 'remote')),
  title_es text not null check (char_length(title_es) between 1 and 200),
  title_en text not null check (char_length(title_en) between 1 and 200),
  description_es text not null check (char_length(description_es) <= 4000),
  description_en text not null check (char_length(description_en) <= 4000),
  requirements_es text not null default '' check (char_length(requirements_es) <= 2000),
  requirements_en text not null default '' check (char_length(requirements_en) <= 2000),
  is_active boolean not null default true,
  sort_order integer not null default 100,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

comment on table public.job_openings is 'Vacantes publicadas en la sección Carrera de la landing (ES/EN).';

create index job_openings_active_sort_idx
  on public.job_openings (sort_order, created_at desc)
  where is_active;

create trigger job_openings_set_updated_at
  before update on public.job_openings
  for each row execute function public.set_updated_at();

alter table public.job_openings enable row level security;

create policy "Vacantes activas visibles para todos"
  on public.job_openings
  for select
  to anon, authenticated
  using (is_active);

revoke all on table public.job_openings from anon, authenticated;
grant select on table public.job_openings to anon, authenticated;
grant select, insert, update, delete on table public.job_openings to service_role;

-- ─────────────────────────────────────────────────────────────
-- Mensajes de contacto
-- ─────────────────────────────────────────────────────────────
create table public.contact_messages (
  id bigint generated always as identity primary key,
  full_name text not null check (char_length(full_name) between 2 and 120),
  email text not null check (char_length(email) <= 254 and email ~ '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  message text check (char_length(message) <= 5000),
  locale text not null default 'es' check (locale in ('es', 'en')),
  user_agent text check (char_length(user_agent) <= 400),
  status text not null default 'new' check (status in ('new', 'in_progress', 'closed', 'spam')),
  created_at timestamptz not null default now()
);

comment on table public.contact_messages is 'Mensajes del formulario de contacto. Sólo accesible con la llave secreta.';

create index contact_messages_created_at_idx on public.contact_messages (created_at desc);

alter table public.contact_messages enable row level security;
-- Sin políticas: `anon` y `authenticated` no pueden leer ni escribir.

revoke all on table public.contact_messages from anon, authenticated;
grant select, insert, update, delete on table public.contact_messages to service_role;

-- ─────────────────────────────────────────────────────────────
-- Postulaciones
-- ─────────────────────────────────────────────────────────────
create table public.job_applications (
  id bigint generated always as identity primary key,
  job_id bigint references public.job_openings (id) on delete set null,
  job_slug text not null check (char_length(job_slug) <= 120),
  job_title text check (char_length(job_title) <= 200),
  full_name text not null check (char_length(full_name) between 2 and 120),
  email text not null check (char_length(email) <= 254 and email ~ '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  phone text check (char_length(phone) <= 40),
  profile_url text check (char_length(profile_url) <= 500 and profile_url ~* '^https?://'),
  locale text not null default 'es' check (locale in ('es', 'en')),
  user_agent text check (char_length(user_agent) <= 400),
  status text not null default 'new'
    check (status in ('new', 'reviewing', 'interview', 'rejected', 'hired', 'spam')),
  created_at timestamptz not null default now()
);

comment on table public.job_applications is 'Postulaciones recibidas desde la landing. Sólo accesible con la llave secreta.';

create index job_applications_job_id_idx on public.job_applications (job_id);
create index job_applications_created_at_idx on public.job_applications (created_at desc);

alter table public.job_applications enable row level security;
-- Sin políticas: `anon` y `authenticated` no pueden leer ni escribir.

revoke all on table public.job_applications from anon, authenticated;
grant select, insert, update, delete on table public.job_applications to service_role;
