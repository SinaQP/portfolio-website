"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import Image from "next/image"
import { NeonChip } from "@/components/neon-chip"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
  title: string
  image: string
  tags: Array<{ label: string; variant: "cyan" | "magenta" | "violet" | "lime" }>
  onClick: () => void
  glowColor?: "cyan" | "magenta" | "violet" | "lime"
}

export function ProjectCard({ title, image, tags, onClick, glowColor = "cyan" }: ProjectCardProps) {
  const glowColors = {
    cyan: "hover:shadow-[0_0_40px_rgba(0,240,255,0.4)]",
    magenta: "hover:shadow-[0_0_40px_rgba(255,0,229,0.4)]",
    violet: "hover:shadow-[0_0_40px_rgba(184,79,255,0.4)]",
    lime: "hover:shadow-[0_0_40px_rgba(204,255,0,0.4)]",
  }

  const borderColors = {
    cyan: "border-neon-cyan/30",
    magenta: "border-neon-magenta/30",
    violet: "border-neon-violet/30",
    lime: "border-neon-lime/30",
  }

  return (
    <motion.div
      whileHover={{ y: -12, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onClick={onClick}
      className={cn(
        "group relative overflow-hidden rounded-xl border cursor-pointer",
        "glass transition-all duration-300",
        borderColors[glowColor],
        glowColors[glowColor],
      )}
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Hover icons */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <motion.div
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="w-12 h-12 rounded-full glass border border-neon-cyan/50 flex items-center justify-center"
          >
            <ExternalLink className="w-6 h-6 text-neon-cyan" />
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-2xl md:text-3xl font-bold font-mono tracking-tight leading-tight text-foreground group-hover:text-neon-cyan transition-colors text-balance">
          {title}
        </h3>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <NeonChip key={index} variant={tag.variant} animated={false}>
              {tag.label}
            </NeonChip>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
