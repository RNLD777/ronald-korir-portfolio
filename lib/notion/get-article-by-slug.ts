import { notion } from "./client";
import { mapWriting } from "./map-writing";

const DATA_SOURCE_ID = "23ffc6b9-7792-490e-b8ec-100c402df5d6";

export async function getArticleBySlug(slug: string) {
  const response = await notion.dataSources.query({
    data_source_id: DATA_SOURCE_ID,
    page_size: 100,
  });

  const articles = response.results.map((page: any) => mapWriting(page));

  return articles.find((article) => article.slug === slug) ?? null;
}