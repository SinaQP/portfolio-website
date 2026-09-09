import { ArrowRight, Layers3, Database, Workflow, Monitor } from "lucide-react";

export function Architecture({
  nodes = ["Application", "API layer", "Services", "Data"],
}: {
  nodes?: string[];
}) {
  const icons = [Monitor, Workflow, Layers3, Database];
  return (
    <figure className="architecture-figure">
      <div className="diagram-label">
        <span>SYSTEM OVERVIEW</span>
        <span aria-hidden="true">↗</span>
      </div>
      <div className="architecture-flow">
        {nodes.map((node, i) => {
          const Icon = icons[i % icons.length];
          return (
            <div className="architecture-step" key={node}>
              <div className="architecture-node">
                <Icon size={22} strokeWidth={1} aria-hidden="true" />
                <span>{node}</span>
                <span className="node-index">0{i + 1}</span>
              </div>
              {i < nodes.length - 1 && (
                <ArrowRight
                  className="node-arrow"
                  size={17}
                  strokeWidth={1}
                  aria-hidden="true"
                />
              )}
            </div>
          );
        })}
      </div>
      <figcaption>
        <span className="status-dot" /> Conceptual view · Read the case study
        for implementation context
      </figcaption>
    </figure>
  );
}
