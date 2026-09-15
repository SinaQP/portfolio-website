import type { ReactNode } from "react";
import styles from "./presentation.module.css";

export function PresentationSlide({
  id,
  chapter,
  index,
  active,
  children,
  tone = "dark",
}: {
  id: string;
  chapter: string;
  index: number;
  active: boolean;
  children: ReactNode;
  tone?: "dark" | "light" | "signal";
}) {
  return (
    <section
      id={id}
      className={`${styles.slide} ${styles[tone]} ${active ? styles.active : ""}`}
      aria-hidden={!active}
      inert={!active}
      aria-label={`Slide ${index + 1}: ${chapter}`}
      data-position={active ? "active" : "inactive"}
    >
      <div className={styles.slideGrid} aria-hidden="true" />
      <div className={styles.slideIndex} aria-hidden="true">
        <span>{String(index + 1).padStart(2, "0")}</span>
        <span>{chapter}</span>
      </div>
      <div className={styles.slideBody}>{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className={styles.eyebrow}>{children}</p>;
}
