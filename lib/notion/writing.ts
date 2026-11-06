import { unstable_cache } from "next/cache";

import { notion } from "./client";
import { mapWriting } from "./map-writing";

const DATA_SOURCE_ID = "23ffc6b9-7792-490e-b8ec-100c402df5d6";

const MINDBOOK_CATEGORIES = [
  "Marketing & Strategy",
  "Journalism & Reporting",
  "Analysis & Commentary",
  "Scripts",
  "Social Media",
  "Creative Writing",
] as const;

// These are deliberately selected passages, not automatically chosen opening lines.
const CURATED_QUOTES: Record<string, string> = {
  "Privilege Blindness":
    "We view some things as basic things that we all have, but other people have to struggle to have what you dismiss as ordinary.",
  "The Good Child Syndrome":
    "You make a decision just because your parents would be against it. Instead of independence, your parents still affect your decisions but more negatively.",
  "GOOD vs BAD VIRALITY":
    "The numbers from social media feeds their egos and makes them feel like they are doing really well.",
  "Turning Social Media Into a Customer Relationship":
    "People follow brands for products, but they also follow them because they like the world around the product.",
  "Peace Out":
    "People will always talk. Just do what sits right with you. Not your friends. Not your parents. You. Just you.",
};

function getNotionImageUrl(blockId: string) {
  return `/api/notion-image?blockId=${encodeURIComponent(blockId)}`;
}

async function getFirstImage(pageId: string) {
  let cursor: string | undefined = undefined;
  let image = "/placeholder.jpg";

  do {
    const response = await notion.blocks.children.list({
      block_id: pageId,
      page_size: 100,
      start_cursor: cursor,
    });

    for (const block of response.results as any[]) {
      if (block.type === "image" && image === "/placeholder.jpg") {
        if (block.image.type === "external") {
          image = block.image.external.url;
        } else if (block.image.type === "file") {
          image = getNotionImageUrl(block.id);
        }
      }
    }

    if (image !== "/placeholder.jpg" || !response.has_more) break;
    cursor = response.next_cursor ?? undefined;
  } while (cursor);

  return image;
}

async function fetchWriting() {
  const response = await notion.dataSources.query({
    data_source_id: DATA_SOURCE_ID,
    page_size: 100,
  });

  const articles = await Promise.all(
    response.results.map(async (page: any) => {
      const article = mapWriting(page);
      article.image = await getFirstImage(page.id);
      return article;
    })
  );

  return articles;
}

async function fetchMindbook() {
  const response = await notion.dataSources.query({
    data_source_id: DATA_SOURCE_ID,
    page_size: 100,
  });

  const candidates = response.results
    .map((page: any) => {
      const article = mapWriting(page);

      if (!MINDBOOK_CATEGORIES.includes(article.category)) {
        return null;
      }

      const published = page.properties?.Published;

      if (
        !published ||
        published.type !== "date" ||
        !published.date?.start
      ) {
        return null;
      }

      return {
        page,
        article,
        mindbookDate: published.date.start,
      };
    })
    .filter(Boolean) as Array<{
    page: any;
    article: any;
    mindbookDate: string;
  }>;

  candidates.sort((a, b) => {
    return (
      new Date(b.mindbookDate).getTime() -
      new Date(a.mindbookDate).getTime()
    );
  });

  const latestByCategory = new Map<string, (typeof candidates)[number]>();

  for (const candidate of candidates) {
    if (!latestByCategory.has(candidate.article.category)) {
      latestByCategory.set(candidate.article.category, candidate);
    }
  }

  // Keep the latest piece in each discipline, then add the specific pieces
  // chosen for the quotation feature even when they are not the latest.
  const selectedBySlug = new Map<string, (typeof candidates)[number]>();
  for (const candidate of latestByCategory.values()) {
    selectedBySlug.set(candidate.article.slug, candidate);
  }
  for (const candidate of candidates) {
    if (CURATED_QUOTES[candidate.article.title]) {
      selectedBySlug.set(candidate.article.slug, candidate);
    }
  }

  const selected = await Promise.all(
    Array.from(selectedBySlug.values()).map(async ({ page, article, mindbookDate }) => ({
      ...article,
      image: await getFirstImage(page.id),
      mindbookDate,
      quote: CURATED_QUOTES[article.title],
    }))
  );

  return selected.sort((a, b) => {
    return (
      new Date(b.mindbookDate).getTime() -
      new Date(a.mindbookDate).getTime()
    );
  });
}

export const getWriting = unstable_cache(
  async () => {
    return fetchWriting();
  },
  ["writing-v3"],
  {
    revalidate: 300,
  }
);

export const getMindbook = unstable_cache(
  async () => {
    return fetchMindbook();
  },
  ["mindbook-v3"],
  {
    revalidate: 86400,
  }
);
