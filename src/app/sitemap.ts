import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl().origin;
  const languages = { es: `${base}/`, en: `${base}/en` };
  return [
    { url: `${base}/`, changeFrequency: "weekly", priority: 1, alternates: { languages } },
    { url: `${base}/en`, changeFrequency: "weekly", priority: 0.8, alternates: { languages } },
  ];
}
