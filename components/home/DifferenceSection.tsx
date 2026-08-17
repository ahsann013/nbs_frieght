const pillars = [
  {
    number: '01',
    title: 'Clear Communication',
    body: 'You know where your freight is. You hear from us before you have to ask. No chasing updates, no silence after the load is booked.',
  },
  {
    number: '02',
    title: 'Reliable Carrier Coordination',
    body: 'We vet the carriers we work with. We do not hand your freight to whoever bids lowest. The right truck matters more than the cheapest truck.',
  },
  {
    number: '03',
    title: 'Firsthand Trucking Experience',
    body: '23 years in transportation. OTR driver. Freight broker. We understand both sides of every load — what happens behind the windshield and behind the desk.',
  },
  {
    number: '04',
    title: 'Long-Term Relationships',
    body: 'One shipment is not the goal. We want to be the broker you call for everything — because we earned that trust with consistent execution.',
  },
]

export function DifferenceSection() {
  return (
    <section className="py-24 bg-surface border-t border-border">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-0.5 bg-primary" />
            <span className="text-xs font-bold tracking-widest uppercase text-primary">
              What Sets Us Apart
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-black text-foreground tracking-tight text-balance">
            Freight is operational.{' '}
            <span className="text-primary">Trust is personal.</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Most brokers compete on price. NBS Freight competes on communication,
            accountability, experience, and execution. That difference shows up
            on every load.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="bg-surface p-8 group hover:bg-surface-2 transition-colors"
            >
              <div className="font-display text-4xl font-black text-primary/20 group-hover:text-primary/40 transition-colors mb-4 leading-none">
                {pillar.number}
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {pillar.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {pillar.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
