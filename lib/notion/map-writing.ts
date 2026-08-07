import type { WritingPiece } from "@/lib/site";

export function mapWriting(page: any): WritingPiece {
  const props = page.properties;

  return {
    id: page.id,

    slug: (props.Title?.title?.[0]?.plain_text ?? "untitled")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, ""),

    title: props.Title?.title?.[0]?.plain_text ?? "Untitled",

    category:
      props.Keywords?.multi_select?.[0]?.name?.replace(/^.+?\s/, "") ??
      "Creative Writing",

    publication: "Portfolio",

    year: props.Published?.date?.start?.slice(0, 4) ?? "",

    readTime: props["Reading time (min)"]?.number
      ? `${props["Reading time (min)"].number} min`
      : "",

    excerpt: props.Summary?.rich_text?.[0]?.plain_text ?? "",

    href: props.Link?.url ?? page.public_url,

    featured: props.Featured?.checkbox ?? false,

    image: "/placeholder.jpg",

    imageAlt: props.Title?.title?.[0]?.plain_text ?? "",
  };
}