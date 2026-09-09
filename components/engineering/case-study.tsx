import Link from "next/link";
import { siteContent } from "@/data/site-content";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { CaseStudy } from "@/data/case-studies";
import { Architecture } from "./architecture";
import { ComputingVisual } from "./computing-visual";
export function CaseStudyArticle({
  project,
  next,
  isResearch = false,
}: {
  project: CaseStudy;
  next?: CaseStudy;
  isResearch?: boolean;
}) {
  const chapters = [
    ["overview", "Overview", project.overview],
    ["problem", "The problem", project.problem],
    ["architecture", "Architecture", project.architecture],
    ["contribution", "My contribution", project.contribution],
    ["challenges", "Engineering challenges", project.challenges],
    ["lessons", "Engineering reflections", project.lessons],
  ];
  return (
    <article className="case-study">
      <header className="shell case-header">
        <Link href={isResearch ? "/research" : "/work"} className="text-link">
          <ArrowLeft size={15} />
          {isResearch ? "Computing exploration" : "Selected work"}
        </Link>
        <p className="eyebrow">
          Case study {project.number} / {project.category}
        </p>
        <h1>
          {project.name}
          <span>.</span>
        </h1>
        <p className="case-summary">{project.summary}</p>
        <p className="case-role">
          {project.role}
          {project.period ? ` · ${project.period}` : ""}
        </p>
        <div className="case-technologies">
          {project.technology.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </header>
      <div className="shell case-body">
        <aside className="case-sidebar">
          <p className="eyebrow">Inside the project</p>
          <nav aria-label="Case study chapters">
            {chapters.map(([id, title], index) => (
              <a href={`#${id}`} key={id}>
                <span>0{index + 1}</span>
                {title}
              </a>
            ))}
            <a href="#technology">
              <span>07</span>Technology
            </a>
          </nav>
          <div className="case-source-links">
            {project.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
                <ArrowUpRight size={14} />
              </a>
            ))}
          </div>
        </aside>
        <div className="case-article">
          {chapters.map(([id, title, content]) => (
            <section key={id} id={id} className="case-chapter">
              <p className="eyebrow">{title}</p>
              <h2>
                {id === "overview" ? "The context behind the code." : title}
              </h2>
              <p>{content}</p>
              {id === "architecture" && (
                <>
                  <Architecture nodes={project.architectureNodes} />
                  {project.evidenceNote && (
                    <p className="evidence-note">{project.evidenceNote}</p>
                  )}
                </>
              )}
              {id === "overview" && project.slug === "svm-vs-qsvm" && (
                <div className="case-research-visual">
                  <ComputingVisual compact />
                  <span>
                    Classical foundations.
                    <br />
                    Quantum questions.
                  </span>
                </div>
              )}
            </section>
          ))}
          <section id="technology" className="case-chapter">
            <p className="eyebrow">Technology</p>
            <h2>The tools behind the work.</h2>
            <ul className="technology-list">
              {project.technology.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {project.technology.length === 0 && <p className="evidence-note">{siteContent.implementationUnavailable}</p>}
          </section>
        </div>
      </div>
      {next && (
        <div className="shell next-project">
          <span className="eyebrow">Next case study</span>
          <Link href={`/work/${next.slug}`}>
            {next.name}
            <ArrowUpRight size={36} strokeWidth={1} />
          </Link>
        </div>
      )}
    </article>
  );
}
