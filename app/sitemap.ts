import type { MetadataRoute } from "next";
import { caseStudies } from "@/data/case-studies";
import { siteUrl } from "@/lib/metadata";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "/",
    "/about",
    "/work",
    "/research",
    "/presentation",
    "/presentation/fa",
    "/research/svm-vs-qsvm",
    ...caseStudies.map((item) => `/work/${item.slug}`),
  ].map((path) => ({
    url: new URL(path, siteUrl).href,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
