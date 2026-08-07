import type { Metadata } from 'next'

import { CtaSection } from '@/components/cta-section'
import { PageHeader, Section } from '@/components/section'
import { WritingGallery } from '@/components/writing/writing-gallery'
import { getWriting } from '@/lib/notion/writing'

export const metadata: Metadata = {
  title: 'Writing Portfolio',
  description:
    'Selected writing by Ronald Korir across marketing and strategy, journalism, thought leadership, scripts, social media and creative writing.',
  alternates: { canonical: '/writing' },
}

export default async function WritingPage() {
  const writing = await getWriting()

  return (
    <>
      <PageHeader
        eyebrow="Writing Portfolio"
        title="Writing that is clear, useful and well considered"
        description="My work spans SEO content, digital marketing, journalism, multimedia storytelling and communications."
      />

      <Section>
        <WritingGallery writing={writing} />
      </Section>

      <CtaSection />
    </>
  )
}