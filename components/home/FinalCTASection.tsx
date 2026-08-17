import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Phone, Mail } from 'lucide-react'

export function FinalCTASection() {
  return (
    <section className="py-24 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-0.5 bg-primary" />
            <span className="text-xs font-bold tracking-widest uppercase text-primary">
              Ready to Work Together?
            </span>
            <div className="w-8 h-0.5 bg-primary" />
          </div>

          {/* Headline */}
          <h2 className="font-display text-4xl md:text-6xl font-black text-foreground tracking-tight text-balance mb-6">
            Need a freight partner who actually communicates?
          </h2>

          {/* Supporting copy */}
          <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto">
            Tell us what you are moving, where it is going, and what matters most.
            Nic will personally review the opportunity and let you know whether
            NBS Freight is the right fit.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-red-hover text-primary-foreground font-bold text-base px-10 py-6 rounded-sm"
            >
              <Link href="/contact">Request a Quote</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-foreground/30 text-foreground hover:bg-foreground/5 font-medium text-base px-10 py-6 rounded-sm"
            >
              <Link href="/contact#schedule">Schedule a Conversation</Link>
            </Button>
          </div>

          {/* Contact info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <a
              href="tel:7147774275"
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
            >
              <div className="w-10 h-10 rounded-sm bg-surface border border-border flex items-center justify-center group-hover:border-primary transition-colors">
                <Phone size={18} className="text-primary" />
              </div>
              <div className="text-left">
                <div className="text-xs text-steel tracking-wide">Call directly</div>
                <div className="text-sm font-medium">(714) 777-4275</div>
              </div>
            </a>

            <div className="w-px h-8 bg-border hidden sm:block" />

            <a
              href="mailto:nspears@nbsfreightllc.com"
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
            >
              <div className="w-10 h-10 rounded-sm bg-surface border border-border flex items-center justify-center group-hover:border-primary transition-colors">
                <Mail size={18} className="text-primary" />
              </div>
              <div className="text-left">
                <div className="text-xs text-steel tracking-wide">Email directly</div>
                <div className="text-sm font-medium">nspears@nbsfreightllc.com</div>
              </div>
            </a>
          </div>

          {/* Reg numbers */}
          <div className="flex items-center justify-center gap-6 mt-10 pt-10 border-t border-border">
            <span className="text-xs text-steel tracking-wide">MC#1356267</span>
            <div className="w-px h-4 bg-border" />
            <span className="text-xs text-steel tracking-wide">DOT#3784905</span>
            <div className="w-px h-4 bg-border" />
            <span className="text-xs text-steel tracking-wide">Veteran-Owned</span>
          </div>
        </div>
      </div>
    </section>
  )
}
