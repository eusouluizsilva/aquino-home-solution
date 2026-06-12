import type { MetadataRoute } from "next";
import { SERVICES_CONTENT } from "@/lib/services-content";
import { CITIES } from "@/lib/cities";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.aquinosolutions.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/services`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/service-areas`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = SERVICES_CONTENT.map((s) => ({
    url: `${SITE_URL}/services/${s.id}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const cityRoutes: MetadataRoute.Sitemap = CITIES.map((c) => ({
    url: `${SITE_URL}/service-areas/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: c.tier === "A" || c.tier === "home" ? 0.8 : 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...cityRoutes];
}
