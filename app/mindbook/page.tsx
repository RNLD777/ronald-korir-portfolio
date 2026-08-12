import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRightIcon } from 'lucide-react'

import { MindbookTimeline } from '@/components/mindbook/mindbook-timeline'
import { CtaSection } from '@/components/cta-section'
import { PageHeader, Section } from '@/components/section'
import { Button } from '@/components/ui/button'
import { getMindbook } from '@/lib/notion/writing'

export const metadata: Metadata = {
  title: 'Mindbook',
  description:
    'A record of what Ronald Korir has been thinking, learning and writing across marketing, journalism, thought leadership, scripts, social media and creative writing.',
  alternates: { canonical: '/mindbook' },
}

export default async function MindbookPage() {
  const writing = await getMindbook()

  return (
    <>
      <PageHeader
        eyebrow="Mindbook"
        title="A record of what I've been thinking, learning and writing."
        description="A small window into how my writing has evolved. Six pieces, six disciplines, and a journey through the ideas and stories I have chosen to put into words."
      />

      <Section>
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <p className="text-base leading-relaxed text-muted-foreground">
            Mindbook is not a complete archive of my work. It is a curated
            snapshot that changes as I publish. Each category contributes its
            latest piece, so the journey keeps moving forward with me.
          </p>

          <Button
            nativeButton={false}
            variant="outline"
            className="mt-7 rounded-full"
            render={<Link href="/writing" />}
          >
            Explore all my writing
            <ArrowRightIcon data-icon="inline-end" />
          </Button>
        </div>
      </Section>

      <Section bordered>
        <MindbookTimeline writing={writing} />
      </Section>

      <CtaSection />
    </>
  )
}