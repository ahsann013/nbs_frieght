import type { Metadata } from 'next'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { Play, FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Freight Insights | NBS Freight LLC',
  description:
    'Straight freight talk from someone who has lived it. Videos, articles, and industry commentary from Nic Spears — 23+ years in transportation.',
}

const tags = ['All', 'Freight Strategy', 'Shipper Education', 'Industry Insight', 'Carrier Side', 'Relationships', 'Career']

const insights = [
  {
    type: 'Video',
    tag: 'Freight Strategy',
    title: 'Why the Cheapest Truck Is Not Always the Right Truck',
    summary:
      'The real cost of chasing the lowest rate — and what shippers lose when they prioritize price over reliability, communication, and execution.',
    date: 'June 2025',
    featured: true,
  },
  {
    type: 'Video',
    tag: 'Shipper Education',
    title: 'What Shippers Misunderstand About Freight Pricing',
    summary:
      'Breaking down the components of a freight rate and why transparency matters more than the number on the quote.',
    date: 'May 2025',
    featured: false,
  },
  {
    type: 'Article',
    tag: 'Relationships',
    title: 'Why Communication Matters More Than Technology',
    summary:
      'No app fixes a broker who goes quiet after booking the load. Here is what real freight communication actually looks like.',
    date: 'May 2025',
    featured: false,
  },
  {
    type: 'Video',
    tag: 'Carrier Side',
    title: 'What Drivers Wish Shippers Understood',
    summary:
      'Lessons from 23 years of transportation on what happens behind the windshield — and why it affects your freight and relationships.',
    date: 'April 2025',
    featured: false,
  },
  {
    type: 'Article',
    tag: 'Freight Strategy',
    title: 'How Brokers Damage Trust — And What to Do Instead',
    summary:
      'The habits and behaviors that cause shippers to lose faith in freight brokers, and how a relationship-first approach changes everything.',
    date: 'April 2025',
    featured: false,
  },
  {
    type: 'Video',
    tag: 'Industry Insight',
    title: 'Freight Market Realities No One Talks About',
    summary:
      'Honest commentary on rate cycles, capacity shifts, and what shippers and carriers should understand about how the market actually works.',
    date: 'March 2025',
    featured: false,
  },
  {
    type: 'Article',
    tag: 'Career',
    title: 'Trucking to Brokerage: What Nobody Tells You',
    summary:
      'The real transition from OTR driver to freight broker. What transfers over, what does not, and what you need to build from scratch.',
    date: 'March 2025',
    featured: false,
  },
  {
    type: 'Video',
    tag: 'Relationships',
    title: 'What Makes a Carrier Reliable? The Answer Might Surprise You',
    summary:
      'Reliability is not just about on-time delivery. Here are the factors that actually determine whether a carrier relationship is worth building.',
    date: 'February 2025',
    featured: false,
  },
  {
    type: 'Article',
    tag: 'Shipper Education',
    title: 'Veteran Leadership in Logistics',
    summary:
      'How military experience shapes the way NBS Freight operates — discipline, accountability, and mission-focus applied to transportation.',
    date: 'February 2025',
    featured: false,
  },
]

export default function InsightsPage() {
  return (
    <main>
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-0.5 bg-primary" />
              <span className="text-xs font-bold tracking-widest uppercase text-primary">
                Insights
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-black text-foreground tracking-tight text-balance mb-6">
              Straight freight talk from someone who has lived it.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Videos, articles, and industry commentary from Nic Spears. No buzzwords.
              No theory. Just real perspective from 23+ years in transportation.
            </p>
          </div>
        </div>
      </section>

      {/* Tag Filter (visual only) */}
      <section className="bg-surface border-y border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {tags.map((tag, i) => (
              <button
                key={tag}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-bold tracking-wide uppercase transition-colors ${
                  i === 0
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-surface-2 text-muted-foreground hover:text-foreground border border-border'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          {insights.filter((i) => i.featured).map((item) => (
            <div
              key={item.title}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-surface rounded-sm border border-border overflow-hidden"
            >
              <a
                href="https://www.youtube.com/watch?v=PzXEPlsGznE"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-surface-2 aspect-video flex items-center justify-center group"
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-105 transition-all">
                    <Play size={24} className="text-primary fill-primary ml-1" />
                  </div>
                  <span className="text-xs text-steel uppercase tracking-widest group-hover:text-foreground transition-colors">
                    Watch on YouTube
                  </span>
                </div>
              </a>
              <div className="p-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold tracking-widest uppercase text-primary">
                    Featured — {item.tag}
                  </span>
                  <span className="text-xs text-steel">{item.type}</span>
                </div>
                <h2 className="font-display text-3xl font-black text-foreground tracking-tight text-balance mb-4">
                  {item.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {item.summary}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-steel">{item.date}</span>
                  <a
                    href="https://www.youtube.com/watch?v=PzXEPlsGznE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary/80 transition-colors"
                  >
                    <Play size={14} className="fill-primary" />
                    Watch Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* All Insights Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {insights.filter((i) => !i.featured).map((item) => (
              <article
                key={item.title}
                className="group bg-surface border border-border rounded-sm p-8 flex flex-col gap-4 hover:border-primary/40 transition-all cursor-pointer"
              >
                {/* Type indicator */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-widest uppercase text-primary">
                    {item.tag}
                  </span>
                  <div className="flex items-center gap-1.5">
                    {item.type === 'Video' ? (
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <Play size={10} className="text-primary fill-primary ml-0.5" />
                      </div>
                    ) : (
                      <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center">
                        <FileText size={10} className="text-muted-foreground" />
                      </div>
                    )}
                    <span className="text-xs text-steel">{item.type}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-snug text-balance">
                  {item.title}
                </h3>

                {/* Summary */}
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {item.summary}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-xs text-steel">{item.date}</span>
                  <span className="text-xs font-bold text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                    {item.type === 'Video' ? 'Watch' : 'Read'}
                    <span aria-hidden>→</span>
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* LinkedIn CTA */}
      <section className="py-20 bg-surface border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-0.5 bg-primary" />
            <span className="text-xs font-bold tracking-widest uppercase text-primary">
              Stay Connected
            </span>
            <div className="w-8 h-0.5 bg-primary" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-black text-foreground tracking-tight text-balance mb-4">
            More freight content on LinkedIn and YouTube.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto">
            Follow Nic for ongoing freight commentary, industry observations,
            and behind-the-scenes transportation content.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://www.linkedin.com/in/nic-spears-0baa02221/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-red-hover text-primary-foreground font-bold text-sm px-6 py-3 rounded-sm transition-colors"
            >
              Follow on LinkedIn
            </a>
            <a
              href="https://www.youtube.com/watch?v=PzXEPlsGznE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-foreground/30 text-foreground hover:bg-foreground/5 font-medium text-sm px-6 py-3 rounded-sm transition-colors"
            >
              Subscribe on YouTube
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
