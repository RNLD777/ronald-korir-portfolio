'use client'

import * as React from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

import { WritingCard } from '@/components/writing-card'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from '@/components/ui/empty'
import { writingCategories } from '@/lib/site'
import type { WritingPiece } from '@/lib/site'

type Filter = (typeof writingCategories)[number]


export function WritingGallery({
  writing,
}: {
  writing: WritingPiece[];
}) {
  const [active, setActive] = React.useState<Filter>('All')
  const reduceMotion = useReducedMotion()

  const counts = React.useMemo(() => {
    const map = new Map<string, number>([['All', writing.length]])
    for (const piece of writing) {
      map.set(piece.category, (map.get(piece.category) ?? 0) + 1)
    }
    return map
  }, [])

  const filtered = React.useMemo(
    () =>
      active === 'All'
        ? writing
        : writing.filter((piece) => piece.category === active),
    [active],
  )

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <ToggleGroup
            variant="outline"
            size="sm"
            aria-label="Filter writing by category"
            value={[active]}
            onValueChange={(value) => {
              // Base UI emits an array; ignore de-selection so one filter is always on.
              const next = value[0] as Filter | undefined
              if (next) setActive(next)
            }}
            className="flex-wrap"
          >
            {writingCategories.map((category) => (
              <ToggleGroupItem key={category} value={category}>
                {category}
                <span className="ml-1.5 text-xs text-muted-foreground tabular-nums">
                  {counts.get(category) ?? 0}
                </span>
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>

        <p aria-live="polite" className="text-sm text-muted-foreground">
          Showing {filtered.length}{' '}
          {filtered.length === 1 ? 'piece' : 'pieces'}
          {active !== 'All' ? ` in ${active}` : ''}.
        </p>
      </div>

      {filtered.length === 0 ? (
        <Empty>
          <EmptyHeader>
            <EmptyTitle>Nothing here yet</EmptyTitle>
            <EmptyDescription>
              There are no published pieces in this category at the moment.
            </EmptyDescription>
          </EmptyHeader>
        </Empty>
      ) : (
        <motion.ul
          layout={!reduceMotion}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {filtered.map((piece) => (
              <motion.li
                key={piece.slug}
                layout={!reduceMotion}
                initial={reduceMotion ? undefined : { opacity: 0, scale: 0.97 }}
                animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
                exit={reduceMotion ? undefined : { opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              >
                <WritingCard piece={piece} />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      )}
    </div>
  )
}
