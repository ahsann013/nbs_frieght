import type { Metadata } from 'next'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy | NBS Freight LLC',
  description: 'Privacy Policy for NBS Freight LLC.',
}

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground leading-relaxed">
            <p>
              NBS Freight LLC (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to
              protecting your privacy. This policy outlines how we collect, use,
              and safeguard information when you use our website.
            </p>
            <h2 className="font-display text-xl font-bold text-foreground mt-8">
              Information We Collect
            </h2>
            <p>
              We may collect contact information such as name, email address,
              phone number, and company name when you submit a quote request or
              contact form. We do not sell or share this information with third
              parties for marketing purposes.
            </p>
            <h2 className="font-display text-xl font-bold text-foreground mt-8">
              How We Use Your Information
            </h2>
            <p>
              Information submitted through our website is used solely to
              respond to your inquiry, provide freight services, or follow up
              on a consultation request.
            </p>
            <h2 className="font-display text-xl font-bold text-foreground mt-8">
              Contact
            </h2>
            <p>
              For any privacy-related questions, contact us at{' '}
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
