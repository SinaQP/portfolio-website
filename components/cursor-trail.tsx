"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

interface TrailDot {
  id: number
  x: number
  y: number
}

export function CursorTrail() {
  const [trails, setTrails] = useState<TrailDot[]>([])
  const [isMobile, setIsMobile] = useState(false)

  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 200 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    // Check if mobile
    setIsMobile(window.matchMedia("(max-width: 768px)").matches)

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion || isMobile) return

    let trailId = 0
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)

      setTrails((prev) => {
        const newTrail = { id: trailId++, x: e.clientX, y: e.clientY }
        const updated = [newTrail, ...prev].slice(0, 8)
        return updated
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [cursorX, cursorY, isMobile])

  if (isMobile) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      {trails.map((trail, index) => (
        <motion.div
          key={trail.id}
          initial={{ opacity: 0.6, scale: 1 }}
          animate={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{
            position: "absolute",
            left: trail.x - 4,
            top: trail.y - 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: `rgba(0, 240, 255, ${0.6 - index * 0.075})`,
            boxShadow: "0 0 10px rgba(0, 240, 255, 0.8)",
          }}
        />
      ))}
    </div>
  )
}
