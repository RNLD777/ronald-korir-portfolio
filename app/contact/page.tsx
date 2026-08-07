import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'

import { CtaSection } from '@/components/cta-section'
import { PageHeader, Section, SectionHeading } from '@/components/section'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { site, socialLinks } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact',
  description: `Contact ${site.name} for content writing, digital marketing, communications and multimedia storytelling work.`,
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let’s talk about your next content project"
        description="I am available for content writing, SEO, digital marketing, communications, multimedia storytelling and freelance work."
      />

      <Section>
        <SectionHeading
          eyebrow="Get in touch"
          title="Reach out directly"
          description="I’m happy to discuss new briefs, collaborations and opportunities."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Contact details</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <a href={`mailto:${site.email}`} className="flex items-start gap-3 rounded-lg border border-border p-3 transition-colors hover:bg-muted/40">
                <Mail className="mt-0.5 size-4 shrink-0 text-brand" />
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">{site.email}</p>
                </div>
              </a>
              <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="flex items-start gap-3 rounded-lg border border-border p-3 transition-colors hover:bg-muted/40">
                <Phone className="mt-0.5 size-4 shrink-0 text-brand" />
                <div>
                  <p className="text-sm font-medium">Phone</p>
                  <p className="text-sm text-muted-foreground">{site.phone}</p>
                </div>
              </a>
              <div className="flex items-start gap-3 rounded-lg border border-border p-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-brand" />
                <div>
                  <p className="text-sm font-medium">Location</p>
                  <p className="text-sm text-muted-foreground">{site.location}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Elsewhere</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center justify-between rounded-lg border border-border p-3 text-sm transition-colors hover:bg-muted/40"
                >
                  <span className="font-medium">{social.label}</span>
                  <span className="flex items-center gap-1 text-muted-foreground">
                    {social.handle}
                    <ArrowUpRight className="size-3.5" />
                  </span>
                </a>
              ))}
            </CardContent>
          </Card>
        </div>
      </Section>

      <CtaSection />
    </>
  )
}
