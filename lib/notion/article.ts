import { unstable_cache } from "next/cache";
import { notion } from "./client";

export const getArticle = unstable_cache(
  async (pageId: string) => {
    const page = await notion.pages.retrieve({
      page_id: pageId,
    });

    const response = await notion.blocks.children.list({
      block_id: pageId,
      page_size: 100,
    });

    const blocks = response.results as any[];

    let coverImage: string | null = null;

    // If the first block is an image, use it as the hero image
    if (blocks.length > 0 && blocks[0].type === "image") {
      const image = blocks[0];

      coverImage =
        image.image.type === "external"
          ? image.image.external.url
          : image.image.file.url;

      // Remove the first image so it doesn't appear twice
      blocks.shift();
    }

    return {
      page,
      coverImage,
      blocks,
    };
  },
  ["article"],
  {
    revalidate: 86400, // 24 hours
  }
);