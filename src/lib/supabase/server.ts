import "server-only";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { supabasePublishableKey, supabaseSecretKey, supabaseUrl } from "./env";

const options = {
  auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false },
} as const;

/**
 * Cliente con la llave pública: sólo puede leer lo que las políticas RLS
 * permiten al rol `anon` (por ejemplo, las vacantes activas).
 */
export function createPublicClient(): SupabaseClient | null {
  const url = supabaseUrl();
  const key = supabasePublishableKey();
  if (!url || !key) return null;
  return createClient(url, key, options);
}

/**
 * Cliente con la llave secreta para escrituras desde Server Actions.
 * Las tablas de mensajes y postulaciones no tienen acceso público.
 */
export function createAdminClient(): SupabaseClient | null {
  const url = supabaseUrl();
  const key = supabaseSecretKey();
  if (!url || !key) return null;
  return createClient(url, key, options);
}
