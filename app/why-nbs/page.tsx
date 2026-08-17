import type { Metadata } from 'next'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Why NBS Freight | Nothing. But. Satisfaction.',
  description:
    'Nothing. But. Satisfaction. — the principles behind NBS Freight LLC. Learn why transparent communication, accountability, and relationship-first service define everything we do.',
}

const principles = [
  {
    letter: 'N',
    word: 'Nothing',
    tagline: 'Nothing hidden.',
    headline: 'Transparent communication and realistic expectations.',
    body: [
      'Before the load is booked, you know the rate, the carrier, and the plan. After the load is booked, you hear from us — not because something went wrong, but because communication is part of the job.',
      'There are no surprise fees. No fine print that changes the story after you sign. No brokers who become unreachable once the truck rolls.',
      'If a problem comes up — and sometimes they do — you hear about it immediately with a plan, not an excuse.',
    ],
  },
  {
    letter: 'B',
    word: 'But',
    tagline: 'Nothing careless.',
    headline: 'Freight handled with attention, follow-through, and accountability.',
    body: [
      'Every load is treated like it matters, because it does. We do not book a truck and move on. We follow the load from origin to delivery.',
      'Carrier selection is not accidental. We work with carriers we trust — not whoever has an available truck at the lowest rate. Quality carriers protect your freight and your relationships.',
      'When something needs attention, it gets attention. There is no hand-off to someone else. Nic is involved.',
    ],
  },
  {
    letter: 'S',
    word: 'Satisfaction',
    tagline: 'Nothing transactional. But satisfaction.',
    headline: 'Relationships matter beyond one shipment.',
    body: [
      'The goal is not just to move freight. The goal is for you to have complete confidence in the process — and in the person managing it.',
      'That means doing the job well enough that you do not have to think about it. Your freight moves. Your customers are happy. Your operation runs without the stress that comes from a freight partner who cannot execute.',
      'NBS Freight operates on a win-shipper, win-carrier, win-broker model. Satisfaction is not a tagline. It is the standard.',
    ],
  },
]

export default function WhyNBSPage() {
  return (
    <main>
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-0.5 bg-primary" />
              <span className="text-xs font-bold tracking-widest uppercase text-primary">
                Why NBS Freight
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-black text-foreground tracking-tight leading-none mb-6">
              Nothing.{' '}
              <span className="text-primary">But.</span>{' '}
              Satisfaction.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Three words. One standard. The name is not marketing — it is a
              commitment to every shipper, carrier, and client who works with us.
            </p>
          </div>
        </div>
      </section>

      {/* Principles */}
      {principles.map((principle, index) => (
        <section
          key={principle.word}
          className={`py-24 border-t border-border ${
            index % 2 === 0 ? 'bg-surface' : 'bg-background'
          }`}
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Large letter */}
              <div className="lg:col-span-2 flex items-start">
                <div className="font-display text-[120px] md:text-[160px] font-black text-primary/10 leading-none select-none">
                  {principle.letter}
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-10">
                <div className="text-xs font-bold tracking-widest uppercase text-primary mb-3">
                  {principle.tagline}
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-black text-foreground tracking-tight text-balance mb-8">
                  {principle.headline}
                </h2>
                <div className="max-w-3xl space-y-5">
                  {principle.body.map((para) => (
                    <p key={para} className="text-muted-foreground leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* The Commitment */}
      <section className="py-24 bg-primary border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl font-black text-primary-foreground tracking-tight text-balance mb-6">
              The right relationship matters more than the next load.
            </h2>
            <p className="text-lg text-primary-foreground/80 leading-relaxed mb-10 max-w-2xl mx-auto">
              NBS Freight does not chase every opportunity. We earn the right ones —
              and we keep them by delivering what we committed to, every single time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-bold rounded-sm gap-2"
              >
                <Link href="/contact">
                  Request a Quote <ArrowRight size={16} />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 font-medium rounded-sm"
              >
                <Link href="/about">Meet Nic</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
