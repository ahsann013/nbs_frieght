import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function AboutSection() {
  return (
    <section className="py-24 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
              <Image
                src="/images/nic-spears.png"
                alt="Nic Spears, founder of NBS Freight LLC, at the Mid-America Trucking Show"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Red accent bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary" />
            </div>
            {/* Credential badge */}
            <div className="absolute -bottom-6 -right-4 md:right-4 bg-primary text-primary-foreground px-6 py-4 rounded-sm">
              <div className="font-display text-3xl font-black leading-none">23+</div>
              <div className="text-xs font-medium leading-tight mt-1">
                Years in<br />Transportation
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-0.5 bg-primary" />
              <span className="text-xs font-bold tracking-widest uppercase text-primary">
                About Nic Spears
              </span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-black text-foreground tracking-tight text-balance mb-6">
              Built from the driver&apos;s seat forward.
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-5">
              Most freight brokers learned the industry behind a desk. Nic learned it
              through miles — as an OTR truck driver, a U.S. Air Force veteran, and more
              than two decades of hands-on transportation work.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              That experience is not background noise. It changes how every load is
              handled — because Nic understands what happens at the pickup, what a
              driver deals with on the road, and what a shipper needs to trust the
              process.
            </p>

            {/* Quote */}
            <blockquote className="border-l-4 border-primary pl-6 py-2 mb-8">
              <p className="text-lg font-display font-bold text-foreground leading-snug italic">
                &ldquo;I know what freight looks like from the truck, the broker&apos;s
                desk, and the customer&apos;s side. That perspective changes how you
                serve people.&rdquo;
              </p>
              <footer className="mt-3 text-sm text-muted-foreground">
                — Nic Spears, Founder, NBS Freight LLC
              </footer>
            </blockquote>

            {/* Credentials */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                'OTR Truck Driver',
                'U.S. Air Force Veteran',
                'Licensed Freight Broker',
                '23+ Years in Transportation',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>

            <Button
              asChild
              className="bg-primary hover:bg-red-hover text-primary-foreground rounded-sm font-bold gap-2"
            >
              <Link href="/about">
                Read Nic&apos;s Full Story <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
