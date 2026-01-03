"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Palette } from "lucide-react"

type AccentColor = "cyan" | "magenta" | "violet" | "lime"

export function AccentSwitcher() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentAccent, setCurrentAccent] = useState<AccentColor>("cyan")

  const colors: { name: AccentColor; class: string; hex: string }[] = [
    { name: "cyan", class: "bg-neon-cyan", hex: "#00ffff" },
    { name: "magenta", class: "bg-neon-magenta", hex: "#ff00ff" },
    { name: "violet", class: "bg-neon-violet", hex: "#8a2be2" },
    { name: "lime", class: "bg-neon-lime", hex: "#32ff32" },
  ]

  const handleColorChange = (color: AccentColor) => {
    setCurrentAccent(color)
    document.documentElement.setAttribute("data-accent", color)
    setIsOpen(false)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-black/80 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white shadow-lg hover:shadow-neon-cyan/50 transition-shadow"
        aria-label="Change accent color"
      >
        <Palette className="w-6 h-6" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 bg-black/90 backdrop-blur-md border border-white/10 rounded-lg p-3 shadow-xl"
          >
            <div className="flex gap-2">
              {colors.map((color) => (
                <motion.button
                  key={color.name}
                  onClick={() => handleColorChange(color.name)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 rounded-full ${color.class} ${
                    currentAccent === color.name ? "ring-2 ring-white ring-offset-2 ring-offset-black" : ""
                  }`}
                  style={{
                    boxShadow: `0 0 20px ${color.hex}40`,
                  }}
                  aria-label={`Switch to ${color.name}`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
