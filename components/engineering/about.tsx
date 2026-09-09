import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { credentials, languages, linkedinUrl } from "@/data/credentials";
import { profile } from "@/data/profile";
import { experience } from "@/data/experience";
import { siteContent } from "@/data/site-content";
import { SectionHeading } from "./section-heading";
export function About({ full = false }: { full?: boolean }) {
  return (
    <section className="section shell about-section" aria-label="About Sina">
      <div className="about-grid">
        <div className="portrait-wrap">
          <Image
            src="/profile-picture.png"
            alt={profile.name}
            width={640}
            height={720}
            sizes="(max-width: 700px) 100vw, 35vw"
            className="portrait"
          />
          <span className="portrait-caption">
            {profile.name} / {profile.role}
          </span>
        </div>
        <div className="about-copy">
          <h2 className="about-lead">{profile.about.lead}</h2>
          {profile.about.paragraphs
            .slice(0, full ? undefined : 2)
            .map((text) => (
              <p key={text}>{text}</p>
            ))}
          <p>{profile.about.closing}</p>
          {!full && (
            <Link href="/about" className="text-link">
              About the practice
              <ArrowUpRight size={16} />
            </Link>
          )}
        </div>
      </div>
      {full && (
        <>
          <div className="philosophy-list">
            {profile.about.principles.map((item, i) => (
              <article key={item.title}>
                <span className="eyebrow">0{i + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <details className="credential-disclosure experience-history">
            <summary>
              Historical roles <span aria-hidden="true">+</span>
            </summary>
            <p className="evidence-note">
              Project roles recorded in the résumé. These are historical labels;
              periods are omitted where exact dates are not established.
            </p>
            {experience.map((item) => (
              <div className="credential-row" key={item.name}>
                <h3>{item.name}</h3>
                <div>
                  <p>{item.role}</p>
                  <small>{item.context}</small>
                </div>
              </div>
            ))}
          </details>
        </>
      )}
    </section>
  );
}
export function Credentials() {
  const featured = credentials.filter((item) => item.featured);
  const additional = credentials.filter((item) => !item.featured);
  function rows(items: typeof credentials) {
    return items.map((item) => (
      <div className="credential-row" key={item.name}>
        <div>
          <h3>{item.name}</h3>
          <p>{item.issuer}</p>
          {item.credentialId && (
            <span className="credential-id">
              Credential ID {item.credentialId}
            </span>
          )}
        </div>
        <span className="credential-date">
          {item.issued ?? "English proficiency"}
        </span>
      </div>
    ));
  }
  return (
    <section className="section shell credentials-section" id="credentials">
      <SectionHeading
        number="02"
        eyebrow="Continued learning"
        title={siteContent.credentials.title}
        description={siteContent.credentials.description}
        link={{ label: "View on LinkedIn", href: linkedinUrl }}
      />
      <div className="credential-list">{rows(featured)}</div>
      <details className="credential-disclosure">
        <summary>
          View {additional.length} more certifications{" "}
          <span aria-hidden="true">+</span>
        </summary>
        <div className="credential-list">{rows(additional)}</div>
      </details>
      <div className="languages">
        <div>
          <p className="eyebrow">Languages</p>
          <h3>
            Across ideas.
            <br />
            Across languages.
          </h3>
        </div>
        {languages.map((lang) => (
          <div key={lang.name}>
            <h4>{lang.name}</h4>
            <p>{lang.proficiency}</p>
            <span>{lang.detail}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
