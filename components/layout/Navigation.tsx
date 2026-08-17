'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Menu, X, Shield } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/why-nbs', label: 'Why NBS' },
  { href: '/about', label: 'About Nic' },
  { href: '/insights', label: 'Insights' },
  { href: '/consulting', label: 'Consulting' },
  { href: '/contact', label: 'Contact' },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-background/95 backdrop-blur-sm border-b border-border'
            : 'bg-gradient-to-b from-background/80 to-transparent'
        )}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
              <div className="w-10 h-10 bg-primary rounded-sm flex items-center justify-center">
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

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-0">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'relative px-4 py-2 text-sm font-medium transition-colors',
                      isActive
                        ? 'text-foreground'
                        : 'text-foreground/60 hover:text-foreground'
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary rounded-full" />
                    )}
                  </Link>
                )
              })}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:6147724729"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors hidden xl:block"
              >
                (614) 772-4729
              </a>
              <Button
                asChild
                size="sm"
                className="bg-primary hover:bg-red-hover text-primary-foreground font-bold rounded-sm px-5"
              >
                <Link href="/contact">Request a Quote</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-foreground rounded-sm hover:bg-foreground/5 transition-colors"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            'lg:hidden bg-background border-t border-border overflow-hidden transition-all duration-300',
            mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          )}
          aria-hidden={!mobileMenuOpen}
        >
          <div className="container mx-auto px-4 py-6 flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'flex items-center py-3 px-3 text-base font-medium rounded-sm transition-colors',
                    isActive
                      ? 'text-foreground bg-surface'
                      : 'text-foreground/70 hover:text-foreground hover:bg-surface/50'
                  )}
                >
                  {isActive && (
                    <span className="w-1 h-5 bg-primary rounded-full mr-3 flex-shrink-0" />
                  )}
                  {link.label}
                </Link>
              )
            })}
          </div>
        </div>
      </nav>

      {/* Mobile Sticky CTA */}
      <div
        className={cn(
          'lg:hidden fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-background/95 backdrop-blur-sm transition-transform duration-300 safe-bottom',
          mobileMenuOpen ? 'translate-y-full' : 'translate-y-0'
        )}
      >
        <div className="container mx-auto px-4 py-3 flex gap-3">
          <a
            href="tel:6147724729"
            className="flex-1 flex items-center justify-center gap-2 border border-border rounded-sm py-3 text-sm font-medium text-foreground hover:border-primary transition-colors"
          >
            Call Nic
          </a>
          <Button
            asChild
            className="flex-1 bg-primary hover:bg-red-hover text-primary-foreground font-bold rounded-sm"
          >
            <Link href="/contact">Request a Quote</Link>
          </Button>
        </div>
      </div>
    </>
  )
}
