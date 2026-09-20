import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import { PresentationShell } from "@/components/presentation/presentation-shell";
import { pageMetadata } from "@/lib/metadata";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  display: "swap",
  variable: "--font-fa",
});

export const metadata: Metadata = {
  ...pageMetadata(
    "مسیر مهندسی — ارائه‌ی تعاملی",
    "روایتی تعاملی از مسیر مهندسی سینا قاسم‌پور؛ از ساخت سیستم‌های واقعی و مسئولیت فنی تا یادگیری پیوسته و مطالعه‌ی محاسبات پیشرفته.",
    "/presentation/fa",
  ),
  alternates: {
    canonical: "/presentation/fa",
    languages: { en: "/presentation", "fa-IR": "/presentation/fa" },
  },
  openGraph: {
    title: "مسیر مهندسی — ارائه‌ی تعاملی | Sina Qasempour",
    description: "روایتی تعاملی از مسیر مهندسی سینا قاسم‌پور؛ از ساخت سیستم‌های واقعی و مسئولیت فنی تا یادگیری پیوسته و مطالعه‌ی محاسبات پیشرفته.",
    url: "/presentation/fa",
    locale: "fa_IR",
    alternateLocale: ["en_US"],
  },
};

export default function PersianPresentationPage() {
  return (
    <div className={`presentation-page ${vazirmatn.variable}`} lang="fa-IR" dir="rtl">
      <PresentationShell locale="fa" />
    </div>
  );
}
