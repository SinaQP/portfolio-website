"use client"

import { motion } from "framer-motion"
import { type LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty"

type Accent = "cyan" | "magenta" | "violet" | "lime"

interface EmptyPlaceholderProps {
  title: string
  description?: string
  icon?: LucideIcon
  variant?: Accent
  className?: string
}

const accentStyles: Record<Accent, { border: string; text: string; glow: string; media: string }> = {
  cyan: {
    border: "border-neon-cyan/35",
    text: "text-neon-cyan",
    glow: "text-glow-cyan",
    media: "border-neon-cyan/40 bg-neon-cyan/10 text-neon-cyan",
  },
  magenta: {
    border: "border-neon-magenta/35",
    text: "text-neon-magenta",
    glow: "text-glow-magenta",
    media: "border-neon-magenta/40 bg-neon-magenta/10 text-neon-magenta",
  },
  violet: {
    border: "border-neon-violet/35",
    text: "text-neon-violet",
    glow: "text-glow-violet",
    media: "border-neon-violet/40 bg-neon-violet/10 text-neon-violet",
  },
  lime: {
    border: "border-neon-lime/35",
    text: "text-neon-lime",
    glow: "text-glow-lime",
    media: "border-neon-lime/40 bg-neon-lime/10 text-neon-lime",
  },
}

export function EmptyPlaceholder({
  title,
  description,
  icon: Icon,
  variant = "cyan",
  className,
}: EmptyPlaceholderProps) {
  const accent = accentStyles[variant]

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn("mx-auto", className)}
    >
      <Empty className={cn("glass border-2 border-dashed rounded-2xl", accent.border)}>
        <EmptyHeader>
          {Icon && (
            <EmptyMedia variant="icon" className={cn("border", accent.media)}>
              <Icon className="h-6 w-6" />
            </EmptyMedia>
          )}
          <EmptyTitle className={cn("text-xl font-bold", accent.text, accent.glow)}>{title}</EmptyTitle>
          {description && <EmptyDescription className="text-sm text-muted-foreground">{description}</EmptyDescription>}
        </EmptyHeader>
      </Empty>
    </motion.div>
  )
}
