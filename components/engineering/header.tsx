"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { profile } from "@/data/profile";

import { siteContent } from "@/data/site-content";
const navigation = siteContent.navigation;

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function escape(event: KeyboardEvent) {
      if (event.key === "Escape" && open) {
        setOpen(false);
        menuButton.current?.focus();
      }
    }
    document.addEventListener("keydown", escape);
    return () => document.removeEventListener("keydown", escape);
  }, [open]);

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link
          href="/"
          className="wordmark"
          aria-label="Sina Qasempour — Home"
          onClick={() => setOpen(false)}
        >
          <span className="monogram">
            sq<span>.</span>
          </span>
          <span className="wordmark-name">Sina Qasempour</span>
        </Link>
        <nav aria-label="Main navigation" className="desktop-nav">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname.startsWith(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <a href={`mailto:${profile.email}`} className="header-contact">
          Let’s talk <ArrowUpRight size={15} aria-hidden="true" />
        </a>
        <button
          className="menu-button"
          ref={menuButton}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-navigation"
          className="mobile-nav"
          aria-label="Mobile navigation"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname.startsWith(item.href) ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
              <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          ))}
          <a href={`mailto:${profile.email}`}>
            Contact <ArrowUpRight size={17} />
          </a>
        </nav>
      )}
    </header>
  );
}
