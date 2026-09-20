import { PresentationShell } from "@/components/presentation/presentation-shell";
import { pageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = {
  ...pageMetadata(
    "Engineering Journey — Interactive Presentation",
    "An interactive presentation of Sina Qasempour’s engineering work, technical leadership, selected systems, continuous study, and exploration of advanced computing.",
    "/presentation",
  ),
  alternates: {
    canonical: "/presentation",
    languages: { en: "/presentation", "fa-IR": "/presentation/fa" },
  },
};

export default function PresentationPage() {
  return (
    <div className="presentation-page">
      <PresentationShell />
    </div>
  );
}
