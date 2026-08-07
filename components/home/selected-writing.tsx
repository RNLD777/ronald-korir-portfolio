import Link from 'next/link'
import { ArrowRightIcon } from 'lucide-react'

import { RevealGroup, RevealItem } from '@/components/motion/reveal'
import { Section, SectionHeading } from '@/components/section'
import { Button } from '@/components/ui/button'
import { WritingCard } from '@/components/writing-card'
import type { WritingPiece } from '@/lib/site'

export function SelectedWriting({
  writing,
}: {
  writing: WritingPiece[]
}) {
  const featured = writing.filter((piece) => piece.featured).slice(0, 3)

  return (
    <Section bordered>
      <SectionHeading
        eyebrow="Selected writing"
        title="A few pieces worth reading first"
        description="Reported features, strategy essays and thought leadership — a cross-section of the range."
        action={
          <Button
            variant="outline"
            className="rounded-full"
            render={<Link href="/writing" />}
          >
            All writing
            <ArrowRightIcon data-icon="inline-end" />
          </Button>
        }
      />

      <RevealGroup className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((piece) => (
          <RevealItem key={piece.slug} as="article" className="h-full">
            <WritingCard piece={piece} />
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  )
}
