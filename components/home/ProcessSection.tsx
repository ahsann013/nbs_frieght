const steps = [
  {
    number: '01',
    title: 'Tell Us What You Need',
    description:
      'Share your origin, destination, freight type, and timeline. No lengthy forms. A quick conversation or email is enough to get started.',
  },
  {
    number: '02',
    title: 'We Review the Freight and Lane',
    description:
      'Nic personally reviews the opportunity and determines whether NBS Freight is the right fit. No hand-offs, no guesswork.',
  },
  {
    number: '03',
    title: 'We Coordinate the Right Capacity',
    description:
      'We source vetted carriers for your lane — not whoever has an available truck. Carrier selection is based on reliability, not just rate.',
  },
  {
    number: '04',
    title: 'Clear Updates Through Delivery',
    description:
      'You receive proactive communication from pickup through delivery. If something changes, you hear about it from us before you have to ask.',
  },
]

export function ProcessSection() {
  return (
    <section className="py-24 bg-surface border-t border-border">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-0.5 bg-primary" />
            <span className="text-xs font-bold tracking-widest uppercase text-primary">
              How It Works
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-black text-foreground tracking-tight text-balance">
            Simple process. No surprises.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Freight should not be complicated to manage. Here is what working
            with NBS Freight looks like.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line desktop */}
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-px bg-border z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col">
                {/* Number circle */}
                <div className="w-20 h-20 rounded-full bg-background border-2 border-primary flex items-center justify-center mb-6">
                  <span className="font-display text-2xl font-black text-primary">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
