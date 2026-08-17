import Link from 'next/link'
import { Linkedin, Youtube, Instagram, Mail, Phone } from 'lucide-react'

const quickLinks = [
  { href: '/services', label: 'Shipper Services' },
  { href: '/why-nbs', label: 'Why NBS' },
  { href: '/about', label: 'About Nic' },
  { href: '/insights', label: 'Insights' },
  { href: '/consulting', label: 'Consulting' },
  { href: '/contact', label: 'Request a Quote' },
]

const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/nic-spears-0baa02221/',
    label: 'LinkedIn',
    icon: Linkedin,
  },
  {
    href: 'https://www.youtube.com/watch?v=PzXEPlsGznE',
    label: 'YouTube',
    icon: Youtube,
  },
  {
    href: 'https://instagram.com',
    label: 'Instagram',
    icon: Instagram,
  },
]

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      {/* Red top accent */}
      <div className="h-1 bg-primary w-full" />

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 mb-5 group">
              <div className="w-10 h-10 bg-primary rounded-sm flex items-center justify-center flex-shrink-0">
                <span className="font-display text-base font-black text-primary-foreground leading-none">
                  NBS
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-lg font-black tracking-tight text-foreground leading-none">
                  NBS FREIGHT
                </span>
                <span className="text-[9px] tracking-widest text-steel uppercase leading-tight">
                  Nothing. But. Satisfaction.
                </span>
              </div>
            </Link>

            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              Veteran-owned freight brokerage built on 23+ years of real
              transportation experience. Direct communication, reliable
              carriers, and relationships that last.
            </p>

            <div className="space-y-1">
              <div className="text-xs text-steel tracking-wide">MC#1356267</div>
              <div className="text-xs text-steel tracking-wide">DOT#3784905</div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-foreground mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-foreground mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:6147724729"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <Phone size={15} className="text-primary flex-shrink-0" />
                  (614) 772-4729
                </a>
              </li>
              <li>
                <a
                  href="mailto:nspears@nbsfreightllc.com"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <Mail size={15} className="text-primary flex-shrink-0" />
                  nspears@nbsfreightllc.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social & CTA */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-foreground mb-5">
              Follow NBS Freight
            </h4>
            <div className="flex gap-2 mb-6">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-surface-2 border border-border rounded-sm text-muted-foreground hover:text-primary hover:border-primary transition-all"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary hover:bg-red-hover text-primary-foreground text-sm font-bold px-5 py-3 rounded-sm transition-colors"
            >
              Request a Quote
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} NBS Freight LLC. All rights reserved.
            Veteran-Owned Business.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
