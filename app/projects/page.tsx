import type { Metadata } from 'next'

import { CtaSection } from '@/components/cta-section'
import { PageHeader, Section } from '@/components/section'
import { WritingGallery } from '@/components/writing/writing-gallery'
import { getWriting } from '@/lib/notion/writing'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Selected projects and work samples by Ronald Korir across marketing, journalism, analysis and commentary, scripts, social media and creative writing.',
  alternates: { canonical: '/projects' },
}

type ProjectsPageProps = {
  searchParams: Promise<{
    category?: string
  }>
}

export default async function ProjectsPage({
  searchParams,
}: ProjectsPageProps) {
  const writing = await getWriting()
  const params = await searchParams

  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Selected work across content and communication"
        description="A collection of content, marketing, journalism, social media and multimedia work developed across different communication formats."
      />

      <Section>
        <WritingGallery
          writing={writing}
          initialCategory={params.category}
        />
      </Section>

      <CtaSection />
    </>
  )
}