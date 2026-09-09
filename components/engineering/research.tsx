import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ComputingVisual } from "./computing-visual";
import { research, researchProject } from "@/data/research";
export function Research({ full = false }: { full?: boolean }) {
  return (
    <section
      className={`research-section ${full ? "research-full" : ""}`}
      id="research"
      aria-label="Computing exploration"
    >
      <div className="shell research-inner">
        <div className="research-copy">
          <p className="eyebrow">
            <span>03</span> Computing exploration
          </p>
          <h2>
            {research.title}
            <br />
            <span>{research.subtitle}</span>
          </h2>
          <p className="research-description">{research.introduction}</p>
          <div className="research-topics">
            {research.topics.map((topic) => (
              <span key={topic}>{topic}</span>
            ))}
          </div>
          <Link
            href={full ? "/research/svm-vs-qsvm" : "/research"}
            className="button button-primary"
          >
            {full ? "Read the experiment" : "Explore the research"}
            <ArrowUpRight size={17} />
          </Link>
        </div>
        <div className="research-visual">
          <ComputingVisual compact />
          <p className="evidence-note">{research.scope}</p>
        </div>
      </div>
      <div className="shell lab-notebook">
        <span className="eyebrow">Experiment 001</span>
        <Link href="/research/svm-vs-qsvm">
          {researchProject.name}
          <span>{research.question}</span>
          <ArrowUpRight size={19} />
        </Link>
        <span className="notebook-status">Study / Simulation</span>
      </div>
    </section>
  );
}
