import Link from 'next/link'
import { ArrowUpRightIcon } from 'lucide-react'

import { Separator } from '@/components/ui/separator'
import { navLinks, site, socialLinks } from '@/lib/site'

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer
      data-site-footer
      className="mt-24 border-t border-border bg-surface"
    >
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="text-lg font-medium tracking-tight">{site.name}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Content writer and digital marketer focused on SEO, communication, storytelling and multimedia content for brands and organisations.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand underline-offset-4 hover:underline"
            >
              Start a conversation
              <ArrowUpRightIcon className="size-3.5" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:gap-16">
            <div>
              <h2 className="eyebrow">Pages</h2>
              <ul className="mt-4 flex flex-col gap-2.5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="eyebrow">Elsewhere</h2>
              <ul className="mt-4 flex flex-col gap-2.5">
                {socialLinks.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target={social.href.startsWith('http') ? '_blank' : undefined}
                      rel={
                        social.href.startsWith('http')
                          ? 'noopener noreferrer'
                          : undefined
                      }
                      className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <social.icon className="size-4" aria-hidden="true" />
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Separator className="my-10" />

        <div className="flex flex-col gap-3 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-2">
            <span
              className="size-1.5 rounded-full bg-brand"
              aria-hidden="true"
            />
            {site.availability} — {site.location}
          </p>
        </div>
      </div>
    </footer>
  )
}
