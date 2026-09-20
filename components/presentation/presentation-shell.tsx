"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Expand, Grid2X2, Minimize2, X } from "lucide-react";
import { presentationChapters, presentationSlides, type PresentationSlideId } from "@/data/presentation";
import {
  presentationChaptersFa,
  presentationChromeFa,
  presentationSlidesFa,
  toPersianDigits,
} from "@/data/presentation.fa";
import { PresentationSlides } from "./presentation-slides";
import { PresentationSlidesFa } from "./presentation-slides-fa";
import styles from "./presentation.module.css";

const transitionLockMs = 760;

const legacySlideHashes: Record<string, PresentationSlideId> = {
  journey: "zaravand",
  foundations: "iranslice",
  "along-the-way": "systems",
};

const presentationChromeEn = {
  skip: "Skip to presentation controls",
  returnToPortfolio: "Return to portfolio",
  enterMode: "Enter presentation mode",
  exitMode: "Exit presentation",
  controls: "Presentation controls",
  previous: "Previous slide",
  next: "Next slide",
  openOverview: "Open slide overview",
  closeOverview: "Close slide overview",
  overviewKicker: "DECK INDEX",
  overviewTitle: "The engineering journey.",
  slide: "Slide",
  of: "of",
  keyboardHint: "← → navigate  ·  O overview  ·  Esc exit",
};

