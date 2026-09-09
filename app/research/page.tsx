import { Research } from "@/components/engineering/research";
import { PageIntro } from "@/components/engineering/section-heading";
import { research } from "@/data/research";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Research — Quantum Computing Exploration",
  research.introduction,
  "/research",
);
export default function ResearchPage() {
  return (
    <>
      <PageIntro
        eyebrow="Research / An open notebook"
        title={research.question}
        description={research.scope}
      />
      <Research full />
      <section className="section shell lab-method">
        <p className="eyebrow">The current evidence</p>
        <h2>{research.finding}</h2>
        <div>
          {research.methods.map((item, i) => (
            <article key={item.title}>
              <span className="eyebrow">0{i + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
        <a
          className="text-link"
          href={research.source}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read the executed report ↗
        </a>
      </section>
    </>
  );
}
