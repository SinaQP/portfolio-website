import type { ReactNode } from "react";
import styles from "./presentation.module.css";

export function PresentationSlide({
  id,
  chapter,
  index,
  active,
  children,
  tone = "dark",
  locale = "en",
}: {
  id: string;
  chapter: string;
  index: number;
  active: boolean;
  children: ReactNode;
  tone?: "dark" | "signal";
  locale?: "en" | "fa";
}) {
  const displayIndex = locale === "fa"
    ? String(index + 1).padStart(2, "0").replace(/\d/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[Number(digit)])
    : String(index + 1).padStart(2, "0");
  return (
    <section
      id={id}
      className={`${styles.slide} ${styles[tone]} ${active ? styles.active : ""}`}
      aria-hidden={!active}
      inert={!active}
      aria-label={locale === "fa" ? `اسلاید ${index + 1}: ${chapter}` : `Slide ${index + 1}: ${chapter}`}
      data-position={active ? "active" : "inactive"}
      data-slide={id}
      lang={locale === "fa" ? "fa" : "en"}
    >
      <div className={styles.slideGrid} aria-hidden="true" />
      <div className={styles.slideIndex} aria-hidden="true">
        <span>{displayIndex}</span>
        <span>{chapter}</span>
      </div>
      <div className={styles.slideBody}>{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className={styles.eyebrow}>{children}</p>;
}
