"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useEffect } from "react"

interface GalleryLightboxProps {
  images: Array<{ src: string; alt: string; caption?: string }>
  currentIndex: number
  onClose: () => void
  onNext: () => void
  onPrev: () => void
}

export function GalleryLightbox({ images, currentIndex, onClose, onNext, onPrev }: GalleryLightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft") onPrev()
      if (e.key === "ArrowRight") onNext()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [onClose, onNext, onPrev])

  const currentImage = images[currentIndex]

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-background/98 backdrop-blur-2xl"
        />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full glass border border-neon-cyan/50 flex items-center justify-center hover:bg-neon-cyan/20 transition-colors"
        >
          <X className="w-6 h-6 text-neon-cyan" />
        </button>

        {/* Navigation */}
        <button
          onClick={onPrev}
          className="absolute left-4 z-10 w-12 h-12 rounded-full glass border border-neon-magenta/50 flex items-center justify-center hover:bg-neon-magenta/20 transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-neon-magenta" />
        </button>

        <button
          onClick={onNext}
          className="absolute right-4 z-10 w-12 h-12 rounded-full glass border border-neon-magenta/50 flex items-center justify-center hover:bg-neon-magenta/20 transition-colors"
        >
          <ChevronRight className="w-6 h-6 text-neon-magenta" />
        </button>

        {/* Image */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative max-w-7xl max-h-[85vh] w-full mx-4"
        >
          <div className="relative w-full h-full">
            <Image
              src={currentImage.src || "/placeholder.svg"}
              alt={currentImage.alt}
              width={1920}
              height={1080}
              className="w-full h-full object-contain rounded-xl shadow-[0_0_60px_rgba(0,240,255,0.3)]"
            />
          </div>

          {/* Caption */}
          {currentImage.caption && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="absolute bottom-0 left-0 right-0 p-6 glass rounded-b-xl border-t border-neon-cyan/30"
            >
              <p className="text-center text-foreground">{currentImage.caption}</p>
              <p className="text-center text-sm text-muted-foreground mt-1">
                {currentIndex + 1} / {images.length}
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
