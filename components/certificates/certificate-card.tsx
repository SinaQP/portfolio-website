"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Award } from "lucide-react"
import { NeonChip } from "@/components/neon-chip"

interface CertificateCardProps {
  title: string
  issuer: string
  date: string
  image: string
  credentialId?: string
  onClick: () => void
}

export function CertificateCard({ title, issuer, date, image, onClick }: CertificateCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onClick={onClick}
      className="flex-shrink-0 w-80 cursor-pointer group"
    >
      <div className="glass rounded-xl border border-neon-violet/30 overflow-hidden hover:shadow-[0_0_40px_rgba(184,79,255,0.4)] transition-all duration-300">
        {/* Certificate Image */}
        <div className="relative aspect-[4/3] overflow-hidden bg-muted/20">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />

          {/* Award icon */}
          <div className="absolute top-4 right-4 w-10 h-10 rounded-full glass border border-neon-violet/50 flex items-center justify-center">
            <Award className="w-5 h-5 text-neon-violet" />
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-3">
          <h3 className="text-lg font-bold font-mono text-foreground group-hover:text-neon-violet transition-colors line-clamp-2">
            {title}
          </h3>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">{issuer}</p>
            <NeonChip variant="violet" animated={false}>
              {date}
            </NeonChip>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
