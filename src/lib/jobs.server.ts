import "server-only";
import { cacheLife, cacheTag } from "next/cache";
import { createPublicClient } from "./supabase/server";
import { JOB_COLUMNS, SAMPLE_JOBS, fromRow, type JobOpening, type JobOpeningRow } from "./jobs";

export const JOBS_CACHE_TAG = "job-openings";

/**
 * Vacantes activas desde Supabase. El resultado queda en caché (se incluye en
 * el HTML prerenderizado) y se refresca cada hora o al instante con
 * `POST /api/revalidate` (por ejemplo, desde un Database Webhook).
 */
export async function getJobOpenings(): Promise<JobOpening[]> {
  "use cache";
  cacheTag(JOBS_CACHE_TAG);

  const supabase = createPublicClient();
  if (!supabase) {
    cacheLife("minutes");
    return SAMPLE_JOBS;
  }

  const { data, error } = await supabase
    .from("job_openings")
    .select(JOB_COLUMNS)
    .eq("is_active", true)
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: false });

  if (error) {
    // No rompemos la página: se muestra la lista vacía y se reintenta pronto.
    console.error("[jobs] No se pudieron leer las vacantes de Supabase:", error.message);
    cacheLife("minutes");
    return [];
  }

  cacheLife("hours");
  return (data as JobOpeningRow[]).map(fromRow);
}
