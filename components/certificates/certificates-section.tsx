"use client"

import { useRef, useState } from "react"
import { useAnimationFrame } from "framer-motion"
import { SectionHeader } from "@/components/section-header"
import { CertificateCard } from "./certificate-card"
import { certificates, type Certificate } from "@/data/certificates"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import Image from "next/image"
import { NeonChip } from "@/components/neon-chip"
import { Award, ExternalLink } from "lucide-react"
import { NeonButton } from "@/components/neon-button"
import { EmptyPlaceholder } from "@/components/empty-placeholder"

export function CertificatesSection() {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null)
  const [isPaused, setIsPaused] = useState(false)
  const scrollRef = useRef(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const hasCertificates = certificates.length > 0

  // Auto-scroll animation
  useAnimationFrame((time, delta) => {
    if (!hasCertificates || isPaused || !containerRef.current) {
      return
    }

    scrollRef.current += delta * 0.05
    containerRef.current.scrollLeft = scrollRef.current

    // Reset scroll when reaching end
    if (scrollRef.current >= containerRef.current.scrollWidth / 2) {
      scrollRef.current = 0
    }
  })

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Certificates & Awards"
          subtitle="Professional certifications and recognitions"
          glowColor="violet"
        />

        {/* Scrolling Marquee */}
        {!hasCertificates && (
          <EmptyPlaceholder
            title="Certificates coming soon"
            description="Credentials and awards will be listed here once published."
            icon={Award}
            variant="violet"
            className="max-w-3xl"
          />
        )}
        {hasCertificates && (
          <div className="relative" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
            <div
              ref={containerRef}
              className="flex gap-6 overflow-x-hidden pb-4"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {/* Duplicate certificates for seamless loop */}
              {[...certificates, ...certificates].map((cert, index) => (
                <CertificateCard
                  key={`${cert.id}-${index}`}
                  title={cert.title}
                  issuer={cert.issuer}
                  date={cert.date}
                  image={cert.image}
                  credentialId={cert.credentialId}
                  onClick={() => setSelectedCertificate(cert)}
                />
              ))}
            </div>

            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none" />
          </div>
        )}
      </div>

      {/* Certificate Modal */}
      {hasCertificates && (
        <Dialog open={!!selectedCertificate} onOpenChange={() => setSelectedCertificate(null)}>
          <DialogContent className="max-w-3xl glass border-neon-violet/30">
            {selectedCertificate && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold font-mono text-neon-violet">
                    {selectedCertificate.title}
                  </DialogTitle>
                </DialogHeader>

                <div className="space-y-6">
                  {/* Certificate Image */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                    <Image
                      src={selectedCertificate.image || "/placeholder.svg"}
                      alt={selectedCertificate.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                        Issuer
                      </h4>
                      <p className="text-lg text-foreground">{selectedCertificate.issuer}</p>
                    </div>

                    <div className="flex items-center gap-4">
                      <div>
                        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                          Date
                        </h4>
                        <NeonChip variant="violet">{selectedCertificate.date}</NeonChip>
                      </div>

                      {selectedCertificate.credentialId && (
                        <div>
                          <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                            Credential ID
                          </h4>
                          <p className="text-sm font-mono text-muted-foreground">{selectedCertificate.credentialId}</p>
                        </div>
                      )}
                    </div>

                    {selectedCertificate.description && (
                      <div>
                        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                          Description
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">{selectedCertificate.description}</p>
                      </div>
                    )}

                    {selectedCertificate.skills && (
                      <div>
                        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                          Skills
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedCertificate.skills.map((skill, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 rounded-md bg-muted/50 text-sm text-muted-foreground"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {selectedCertificate.verifyUrl && (
                      <NeonButton variant="violet" className="w-full">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Verify Certificate
                      </NeonButton>
                    )}
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      )}
    </section>
  )
}
