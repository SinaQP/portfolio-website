"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { SectionHeader } from "@/components/section-header"
import { NeonCard } from "@/components/neon-card"
import { NeonChip } from "@/components/neon-chip"
import { Beaker, Cpu, Zap, Sparkles } from "lucide-react"

const experiments = [
  {
    icon: Beaker,
    title: "Neural Interfaces",
    description: "Exploring brain-computer interaction patterns",
    status: "Active",
    variant: "cyan" as const,
  },
  {
    icon: Cpu,
    title: "Quantum ML",
    description: "Hybrid quantum-classical learning systems",
    status: "Research",
    variant: "magenta" as const,
  },
  {
    icon: Zap,
    title: "Real-time Synthesis",
    description: "Low-latency generative audio/visual systems",
    status: "Active",
    variant: "violet" as const,
  },
  {
    icon: Sparkles,
    title: "Emergent Behavior",
    description: "Multi-agent systems and swarm intelligence",
    status: "Prototype",
    variant: "lime" as const,
  },
]

export function FutureGadgetLabSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <section ref={containerRef} className="py-20 relative overflow-hidden">
      {/* Animated circuit lines background */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00F0FF" />
              <stop offset="50%" stopColor="#B84FFF" />
              <stop offset="100%" stopColor="#FF00E5" />
            </linearGradient>
          </defs>
          <path
            d="M0,100 L100,100 L100,200 L300,200 M300,200 L500,200 L500,100 M500,100 L700,100 L700,300"
            stroke="url(#circuit-gradient)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="5,5"
          />
          <circle cx="100" cy="100" r="4" fill="#00F0FF" />
          <circle cx="300" cy="200" r="4" fill="#B84FFF" />
          <circle cx="500" cy="100" r="4" fill="#FF00E5" />
        </svg>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          title="Future Gadget Lab"
          subtitle="Experimental research and prototype systems"
          glowColor="violet"
        />

        {/* Lab intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-3xl mx-auto text-center"
        >
          <p className="text-lg text-muted-foreground">
            A collection of experimental projects pushing the boundaries of AI, creative coding, and human-computer
            interaction
          </p>
        </motion.div>

        {/* Experiments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {experiments.map((experiment, index) => {
            const Icon = experiment.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <NeonCard glowColor={experiment.variant} className="h-full">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg glass border border-neon-${experiment.variant}/50`}>
                      <Icon className={`w-6 h-6 text-neon-${experiment.variant}`} />
                    </div>
                    <div className="flex-1 space-y-3">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-xl font-bold font-mono">{experiment.title}</h3>
                        <NeonChip variant={experiment.variant} animated={false}>
                          {experiment.status}
                        </NeonChip>
                      </div>
                      <p className="text-muted-foreground">{experiment.description}</p>
                    </div>
                  </div>
                </NeonCard>
              </motion.div>
            )
          })}
        </div>

        {/* Lab stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
            { label: "Active Experiments", value: "0", color: "cyan" },
            { label: "Research Papers", value: "0", color: "magenta" },
            { label: "Prototypes", value: "0", color: "violet" },
            { label: "Collaborations", value: "0", color: "lime" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center space-y-2 p-6 glass rounded-xl border border-border"
            >
              <div className={`text-4xl font-bold font-mono text-neon-${stat.color} text-glow-${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
