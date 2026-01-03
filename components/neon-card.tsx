"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface NeonCardProps {
  children: ReactNode
  className?: string
  glowColor?: "cyan" | "magenta" | "violet" | "lime"
  hoverable?: boolean
}

export function NeonCard({ children, className, glowColor = "cyan", hoverable = true }: NeonCardProps) {
  const glowColors = {
    cyan: "hover:shadow-[0_0_30px_rgba(0,240,255,0.3)]",
    magenta: "hover:shadow-[0_0_30px_rgba(255,0,229,0.3)]",
    violet: "hover:shadow-[0_0_30px_rgba(184,79,255,0.3)]",
    lime: "hover:shadow-[0_0_30px_rgba(204,255,0,0.3)]",
  }

  const borderColors = {
    cyan: "border-neon-cyan/30",
    magenta: "border-neon-magenta/30",
    violet: "border-neon-violet/30",
    lime: "border-neon-lime/30",
  }

  return (
    <motion.div
      whileHover={hoverable ? { y: -8, scale: 1.02 } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "glass rounded-xl border p-6",
        "transition-all duration-300",
        borderColors[glowColor],
        hoverable && glowColors[glowColor],
        className,
      )}
    >
      {children}
    </motion.div>
  )
}
