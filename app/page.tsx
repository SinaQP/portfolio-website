import { CursorTrail } from "@/components/cursor-trail"
import { ScrollProgress } from "@/components/scroll-progress"
import { HeroSection } from "@/components/hero/hero-section"
import { ProjectsSection } from "@/components/projects/projects-section"
import { FutureGadgetLabSection } from "@/components/future-gadget-lab/lab-section"
import { GallerySection } from "@/components/gallery/gallery-section"
import { CertificatesSection } from "@/components/certificates/certificates-section"
import { TechStackSection } from "@/components/tech-stack/tech-stack-section"
import { StatsSection } from "@/components/stats/stats-section"
import { ContactSection } from "@/components/contact/contact-section"
import { AccentSwitcher } from "@/components/accent-switcher"

export default function Home() {
  return (
    <>
      <CursorTrail />
      <ScrollProgress />
      <AccentSwitcher />
      <main className="min-h-screen">
        <HeroSection />

        {/* Vision Banner */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/10 via-neon-violet/10 to-neon-magenta/10" />
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-balance">
              <span className="text-neon-cyan">Building</span>{" "}
              <span className="text-neon-magenta">intelligent systems</span>{" "}
              <span className="text-neon-violet">that augment</span>{" "}
              <span className="text-neon-lime">human creativity</span>
            </h2>
          </div>
        </section>

        <ProjectsSection />
        <FutureGadgetLabSection />
        <GallerySection />
        <CertificatesSection />

        <TechStackSection />
        <StatsSection />
        <ContactSection />
      </main>
    </>
  )
}
