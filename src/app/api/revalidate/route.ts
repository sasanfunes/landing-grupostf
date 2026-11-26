import { revalidateTag } from "next/cache";
import { timingSafeEqual } from "node:crypto";
import { JOBS_CACHE_TAG } from "@/lib/jobs.server";

function authorized(req: Request): boolean {
  const secret = process.env.REVALIDATE_SECRET;
  if (!secret) return false;
  const header = req.headers.get("authorization") ?? "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : "";
  const a = Buffer.from(token);
  const b = Buffer.from(secret);
  return a.length === b.length && timingSafeEqual(a, b);
}

/**
 * Refresca la lista de vacantes al instante.
 * Configúralo como Database Webhook de Supabase sobre `job_openings`
 * con el header `Authorization: Bearer <REVALIDATE_SECRET>`.
 */
export async function POST(req: Request) {
  if (!authorized(req)) {
    return Response.json({ ok: false }, { status: 401 });
  }
  revalidateTag(JOBS_CACHE_TAG, "max");
  return Response.json({ ok: true, revalidated: JOBS_CACHE_TAG });
}
