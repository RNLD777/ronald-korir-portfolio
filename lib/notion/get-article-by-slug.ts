import { unstable_cache } from "next/cache";

import { notion } from "./client";
import { mapWriting } from "./map-writing";

const DATA_SOURCE_ID = "23ffc6b9-7792-490e-b8ec-100c402df5d6";

async function fetchArticleBySlug(slug: string) {
  const response = await notion.dataSources.query({
    data_source_id: DATA_SOURCE_ID,
    page_size: 100,
  });

  const article = response.results
    .map((page: any) => mapWriting(page))
    .find((article) => article.slug === slug);

  return article ?? null;
}

export async function getArticleBySlug(slug: string) {
  return unstable_cache(
    () => fetchArticleBySlug(slug),
    ["article-by-slug", slug],
    {
      revalidate: 86400,
    }
  )();
}