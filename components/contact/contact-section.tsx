"use client"

import { motion } from "framer-motion"
import { NeonButton } from "@/components/neon-button"
import { Mail, Github, Linkedin, Twitter } from "lucide-react"

export function ContactSection() {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-neon-cyan glow-text-cyan">Let&apos;s Build</span>
            <br />
            <span className="text-neon-magenta glow-text-magenta">Something Amazing</span>
          </h2>

          <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            Have a project in mind? Want to collaborate on something innovative? I&apos;m always open to discussing new
            opportunities and ideas.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <NeonButton color="cyan" size="lg" onClick={() => (window.location.href = "mailto:sina@example.com")}>
              <Mail className="w-5 h-5" />
              Get In Touch
            </NeonButton>

            <NeonButton
              color="magenta"
              variant="outline"
              size="lg"
              onClick={() => window.open("https://github.com/sinaqasempour", "_blank")}
            >
              <Github className="w-5 h-5" />
              View GitHub
            </NeonButton>
          </div>

          <div className="flex gap-6 justify-center">
            <motion.a
              href="https://linkedin.com/in/sinaqasempour"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-400 hover:text-neon-violet transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>

            <motion.a
              href="https://twitter.com/sinaqasempour"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-400 hover:text-neon-lime transition-colors"
            >
              <Twitter className="w-6 h-6" />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-32 pt-8 border-t border-white/5 text-center text-gray-500 text-sm"
      >
        <p>© 2025 Sina Qasempour. Built with Next.js, React Three Fiber & Framer Motion.</p>
      </motion.div>
    </section>
  )
}
