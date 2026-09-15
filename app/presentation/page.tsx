import { PresentationShell } from "@/components/presentation/presentation-shell";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Engineering Journey — Interactive Presentation",
  "An interactive presentation of Sina Qasempour’s engineering work, technical leadership, selected systems, continuous study, and exploration of advanced computing.",
  "/presentation",
);

export default function PresentationPage() {
  return (
    <div className="presentation-page">
      <PresentationShell />
    </div>
  );
}
