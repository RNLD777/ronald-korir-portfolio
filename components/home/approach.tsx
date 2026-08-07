import Image from 'next/image'
import Link from 'next/link'
import { ArrowRightIcon, CheckIcon } from 'lucide-react'

import { Reveal, RevealGroup, RevealItem } from '@/components/motion/reveal'
import { Container } from '@/components/section'
import { Button } from '@/components/ui/button'
import { services } from '@/lib/site'

export function Approach() {
  return (
    <section className="border-t border-border">
      <Container className="py-20 sm:py-24 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
          <Reveal className="order-2 lg:order-1">
            <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-muted ring-1 ring-foreground/10">
              <Image
                src="/about-working-portrait.png"
                alt="Ronald Korir reviewing interview notes at his desk beside a laptop and audio recorder"
                fill
                sizes="(max-width: 1024px) 100vw, 32rem"
                className="object-cover"
              />
            </div>
          </Reveal>

          <div className="order-1 flex flex-col items-start lg:order-2">
            <Reveal className="flex flex-col gap-4">
              <div className="flex items-center gap-2.5">
                <span className="h-px w-6 bg-brand" aria-hidden="true" />
                <span className="eyebrow">How I work</span>
              </div>
              <h2 className="text-display-sm text-3xl font-semibold text-balance sm:text-4xl">
                Storytelling with{' '}
                <span className="font-serif italic">strategy and discipline</span>
              </h2>
              <p className="max-w-xl text-base leading-relaxed text-pretty text-muted-foreground">
                A newsroom teaches you to verify before you publish, to write to a deadline and to respect a reader&apos;s time. I bring those habits to every brief, from SEO articles and website copy to digital campaigns and multimedia storytelling.
              </p>
            </Reveal>

            <RevealGroup as="div" className="mt-9 flex w-full flex-col gap-5" delay={0.1}>
              {services.map((service) => (
                <RevealItem key={service.title}>
                  <div className="flex gap-3.5">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand/12 text-brand">
                      <CheckIcon className="size-3" aria-hidden="true" />
                    </span>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-[0.9375rem] font-medium tracking-tight">
                        {service.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>

            <Reveal delay={0.2}>
              <Button
                variant="ghost"
                className="mt-8 -ml-2.5 rounded-full"
                render={<Link href="/about" />}
              >
                More about me
                <ArrowRightIcon data-icon="inline-end" />
              </Button>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}
