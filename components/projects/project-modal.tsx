"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { NeonChip } from "@/components/neon-chip"
import { NeonButton } from "@/components/neon-button"
import type { Project } from "@/data/projects"

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-background/95 backdrop-blur-xl"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass rounded-2xl border border-neon-cyan/30 shadow-[0_0_60px_rgba(0,240,255,0.3)]"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full glass border border-neon-cyan/50 flex items-center justify-center hover:bg-neon-cyan/20 transition-colors"
          >
            <X className="w-5 h-5 text-neon-cyan" />
          </button>

          {/* Hero Image */}
          <div className="relative aspect-video w-full overflow-hidden rounded-t-2xl">
            <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>

          {/* Content */}
          <div className="p-8 space-y-6">
            {/* Title */}
            <h2 className="text-4xl font-bold font-mono text-neon-cyan text-glow-cyan">{project.title}</h2>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <NeonChip key={index} variant={tag.variant}>
                  {tag.label}
                </NeonChip>
              ))}
            </div>

            {/* Description */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-neon-magenta">Overview</h3>
              <p className="text-muted-foreground leading-relaxed">{project.description}</p>
            </div>

            {/* Features */}
            {project.features && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-neon-violet">Key Features</h3>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-neon-cyan mt-1">▸</span>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack */}
            {project.techStack && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-neon-lime">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-md bg-muted/50 text-sm text-muted-foreground font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Links */}
            <div className="flex flex-wrap gap-4 pt-4">
              {project.liveUrl && (
                <NeonButton variant="cyan">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </NeonButton>
              )}
              {project.githubUrl && (
                <NeonButton
                  variant="magenta"
                  onClick={() => window.open(project.githubUrl, "_blank", "noopener,noreferrer")}
                >
                  <Github className="w-4 h-4 mr-2" />
                  Source Code
                </NeonButton>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
