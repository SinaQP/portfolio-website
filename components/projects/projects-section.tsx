"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FolderOpen } from "lucide-react"
import { SectionHeader } from "@/components/section-header"
import { EmptyPlaceholder } from "@/components/empty-placeholder"
import { ProjectCard } from "./project-card"
import { ProjectModal } from "./project-modal"
import { projects, type Project } from "@/data/projects"

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const hasProjects = projects.length > 0

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Featured Projects"
          subtitle="Intelligent systems and experimental interfaces"
          glowColor="magenta"
        />

        {/* Projects Grid */}
        {!hasProjects && (
          <EmptyPlaceholder
            title="Projects are being forged"
            description="Real builds and case studies will appear here as they ship."
            icon={FolderOpen}
            variant="magenta"
            className="max-w-3xl"
          />
        )}
        {hasProjects && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard
                  title={project.title}
                  image={project.image}
                  tags={project.tags}
                  glowColor={project.glowColor}
                  onClick={() => setSelectedProject(project)}
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Modal */}
      {hasProjects && selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </section>
  )
}
