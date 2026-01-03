"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Download } from "lucide-react"
import { NeonButton } from "@/components/neon-button"
import { NeonRing3D } from "./neon-ring-3d"
import { RotatingChips } from "./rotating-chips"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Name - Giant stacked typography */}
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-6xl md:text-7xl lg:text-8xl font-bold font-mono uppercase leading-none"
              >
                <span className="block text-neon-cyan text-glow-cyan">SINA</span>
                <span className="block text-neon-magenta text-glow-magenta">QASEMPOUR</span>
              </motion.h1>
            </div>

            {/* Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-3"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">AI Engineer & Creative Developer</h2>
              <p className="text-lg text-muted-foreground max-w-xl">
                Building intelligent systems and experimental interfaces at the intersection of AI and creative
                technology
              </p>
            </motion.div>

            {/* Rotating tech chips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <RotatingChips />
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <NeonButton
                variant="cyan"
                size="lg"
                className="group"
                onClick={() => window.open("https://github.com/SinaQP", "_blank", "noopener,noreferrer")}
              >
                <Github className="w-5 h-5 mr-2 inline-block group-hover:rotate-12 transition-transform" />
                GitHub
              </NeonButton>
              <NeonButton variant="magenta" size="lg" className="group">
                <Linkedin className="w-5 h-5 mr-2 inline-block group-hover:scale-110 transition-transform" />
                LinkedIn
              </NeonButton>
              <NeonButton variant="violet" size="lg" className="group">
                <Mail className="w-5 h-5 mr-2 inline-block group-hover:scale-110 transition-transform" />
                Contact
              </NeonButton>
              <NeonButton variant="lime" size="lg" className="group">
                <Download className="w-5 h-5 mr-2 inline-block group-hover:translate-y-1 transition-transform" />
                Resume
              </NeonButton>
            </motion.div>
          </motion.div>

          {/* Right: 3D Portrait with Neon Ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-[600px] mx-auto">
              {/* 3D Neon Ring */}
              <div className="absolute inset-0 z-0">
                <NeonRing3D />
              </div>

              {/* Portrait */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="relative w-[19.2rem] h-[19.2rem] md:w-[24rem] md:h-[24rem]"
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-neon-cyan/20 via-neon-violet/20 to-neon-magenta/20 blur-2xl" />
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-neon-cyan/50 shadow-[0_0_40px_rgba(0,240,255,0.5)]">
                    <Image
                      src="/profile-picture.png"
                      alt="Profile picture"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          className="w-6 h-10 border-2 border-neon-cyan/50 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            className="w-1.5 h-1.5 bg-neon-cyan rounded-full shadow-[0_0_10px_rgba(0,240,255,0.8)]"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
