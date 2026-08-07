import { RevealGroup, RevealItem } from '@/components/motion/reveal'
import { Container } from '@/components/section'
import { stats } from '@/lib/site'

export function StatsStrip() {
  return (
    <div className="border-y border-border bg-surface">
      <Container className="py-10 sm:py-12">
        <RevealGroup
          as="div"
          className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4"
        >
          {stats.map((stat) => (
            <RevealItem key={stat.label}>
              <p className="text-display-sm text-3xl font-semibold sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1.5 text-sm text-muted-foreground">{stat.label}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </div>
  )
}
