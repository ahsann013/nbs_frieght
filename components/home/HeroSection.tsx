import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Shield, Clock, Truck, Users } from 'lucide-react'

const trustIndicators = [
  { icon: Clock, label: '23+ Years in Transportation' },
  { icon: Shield, label: 'Veteran-Owned' },
  { icon: Truck, label: 'Former OTR Driver' },
  { icon: Users, label: 'Relationship-First Service' },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-truck.png"
          alt="Commercial freight truck on the highway"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-0.5 bg-primary" />
            <span className="text-xs font-bold tracking-widest uppercase text-primary">
              NBS Freight LLC — Columbus, OH
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-foreground leading-[1.0] tracking-tight mb-6 text-balance">
            Freight Brokerage Built on Experience,
            <br />
            <span className="text-primary">Communication,</span> and Trust.
          </h1>

          {/* Supporting copy */}
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            NBS Freight helps shippers move freight with reliable carriers, clear communication,
            and hands-on coordination backed by more than 23 years in transportation.
            Not theory. Real road experience.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-red-hover text-primary-foreground font-bold text-base px-8 py-6 rounded-sm"
            >
              <Link href="/contact">Request a Freight Quote</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-foreground/30 text-foreground hover:bg-foreground/5 font-medium text-base px-8 py-6 rounded-sm"
            >
              <Link href="/about">Talk With Nic</Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap gap-6">
            {trustIndicators.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2">
                <Icon size={16} className="text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{label}</span>
              </div>
            ))}
          </div>

          {/* Reg numbers */}
          <div className="flex gap-6 mt-4">
            <span className="text-xs text-steel tracking-wide">MC#1356267</span>
            <span className="text-xs text-steel tracking-wide">DOT#3784905</span>
          </div>
        </div>
      </div>
    </section>
  )
}
