import Link from 'next/link'
import { ArrowRightIcon, DownloadIcon } from 'lucide-react'

import { Reveal } from '@/components/motion/reveal'
import { Container } from '@/components/section'
import { Button } from '@/components/ui/button'
import { site } from '@/lib/site'

export function CtaSection({
  title = 'Looking for clear, strategic content?',
  description = 'Whether you need SEO writing, digital marketing support, a reported story or multimedia content, I would be glad to hear about your project.',
}: {
  title?: string
  description?: string
}) {
  return (
    <section className="border-t border-border">
      <Container className="py-20 sm:py-24">
        <Reveal className="relative overflow-hidden rounded-2xl bg-surface px-6 py-14 ring-1 ring-foreground/10 sm:px-12 sm:py-16">
          <div
            aria-hidden="true"
            className="bg-grid pointer-events-none absolute inset-0 opacity-40"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-20 -right-16 size-64 rounded-full bg-brand/10 blur-3xl"
          />
          <div className="relative flex flex-col items-start gap-6">
            <span className="eyebrow">Let&apos;s work together</span>
            <h2 className="text-display-sm max-w-2xl text-3xl font-semibold text-balance sm:text-4xl">
              {title}
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-pretty text-muted-foreground">
              {description}
            </p>
            <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                size="lg"
                className="h-11 rounded-full px-6 text-[0.9375rem]"
                render={<Link href="/contact" />}
              >
                Get in touch
                <ArrowRightIcon data-icon="inline-end" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-11 rounded-full px-6 text-[0.9375rem]"
                render={<a href={site.resumeFile} download />}
              >
                <DownloadIcon data-icon="inline-start" />
                Download Resume
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
