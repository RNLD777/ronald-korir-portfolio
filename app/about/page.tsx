import type { Metadata } from 'next'
//import Image from 'next/image'

import { Timeline } from '@/components/about/timeline'
import { CtaSection } from '@/components/cta-section'
import { Reveal, RevealGroup, RevealItem } from '@/components/motion/reveal'
import { PageHeader, Section, SectionHeading } from '@/components/section'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { languages, site, values } from '@/lib/site'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Ronald Korir is a communications graduate, content strategist and multimedia journalist based in Nairobi, Kenya — trained in the newsroom, working across marketing, digital communications and storytelling.',
  alternates: { canonical: '/about' },
}

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Clear communication, built with strategy and care."
        description="I am a Mass Media and Communication graduate focused on digital marketing, SEO writing, content strategy, copywriting and multimedia storytelling. I help brands and organisations communicate clearly through content that is useful, credible and results-focused."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-start lg:gap-16">
          <Reveal className="flex flex-col gap-5">
            <p className="text-lg leading-relaxed text-pretty">
              My experience spans newsroom reporting, content development and
              digital communication. At the Kenya News Agency, I wrote and
              edited stories, conducted interviews and covered public affairs
              while working to tight deadlines.
            </p>

            <p className="leading-relaxed text-pretty text-muted-foreground">
              That training shaped the way I approach content today. I bring a
              journalist&apos;s attention to detail to SEO writing, digital
              campaigns, website copy and multimedia storytelling so the work
              is clear, credible and purposeful.
            </p>

            <p className="leading-relaxed text-pretty text-muted-foreground">
              I am especially interested in helping organisations communicate
              better through strategy, storytelling and well-structured
              content. Whether the goal is visibility, trust, engagement or
              conversion, I aim to make the message feel natural, useful and
              easy to act on.
            </p>

            <p className="leading-relaxed text-pretty text-muted-foreground">
              I am currently building my portfolio while pursuing full-time
              opportunities in content writing, copywriting, digital
              marketing, communications and multimedia journalism.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-6">
            <div className="rounded-2xl border border-border bg-surface p-8 sm:p-10">
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-2.5">
                  <span
                    className="h-px w-6 bg-brand"
                    aria-hidden="true"
                  />
                  <span className="eyebrow">What I&apos;m looking for</span>
                </div>

                <h2 className="text-2xl font-semibold tracking-tight">
                  Work where communication has a purpose.
                </h2>

                <p className="leading-relaxed text-muted-foreground">
                  I&apos;m looking for opportunities where I can put my
                  writing, communication and creative skills to practical use —
                  whether that&apos;s in content, communications, marketing,
                  journalism or digital media.
                </p>

                <p className="leading-relaxed text-muted-foreground">
                  I&apos;m open to working with teams where I can contribute,
                  learn and take on increasingly meaningful work.
                </p>

                <div className="border-t border-border pt-5">
                  <p className="mb-3 text-sm font-medium">Open to</p>

                  <div className="flex flex-wrap gap-2">
                    {[
                      'Full-time',
                      'Contract',
                      'Freelance',
                      'On-site',
                      'Hybrid',
                      'Remote',
                    ].map((option) => (
                      <span
                        key={option}
                        className="rounded-full border border-border bg-muted/50 px-3 py-1.5 text-xs text-muted-foreground"
                      >
                        {option}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Languages</CardTitle>
              </CardHeader>

              <CardContent className="flex flex-col gap-3">
                {languages.map((language) => (
                  <div
                    key={language.name}
                    className="flex items-baseline justify-between gap-4 text-sm"
                  >
                    <span className="font-medium">{language.name}</span>

                    <span className="text-right text-xs text-muted-foreground">
                      {language.level}
                    </span>
                  </div>
                ))}

                <div className="flex items-baseline justify-between gap-4 border-t border-border pt-3 text-sm">
                  <span className="font-medium">Based in</span>

                  <span className="text-xs text-muted-foreground">
                    {site.location}
                  </span>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </Section>

      <Section bordered>
        <SectionHeading
          eyebrow="Principles"
          title="How I approach the work"
          description="Four things I have found to be true, whether the deliverable is a news feature or a landing page."
        />

        <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2">
          {values.map((value) => (
            <RevealItem key={value.title}>
              <Card className="h-full">
                <CardHeader>
                  <div className="flex size-9 items-center justify-center rounded-lg border border-border bg-muted/60 text-brand">
                    <value.icon
                      className="size-[18px]"
                      aria-hidden="true"
                    />
                  </div>

                  <CardTitle className="mt-3 text-base">
                    {value.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-sm leading-relaxed text-pretty text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <Section bordered>
        <SectionHeading
          eyebrow="Timeline"
          title="Education & experience"
          description="A short history of how the practice was built."
        />

        <Timeline />
      </Section>

      <CtaSection />
    </>
  )
}