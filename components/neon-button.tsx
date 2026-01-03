"use client"

import { motion } from "framer-motion"
import { type ButtonHTMLAttributes, forwardRef } from "react"
import { cn } from "@/lib/utils"

interface NeonButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "cyan" | "magenta" | "violet" | "lime"
  size?: "sm" | "md" | "lg"
}

const NeonButton = forwardRef<HTMLButtonElement, NeonButtonProps>(
  ({ className, variant = "cyan", size = "md", children, ...props }, ref) => {
    const glowColors = {
      cyan: "hover:shadow-[0_0_20px_rgba(0,240,255,0.6),0_0_40px_rgba(0,240,255,0.4)]",
      magenta: "hover:shadow-[0_0_20px_rgba(255,0,229,0.6),0_0_40px_rgba(255,0,229,0.4)]",
      violet: "hover:shadow-[0_0_20px_rgba(184,79,255,0.6),0_0_40px_rgba(184,79,255,0.4)]",
      lime: "hover:shadow-[0_0_20px_rgba(204,255,0,0.6),0_0_40px_rgba(204,255,0,0.4)]",
    }

    const borderColors = {
      cyan: "border-neon-cyan text-neon-cyan",
      magenta: "border-neon-magenta text-neon-magenta",
      violet: "border-neon-violet text-neon-violet",
      lime: "border-neon-lime text-neon-lime",
    }

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    }

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          "relative font-[var(--font-cta)] font-semibold uppercase tracking-wider",
          "border-2 rounded-lg backdrop-blur-sm",
          "transition-all duration-300",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          borderColors[variant],
          glowColors[variant],
          sizes[size],
          className,
        )}
        {...props}
      >
        <span className="relative z-10">{children}</span>
        <motion.div
          className="absolute inset-0 rounded-lg opacity-0 hover:opacity-20 transition-opacity"
          style={{
            background: `radial-gradient(circle at center, currentColor, transparent)`,
          }}
        />
      </motion.button>
    )
  },
)

NeonButton.displayName = "NeonButton"

export { NeonButton }
