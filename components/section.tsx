import type * as React from 'react'

import { Reveal } from '@/components/motion/reveal'
import { cn } from '@/lib/utils'

export function Container({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={cn('mx-auto w-full max-w-6xl px-5 sm:px-8', className)}>
      {children}
    </div>
  )
}

export function Section({
  className,
  children,
  id,
  bordered = false,
}: {
  className?: string
  children: React.ReactNode
  id?: string
  /** Draws a hairline rule along the top edge of the section. */
  bordered?: boolean
}) {
  return (
    <section
      id={id}
      className={cn(
        'py-20 sm:py-24 lg:py-28',
        bordered && 'border-t border-border',
        className,
      )}
    >
      <Container>{children}</Container>
    </section>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'start',
  className,
  action,
}: {
  eyebrow?: string
  title: React.ReactNode
  description?: React.ReactNode
  align?: 'start' | 'center'
  className?: string
  action?: React.ReactNode
}) {
  return (
    <Reveal
      className={cn(
        'flex flex-col gap-4',
        align === 'center' && 'items-center text-center',
        action && 'sm:flex-row sm:items-end sm:justify-between sm:gap-8',
        className,
      )}
    >
      <div
        className={cn(
          'flex max-w-2xl flex-col gap-3',
          align === 'center' && 'items-center',
        )}
      >
        {eyebrow && (
          <div className="flex items-center gap-2.5">
            <span className="h-px w-6 bg-brand" aria-hidden="true" />
            <span className="eyebrow">{eyebrow}</span>
          </div>
        )}
        <h2 className="text-display-sm text-3xl font-semibold text-balance sm:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="text-base leading-relaxed text-pretty text-muted-foreground">
            {description}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </Reveal>
  )
}

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string
  title: React.ReactNode
  description?: React.ReactNode
  children?: React.ReactNode
}) {
  return (
    <div className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden="true"
        className="bg-grid mask-fade-b pointer-events-none absolute inset-0 opacity-50"
      />
      <Container className="relative py-16 sm:py-20 lg:py-24">
        <Reveal className="flex max-w-3xl flex-col gap-5">
          <div className="flex items-center gap-2.5">
            <span className="h-px w-6 bg-brand" aria-hidden="true" />
            <span className="eyebrow">{eyebrow}</span>
          </div>
          <h1 className="text-display text-4xl font-semibold text-balance sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="max-w-2xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
              {description}
            </p>
          )}
          {children}
        </Reveal>
      </Container>
    </div>
  )
}
