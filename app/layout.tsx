import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import { Header } from "@/components/engineering/header";
import { Contact } from "@/components/engineering/contact";
import {
  MotionProvider,
  ScrollProgress,
} from "@/components/engineering/motion";
import { profile } from "@/data/profile";
import { siteUrl } from "@/lib/metadata";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex",
  display: "swap",
});
const description =
  "Sina Qasempour is a Software Engineer with approximately six years building backend systems, enterprise applications, and production software, while exploring Quantum Computing.";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "Sina Qasempour | Software Engineer",
    template: "%s | Sina Qasempour",
  },
  description,
  applicationName: "Sina Qasempour — Engineering & Computing",
  authors: [{ name: profile.name, url: siteUrl.href }],
  keywords: [
    "Sina Qasempour Software Engineer",
    "Software Engineer Quantum Computing",
    "Backend Engineer",
    "Systems Engineer",
    "Python",
    "Django",
    "System Design",
  ],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Sina Qasempour | Software Engineer",
    description,
    url: "/",
    siteName: profile.name,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Sina Qasempour — Software Engineer. Systems & Computing.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sina Qasempour | Software Engineer",
    description,
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    url: siteUrl.href,
    image: new URL("/profile-picture.png", siteUrl).href,
    sameAs: [profile.github, profile.linkedin],
    knowsAbout: [
      "Software Engineering",
      "Backend Engineering",
      "System Design",
      "Database Architecture",
      "Quantum Computing",
    ],
    description,
  };
  return (
    <html lang="en" id="top" className={`${sans.variable} ${mono.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <MotionProvider>
          <ScrollProgress />
          <Header />
          <main id="main-content">{children}</main>
          <Contact />
        </MotionProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(person).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
