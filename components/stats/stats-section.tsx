"use client"

import { motion, useInView, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useRef } from "react"

interface StatProps {
  value: number
  label: string
  suffix?: string
  color: "cyan" | "magenta" | "violet" | "lime"
}

function AnimatedCounter({ value, suffix = "", color }: { value: number; suffix?: string; color: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  })
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [motionValue, isInView, value])

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString() + suffix
      }
    })
  }, [springValue, suffix])

  const colorClasses = {
    cyan: "text-neon-cyan",
    magenta: "text-neon-magenta",
    violet: "text-neon-violet",
    lime: "text-neon-lime",
  }

  return <span ref={ref} className={colorClasses[color as keyof typeof colorClasses]} />
}

function Stat({ value, label, suffix = "", color }: StatProps) {
  const glowColors = {
    cyan: "shadow-[0_0_30px_rgba(0,255,255,0.3)]",
    magenta: "shadow-[0_0_30px_rgba(255,0,255,0.3)]",
    violet: "shadow-[0_0_30px_rgba(138,43,226,0.3)]",
    lime: "shadow-[0_0_30px_rgba(50,255,50,0.3)]",
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <div className={`text-6xl md:text-7xl font-bold mb-2 ${glowColors[color]}`}>
        <AnimatedCounter value={value} suffix={suffix} color={color} />
      </div>
      <div className="text-gray-400 text-sm uppercase tracking-wider">{label}</div>
    </motion.div>
  )
}

export function StatsSection() {
  return (
    <section className="relative py-20 px-6 border-y border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          <Stat value={0} label="Projects Built" color="cyan" />
          <Stat value={0} label="Technologies" color="magenta" />
          <Stat value={0} label="Years Experience" color="violet" />
          <Stat value={0} label="Commits This Month" color="lime" />
        </div>
      </div>
    </section>
  )
}
