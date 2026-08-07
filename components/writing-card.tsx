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
}: {
  piece: WritingPiece;
  className?: string;
}) {
  return (
    <Card
      className={cn(
        "group relative h-full gap-0 py-0 transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-foreground/5",
        className
      )}
    >
      {piece.image ? (
        <div className="relative aspect-[16/10] overflow-hidden border-b border-border/70 bg-muted">
          <Image
            src={piece.image}
            alt={piece.imageAlt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            priority={piece.featured}
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </div>
      ) : null}

      <CardHeader className="gap-0 p-6 pb-0">
        <div className="flex items-center justify-between gap-3">
          <Badge variant="outline" className="border-brand/25 text-brand">
            {piece.category}
          </Badge>

          <span className="text-xs text-muted-foreground">
            {piece.year}
          </span>
        </div>

        <CardTitle className="mt-4 text-lg leading-snug font-semibold tracking-tight text-balance">
          <Link
            href={`/writing/${piece.slug}`}
            className="outline-none after:absolute after:inset-0 after:rounded-xl focus-visible:after:ring-3 focus-visible:after:ring-ring/50"
          >
            <span className="relative">{piece.title}</span>
          </Link>
        </CardTitle>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col gap-5 p-6 pt-3">
        <CardDescription className="leading-relaxed">
          {piece.excerpt}
        </CardDescription>

        <div className="mt-auto flex items-center justify-between gap-3 border-t border-border pt-4">
          <div className="flex min-w-0 items-center gap-2.5 text-xs text-muted-foreground">
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