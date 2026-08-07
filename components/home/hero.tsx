'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRightIcon, DownloadIcon, MapPinIcon } from 'lucide-react'

import { Container } from '@/components/section'
import { Button } from '@/components/ui/button'
import { easeOutExpo } from '@/components/motion/reveal'
import { site } from '@/lib/site'

export function Hero() {
  const reduceMotion = useReducedMotion()

  const rise = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.75, ease: easeOutExpo, delay },
        }

  return (
    <section className="relative overflow-hidden">
      {/* Hairline grid backdrop, faded out toward the bottom. */}
      <div
        aria-hidden="true"
        className="bg-grid mask-fade-b pointer-events-none absolute inset-0 opacity-60"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-brand/8 blur-3xl"
      />

      <Container className="relative pt-16 pb-20 sm:pt-24 sm:pb-24 lg:pt-28 lg:pb-32">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-20">
          <div className="flex flex-col items-start">
            <motion.div
              {...rise(0)}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 py-1 pr-3.5 pl-1.5 backdrop-blur-sm"
            >
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-brand" />
              </span>
              <span className="text-xs font-medium text-muted-foreground">
                {site.availability}
              </span>
            </motion.div>

            <motion.h1
              {...rise(0.06)}
              className="text-display mt-7 text-[clamp(2.75rem,9vw,5.25rem)] font-semibold"
            >
              {site.name}
            </motion.h1>

            <motion.p
              {...rise(0.12)}
              className="mt-5 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-sm font-medium text-muted-foreground sm:text-base"
            >
              {site.roles.map((role, index) => (
                <span key={role} className="flex items-center gap-2.5">
                  {index > 0 && (
                    <span
                      className="size-1 rounded-full bg-border"
                      aria-hidden="true"
                    />
                  )}
                  {role}
                </span>
              ))}
            </motion.p>

            <motion.p
              {...rise(0.18)}
              className="mt-7 max-w-xl text-lg leading-relaxed text-pretty text-foreground/80 sm:text-xl"
            >
              {site.intro}
            </motion.p>

            <motion.div
              {...rise(0.24)}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button
                size="lg"
                className="h-11 rounded-full px-6 text-[0.9375rem]"
                render={<Link href="/writing" />}
              >
                View Portfolio
                <ArrowRightIcon data-icon="inline-end" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-11 rounded-full px-6 text-[0.9375rem]"
                render={
                  <a href={site.resumeFile} download aria-label="Download resume as PDF" />
                }
              >
                <DownloadIcon data-icon="inline-start" />
                Download Resume
              </Button>
            </motion.div>

            <motion.p
              {...rise(0.3)}
              className="mt-8 flex items-center gap-1.5 text-sm text-muted-foreground"
            >
              <MapPinIcon className="size-3.5" aria-hidden="true" />
              {site.location}
            </motion.p>
          </div>

          <motion.div
            {...(reduceMotion
              ? {}
              : {
                  initial: { opacity: 0, scale: 0.96, y: 20 },
                  animate: { opacity: 1, scale: 1, y: 0 },
                  transition: { duration: 0.9, ease: easeOutExpo, delay: 0.1 },
                })}
            className="relative mx-auto w-full max-w-sm lg:mx-0 lg:w-[22rem]"
          >
            <div className="relative aspect-4/5 overflow-hidden rounded-2xl bg-muted ring-1 ring-foreground/10">
            <img
  src="/ronald-korir-portrait.jpg"
  alt="Ronald Korir"
  className="absolute inset-0 h-full w-full object-cover"
/>
            </div>
            {/* Signature caption card, offset like an editorial credit line. */}
            <div className="absolute -bottom-5 -left-4 rounded-xl border border-border bg-card/95 px-4 py-3 shadow-sm backdrop-blur-sm sm:-left-6">
              <p className="font-serif text-lg leading-none italic">Ronald Korir</p>
              <p className="mt-1.5 text-xs text-muted-foreground">
                BA Mass Media and Communication
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
