import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Download,
  Mail,
} from "lucide-react";
import { profile } from "@/data/profile";
import { siteContent } from "@/data/site-content";
import styles from "./hero.module.css";

export function Hero() {
  const { hero } = siteContent;
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.grid} aria-hidden="true" />
      <div className={`shell ${styles.content}`}>
        <div>
          <div className={`${styles.who} hero-enter`}>
            <Image
              src="/profile-picture.png"
              alt=""
              width={88}
              height={88}
              className={styles.portrait}
              priority
            />
            <p className={styles.whoText}>
              <strong>{profile.name}</strong>
              <br />
              <span className={styles.dot} aria-hidden="true" />
              {hero.status}
            </p>
          </div>
          <h1 id="hero-title" className={`${styles.headline} hero-enter`}>
            {hero.headline.before} <em>{hero.headline.accent}</em>{" "}
            {hero.headline.after.replace(" ", " ")}
          </h1>
          <p className={`${styles.line} hero-enter`}>{hero.line}</p>
          <div className={`${styles.actions} hero-enter`}>
            <Link href="/work" className="button button-primary">
              See my work <ArrowRight size={17} />
            </Link>
            <a href={profile.resume} download className="button button-secondary">
              <Download size={16} />
              Download CV
            </a>
            <a href={profile.github} className="hero-quiet-link" target="_blank" rel="noopener noreferrer">
              <Github size={16} />
              GitHub
            </a>
            <a href={profile.linkedin} className="hero-quiet-link" target="_blank" rel="noopener noreferrer">
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a href={`mailto:${profile.email}`} className="hero-quiet-link">
              <Mail size={16} />
              Email
            </a>
          </div>
        </div>
        <nav className={`${styles.proofs} hero-enter`} aria-label="Highlights">
          {hero.proofs.map((proof) => {
            const body = (
              <>
                <div>
                  <span className={styles.tag}>{proof.tag}</span>
                  <h2>{proof.title}</h2>
                  <p>{proof.text}</p>
                </div>
                <ArrowUpRight size={18} className={styles.arrow} aria-hidden="true" />
              </>
            );
            return proof.href.startsWith("http") ? (
              <a key={proof.title} href={proof.href} className={styles.proof} target="_blank" rel="noopener noreferrer">
                {body}
              </a>
            ) : (
              <Link key={proof.title} href={proof.href} className={styles.proof}>
                {body}
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="shell hero-bottom">
        <Link href="#work">
          {hero.bottom} <ArrowDown size={15} />
        </Link>
        <span className="index-mark">SQ / 01</span>
      </div>
    </section>
  );
}
