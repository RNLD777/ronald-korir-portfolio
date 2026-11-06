import { unstable_cache } from "next/cache";

import { notion } from "./client";
import { mapWriting } from "./map-writing";

const DATA_SOURCE_ID = "23ffc6b9-7792-490e-b8ec-100c402df5d6";

// Share one cached Notion database read across every project route.
// Previously, each slug triggered its own full data-source query during build.
const getArticlesIndex = unstable_cache(
  async () => {
    const response = await notion.dataSources.query({
      data_source_id: DATA_SOURCE_ID,
      page_size: 100,
    });

    return response.results.map((page: any) => mapWriting(page));
  },
  ["articles-index-v3"],
  {
    revalidate: 300,
  }
);

export async function getArticleBySlug(slug: string) {
  const articles = await getArticlesIndex();
  return articles.find((article) => article.slug === slug) ?? null;
}

export const getArticleSlugs = unstable_cache(
  async () => {
    const articles = await getArticlesIndex();
    return articles.map((article) => article.slug);
  },
  ["article-slugs-v3"],
  {
    revalidate: 86400,
  }
);
