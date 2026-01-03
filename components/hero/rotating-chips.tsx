"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { NeonChip } from "@/components/neon-chip"

const techStack = [
  { label: "AI/ML", variant: "cyan" as const },
  { label: "React", variant: "magenta" as const },
  { label: "TypeScript", variant: "violet" as const },
  { label: "Python", variant: "lime" as const },
  { label: "Next.js", variant: "cyan" as const },
  { label: "TensorFlow", variant: "magenta" as const },
  { label: "Three.js", variant: "violet" as const },
  { label: "Node.js", variant: "lime" as const },
]

export function RotatingChips() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % techStack.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [isPaused])

  const visibleChips = [
    techStack[currentIndex],
    techStack[(currentIndex + 1) % techStack.length],
    techStack[(currentIndex + 2) % techStack.length],
  ]

  return (
    <div
      className="flex flex-wrap gap-3 min-h-[40px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence mode="popLayout">
        {visibleChips.map((chip, index) => (
          <motion.div
            key={`${chip.label}-${currentIndex}-${index}`}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <NeonChip variant={chip.variant}>{chip.label}</NeonChip>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
