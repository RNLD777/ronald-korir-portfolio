import Link from 'next/link'
import { ArrowRightIcon, ArrowUpRightIcon } from 'lucide-react'

import { RevealGroup, RevealItem } from '@/components/motion/reveal'
import { Section, SectionHeading } from '@/components/section'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { disciplines } from '@/lib/site'

export function FeaturedWork() {
  return (
    <Section id="featured-work" bordered>
      <SectionHeading
        eyebrow="Featured work"
        title="Ways I help teams communicate clearly"
        description="From content writing and SEO to journalism and multimedia storytelling, each discipline strengthens the others."
        action={
          <Button
            variant="outline"
            className="rounded-full"
            render={<Link href="/writing" />}
          >
            Browse all writing
            <ArrowRightIcon data-icon="inline-end" />
          </Button>
        }
      />

      <RevealGroup className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {disciplines.map((discipline) => (
          <RevealItem key={discipline.slug} as="article">
            <Link
              href={`/writing?category=${encodeURIComponent(discipline.title)}`}
              className="group block h-full rounded-xl outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              <Card className="h-full gap-0 py-0 transition-[transform,box-shadow] duration-300 ease-out group-hover:-translate-y-1 group-hover:shadow-lg group-hover:shadow-foreground/5">
                <CardHeader className="p-6 pb-0">
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex size-10 items-center justify-center rounded-lg bg-brand/10 text-brand ring-1 ring-brand/15 transition-colors duration-300 group-hover:bg-brand group-hover:text-brand-foreground">
                      <discipline.icon className="size-[18px]" aria-hidden="true" />
                    </span>
                    <ArrowUpRightIcon
                      className="size-4 text-muted-foreground/50 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
                      aria-hidden="true"
                    />
                  </div>
                  <CardTitle className="mt-5 text-[1.0625rem] font-semibold tracking-tight">
                    {discipline.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-5 p-6 pt-3">
                  <CardDescription className="leading-relaxed">
                    {discipline.description}
                  </CardDescription>
                  <span className="eyebrow text-[0.6875rem]">{discipline.meta}</span>
                </CardContent>
              </Card>
            </Link>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  )
}
