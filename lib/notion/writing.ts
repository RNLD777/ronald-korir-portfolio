import { unstable_cache } from "next/cache";

import { notion } from "./client";
import { mapWriting } from "./map-writing";

const DATA_SOURCE_ID = "23ffc6b9-7792-490e-b8ec-100c402df5d6";

async function getFirstImage(pageId: string) {
  const blocks = await notion.blocks.children.list({
    block_id: pageId,
    page_size: 20,
  });

  const image = blocks.results.find(
    (block: any) => block.type === "image"
  ) as any;

  if (!image) return "/placeholder.jpg";

  if (image.image.type === "external") {
    return image.image.external.url;
  }

  return image.image.file.url;
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

export const getWriting = unstable_cache(
  async () => {
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
  },
  ["writing"],
  {
    revalidate: 86400, // 24 hours
  }
);