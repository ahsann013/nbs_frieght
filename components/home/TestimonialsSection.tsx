import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'George Andrews',
    role: 'Shipper',
    company: 'Independent Shipper',
    rating: 5,
    quote:
      'Nic took the time to answer all of my questions in detail about different aspects of transportation in the industry. This is a guy with 20+ years of experience in this industry. It\'s nice to see where this road goes.',
    outcome: 'Provided detailed consultation and industry guidance',
  },
  {
    name: 'Mark S.',
    role: 'Operations Manager',
    company: "Mark's Transportation Inc",
    rating: 5,
    quote:
      'We have been working with Nic for 6 months and have hauled 14 loads for him and the communication is excellent. He\'s a good man.',
    outcome: '14 loads, consistent communication over 6 months',
  },
  {
    name: 'Verified Shipper',
    role: 'Client',
    company: 'NBS Freight Customer',
    rating: 5,
    quote:
      'Not only do I take care of my clients, carriers get the same treatment. This carrier received Nothing But Satisfaction.',
    outcome: 'Relationship-first service for shippers and carriers alike',
  },
  {
    name: 'Verified Client',
    role: 'Business Owner',
    company: 'Transportation Professional',
    rating: 5,
    quote:
      'NBS Freight operates with a winshipper + winbroker + wincarrier = Sustainability model. This creates long-lasting relationships — what this industry is built upon. The CHANGE is HERE!',
    outcome: 'Long-term partnership built on mutual respect',
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="fill-primary text-primary" />
      ))}
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-0.5 bg-primary" />
              <span className="text-xs font-bold tracking-widest uppercase text-primary">
                What Clients Say
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-black text-foreground tracking-tight text-balance">
              Trust earned, one shipment at a time.
            </h2>
          </div>
          {/* Overall rating */}
          <div className="flex items-center gap-4 bg-surface border border-border rounded-sm px-6 py-4">
            <div>
              <div className="font-display text-3xl font-black text-foreground">5.0</div>
              <div className="text-xs text-muted-foreground">Overall Rating</div>
            </div>
            <div className="w-px h-10 bg-border" />
            <div>
              <StarRating count={5} />
              <div className="text-xs text-muted-foreground mt-1">All reviews</div>
            </div>
          </div>
        </div>

        {/* Testimonial grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-surface border border-border rounded-sm p-8 flex flex-col gap-5 hover:border-primary/30 transition-colors"
            >
              <StarRating count={t.rating} />
              <blockquote className="text-foreground leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="pt-4 border-t border-border">
                <div className="font-bold text-foreground text-sm">{t.name}</div>
                <div className="text-xs text-muted-foreground mt-0.5">
                  {t.role} &mdash; {t.company}
                </div>
                {t.outcome && (
                  <div className="mt-2 text-xs text-primary font-medium">
                    {t.outcome}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
