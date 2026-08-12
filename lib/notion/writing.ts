import { unstable_cache } from "next/cache";

import { notion } from "./client";
import { mapWriting } from "./map-writing";

const DATA_SOURCE_ID = "23ffc6b9-7792-490e-b8ec-100c402df5d6";

const MINDBOOK_CATEGORIES = [
  "Marketing & Strategy",
  "Journalism & News Reporting",
  "Thought Leadership",
  "Scripts",
  "Social Media",
  "Creative Writing",
] as const;

/**
 * Gets the first image from a Notion page.
 *
 * Important:
 * Notion-hosted file URLs are temporary signed URLs.
 * We therefore fetch the current URL whenever this function runs
 * rather than permanently storing the URL itself.
 */
async function getFirstImage(pageId: string) {
  let cursor: string | undefined = undefined;

  do {
    const response = await notion.blocks.children.list({
      block_id: pageId,
      page_size: 100,
      start_cursor: cursor,
    });

    const image = response.results.find(
      (block: any) => block.type === "image"
    ) as any;

    if (image) {
      if (image.image.type === "external") {
        return image.image.external.url;
      }

      if (image.image.type === "file") {
        return image.image.file.url;
      }

      return "/placeholder.jpg";
    }

    cursor = response.has_more
      ? response.next_cursor ?? undefined
      : undefined;
  } while (cursor);

  return "/placeholder.jpg";
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

  const selected = new Map<string, any>();

  for (const candidate of candidates) {
    const { page, article, mindbookDate } = candidate;

    if (selected.has(article.category)) {
      continue;
    }

    article.image = await getFirstImage(page.id);

    selected.set(article.category, {
      ...article,
      mindbookDate,
    });

    if (selected.size === MINDBOOK_CATEGORIES.length) {
      break;
    }
  }

  return Array.from(selected.values()).sort((a, b) => {
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
  ["writing"],
  {
    revalidate: 86400,
  }
);

export const getMindbook = unstable_cache(
  async () => {
    return fetchMindbook();
  },
  ["mindbook"],
  {
    revalidate: 86400,
  }
);