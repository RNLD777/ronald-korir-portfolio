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
  const featured = writing.filter((piece) => piece.featured).slice(0, 9)

  return (
    <Section bordered>
      <SectionHeading
        eyebrow="Featured Projects"
        title="A few projects worth exploring first"
        description="A selection of content, marketing, journalism and analysis work that shows the range of my approach."
        action={
          <Button
            variant="outline"
            className="rounded-full"
            render={<Link href="/projects" />}
          >
            All Projects
            <ArrowRightIcon data-icon="inline-end" />
          </Button>
        }
      />

      <RevealGroup className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
        {featured.map((piece, index) => (
          <RevealItem
            key={piece.slug}
            as="article"
            className={index === 0 ? 'col-span-2 h-full sm:col-span-1' : 'h-full'}
          >
            <WritingCard piece={piece} compact={index !== 0} />
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  )
}
