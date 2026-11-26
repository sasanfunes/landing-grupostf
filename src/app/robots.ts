import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  // Los deployments de preview de Vercel no se indexan.
  const isProd = !process.env.VERCEL_ENV || process.env.VERCEL_ENV === "production";
  return {
    rules: isProd ? { userAgent: "*", allow: "/", disallow: "/api/" } : { userAgent: "*", disallow: "/" },
    sitemap: `${siteUrl().origin}/sitemap.xml`,
  };
}
