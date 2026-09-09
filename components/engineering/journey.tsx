"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";
import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { siteContent } from "@/data/site-content";
import { journey } from "@/data/profile";
import { SectionHeading } from "./section-heading";

export function Journey({ full = false }: { full?: boolean }) {
  const [active, setActive] = useState(0);
  const id = useId();
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const reduceMotion = useReducedMotion();
  function handleKey(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % journey.length;
    else if (event.key === "ArrowLeft")
      next = (index - 1 + journey.length) % journey.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = journey.length - 1;
    else return;
    event.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  }
  const chapter = journey[active];
  return (
    <section
      className={`section journey-section ${full ? "section-after-intro" : ""}`}
      id="journey"
      aria-label="Engineering journey"
    >
      <div className="shell">
        {full && <h2 className="sr-only">Engineering chapters</h2>}
        {!full && (
          <SectionHeading
            number="02"
            eyebrow="Engineering journey"
            title={siteContent.journey.title}
            description={siteContent.journey.description}
            link={{ label: "My story", href: "/about" }}
          />
        )}
        <div
          className="journey-tabs"
          role="tablist"
          aria-label="Engineering chapters"
        >
          {journey.map((item, i) => (
            <button
              key={item.title}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              role="tab"
              id={`${id}-tab-${i}`}
              aria-controls={`${id}-panel`}
              aria-selected={active === i}
              tabIndex={active === i ? 0 : -1}
              className={active === i ? "is-active" : ""}
              onClick={() => setActive(i)}
              onKeyDown={(event) => handleKey(event, i)}
            >
              <span className="journey-ordinal">0{i + 1}</span>
              <span className="journey-track">
                <span />
              </span>
              <span className="journey-tab-title">{item.short}</span>
              {i === 6 && (
                <span className="journey-exploration">Exploring</span>
              )}
            </button>
          ))}
        </div>
        <div
          role="tabpanel"
          id={`${id}-panel`}
          aria-labelledby={`${id}-tab-${active}`}
          tabIndex={0}
          className="journey-panel"
        >
          <AnimatePresence mode="wait" initial={false}>
            <m.div
              key={active}
              initial={{ opacity: 0, y: reduceMotion ? 0 : 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.18 }}
              className="journey-panel-grid"
            >
              <div>
                <p className="eyebrow">
                  Chapter 0{active + 1} · {chapter.phase}
                </p>
                <h3>{chapter.title}</h3>
                <p>{chapter.description}</p>
                <p className="journey-focus">{chapter.focus}</p>
              </div>
              <div className="journey-principle">
                <span aria-hidden="true">“</span>
                <blockquote>{chapter.principle}</blockquote>
                <p>A growing engineering perspective</p>
                {active === 6 && (
                  <Link className="text-link" href="/research">
                    Visit the research lab
                    <ArrowUpRight size={16} />
                  </Link>
                )}
              </div>
            </m.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
