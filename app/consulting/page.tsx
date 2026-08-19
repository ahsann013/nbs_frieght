import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import { Clock, ArrowRight, CheckCircle, CreditCard, ShieldCheck } from 'lucide-react'
import { ConsultationBookingForm } from '@/components/consulting/ConsultationBookingForm'
import { CONSULTATION_PLANS } from '@/lib/consulting'

export const metadata: Metadata = {
  title: 'Freight Consulting & Strategy Sessions | NBS Freight LLC',
  description:
    'One-on-one freight consulting sessions with Nic Spears. 23+ years of transportation experience available as a focused 30-min ($125) or 60-min ($250) strategy call for brokers, owner-operators, and logistics professionals.',
}

const topics = [
  'How to start a freight brokerage from scratch',
  'Transitioning from trucking into brokerage',
  'How to find and keep shipper relationships',
  'Understanding freight rates and margins',
  'What shippers actually want from a broker',
  'How to build carrier relationships the right way',
  'Managing problem loads and exceptions',
  'Career direction in transportation and logistics',
]

export default function ConsultingPage() {
  return (
    <main>
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-background">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/trucks-yard.png"
            alt="Commercial trucks in freight yard"
            fill
            priority
            className="object-cover opacity-15"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background to-background/60" />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-0.5 bg-primary" />
              <span className="text-xs font-bold tracking-widest uppercase text-primary">
                Freight Consulting
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-black text-foreground tracking-tight text-balance mb-6">
              23 years of transportation experience. Available in one conversation.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Whether you are new to freight brokerage, transitioning from trucking, or
              working through a specific business challenge — book a direct conversation
              with Nic and get grounded, honest guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 bg-surface border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-0.5 bg-primary" />
                <span className="text-xs font-bold tracking-widest uppercase text-primary">
                  Who This Is For
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-black text-foreground tracking-tight text-balance mb-6">
                Real guidance for people building real transportation careers.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Consulting is for freight brokers, owner-operators, small carriers, and
                logistics professionals who want direct input from someone who has been
                in the field — not a course creator or a coach who has never driven a
                truck or closed a shipper.
              </p>
              <ul className="space-y-3">
                {[
                  'New and aspiring freight brokers',
                  'Owner-operators exploring brokerage',
                  'Small transportation companies',
                  'Professionals transitioning into logistics',
                  'Carriers building direct shipper relationships',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle size={16} className="text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-surface-2 border border-border rounded-sm p-8">
              <div className="text-xs font-bold tracking-widest uppercase text-primary mb-4">
                Topics We Can Cover
              </div>
              <ul className="space-y-3">
                {topics.map((topic) => (
                  <li key={topic} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2" />
                    <span className="text-sm text-muted-foreground leading-relaxed">
                      {topic}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Session Options */}
      <section className="py-24 bg-background border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mb-14">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-0.5 bg-primary" />
              <span className="text-xs font-bold tracking-widest uppercase text-primary">
                Choose Your Session
              </span>
            </div>
            <h2 className="font-display text-4xl font-black text-foreground tracking-tight text-balance">
              Pick the session that fits your situation.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mb-16">
            {CONSULTATION_PLANS.map((session) => (
              <div
                key={session.title}
                className={`relative flex flex-col rounded-sm border p-10 ${
                  session.featured
                    ? 'bg-primary border-primary'
                    : 'bg-surface border-border hover:border-primary/50'
                } transition-all`}
              >
                {session.featured && (
                  <div className="absolute -top-3 left-8">
                    <span className="bg-foreground text-background text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full">
                      Most Comprehensive
                    </span>
                  </div>
                )}

                {/* Duration */}
                <div className="flex items-end gap-1 mb-6">
                  <Clock
                    size={20}
                    className={session.featured ? 'text-primary-foreground/70' : 'text-primary'}
                  />
                  <span
                    className={`font-display text-5xl font-black leading-none ${
                      session.featured ? 'text-primary-foreground' : 'text-foreground'
                    }`}
                  >
                    {session.duration}
                  </span>
                  <span
                    className={`text-sm font-medium mb-1 ${
                      session.featured
                        ? 'text-primary-foreground/70'
                        : 'text-muted-foreground'
                    }`}
                  >
                    {session.unit}
                  </span>
                </div>

                {/* Title & tagline */}
                <h3
                  className={`font-display text-2xl font-black mb-2 ${
                    session.featured ? 'text-primary-foreground' : 'text-foreground'
                  }`}
                >
                  {session.title}
                </h3>
                <p
                  className={`text-sm font-bold mb-4 ${
                    session.featured ? 'text-primary-foreground/80' : 'text-primary'
                  }`}
                >
                  {session.tagline}
                </p>

                {/* Price */}
                <div
                  className={`font-display text-4xl font-black mb-6 ${
                    session.featured ? 'text-primary-foreground' : 'text-foreground'
                  }`}
                >
                  {session.price}
                </div>

                {/* Description */}
                <p
                  className={`text-sm leading-relaxed mb-6 ${
                    session.featured
                      ? 'text-primary-foreground/80'
                      : 'text-muted-foreground'
                  }`}
                >
                  {session.description}
                </p>

                {/* Best for */}
                <ul className="space-y-2 mb-8 flex-1">
                  {session.bestFor.map((item) => (
                    <li
                      key={item}
                      className={`flex items-start gap-2 text-sm ${
                        session.featured
                          ? 'text-primary-foreground/80'
                          : 'text-muted-foreground'
                      }`}
                    >
                      <div
                        className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5 ${
                          session.featured ? 'bg-primary-foreground/60' : 'bg-primary'
                        }`}
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  asChild
                  className={`rounded-sm font-bold self-start gap-2 ${
                    session.featured
                      ? 'bg-primary-foreground text-primary hover:bg-primary-foreground/90'
                      : 'bg-primary hover:bg-red-hover text-primary-foreground'
                  }`}
                >
                  <a href="#booking-form">
                    Book {session.duration}-Minute Call ({session.price}) <ArrowRight size={16} />
                  </a>
                </Button>
              </div>
            ))}
          </div>

          {/* Direct Booking Form Section */}
          <div className="max-w-4xl">
            <ConsultationBookingForm />
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 bg-surface border border-border rounded-sm max-w-4xl">
            <div className="w-12 h-12 rounded-sm bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0 text-primary">
              <ShieldCheck size={24} />
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-bold text-foreground mb-1">
                How Consultation Scheduling &amp; Payment Works
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                1. Complete the intake form with your topic and availability. <br />
                2. You will be redirected to the secure PayPal invoice to complete payment, and receive an instant confirmation email. <br />
                3. Nic Spears will review your intake notes and confirm your dial-in link directly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
