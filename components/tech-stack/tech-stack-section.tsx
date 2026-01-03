"use client"

import { motion } from "framer-motion"
import { NeonChip } from "@/components/neon-chip"
import { SectionHeader } from "@/components/section-header"

const technologies = [
  // Frontend
  { name: "React", color: "cyan" as const },
  { name: "Next.js", color: "magenta" as const },
  { name: "TypeScript", color: "violet" as const },
  { name: "Tailwind CSS", color: "lime" as const },
  { name: "Framer Motion", color: "cyan" as const },
  { name: "Three.js", color: "magenta" as const },
  { name: "React Three Fiber", color: "violet" as const },
  { name: "shadcn/ui", color: "lime" as const },

  // Backend
  { name: "Node.js", color: "cyan" as const },
  { name: "Python", color: "magenta" as const },
  { name: "FastAPI", color: "violet" as const },
  { name: "Express", color: "lime" as const },
  { name: "GraphQL", color: "cyan" as const },
  { name: "REST APIs", color: "magenta" as const },

  // AI/ML
  { name: "TensorFlow", color: "violet" as const },
  { name: "PyTorch", color: "lime" as const },
  { name: "OpenAI", color: "cyan" as const },
  { name: "Hugging Face", color: "magenta" as const },
  { name: "LangChain", color: "violet" as const },
  { name: "Stable Diffusion", color: "lime" as const },

  // Database
  { name: "PostgreSQL", color: "cyan" as const },
  { name: "MongoDB", color: "magenta" as const },
  { name: "Redis", color: "violet" as const },
  { name: "Supabase", color: "lime" as const },
  { name: "Prisma", color: "cyan" as const },

  // DevOps
  { name: "Docker", color: "magenta" as const },
  { name: "Kubernetes", color: "violet" as const },
  { name: "AWS", color: "lime" as const },
  { name: "Vercel", color: "cyan" as const },
  { name: "GitHub Actions", color: "magenta" as const },

  // Tools
  { name: "Git", color: "violet" as const },
  { name: "VS Code", color: "lime" as const },
  { name: "Figma", color: "cyan" as const },
  { name: "Postman", color: "magenta" as const },
]

export function TechStackSection() {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="Tech Arsenal" subtitle="Tools & technologies I wield to build the future" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 flex flex-wrap gap-3 justify-center"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: 0.3 + index * 0.02,
              }}
            >
              <NeonChip color={tech.color} size="lg">
                {tech.name}
              </NeonChip>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
