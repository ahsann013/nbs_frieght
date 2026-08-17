import type { Metadata } from 'next'
import Link from 'next/link'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import { Phone, Mail, Linkedin, Youtube, ArrowRight } from 'lucide-react'
import { ContactQuoteForm } from '@/components/contact/ContactQuoteForm'

export const metadata: Metadata = {
  title: 'Contact & Request a Quote | NBS Freight LLC',
  description:
    'Request a freight quote or schedule a conversation with Nic Spears. NBS Freight LLC — veteran-owned freight brokerage serving shippers across the US.',
}

export default function ContactPage() {
  return (
    <main>
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-0.5 bg-primary" />
              <span className="text-xs font-bold tracking-widest uppercase text-primary">
                Get in Touch
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-black text-foreground tracking-tight text-balance mb-6">
              Need a freight partner who actually communicates?
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Tell us what you are moving, where it is going, and what matters most.
              Nic will personally review every inquiry and respond directly.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-24 bg-background border-t border-border">
        <div className="container mx-auto px-4 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Form — spans 2 cols */}
            <div id="quote" className="lg:col-span-2">
              <h2 className="font-display text-3xl font-black text-foreground mb-2">
                Request a Freight Quote
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below. Nic personally reviews every submission.
              </p>

              <ContactQuoteForm variant="contact" />
            </div>

            {/* Sidebar */}
            <div className="flex flex-col gap-8">
              {/* Direct contact */}
              <div className="bg-surface border border-border rounded-sm p-8">
                <h3 className="font-display text-xl font-bold text-foreground mb-6">
                  Reach Out Directly
                </h3>
                <div className="flex flex-col gap-5">
                  <a
                    href="tel:7147774275"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-sm bg-surface-2 border border-border flex items-center justify-center flex-shrink-0 group-hover:border-primary transition-colors">
                      <Phone size={18} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-steel uppercase tracking-wide mb-1">
                        Phone
                      </div>
                      <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        (714) 777-4275
                      </div>
                    </div>
                  </a>
                  <a
                    href="mailto:nspears@nbsfreightllc.com"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-sm bg-surface-2 border border-border flex items-center justify-center flex-shrink-0 group-hover:border-primary transition-colors">
                      <Mail size={18} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-steel uppercase tracking-wide mb-1">
                        Email
                      </div>
                      <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors break-all">
                        nspears@nbsfreightllc.com
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/nic-spears-0baa02221/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-sm bg-surface-2 border border-border flex items-center justify-center flex-shrink-0 group-hover:border-primary transition-colors">
                      <Linkedin size={18} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-steel uppercase tracking-wide mb-1">
                        LinkedIn
                      </div>
                      <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        Connect with Nic
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=PzXEPlsGznE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-sm bg-surface-2 border border-border flex items-center justify-center flex-shrink-0 group-hover:border-primary transition-colors">
                      <Youtube size={18} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-steel uppercase tracking-wide mb-1">
                        YouTube
                      </div>
                      <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        NBS Freight Channel
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Credentials */}
              <div className="bg-surface border border-border rounded-sm p-8">
                <h3 className="font-display text-sm font-bold uppercase tracking-widest text-primary mb-4">
                  Credentials
                </h3>
                <div className="space-y-3">
                  {[
                    ['MC Number', 'MC#1356267'],
                    ['DOT Number', 'DOT#3784905'],
                    ['Business', 'NBS Freight LLC'],
                    ['Status', 'Veteran-Owned'],
                  ].map(([label, value]) => (
                    <div key={label} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                      <span className="text-xs text-steel">{label}</span>
                      <span className="text-sm font-medium text-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Schedule CTA */}
              <div id="schedule" className="bg-primary rounded-sm p-8">
                <h3 className="font-display text-xl font-black text-primary-foreground mb-3">
                  Want to talk first?
                </h3>
                <p className="text-sm text-primary-foreground/80 leading-relaxed mb-5">
                  Schedule a short conversation with Nic before committing to anything.
                </p>
                <Button
                  asChild
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-bold rounded-sm w-full"
                >
                  <Link href="mailto:nspears@nbsfreightllc.com?subject=Schedule a Conversation">
                    Schedule a Conversation
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
