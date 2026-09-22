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
  const featured = writing.filter((piece) => piece.featured).slice(0, 6)

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