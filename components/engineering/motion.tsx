"use client";

import {
  LazyMotion,
  domAnimation,
  MotionConfig,
  m,
  useScroll,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import type { ReactNode } from "react";

export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation}>{children}</LazyMotion>
    </MotionConfig>
  );
}

export function ScrollProgress() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 150, damping: 30 });
  if (reduceMotion) return null;
  return (
    <m.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />
  );
}
