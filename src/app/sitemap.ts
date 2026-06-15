import type { MetadataRoute } from "next";

import { getAllInsights } from "@/content/insights";
import { getAllServices } from "@/content/services";
import { ecosystemConfig } from "@/lib/subsidiaries";
import { getServicePath } from "@/lib/services/paths";

const corePages: Array<{
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}> = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services", priority: 0.8, changeFrequency: "weekly" },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
  { path: "/insights", priority: 0.6, changeFrequency: "weekly" },
  { path: "/gtn", priority: 0.9, changeFrequency: "weekly" },
  { path: "/gpn", priority: 0.9, changeFrequency: "weekly" },
  { path: "/acs", priority: 0.9, changeFrequency: "weekly" },
  { path: "/gtn/services", priority: 0.8, changeFrequency: "weekly" },
  { path: "/gpn/services", priority: 0.8, changeFrequency: "weekly" },
  { path: "/acs/services", priority: 0.8, changeFrequency: "weekly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = ecosystemConfig.url;
  const lastModified = new Date();

  const staticEntries: MetadataRoute.Sitemap = corePages.map(
    ({ path, priority, changeFrequency }) => ({
      url: `${baseUrl}${path}`,
      lastModified,
      changeFrequency,
      priority,
    }),
  );

  const serviceEntries: MetadataRoute.Sitemap = getAllServices().map((service) => ({
    url: `${baseUrl}${getServicePath(service)}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const insightEntries: MetadataRoute.Sitemap = getAllInsights().map((article) => ({
    url: `${baseUrl}/insights/${article.slug}`,
    lastModified: new Date(`${article.publishedAt}T12:00:00`),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...serviceEntries, ...insightEntries];
}
