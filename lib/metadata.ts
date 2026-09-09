import type { Metadata } from "next";

const configuredUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://sina-qasempour-portfolio-website.vercel.app";
export const siteUrl = new URL(
  configuredUrl.startsWith("http") ? configuredUrl : `https://${configuredUrl}`,
);
export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title: `${title} | Sina Qasempour`, description, url: path },
    twitter: { title: `${title} | Sina Qasempour`, description },
  };
}
