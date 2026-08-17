import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/home/HeroSection'
import { DifferenceSection } from '@/components/home/DifferenceSection'
import { ProblemSection } from '@/components/home/ProblemSection'
import { ServicesSection } from '@/components/home/ServicesSection'
import { AboutSection } from '@/components/home/AboutSection'
import { ProcessSection } from '@/components/home/ProcessSection'
import { TestimonialsSection } from '@/components/home/TestimonialsSection'
import { ContentSection } from '@/components/home/ContentSection'
import { FinalCTASection } from '@/components/home/FinalCTASection'

export default function HomePage() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <DifferenceSection />
      <ProblemSection />
      <ServicesSection />
      <AboutSection />
      <ProcessSection />
      <TestimonialsSection />
      <ContentSection />
      <FinalCTASection />
      <Footer />
    </main>
  )
}
