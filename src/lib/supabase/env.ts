/**
 * Lee la configuración de Supabase aceptando tanto los nombres que crea la
 * integración de Supabase en Vercel como los nombres "legacy" (anon/service_role).
 */
export function supabaseUrl(): string | undefined {
  return process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL || undefined;
}

/** Llave pública (publishable / anon). Segura para lecturas protegidas por RLS. */
export function supabasePublishableKey(): string | undefined {
  return (
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
    process.env.SUPABASE_PUBLISHABLE_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    process.env.SUPABASE_ANON_KEY ||
    undefined
  );
}

/** Llave secreta (secret / service_role). Sólo servidor: nunca con prefijo NEXT_PUBLIC_. */
export function supabaseSecretKey(): string | undefined {
  return process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY || undefined;
}
