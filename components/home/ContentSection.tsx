import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Play } from 'lucide-react'

const articles = [
  {
    tag: 'Freight Strategy',
    title: 'Why the Cheapest Truck Is Not Always the Right Truck',
    summary:
      'The real cost of chasing the lowest rate — and what shippers lose when they prioritize price over reliability.',
    date: 'June 2025',
    type: 'Article',
  },
  {
    tag: 'Industry Insight',
    title: 'What Shippers Misunderstand About Freight Pricing',
    summary:
      'Breaking down the components of a freight rate and why transparency matters more than the number on the quote.',
    date: 'May 2025',
    type: 'Video',
  },
  {
    tag: 'Relationships',
    title: 'Why Communication Matters More Than Technology',
    summary:
      'No app fixes a broker who goes quiet after booking the load. Here is what real communication looks like.',
    date: 'May 2025',
    type: 'Article',
  },
  {
    tag: 'Carrier Side',
    title: 'What Drivers Wish Shippers Understood',
    summary:
      'Lessons from 23 years of transportation on what happens behind the windshield — and why it affects your freight.',
    date: 'April 2025',
    type: 'Video',
  },
]

export function ContentSection() {
  return (
    <section className="py-24 bg-surface border-t border-border">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-0.5 bg-primary" />
              <span className="text-xs font-bold tracking-widest uppercase text-primary">
                Insights
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-black text-foreground tracking-tight text-balance">
              Straight freight talk from someone who has lived it.
            </h2>
          </div>
          <Button
            asChild
            variant="outline"
            className="self-start md:self-auto border-foreground/30 text-foreground hover:bg-foreground/5 rounded-sm gap-2 flex-shrink-0"
          >
            <Link href="/insights">
              View All Insights <ArrowRight size={16} />
            </Link>
          </Button>
        </div>

        {/* Articles grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((article) => (
            <Link
              key={article.title}
              href="/insights"
              className="group bg-surface-2 border border-border rounded-sm p-8 flex flex-col gap-4 hover:border-primary/40 transition-all"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold tracking-widest uppercase text-primary">
                  {article.tag}
                </span>
                <div className="flex items-center gap-2">
                  {article.type === 'Video' && (
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <Play size={10} className="text-primary fill-primary ml-0.5" />
                    </div>
                  )}
                  <span className="text-xs text-steel">{article.type}</span>
                </div>
              </div>

              <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-snug text-balance">
                {article.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {article.summary}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-xs text-steel">{article.date}</span>
                <span className="text-xs font-bold text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                  {article.type === 'Video' ? 'Watch' : 'Read'}
                  <ArrowRight size={12} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
