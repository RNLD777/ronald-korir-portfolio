import type { Metadata } from 'next'

import { CtaSection } from '@/components/cta-section'
import { Approach } from '@/components/home/approach'
import { FeaturedWork } from '@/components/home/featured-work'
import { Hero } from '@/components/home/hero'
import { SelectedWriting } from '@/components/home/selected-writing'
import { StatsStrip } from '@/components/home/stats-strip'

import { getWriting } from '@/lib/notion/writing'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: `${site.name} — Content Strategist & Multimedia Journalist`,
  description: site.intro,
  alternates: { canonical: '/' },
}

export default async function HomePage() {
  const writing = await getWriting()

  return (
    <>
      <Hero />
      <StatsStrip />
      <SelectedWriting writing={writing} />
      <FeaturedWork />
      <Approach />
      
      <CtaSection />
    </>
  )
}