import { siteContent } from "@/data/site-content";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/data/case-studies";
import { SectionHeading } from "./section-heading";
import { Architecture } from "./architecture";

export function Work({ full = false }: { full?: boolean }) {
  const featured = caseStudies[0];
  return (
    <section
      id="work"
      className={`section shell work-section ${full ? "section-after-intro" : ""}`}
      aria-label="Selected engineering work"
    >
      {full && <h2 className="sr-only">Selected project case studies</h2>}
      {!full && (
        <SectionHeading
          number="01"
          eyebrow="Selected work"
          title={siteContent.work.title}
          description={siteContent.work.description}
          link={{ label: "All case studies", href: "/work" }}
        />
      )}
      <article className="featured-work">
        <div className="featured-work-copy">
          <p className="eyebrow">
            <span>01 /</span> Enterprise systems
          </p>
          <Link href={`/work/${featured.slug}`} className="project-title-link">
            <h3>{featured.name}</h3>
            <ArrowUpRight size={31} strokeWidth={1.2} aria-hidden="true" />
          </Link>
          <p>{featured.summary}</p>
          <div className="inline-tags">
            <span>{featured.engineeringFocus[0]}</span>
            <span>{featured.engineeringFocus[1]}</span>
          </div>
          <Link href={`/work/${featured.slug}`} className="text-link">
            Inside the system
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
        <div>
          <Architecture nodes={featured.architectureNodes} />
          <p className="evidence-note">{featured.evidenceNote}</p>
        </div>
      </article>
      <div className="work-list">
        {caseStudies.slice(1).map((project) => (
          <Link
            className={`work-row ${project.slug === "danobin" ? "leadership-work" : ""}`}
            key={project.slug}
            href={`/work/${project.slug}`}
          >
            <span className="work-number">{project.number}</span>
            <div className="work-row-title">
              <h3>{project.name}</h3>
              <p>{project.summary}</p>
            </div>
            <span className="work-category">{project.category}</span>
            <span className="round-arrow">
              <ArrowUpRight size={21} strokeWidth={1.4} aria-hidden="true" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
