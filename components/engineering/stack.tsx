import { siteContent } from "@/data/site-content";
import { stack } from "@/data/profile";
import { SectionHeading } from "./section-heading";

export function Stack({ full = false }: { full?: boolean }) {
  return (
    <section
      className={`section shell ${full ? "section-after-intro" : ""}`}
      id="stack"
      aria-label="Engineering stack"
    >
      {full && <h2 className="sr-only">Tools by responsibility</h2>}
      {!full && (
        <SectionHeading
          number="03"
          eyebrow="Engineering domains"
          title={siteContent.capabilities.title}
          description={siteContent.capabilities.description}
        />
      )}
      <div className="stack-list">
        {stack.map((group, index) => (
          <div className="stack-row" key={group.name}>
            <span className="stack-number">0{index + 1}</span>
            <div>
              <h3>{group.name}</h3>
              <p>{group.note}</p>
            </div>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {full && (
        <p className="section-footnote">
          Tools are part of the practice. The more lasting skills are
          understanding constraints, designing boundaries, and knowing how to
          evaluate a decision.
        </p>
      )}
    </section>
  );
}