export function PresentationShell({ locale = "en" }: { locale?: "en" | "fa" }) {
  const isFa = locale === "fa";
  const localizedSlides = isFa ? presentationSlidesFa : presentationSlides;
  const localizedChapters = isFa ? presentationChaptersFa : presentationChapters;
  const chrome = isFa ? presentationChromeFa : presentationChromeEn;
  const [activeIndex, setActiveIndex] = useState(0);
  const [overviewOpen, setOverviewOpen] = useState(false);
  const [presentationMode, setPresentationMode] = useState(false);
  const [idle, setIdle] = useState(false);
  const [ready, setReady] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const overview = useRef<HTMLDivElement>(null);
  const lastNavigation = useRef(0);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const syncFromHash = useCallback(() => {
    const requestedId = window.location.hash.slice(1);
    const id = legacySlideHashes[requestedId] ?? requestedId;
    const index = presentationSlides.findIndex((slide) => slide.id === id);
    if (index >= 0) {
      if (id !== requestedId) window.history.replaceState(null, "", `#${id}`);
      setActiveIndex(index);
    }
  }, []);

  const navigate = useCallback((nextIndex: number, historyMode: "push" | "replace" = "push") => {
    const bounded = Math.max(0, Math.min(presentationSlides.length - 1, nextIndex));
    setActiveIndex(bounded);
    const hash = `#${presentationSlides[bounded].id}`;
    if (window.location.hash !== hash) {
      window.history[historyMode === "push" ? "pushState" : "replaceState"](null, "", hash);
    }
  }, []);

  const step = useCallback((direction: 1 | -1) => {
    navigate(activeIndex + direction);
  }, [activeIndex, navigate]);

  const showControls = useCallback(() => {
    setIdle(false);
    if (idleTimer.current) clearTimeout(idleTimer.current);
    idleTimer.current = setTimeout(() => setIdle(true), 2400);
  }, []);

  const togglePresentationMode = useCallback(async () => {
    if (presentationMode) {
      setPresentationMode(false);
      if (document.fullscreenElement) await document.exitFullscreen();
      return;
    }
    setPresentationMode(true);
    try {
      await root.current?.requestFullscreen();
    } catch {
      // Focus mode still provides the presentation layout when fullscreen is unavailable.
    }
  }, [presentationMode]);

  useEffect(() => {
    let revealFrame = 0;
    const initialSync = window.requestAnimationFrame(() => {
      if (window.location.hash) syncFromHash();
      else window.history.replaceState(null, "", `#${presentationSlides[0].id}`);
      revealFrame = window.requestAnimationFrame(() => setReady(true));
    });
    window.addEventListener("popstate", syncFromHash);
    window.addEventListener("hashchange", syncFromHash);
    return () => {
      window.cancelAnimationFrame(initialSync);
      window.cancelAnimationFrame(revealFrame);
      window.removeEventListener("popstate", syncFromHash);
      window.removeEventListener("hashchange", syncFromHash);
    };
  }, [syncFromHash]);

  useEffect(() => {
    const element = root.current;
    if (!element) return;
    function onWheel(event: WheelEvent) {
      event.preventDefault();
      if (overviewOpen || Math.abs(event.deltaY) < 24) return;
      const now = Date.now();
      if (now - lastNavigation.current < transitionLockMs) return;
      lastNavigation.current = now;
      step(event.deltaY > 0 ? 1 : -1);
      showControls();
    }
    element.addEventListener("wheel", onWheel, { passive: false });
    return () => element.removeEventListener("wheel", onWheel);
  }, [overviewOpen, showControls, step]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      const target = event.target as HTMLElement;
      if (["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName)) return;
      showControls();
      if (event.key.toLowerCase() === "o") {
        event.preventDefault();
        setOverviewOpen((open) => !open);
        return;
      }
      if (event.key === "Escape") {
        if (overviewOpen) setOverviewOpen(false);
        else if (presentationMode) {
          setPresentationMode(false);
          if (document.fullscreenElement) void document.exitFullscreen();
        }
        return;
      }
      if (overviewOpen) return;
      const nextKeys = ["ArrowRight", "ArrowDown", "PageDown"];
      const previousKeys = ["ArrowLeft", "ArrowUp", "PageUp"];
      if (nextKeys.includes(event.key) || (event.key === " " && !event.shiftKey)) {
        event.preventDefault(); step(1);
      } else if (previousKeys.includes(event.key) || (event.key === " " && event.shiftKey)) {
        event.preventDefault(); step(-1);
      } else if (event.key === "Home") {
        event.preventDefault(); navigate(0);
      } else if (event.key === "End") {
        event.preventDefault(); navigate(presentationSlides.length - 1);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [navigate, overviewOpen, presentationMode, showControls, step]);

  useEffect(() => {
    function onFullscreenChange() {
      if (!document.fullscreenElement) setPresentationMode(false);
    }
    document.addEventListener("fullscreenchange", onFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", onFullscreenChange);
  }, []);

  useEffect(() => {
    if (!overviewOpen) return;
    const focusFrame = window.requestAnimationFrame(() => {
      overview.current?.querySelector<HTMLButtonElement>("button")?.focus();
    });
    return () => window.cancelAnimationFrame(focusFrame);
  }, [overviewOpen]);

  useEffect(() => {
    idleTimer.current = setTimeout(() => setIdle(true), 2400);
    return () => {
      if (idleTimer.current) clearTimeout(idleTimer.current);
    };
  }, []);

  const current = localizedSlides[activeIndex];
  const formatNumber = (value: number) => isFa
    ? toPersianDigits(String(value).padStart(2, "0"))
    : String(value).padStart(2, "0");

  return (
    <div
      ref={root}
      className={`${styles.presentation} ${isFa ? styles.persian : ""} ${ready ? styles.ready : styles.initializing} ${presentationMode ? styles.presentationMode : ""}`}
      lang={isFa ? "fa-IR" : "en"}
      dir={isFa ? "rtl" : "ltr"}
      onMouseMove={showControls}
      onPointerDown={(event) => { touchStart.current = { x: event.clientX, y: event.clientY }; showControls(); }}
      onPointerUp={(event) => {
        if (!touchStart.current || overviewOpen) return;
        const dx = event.clientX - touchStart.current.x;
        const dy = event.clientY - touchStart.current.y;
        touchStart.current = null;
        const distance = Math.abs(dx) > Math.abs(dy) ? dx : dy;
        if (Math.abs(distance) > 52) {
          const nextGesture = Math.abs(dx) > Math.abs(dy) ? (isFa ? dx > 0 : dx < 0) : dy < 0;
          step(nextGesture ? 1 : -1);
        }
      }}
      onClick={(event) => {
        if ((event.target as HTMLElement).closest("[data-presentation-next]")) step(1);
      }}
    >
      <a className={styles.presentationSkip} href="#presentation-controls">{chrome.skip}</a>
      <div className={styles.slides} aria-live="off" aria-hidden={overviewOpen} inert={overviewOpen}>
        {isFa ? <PresentationSlidesFa activeIndex={activeIndex} /> : <PresentationSlides activeIndex={activeIndex} />}
      </div>

      <div className={styles.liveRegion} role="status" aria-live="polite">
        {chrome.slide} {isFa ? toPersianDigits(activeIndex + 1) : activeIndex + 1} {chrome.of} {isFa ? toPersianDigits(presentationSlides.length) : presentationSlides.length}: {current.shortTitle}
      </div>

      <header className={`${styles.presentationHeader} ${idle && !overviewOpen ? styles.idle : ""}`} aria-hidden={overviewOpen} inert={overviewOpen}>
        <Link href="/" className={styles.presentationBrand} aria-label={chrome.returnToPortfolio}>sq<span>.</span></Link>
        <div className={styles.chapterReadout}><span>{current.chapter}</span><i /> <span>{current.shortTitle}</span></div>
        <div className={styles.languageSwitch} aria-label={isFa ? "انتخاب زبان" : "Choose language"}>
          <Link href={`/presentation#${current.id}`} lang="en" aria-current={!isFa ? "page" : undefined}>EN</Link>
          <span aria-hidden="true">/</span>
          <Link href={`/presentation/fa#${current.id}`} lang="fa" dir="rtl" aria-current={isFa ? "page" : undefined}>فارسی</Link>
        </div>
        <button onClick={togglePresentationMode} className={styles.modeButton}>
          {presentationMode ? <Minimize2 size={14} /> : <Expand size={14} />}
          {presentationMode ? chrome.exitMode : chrome.enterMode}
        </button>
      </header>

      <nav id="presentation-controls" className={`${styles.controls} ${idle && !overviewOpen ? styles.idle : ""}`} aria-label={chrome.controls} aria-hidden={overviewOpen} inert={overviewOpen}>
        <div className={styles.counter}><strong>{formatNumber(activeIndex + 1)}</strong><span>/</span><small>{formatNumber(presentationSlides.length)}</small></div>
        <div className={styles.progressTrack} aria-label={`${activeIndex + 1} of ${presentationSlides.length}`}>
          <span style={{ width: `${((activeIndex + 1) / presentationSlides.length) * 100}%` }} />
        </div>
        <button onClick={() => step(-1)} disabled={activeIndex === 0} aria-label={chrome.previous}>{isFa ? <ArrowRight size={18} /> : <ArrowLeft size={18} />}</button>
        <button onClick={() => step(1)} disabled={activeIndex === presentationSlides.length - 1} aria-label={chrome.next}>{isFa ? <ArrowLeft size={18} /> : <ArrowRight size={18} />}</button>
        <button onClick={() => setOverviewOpen(true)} aria-label={chrome.openOverview}><Grid2X2 size={16} /></button>
      </nav>

      <p className={`${styles.keyboardHint} ${idle ? styles.idle : ""}`}>{chrome.keyboardHint}</p>

      {overviewOpen && (
        <div ref={overview} className={styles.overview} role="dialog" aria-modal="true" aria-labelledby="overview-title">
          <div className={styles.overviewTop}>
            <div><span>{chrome.overviewKicker}</span><h2 id="overview-title">{chrome.overviewTitle}</h2></div>
            <button onClick={() => setOverviewOpen(false)} aria-label={chrome.closeOverview}><X /></button>
          </div>
          <div className={styles.overviewGrid}>
            {localizedChapters.map((chapter) => (
              <div key={chapter}>
                <h3>{chapter}</h3>
                {localizedSlides.map((slide, slideIndex) => slide.chapter === chapter && (
                  <button
                    key={slide.id}
                    className={slideIndex === activeIndex ? styles.overviewActive : ""}
                    onClick={() => { navigate(slideIndex); setOverviewOpen(false); }}
                  >
                    <span>{formatNumber(slideIndex + 1)}</span>{slide.shortTitle}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
