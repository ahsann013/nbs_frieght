import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import { CheckCircle, ArrowRight } from 'lucide-react'
import { ContactQuoteForm } from '@/components/contact/ContactQuoteForm'

export const metadata: Metadata = {
  title: 'Shipper Services | NBS Freight LLC',
  description:
    'Full truckload freight brokerage services for shippers. Dry van, reefer, flatbed, dedicated lanes, and spot freight — backed by 23+ years of transportation experience.',
}

const equipmentTypes = [
  { name: 'Dry Van', desc: 'Standard enclosed trailers for general freight' },
  { name: 'Reefer', desc: 'Temperature-controlled loads requiring refrigeration' },
  { name: 'Flatbed', desc: 'Open deck freight including machinery and building materials' },
  { name: 'Dedicated Lanes', desc: 'Consistent carrier relationships for repeat routes' },
  { name: 'Spot Freight', desc: 'One-time loads with same attention as recurring freight' },
  { name: 'Recurring Shipments', desc: 'Ongoing freight programs with volume planning' },
]

const outcomes = [
  'Less time chasing updates — we call you first',
  'Better communication throughout the load',
  'Dependable execution from a vetted carrier network',
  'More confidence in your transportation process',
  'One consistent point of contact on every shipment',
  'Honest pricing without surprise fees',
]

export default function ServicesPage() {
  return (
    <main>
      <Navigation />

      {/* Page Hero */}
      <section className="relative pt-32 pb-20 bg-background">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/loading-dock.png"
            alt="Freight loading dock operations"
            fill
            priority
            className="object-cover opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-0.5 bg-primary" />
              <span className="text-xs font-bold tracking-widest uppercase text-primary">
                Shipper Services
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-black text-foreground tracking-tight text-balance mb-6">
              Freight moved right. Not just moved fast.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              NBS Freight coordinates full truckload shipments for shippers who are done chasing
              updates and working with brokers who disappear after booking. We handle the
              coordination. You handle your business.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-red-hover text-primary-foreground font-bold rounded-sm"
            >
              <Link href="#quote">Request a Freight Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Equipment & Service Types */}
      <section className="py-24 bg-surface border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mb-12">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-0.5 bg-primary" />
              <span className="text-xs font-bold tracking-widest uppercase text-primary">
                What We Move
              </span>
            </div>
            <h2 className="font-display text-4xl font-black text-foreground tracking-tight text-balance">
              Equipment types and freight programs.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipmentTypes.map((eq) => (
              <div
                key={eq.name}
                className="bg-surface-2 border border-border rounded-sm p-6 hover:border-primary/40 transition-colors"
              >
                <div className="w-2 h-2 bg-primary rounded-full mb-4" />
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {eq.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{eq.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-24 bg-background border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-0.5 bg-primary" />
                <span className="text-xs font-bold tracking-widest uppercase text-primary">
                  What You Get
                </span>
              </div>
              <h2 className="font-display text-4xl font-black text-foreground tracking-tight text-balance mb-8">
                The outcome you actually need from a freight partner.
              </h2>
              <ul className="space-y-4">
                {outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground leading-relaxed">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
              <Image
                src="/images/warehouse.png"
                alt="Warehouse freight operations"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section id="quote" className="py-24 bg-surface border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-5">
                <div className="w-8 h-0.5 bg-primary" />
                <span className="text-xs font-bold tracking-widest uppercase text-primary">
                  Get Started
                </span>
                <div className="w-8 h-0.5 bg-primary" />
              </div>
              <h2 className="font-display text-4xl font-black text-foreground tracking-tight text-balance mb-4">
                Request a Freight Quote
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Fill out the form below. Nic personally reviews every inquiry
                and will follow up directly.
              </p>
            </div>

            <ContactQuoteForm variant="services" />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
