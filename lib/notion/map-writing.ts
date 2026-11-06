import type { WritingCategory, WritingPiece } from "@/lib/site";

const CATEGORY_MAP: Record<string, WritingCategory> = {
  "📈 Marketing & Strategy": "Marketing & Strategy",
  "✍️ Creative Writing": "Creative Writing",
  "📰 Journalism & Reporting": "Journalism & Reporting",
  "📱 Social Media": "Social Media",
  "💡 Analysis & Commentary": "Analysis & Commentary",
  "🎬 Scripts": "Scripts",
  "💻 Web Development": "Web Development",
};

function getCategory(page: any): WritingCategory {
  const keywords = propsToKeywords(page.properties?.Keywords);

  for (const keyword of keywords) {
    const category = CATEGORY_MAP[keyword];

    if (category) {
      return category;
    }
  }

  return "Creative Writing";
}

function propsToKeywords(property: any): string[] {
  return (
    property?.multi_select
      ?.map((option: { name?: string }) => option.name)
      .filter((name: string | undefined): name is string => Boolean(name)) ?? []
  );
}

function getCardSummary(property: any): string {
  const summary = property?.rich_text
    ?.map((part: { plain_text?: string }) => part.plain_text ?? "")
    .join(" ")
    .replace(/\\s+/g, " ")
    .trim() ?? "";

  if (!summary) return "";

  // Keep card copy short enough to read without an awkward mid-sentence cutoff.
  const firstSentence = summary.match(/^.{1,500}?[.!?](?:\\s|$)/)?.[0]?.trim() ?? summary;
  const words = firstSentence.split(" ");
  const concise = words.slice(0, 13).join(" ");

  if (concise.length <= 88 && words.length <= 13) return concise;
  const clipped = concise.length > 88
    ? concise.slice(0, 88).replace(/\\s+\\S*$/, "")
    : concise;

  return `${clipped.replace(/[.,;:!?]+$/, "")}…`;
}

export function mapWriting(page: any): WritingPiece {
  const props = page.properties;

  return {
    id: page.id,

    slug: (props.Title?.title?.[0]?.plain_text ?? "untitled")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, ""),

    title: props.Title?.title?.[0]?.plain_text ?? "Untitled",

    category: getCategory(page),

    publication: "Portfolio",

    year: props.Published?.date?.start?.slice(0, 4) ?? "",

    readTime: props["Reading time (min)"]?.number
      ? `${props["Reading time (min)"].number} min`
      : "",

    excerpt: getCardSummary(props.Summary),

    href: props.Link?.url ?? page.public_url,

    featured: props.Featured?.checkbox ?? false,

    image: "/placeholder.jpg",

    imageAlt: props.Title?.title?.[0]?.plain_text ?? "",
  };
}