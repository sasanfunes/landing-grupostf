import "server-only";
import { cacheLife } from "next/cache";

/** Año actual para el copyright (en caché para no romper el prerender). */
export async function currentYear(): Promise<number> {
  "use cache";
  cacheLife("days");
  return new Date().getFullYear();
}
