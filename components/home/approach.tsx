import Link from 'next/link'
import { ArrowRightIcon } from 'lucide-react'

import { Reveal, RevealGroup, RevealItem } from '@/components/motion/reveal'
import { Container } from '@/components/section'
import { Button } from '@/components/ui/button'

const approachPoints = [
  {
    title: "I don't just start writing.",
    description:
      "I start by asking what we're trying to achieve.",
  },
  {
    title: 'I research before I make claims.',
    description:
      'Good communication needs something solid behind it.',
  },
  {
    title: 'I write for the person reading.',
    description:
      "The goal isn't to impress you with complicated language. It's to make the message understood.",
  },
  {
    title: 'And I edit before I call it finished.',
    description:
      'The first draft gets the ideas down. The editing makes them work.',
  },
]

export function Approach() {
  return (
    <section className="border-t border-border">
      <Container className="py-20 sm:py-24 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-start lg:gap-20">
          <div className="flex flex-col items-start">
            <Reveal className="flex flex-col gap-4">
              <div className="flex items-center gap-2.5">
                <span className="h-px w-6 bg-brand" aria-hidden="true" />
                <span className="eyebrow">How I work</span>
              </div>

              <h2 className="text-display-sm text-3xl font-semibold text-balance sm:text-4xl">
                Storytelling with{' '}
                <span className="font-serif italic">
                  strategy and discipline
                </span>
              </h2>

              <p className="max-w-xl text-base leading-relaxed text-pretty text-muted-foreground">
                A newsroom teaches you to verify before you publish, to write
                to a deadline and to respect a reader&apos;s time. I bring those
                habits to every brief, from SEO articles and website copy to
                digital campaigns and multimedia storytelling.
              </p>
            </Reveal>

            <RevealGroup
              as="div"
              className="mt-10 grid w-full gap-7 sm:grid-cols-2"
              delay={0.1}
            >
              {approachPoints.map((point) => (
                <RevealItem key={point.title}>
                  <div className="flex flex-col gap-2">
                    <span className="h-px w-8 bg-brand" aria-hidden="true" />

                    <h3 className="text-[0.9375rem] font-semibold tracking-tight">
                      {point.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {point.description}
                    </p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>

            <Reveal delay={0.2}>
              <Button
                variant="ghost"
                className="mt-9 -ml-2.5 rounded-full"
                render={<Link href="/about" />}
              >
                More about me
                <ArrowRightIcon data-icon="inline-end" />
              </Button>
            </Reveal>
          </div>

          <Reveal
            delay={0.15}
            className="flex h-full flex-col justify-center rounded-2xl border border-border bg-surface p-8 sm:p-10 lg:p-12"
          >
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-2.5">
                <span className="h-px w-6 bg-brand" aria-hidden="true" />
                <span className="eyebrow">What matters to me</span>
              </div>

              <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Good communication isn't about using more words.
              </h3>

              <p className="leading-relaxed text-muted-foreground">
                It's about making the right thing clear to the right person.
              </p>

              <p className="leading-relaxed text-muted-foreground">
                Whether I'm writing an article, developing social content or
                working on a longer piece of storytelling, I want the reader
                to know what matters, why it matters and what they should take
                away from it.
              </p>

              <div className="mt-3 flex flex-col gap-2 border-t border-border pt-6">
                <span className="font-serif text-lg italic">
                  Clarity over clutter.
                </span>
                <span className="font-serif text-lg italic">
                  Substance over noise.
                </span>
                <span className="font-serif text-lg italic">
                  Purpose over filler.
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}