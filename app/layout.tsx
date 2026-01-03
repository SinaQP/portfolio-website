import type React from "react"
import type { Metadata } from "next"

import { Analytics } from "@vercel/analytics/next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
})

export const metadata: Metadata = {
  title: "Sina Qasempour | AI Engineer & Creative Developer",
  description:
    "Portfolio of Sina Qasempour - AI Engineer specializing in intelligent systems, creative coding, and experimental interfaces.",
  generator: "v0.app",
  keywords: ["AI Engineer", "Machine Learning", "Creative Developer", "Portfolio", "Sina Qasempour"],
  authors: [{ name: "Sina Qasempour" }],
  openGraph: {
    title: "Sina Qasempour | AI Engineer & Creative Developer",
    description: "Portfolio showcasing AI projects, experimental interfaces, and creative coding work.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
