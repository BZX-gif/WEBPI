import type { MetadataRoute } from "next";
import { insights } from "@/data/insights";
import { projects } from "@/data/projects";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url || "http://localhost:3000";
  const lastModified = new Date("2026-11-05");

  const staticRoutes = [
    "",
    "/services",
    "/work",
    "/about",
    "/insights",
    "/contact",
    "/start",
    "/privacy",
    "/terms",
    "/cookies",
  ].map((path) => ({
    url: `${base}${path || "/"}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const work = projects.map((project) => ({
    url: `${base}/work/${project.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const journal = insights.map((insight) => ({
    url: `${base}/insights/${insight.slug}`,
    lastModified: new Date(insight.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...work, ...journal];
}
