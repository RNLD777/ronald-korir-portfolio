import Link from "next/link";
import Image from "next/image";
import { ArrowUpRightIcon, ClockIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { WritingPiece } from "@/lib/site";
import { cn } from "@/lib/utils";

export function WritingCard({
  piece,
  className,
  compact = false,
}: {
  piece: WritingPiece;
  className?: string;
  compact?: boolean;
}) {
  return (
    <Card
      className={cn(
        "group relative h-full gap-0 py-0 transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-foreground/5",
        className
      )}
    >
      {piece.image ? (
        <div className={cn(
          "relative overflow-hidden border-b border-border/70 bg-muted",
          compact ? "aspect-[4/3] sm:aspect-[16/10]" : "aspect-[16/10]"
        )}>
          <Image
            src={piece.image}
            alt={piece.imageAlt}
            fill
            sizes={compact
              ? "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 50vw"
              : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"}
            priority={piece.featured}
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </div>
      ) : null}

      <CardHeader className={cn("gap-0 pb-0", compact ? "p-3 sm:p-6" : "p-6")}>
        <div className="flex items-center justify-between gap-2">
          <Badge variant="outline" className="max-w-full truncate border-brand/25 text-brand">
            {piece.category}
          </Badge>

          <span className="shrink-0 text-xs text-muted-foreground">
            {piece.year}
          </span>
        </div>

        <CardTitle className={cn(
          "font-semibold leading-snug tracking-tight text-balance",
          compact ? "mt-3 text-sm sm:mt-4 sm:text-lg" : "mt-4 text-lg"
        )}>
          <Link
            href={`/projects/${piece.slug}`}
            className="outline-none after:absolute after:inset-0 after:rounded-xl focus-visible:after:ring-3 focus-visible:after:ring-ring/50"
          >
            <span className="relative">{piece.title}</span>
          </Link>
        </CardTitle>
      </CardHeader>

      <CardContent className={cn(
        "flex flex-1 flex-col",
        compact ? "gap-3 p-3 pt-2 sm:gap-5 sm:p-6 sm:pt-3" : "gap-5 p-6 pt-3"
      )}>
        <CardDescription className={cn(
          "leading-relaxed",
          compact && "line-clamp-3 text-xs sm:text-sm"
        )}>
          {piece.excerpt}
        </CardDescription>

        <div className={cn(
          "mt-auto flex items-center justify-between border-t border-border",
          compact ? "gap-1 pt-3 sm:gap-3 sm:pt-4" : "gap-3 pt-4"
        )}>
          <div className={cn(
            "flex min-w-0 items-center text-muted-foreground",
            compact ? "gap-1 text-[10px] sm:gap-2.5 sm:text-xs" : "gap-2.5 text-xs"
          )}>
            <span className="truncate font-medium text-foreground/70">
              {piece.publication}
            </span>

            <span
              className="size-1 shrink-0 rounded-full bg-border"
              aria-hidden="true"
            />

            <span className="flex shrink-0 items-center gap-1">
              <ClockIcon className="size-3" aria-hidden="true" />
              {piece.readTime}
            </span>
          </div>

          <ArrowUpRightIcon
            className="size-4 shrink-0 text-muted-foreground/50 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand"
            aria-hidden="true"
          />
        </div>
      </CardContent>
    </Card>
  );
}
