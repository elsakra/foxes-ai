import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://foxes.ai";
  const routes = [
    "",
    "/platform",
    "/solutions",
    "/results",
    "/about",
    "/faq",
    "/resources",
    "/demo",
  ];
  return routes.map((r) => ({
    url: `${base}${r}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: r === "" ? 1 : 0.7,
  }));
}
