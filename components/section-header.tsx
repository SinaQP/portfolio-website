"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  title: string
  subtitle?: string
  className?: string
  glowColor?: "cyan" | "magenta" | "violet" | "lime"
}

export function SectionHeader({ title, subtitle, className, glowColor = "cyan" }: SectionHeaderProps) {
  const glowClasses = {
    cyan: "text-glow-cyan",
    magenta: "text-glow-magenta",
    violet: "text-glow-violet",
    lime: "text-glow-lime",
  }

  const textColors = {
    cyan: "text-neon-cyan",
    magenta: "text-neon-magenta",
    violet: "text-neon-violet",
    lime: "text-neon-lime",
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={cn("mb-12", className)}
    >
      <h2
        className={cn(
          "text-4xl md:text-5xl lg:text-6xl font-bold font-mono uppercase tracking-tight",
          textColors[glowColor],
          glowClasses[glowColor],
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-lg text-muted-foreground max-w-2xl"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
}
