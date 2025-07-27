import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { CoursesSection } from "@/components/courses-section"
import { StatsSection } from "@/components/stats-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { LeadForm } from "@/components/lead-form"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <CoursesSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
      <LeadForm />
    </main>
  )
}
