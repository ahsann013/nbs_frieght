import type { Metadata } from 'next'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Terms & Conditions | NBS Freight LLC',
  description: 'Terms and Conditions for NBS Freight LLC.',
}

export default function TermsPage() {
  return (
    <main>
      <Navigation />
      <section className="pt-32 pb-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-0.5 bg-primary" />
            <span className="text-xs font-bold tracking-widest uppercase text-primary">
              Legal
            </span>
          </div>
          <h1 className="font-display text-4xl font-black text-foreground mb-8">
            Terms &amp; Conditions
          </h1>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              By accessing the NBS Freight LLC website, you agree to the following
              terms. This website is provided for informational purposes and to
              facilitate freight service inquiries.
            </p>
            <h2 className="font-display text-xl font-bold text-foreground mt-8">
              Service Requests
            </h2>
            <p>
              Submitting a quote request through this website does not constitute
              a binding agreement. All freight services are subject to a separate
              written agreement between NBS Freight LLC and the client.
            </p>
            <h2 className="font-display text-xl font-bold text-foreground mt-8">
              Consulting Sessions
            </h2>
            <p>
              Consulting sessions are non-refundable once scheduled. If you need
              to reschedule, please contact us at least 24 hours in advance.
            </p>
            <h2 className="font-display text-xl font-bold text-foreground mt-8">
              Limitation of Liability
            </h2>
            <p>
              NBS Freight LLC is not liable for any damages arising from the use
              of this website or reliance on any information contained herein.
            </p>
            <h2 className="font-display text-xl font-bold text-foreground mt-8">
              Contact
            </h2>
            <p>
              For any questions regarding these terms, contact us at{' '}
              <a
                href="mailto:nspears@nbsfreightllc.com"
                className="text-primary hover:underline"
              >
                nspears@nbsfreightllc.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
