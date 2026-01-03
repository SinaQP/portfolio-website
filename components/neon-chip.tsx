"use client"

import type React from "react"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface NeonChipProps {
  children: React.ReactNode
  variant?: "cyan" | "magenta" | "violet" | "lime"
  className?: string
  animated?: boolean
}

export function NeonChip({ children, variant = "cyan", className, animated = true }: NeonChipProps) {
  const colors = {
    cyan: "border-neon-cyan/50 text-neon-cyan bg-neon-cyan/10",
    magenta: "border-neon-magenta/50 text-neon-magenta bg-neon-magenta/10",
    violet: "border-neon-violet/50 text-neon-violet bg-neon-violet/10",
    lime: "border-neon-lime/50 text-neon-lime bg-neon-lime/10",
  }

  const glowColors = {
    cyan: "hover:shadow-[0_0_15px_rgba(0,240,255,0.4)]",
    magenta: "hover:shadow-[0_0_15px_rgba(255,0,229,0.4)]",
    violet: "hover:shadow-[0_0_15px_rgba(184,79,255,0.4)]",
    lime: "hover:shadow-[0_0_15px_rgba(204,255,0,0.4)]",
  }

  const Component = animated ? motion.span : "span"
  const animationProps = animated
    ? {
        whileHover: { scale: 1.05, y: -2 },
        transition: { type: "spring", stiffness: 400, damping: 10 },
      }
    : {}

  return (
    <Component
      className={cn(
        "inline-flex items-center px-3 py-1.5 rounded-full",
        "border backdrop-blur-sm",
        "text-xs font-mono font-semibold uppercase tracking-wide",
        "transition-all duration-300 cursor-default",
        colors[variant],
        glowColors[variant],
        className,
      )}
      {...animationProps}
    >
      {children}
    </Component>
  )
}
