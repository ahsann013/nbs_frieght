import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Nic Spears | NBS Freight LLC',
  description:
    'Learn about Nic Spears — OTR truck driver, U.S. Air Force veteran, and founder of NBS Freight LLC with 23+ years of real transportation experience.',
}

const timeline = [
  {
    period: 'U.S. Air Force',
    title: 'Service Before Logistics',
    body: 'Before freight, there was service. The discipline, accountability, and mission-focus from the military became the foundation for how Nic runs NBS Freight today.',
  },
  {
    period: 'OTR Trucking',
    title: 'Learning from the Road',
    body: 'Nic did not learn transportation from a textbook. He learned it through miles — understanding pickups, deliveries, customers, dock operations, breakdowns, and deadlines from behind the wheel.',
  },
  {
    period: 'Freight Brokerage',
    title: 'Bridging Both Sides',
    body: 'Moving from the cab to the broker desk gave Nic a rare perspective. He understands what drivers deal with and what shippers expect — and how to manage the space between them.',
  },
  {
    period: 'NBS Freight LLC',
    title: 'Building Something Different',
    body: 'NBS Freight was built to be the brokerage Nic never had when he was driving. Transparent, communicative, accountable, and relationship-first from day one.',
  },
]

export default function AboutPage() {
  return (
    <main>
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-background overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/driver-cab.png"
            alt="View from a truck cab on the open road"
            fill
            priority
            className="object-cover opacity-15"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background to-background/50" />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-0.5 bg-primary" />
              <span className="text-xs font-bold tracking-widest uppercase text-primary">
                About Nic Spears
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-black text-foreground tracking-tight text-balance mb-6">
              I did not enter transportation through a spreadsheet.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              I learned it through miles, customers, breakdowns, deadlines,
              drivers, and real responsibility.
            </p>
          </div>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-24 bg-surface border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Portrait */}
            <div className="lg:col-span-4">
              <div className="relative aspect-[3/4] rounded-sm overflow-hidden sticky top-28">
                <Image
                  src="/images/nic-spears.png"
                  alt="Nic Spears, founder of NBS Freight LLC, at the Mid-America Trucking Show"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent p-6">
                  <div className="font-display text-xl font-black text-foreground">
                    Nic Spears
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Founder, NBS Freight LLC
                  </div>
                  <div className="flex gap-4 mt-2">
                    <span className="text-xs text-primary font-bold">OTR Driver</span>
                    <span className="text-xs text-steel">•</span>
                    <span className="text-xs text-primary font-bold">Air Force Veteran</span>
                    <span className="text-xs text-steel">•</span>
                    <span className="text-xs text-primary font-bold">23+ Years</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Story */}
            <div className="lg:col-span-8 space-y-8">
              <div>
                <p className="text-lg text-foreground leading-relaxed mb-5">
                  Most people who enter freight brokerage have never driven a truck. They
                  have never sat at a pickup dock at 3am waiting on a shipper to get the
                  paperwork right. They have never had to explain to a customer why their
                  freight is sitting at a truck stop because a tire went out.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  Nic has. More than once.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With 23+ years in transportation — starting as an OTR driver, shaped
                  by service in the U.S. Air Force, and refined through years of freight
                  brokerage — Nic built NBS Freight LLC around one simple belief: the
                  people and businesses that trust you with their freight deserve more
                  than a load number and a tracking link.
                </p>
              </div>

              <blockquote className="border-l-4 border-primary pl-6 py-4 bg-surface-2 rounded-r-sm">
                <p className="text-xl font-display font-bold text-foreground leading-snug italic mb-3">
                  &ldquo;I know what freight looks like from the truck, the broker&apos;s
                  desk, and the customer&apos;s side. That perspective changes how
                  you serve people.&rdquo;
                </p>
                <footer className="text-sm text-muted-foreground">
                  — Nic Spears
                </footer>
              </blockquote>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Why NBS Freight Exists
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Nic does not want to operate like every other broker. The freight
                  industry has too many middlemen who chase every load, promise anything
                  to win the business, and disappear when problems show up.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  NBS Freight is built differently — around long-term relationships,
                  honest communication, and the kind of accountability that only comes
                  from someone who has been on all three sides of the transaction.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Not every shipper is the right fit for NBS Freight. And that is by design.
                  Nic would rather earn the right relationship than chase every opportunity.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  What Nic Believes
                </h2>
                <ul className="space-y-3">
                  {[
                    'Trust is built through consistency, not promises.',
                    'Communication is not a feature. It is the job.',
                    'The right carrier matters more than the cheapest carrier.',
                    'Drivers deserve respect. That respect shows up in how freight is handled.',
                    'Long-term relationships are worth more than short-term volume.',
                    'Shippers deserve a partner who actually understands transportation.',
                  ].map((belief) => (
                    <li key={belief} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2" />
                      <span className="text-muted-foreground leading-relaxed">{belief}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                asChild
                className="bg-primary hover:bg-red-hover text-primary-foreground font-bold rounded-sm gap-2"
              >
                <Link href="/contact">
                  Talk With Nic <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-background border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mb-14">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-0.5 bg-primary" />
              <span className="text-xs font-bold tracking-widest uppercase text-primary">
                The Journey
              </span>
            </div>
            <h2 className="font-display text-4xl font-black text-foreground tracking-tight text-balance">
              Built through real experience.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {timeline.map((item, i) => (
              <div key={item.period} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                    <span className="font-display text-sm font-black text-primary">{i + 1}</span>
                  </div>
                  {i < timeline.length - 1 && (
                    <div className="hidden md:block w-px flex-1 bg-border mt-3" />
                  )}
                </div>
                <div className="pb-8">
                  <div className="text-xs font-bold tracking-widest uppercase text-primary mb-2">
                    {item.period}
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
