import type React from "react"
import type { Metadata } from "next"

import { Analytics } from "@vercel/analytics/next"
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google"
import "./globals.css"

const siteTitle = "Sina Qasempour | AI Engineer & Creative Developer"
const siteDescription =
  "Portfolio of Sina Qasempour - AI Engineer specializing in intelligent systems, creative coding, and experimental interfaces."
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL || "http://localhost:3000"
const siteUrlWithProtocol = siteUrl.startsWith("http") ? siteUrl : `https://${siteUrl}`

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-cta",
  weight: ["500", "600", "700"],
})
export const metadata: Metadata = {
  metadataBase: new URL(siteUrlWithProtocol),
  title: {
    default: siteTitle,
    template: "%s | Sina Qasempour",
  },
  description: siteDescription,
  generator: "v0.app",
  keywords: ["AI Engineer", "Machine Learning", "Creative Developer", "Portfolio", "Sina Qasempour"],
  authors: [{ name: "Sina Qasempour", url: siteUrlWithProtocol }],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
    siteName: "Sina Qasempour",
    type: "website",
    images: [
      {
        url: "/profile-picture.png",
        alt: "Sina Qasempour",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/profile-picture.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} ${jetbrainsMono.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
