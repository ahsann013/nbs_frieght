import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const services = [
  {
    tag: 'Core Service',
    title: 'Freight Brokerage',
    description:
      'Reliable truckload coordination with communication from pickup through delivery. We source vetted carriers, manage the load, and keep you informed every step of the way.',
    features: ['Dry Van', 'Reefer', 'Flatbed', 'Spot Freight', 'Carrier Sourcing'],
    href: '/services',
    cta: 'Learn More',
  },
  {
    tag: 'Recurring Freight',
    title: 'Dedicated & Recurring Freight',
    description:
      'Support for repeat lanes, recurring shipments, and ongoing transportation needs. We build consistency into your freight program so you can focus on your business.',
    features: [
      'Dedicated Lanes',
      'Ongoing Relationships',
      'Consistent Communication',
      'Volume Planning',
      'Long-Term Carrier Relationships',
    ],
    href: '/services#recurring',
    cta: 'Learn More',
  },
  {
    tag: 'Consulting',
    title: 'Freight Strategy & Consulting',
    description:
      'Practical guidance for shippers, carriers, and logistics professionals. 23 years of real transportation experience available as a focused strategy session.',
    features: [
      '30-Min Direction Call',
      '60-Min Strategy Session',
      'Brokerage Guidance',
      'Carrier Operations',
      'Career Transition Support',
    ],
    href: '/consulting',
    cta: 'View Consulting',
  },
]

export function ServicesSection() {
  return (
    <section className="py-24 bg-surface border-t border-border">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-0.5 bg-primary" />
              <span className="text-xs font-bold tracking-widest uppercase text-primary">
                What We Do
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-black text-foreground tracking-tight text-balance">
              Freight services that actually deliver.
            </h2>
          </div>
          <Button
            asChild
            variant="outline"
            className="self-start md:self-auto border-foreground/30 text-foreground hover:bg-foreground/5 rounded-sm gap-2"
          >
            <Link href="/services">
              All Services <ArrowRight size={16} />
            </Link>
          </Button>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`relative flex flex-col p-8 rounded-sm border border-border hover:border-primary/50 transition-all group ${
                index === 0 ? 'bg-primary' : 'bg-surface-2'
              }`}
            >
              {/* Tag */}
              <span
                className={`text-xs font-bold tracking-widest uppercase mb-5 ${
                  index === 0 ? 'text-primary-foreground/70' : 'text-primary'
                }`}
              >
                {service.tag}
              </span>

              {/* Title */}
              <h3
                className={`font-display text-2xl font-black mb-4 ${
                  index === 0 ? 'text-primary-foreground' : 'text-foreground'
                }`}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                className={`text-sm leading-relaxed mb-6 ${
                  index === 0 ? 'text-primary-foreground/80' : 'text-muted-foreground'
                }`}
              >
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-8 flex-1">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-center gap-2 text-sm ${
                      index === 0
                        ? 'text-primary-foreground/80'
                        : 'text-muted-foreground'
                    }`}
                  >
                    <div
                      className={`w-1 h-1 rounded-full flex-shrink-0 ${
                        index === 0 ? 'bg-primary-foreground/60' : 'bg-primary'
                      }`}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                asChild
                className={`rounded-sm font-bold self-start ${
                  index === 0
                    ? 'bg-primary-foreground text-primary hover:bg-primary-foreground/90'
                    : 'bg-primary hover:bg-red-hover text-primary-foreground'
                }`}
              >
                <Link href={service.href}>
                  {service.cta} <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
