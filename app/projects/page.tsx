import type { Metadata } from 'next'
import Image from 'next/image'

import { CtaSection } from '@/components/cta-section'
import { PageHeader, Section, SectionHeading } from '@/components/section'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { projects, site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Projects',
  description: `Selected projects and work samples from ${site.name}.`,
  alternates: { canonical: '/projects' },
}

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Real work, shared with care"
        description="I am building this section around authentic projects and professional work samples. Until those are ready to share, I am keeping the portfolio clear, honest and up to date."
      />

      <Section>
        <SectionHeading
          eyebrow="Portfolio"
          title="Current project highlights"
          description="This space will grow as new content, campaigns and multimedia work become available."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.slug} className="h-full overflow-hidden">
              <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-muted">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between gap-4">
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <span className="text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
                    {project.year}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {project.summary}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border bg-muted/60 px-2.5 py-1 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <CtaSection />
    </>
  )
}
