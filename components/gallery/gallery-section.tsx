"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { SectionHeader } from "@/components/section-header"
import { GalleryLightbox } from "./gallery-lightbox"

const galleryImages = [
  {
    src: "/conference-presentation-tech-talk.jpg",
    alt: "Conference presentation",
    caption: "Speaking at AI Conference 2024",
    span: "col-span-2 row-span-2",
  },
  {
    src: "/workspace-setup-coding-environment.jpg",
    alt: "Workspace setup",
    caption: "My creative workspace",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/team-collaboration-hackathon.jpg",
    alt: "Team collaboration",
    caption: "Hackathon with the team",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/robot-prototype-lab-testing.jpg",
    alt: "Robot prototype",
    caption: "Testing new robot prototype",
    span: "col-span-1 row-span-2",
  },
  {
    src: "/neural-network-visualization-screen.jpg",
    alt: "Neural network visualization",
    caption: "Real-time neural network training",
    span: "col-span-2 row-span-1",
  },
  {
    src: "/award-ceremony-recognition.jpg",
    alt: "Award ceremony",
    caption: "Innovation Award 2024",
    span: "col-span-1 row-span-1",
  },
]

export function GallerySection() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <SectionHeader title="Gallery" subtitle="Moments from my journey" glowColor="lime" />

        {/* Quilt Layout Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] gap-4"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              onClick={() => openLightbox(index)}
              className={`relative overflow-hidden rounded-xl cursor-pointer group ${image.span}`}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Caption on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-sm font-medium text-foreground">{image.caption}</p>
              </div>

              {/* Neon border on hover */}
              <div className="absolute inset-0 border-2 border-neon-lime/0 group-hover:border-neon-lime/50 rounded-xl transition-colors duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <GalleryLightbox
          images={galleryImages}
          currentIndex={currentImageIndex}
          onClose={() => setLightboxOpen(false)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </section>
  )
}
