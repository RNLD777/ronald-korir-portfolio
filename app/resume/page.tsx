import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight, Briefcase, Download, GraduationCap } from 'lucide-react'

import { CtaSection } from '@/components/cta-section'
import { Reveal, RevealGroup, RevealItem } from '@/components/motion/reveal'
import { PageHeader, Section, SectionHeading } from '@/components/section'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  contactChannels,
  education,
  experience,
  languages,
  site,
  skillGroups,
} from '@/lib/site'

export const metadata: Metadata = {
  title: 'Resume',
  description:
    'Resume of Ronald Korir — BA Mass Media and Communication (Mount Kenya University), Multimedia Journalist Intern at Kenya News Agency, with skills across SEO, copywriting, content strategy and digital marketing.',
  alternates: { canonical: '/resume' },
}

export default function ResumePage() {
  return (
    <>
      <PageHeader
        eyebrow="Resume"
        title="Ronald Korir"
        description="Mass Media and Communication graduate focused on digital marketing, SEO writing, content strategy, copywriting and multimedia storytelling."
      >
        <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
          <a
            href={site.resumeFile}
            download
            className="inline-flex h-9 items-center justify-center gap-1.5 rounded-lg border border-transparent bg-primary px-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/80"
          >
            <Download data-icon="inline-start" />
            Download PDF
          </a>
          <Link
            href="/contact"
            className="inline-flex h-9 items-center justify-center gap-1.5 rounded-lg border border-border bg-background px-2.5 text-sm font-medium text-foreground transition-all hover:bg-muted"
          >
            Get in touch
            <ArrowUpRight data-icon="inline-end" />
          </Link>
        </div>

        <dl className="flex flex-wrap gap-x-8 gap-y-3 pt-4">
          {contactChannels.map((channel) => (
            <div key={channel.label} className="flex flex-col gap-1">
              <dt className="eyebrow">{channel.label}</dt>
              <dd className="text-sm">
                {channel.href ? (
                  <a
                    href={channel.href}
                    className="link-underline text-foreground"
                  >
                    {channel.value}
                  </a>
                ) : (
                  <span className="text-foreground">{channel.value}</span>
                )}
              </dd>
            </div>
          ))}
        </dl>
      </PageHeader>

      {/* Education */}
      <Section>
        <SectionHeading
          eyebrow="Education"
          title="Academic background"
          description="Formal training across print, broadcast and digital media."
        />

        <div className="mt-10 flex flex-col gap-6">
          {education.map((item) => (
            <Reveal key={item.degree}>
              <Card>
                <CardHeader>
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-start gap-4">
                      <div className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-lg border border-border bg-muted/60 text-brand">
                        <GraduationCap
                          className="size-[18px]"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <CardTitle className="text-lg text-balance">
                          {item.degree}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">
                          {item.school}
                          <span aria-hidden="true"> · </span>
                          {item.location}
                        </p>
                      </div>
                    </div>
                    <span className="shrink-0 font-mono text-xs text-muted-foreground tabular-nums sm:pt-1">
                      {item.period}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="flex flex-col gap-2 sm:pl-14">
                    {item.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[7px] size-1 shrink-0 rounded-full bg-brand"
                        />
                        <span className="text-pretty">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section bordered>
        <SectionHeading
          eyebrow="Experience"
          title="Professional experience"
          description="Newsroom reporting alongside independent content and communications work."
        />

        <div className="mt-10 flex flex-col gap-6">
          {experience.map((item) => (
            <Reveal key={`${item.role}-${item.company}`}>
              <Card>
                <CardHeader>
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-start gap-4">
                      <div className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-lg border border-border bg-muted/60 text-brand">
                        <Briefcase className="size-[18px]" aria-hidden="true" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <CardTitle className="text-lg text-balance">
                          {item.role}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">
                          {item.company}
                          <span aria-hidden="true"> · </span>
                          {item.location}
                        </p>
                      </div>
                    </div>
                    <span className="shrink-0 font-mono text-xs text-muted-foreground tabular-nums sm:pt-1">
                      {item.period}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="flex flex-col gap-2 sm:pl-14">
                    {item.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[7px] size-1 shrink-0 rounded-full bg-brand"
                        />
                        <span className="text-pretty">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section bordered>
        <SectionHeading
          eyebrow="Skills"
          title="Capabilities & tools"
          description="What I bring to a brief, from strategy through to execution."
        />

        <RevealGroup className="mt-10 grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <RevealItem key={group.title}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-sm">{group.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <li key={skill}>
                        <Badge variant="secondary">{skill}</Badge>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </RevealItem>
          ))}

          <RevealItem>
            <Card className="h-full">
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
              </CardContent>
            </Card>
          </RevealItem>
        </RevealGroup>
      </Section>

      <CtaSection />
    </>
  )
}
