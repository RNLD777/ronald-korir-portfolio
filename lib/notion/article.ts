import { unstable_cache } from "next/cache";

import { notion } from "./client";

async function fetchArticle(pageId: string) {
  const page = await notion.pages.retrieve({
    page_id: pageId,
  });

  const blocks: any[] = [];

  let cursor: string | undefined = undefined;

  do {
    const response = await notion.blocks.children.list({
      block_id: pageId,
      page_size: 100,
      start_cursor: cursor,
    });

    blocks.push(...response.results);

    cursor = response.has_more
      ? response.next_cursor ?? undefined
      : undefined;
  } while (cursor);

  let coverImage: string | null = null;

  // Use the first image as the hero image.
  if (blocks.length > 0 && blocks[0].type === "image") {
    const image = blocks[0];

    if (image.image.type === "external") {
      coverImage = image.image.external.url;
    } else if (image.image.type === "file") {
      coverImage = image.image.file.url;
    }

    // Prevent the hero image from appearing again in the article.
    blocks.shift();
  }

  return {
    page,
    coverImage,
    blocks,
  };
}

export const getArticle = unstable_cache(
  async (pageId: string) => {
    return fetchArticle(pageId);
  },
  ["article"],
  {
    revalidate: 86400,
  }
);