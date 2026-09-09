"use client";

import { useRef, useEffect, useState } from "react";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import Link from "next/link";
import { siteContent } from "@/data/site-content";
import { profile } from "@/data/profile";

export function Contact() {
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">(
    "idle",
  );
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyState("copied");
    } catch {
      setCopyState("failed");
    }
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopyState("idle"), 4000);
  }
  return (
    <footer id="contact" className="site-footer">
      <div className="shell">
        <div className="contact-main">
          <div>
            <p className="eyebrow">{siteContent.contact.eyebrow}</p>
            <h2>{siteContent.contact.title}</h2>
          </div>
          <a
            className="contact-arrow"
            href={`mailto:${profile.email}`}
            aria-label="Email Sina Qasempour"
          >
            <ArrowUpRight strokeWidth={1} />
          </a>
        </div>
        <div className="contact-links">
          <div className="email-line">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <button aria-label="Copy email address" onClick={copyEmail}>
              {copyState === "copied" ? (
                <Check size={16} />
              ) : (
                <Copy size={16} />
              )}
            </button>
            <span role="status" className="copy-status">
              {copyState === "copied"
                ? "Copied"
                : copyState === "failed"
                  ? "Please select the email to copy it."
                  : ""}
            </span>
          </div>
          <div className="footer-socials">
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              GitHub <ArrowUpRight size={14} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <ArrowUpRight size={14} />
            </a>
            <a href={profile.resume} download>
              Resume <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <Link
            href="/"
            className="monogram"
            aria-label="Sina Qasempour — Home"
          >
            sq<span>.</span>
          </Link>
          <span>© {new Date().getFullYear()} Sina Qasempour</span>
          <span>{siteContent.contact.closing}</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
