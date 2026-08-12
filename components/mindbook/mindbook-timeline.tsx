'use client'

import * as React from 'react'
import Link from 'next/link'
import { ArrowUpRightIcon } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'

import type { WritingPiece } from '@/lib/site'

type MindbookTimelineProps = {
  writing: WritingPiece[]
}

const CATEGORY_ORDER = [
  'Marketing & Strategy',
  'Journalism & News Reporting',
  'Thought Leadership',
  'Scripts',
  'Social Media',
  'Creative Writing',
] as const

function getYearValue(year: string) {
  const match = year.match(/\d{4}/)
  return match ? Number(match[0]) : 0
}

function getLatestByCategory(writing: WritingPiece[]) {
  return CATEGORY_ORDER.map((category) => {
    const articles = writing
      .filter((piece) => piece.category === category)
      .sort((a, b) => {
        return getYearValue(b.year) - getYearValue(a.year)
      })

    return articles[0] ?? null
  }).filter(Boolean) as WritingPiece[]
}

export function MindbookTimeline({
  writing,
}: MindbookTimelineProps) {
  const reduceMotion = useReducedMotion()

  const featured = React.useMemo(
    () => getLatestByCategory(writing),
    [writing],
  )

  const sorted = React.useMemo(
    () =>
      [...featured].sort(
        (a, b) => getYearValue(b.year) - getYearValue(a.year),
      ),
    [featured],
  )

  if (sorted.length === 0) {
    return (
      <div className="rounded-2xl border border-border bg-muted/30 p-8 text-center">
        <p className="text-sm text-muted-foreground">
          My Mindbook is taking shape. New writing will appear here as it is
          published.
        </p>
      </div>
    )
  }

  return (
    <div className="relative">
      {/* Desktop centre line */}
      <div
        className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-border lg:block"
        aria-hidden="true"
      />

      {/* Mobile line */}
      <div
        className="absolute left-4 top-0 h-full w-px bg-border lg:hidden"
        aria-hidden="true"
      />

      <div className="flex flex-col gap-16 lg:gap-24">
        {sorted.map((piece, index) => {
          const isLeft = index % 2 === 0

          return (
            <motion.article
              key={piece.slug}
              initial={
                reduceMotion
                  ? undefined
                  : {
                      opacity: 0,
                      y: 35,
                    }
              }
              whileInView={
                reduceMotion
                  ? undefined
                  : {
                      opacity: 1,
                      y: 0,
                    }
              }
              viewport={{
                once: true,
                margin: '-100px',
              }}
              transition={{
                duration: 0.65,
                delay: reduceMotion ? 0 : 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative"
            >
              {/* Timeline dot */}
              <div
                className="absolute left-4 top-8 z-10 flex size-3 -translate-x-1/2 items-center justify-center rounded-full border-2 border-background bg-brand shadow-sm lg:left-1/2"
                aria-hidden="true"
              />

              <div
                className={[
                  'grid lg:grid-cols-2',
                  isLeft
                    ? 'lg:pr-16'
                    : 'lg:pl-16',
                ].join(' ')}
              >
                <div
                  className={[
                    'ml-10 lg:ml-0',
                    isLeft
                      ? 'lg:col-start-1'
                      : 'lg:col-start-2',
                  ].join(' ')}
                >
                  <Link
                    href={piece.href}
                    className="group block"
                  >
                    <div className="overflow-hidden rounded-2xl border border-border bg-background transition-all duration-300 group-hover:-translate-y-1 group-hover:border-foreground/20 group-hover:shadow-xl group-hover:shadow-foreground/5">
                      {/* Image */}
                      <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                        {piece.image ? (
                          <img
                            src={piece.image}
                            alt={piece.imageAlt}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
                            {piece.category}
                          </div>
                        )}

                        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/60 via-black/20 to-transparent p-5 pt-12">
                          <span className="text-xs font-medium uppercase tracking-[0.14em] text-white">
                            {piece.category}
                          </span>

                          <ArrowUpRightIcon
                            className="size-5 text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            aria-hidden="true"
                          />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex flex-col gap-4 p-6 sm:p-7">
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <span>{piece.year}</span>
                          <span
                            className="size-1 rounded-full bg-border"
                            aria-hidden="true"
                          />
                          <span>{piece.readTime}</span>
                        </div>

                        <h3 className="text-xl font-semibold tracking-tight text-balance sm:text-2xl">
                          {piece.title}
                        </h3>

                        <p className="leading-relaxed text-muted-foreground text-pretty">
                          {piece.excerpt}
                        </p>

                        <span className="mt-1 inline-flex items-center gap-2 text-sm font-medium text-foreground">
                          Read piece
                          <ArrowUpRightIcon
                            className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </motion.article>
          )
        })}
      </div>
    </div>
  )
}