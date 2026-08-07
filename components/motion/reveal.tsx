'use client'

import * as React from 'react'
import { motion, useReducedMotion, type Variants } from 'framer-motion'

import { cn } from '@/lib/utils'

const EASE = [0.16, 1, 0.3, 1] as const

type RevealProps = {
  children: React.ReactNode
  className?: string
  /** Seconds to wait before animating in. */
  delay?: number
  /** Pixels to travel on the Y axis. */
  y?: number
  as?: 'div' | 'section' | 'li' | 'span' | 'article' | 'header' | 'footer'
}

/**
 * Fades and lifts its children into view once, when scrolled into the viewport.
 * Respects `prefers-reduced-motion` by rendering the final state immediately.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 14,
  as = 'div',
}: RevealProps) {
  const reduceMotion = useReducedMotion()
  const Component = motion[as]

  if (reduceMotion) {
    const Static = as
    return <Static className={className}>{children}</Static>
  }

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-64px' }}
      transition={{ duration: 0.6, ease: EASE, delay }}
    >
      {children}
    </Component>
  )
}

/**
 * Parent wrapper that staggers `RevealItem` children as the group enters view.
 */
export function RevealGroup({
  children,
  className,
  stagger = 0.07,
  delay = 0,
  as = 'div',
}: Omit<RevealProps, 'y'> & { stagger?: number }) {
  const reduceMotion = useReducedMotion()
  const Component = motion[as]

  if (reduceMotion) {
    const Static = as
    return <Static className={className}>{children}</Static>
  }

  const variants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  }

  return (
    <Component
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-64px' }}
    >
      {children}
    </Component>
  )
}

export const revealItemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
}

export function RevealItem({
  children,
  className,
  as = 'div',
}: {
  children: React.ReactNode
  className?: string
  as?: 'div' | 'li' | 'article' | 'span'
}) {
  const reduceMotion = useReducedMotion()
  const Component = motion[as]

  if (reduceMotion) {
    const Static = as
    return <Static className={className}>{children}</Static>
  }

  return (
    <Component className={className} variants={revealItemVariants}>
      {children}
    </Component>
  )
}

/** Shared cubic-bezier so ad-hoc animations match the reveal system. */
export const easeOutExpo = EASE

/** Utility for composing hover-lift classes consistently. */
export const hoverLift = cn(
  'transition-[transform,box-shadow,border-color] duration-300 ease-out',
  'hover:-translate-y-1',
)
