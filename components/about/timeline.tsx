import { Badge } from '@/components/ui/badge'
import { RevealGroup, RevealItem } from '@/components/motion/reveal'
import { timeline } from '@/lib/site'

export function Timeline() {
  return (
    <RevealGroup as="div" className="relative mt-12">
      {/* Vertical rail */}
      <span
        aria-hidden="true"
        className="absolute top-2 bottom-2 left-[7px] w-px bg-border sm:left-[calc(9rem+7px)]"
      />

      <ol className="flex flex-col gap-10 sm:gap-12">
        {timeline.map((entry) => (
          <RevealItem as="li" key={`${entry.period}-${entry.title}`}>
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-10">
              {/* Period — sits left of the rail on desktop */}
              <div className="order-2 shrink-0 sm:order-1 sm:w-36 sm:pt-0.5 sm:text-right">
                <span className="font-mono text-xs tracking-wide text-muted-foreground tabular-nums">
                  {entry.period}
                </span>
              </div>

              {/* Node */}
              <div className="relative order-1 pl-8 sm:order-2 sm:pl-8">
                <span
                  aria-hidden="true"
                  className="absolute top-1.5 left-0 flex size-[15px] items-center justify-center rounded-full border border-border bg-background"
                >
                  <span className="size-1.5 rounded-full bg-brand" />
                </span>

                <div className="flex flex-col gap-2.5">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-semibold text-balance">
                      {entry.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {entry.org}
                      {entry.location ? (
                        <>
                          <span aria-hidden="true"> · </span>
                          {entry.location}
                        </>
                      ) : null}
                    </p>
                  </div>

                  <p className="max-w-2xl text-sm leading-relaxed text-pretty text-muted-foreground">
                    {entry.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-0.5">
                    {entry.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </RevealItem>
        ))}
      </ol>
    </RevealGroup>
  )
}
