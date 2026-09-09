import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function SectionHeading({
  number,
  eyebrow,
  title,
  description,
  link,
}: {
  number: string;
  eyebrow: string;
  title: string;
  description?: string;
  link?: { label: string; href: string };
}) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">
          <span>{number}</span> {eyebrow}
        </p>
        <h2>{title}</h2>
        {description && <p className="section-description">{description}</p>}
      </div>
      {link && (
        <Link className="text-link" href={link.href}>
          {link.label}
          <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      )}
    </div>
  );
}

export function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="page-intro shell">
      <p className="eyebrow">
        <span className="small-cross">+</span> {eyebrow}
      </p>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}
