import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { AlertTriangle } from 'lucide-react'

const problems = [
  'Broker disappears after the load is booked',
  'No updates unless you call first',
  'Carrier shows up late — or not at all',
  'Freight arrives damaged with no accountability',
  'Surprise fees on the invoice',
  'Treated like just another load number',
  'Inconsistent service from shipment to shipment',
  'Partner who has never driven a truck',
]

export function ProblemSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Problem List */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-0.5 bg-primary" />
              <span className="text-xs font-bold tracking-widest uppercase text-primary">
                Sound Familiar?
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-black text-foreground tracking-tight text-balance mb-8">
              The cheapest rate can become the most expensive shipment.
            </h2>
            <ul className="space-y-3">
              {problems.map((problem) => (
                <li key={problem} className="flex items-start gap-3">
                  <AlertTriangle
                    size={16}
                    className="text-primary flex-shrink-0 mt-0.5"
                  />
                  <span className="text-muted-foreground text-sm leading-relaxed">
                    {problem}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Callout */}
          <div className="flex flex-col gap-8">
            <div className="border-l-4 border-primary pl-8 py-6 bg-surface rounded-r-sm">
              <p className="text-xl md:text-2xl font-display font-bold text-foreground leading-snug mb-4">
                NBS Freight does not promise the cheapest truck.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We work to find the right truck, the right carrier, and the right
                solution. The real cost of a bad freight experience is not just the
                rate — it is missed pickups, damaged relationships, lost customers,
                and operational stress that never should have happened.
              </p>
            </div>

            <div className="bg-surface-2 p-8 rounded-sm">
              <p className="text-sm font-bold uppercase tracking-widest text-primary mb-3">
                What You Actually Pay For
              </p>
              <p className="text-foreground leading-relaxed mb-6">
                When you work with NBS Freight, you are not paying for software.
                You are paying for attention, communication, experience, and a
                partner who treats your freight like it matters — because it does.
              </p>
              <Button
                asChild
                className="bg-primary hover:bg-red-hover text-primary-foreground rounded-sm font-bold"
              >
                <Link href="/why-nbs">See How We Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
