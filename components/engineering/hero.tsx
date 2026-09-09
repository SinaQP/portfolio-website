import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
  Download,
  Mail,
} from "lucide-react";
import { TorusVisual } from "./torus-visual";
import { profile } from "@/data/profile";
import { siteContent } from "@/data/site-content";
export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" />
      <div className="shell hero-content">
        <div className="hero-copy">
          <h1 id="hero-title" className="hero-enter">
            {profile.name.split(" ")[0]}<br />{profile.name.split(" ").slice(1).join(" ")}
            <span className="name-period">.</span>
          </h1>
          <p className="hero-statement hero-enter">
            {profile.statement[0]}
            <br />
            <span>{profile.statement[1]}</span>
          </p>
          <p className="hero-description hero-enter">{profile.introduction}</p>
          <div className="hero-actions hero-enter">
            <Link href="/work" className="button button-primary">
              Explore the work <ArrowUpRight size={17} />
            </Link>
            <a
              href={profile.github}
              className="hero-quiet-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={16} />
              GitHub
            </a>
            <a
              href={profile.linkedin}
              className="hero-quiet-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a href={profile.resume} download className="hero-quiet-link">
              <Download size={16} />
              Resume
            </a>
            <a href={`mailto:${profile.email}`} className="hero-quiet-link">
              <Mail size={16} />
              Contact
            </a>
          </div>
        </div>
        <figure className="hero-figure">
          <div className="figure-topline">
            <span>{siteContent.hero.figureTitle}</span>
            <span>{siteContent.hero.figureNumber}</span>
          </div>
          <TorusVisual />
          <figcaption>{siteContent.hero.figureCaption}</figcaption>
        </figure>
      </div>
      <div className="shell hero-bottom">
        <Link href="#work">
          A body of work <ArrowDown size={15} />
        </Link>
        <span>{siteContent.hero.bottom}</span>
        <span className="index-mark">SQ / 01</span>
      </div>
    </section>
  );
}
