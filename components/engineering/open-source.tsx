import { ArrowUpRight } from "lucide-react";
import { githubRepositories } from "@/data/github";
import { siteContent } from "@/data/site-content";
import { profile } from "@/data/profile";
import { SectionHeading } from "./section-heading";
export function OpenSource({ full = false }: { full?: boolean }) {
  return (
    <section
      id="open-source"
      className="section shell"
      aria-label="Selected repository evidence"
    >
      <SectionHeading
        number="04"
        eyebrow="A working record"
        title={siteContent.github.title}
        description={siteContent.github.description}
        link={{ label: "GitHub", href: profile.github }}
      />
      <div className="repository-reading-list">
        {githubRepositories.slice(0, full ? undefined : 4).map((repo) => (
          <a
            key={repo.name}
            href={repo.source}
            target="_blank"
            rel="noopener noreferrer"
            className="repository-entry"
          >
            <span className="eyebrow">{repo.category}</span>
            <div>
              <h3>{repo.question}</h3>
              <p>{repo.detail}</p>
              <span className="repository-name">{repo.name}</span>
            </div>
            <ArrowUpRight size={23} />
          </a>
        ))}
      </div>
    </section>
  );
}
