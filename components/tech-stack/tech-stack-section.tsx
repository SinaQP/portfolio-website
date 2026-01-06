"use client"

import { motion } from "framer-motion"
import { NeonChip } from "@/components/neon-chip"
import { SectionHeader } from "@/components/section-header"

const technologies = [
  // Web
  { name: "JavaScript / HTML / CSS", color: "cyan" as const },
  { name: "React.js", color: "magenta" as const },
  { name: "Next.js", color: "violet" as const },
  { name: "NestJS", color: "lime" as const },

  // Backend
  { name: "Django", color: "cyan" as const },
  { name: "FastAPI", color: "magenta" as const },
  { name: "Microservices", color: "violet" as const },
  { name: "NoSQL / SQL", color: "lime" as const },

  // Data/ML
  { name: "Data Cleaning & Preprocessing", color: "cyan" as const },
  { name: "Feature Engineering", color: "magenta" as const },
  { name: "NumPy", color: "violet" as const },
  { name: "Pandas", color: "violet" as const },
  { name: "Scikit-Learn", color: "violet" as const },
  { name: "Machine Learning & Model Evaluation", color: "lime" as const },
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
