import Image from "next/image";
import { notFound } from "next/navigation";

import { getArticleBySlug, getArticleSlugs } from "@/lib/notion/get-article-by-slug";
import { getArticle } from "@/lib/notion/article";

import { NotionRenderer } from "@/components/notion/renderer";

export const dynamicParams = true;

export async function generateStaticParams() {
  const slugs = await getArticleSlugs();

  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const data = await getArticle(article.id);

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      {data.coverImage && (
        <div className="mb-12 overflow-hidden rounded-2xl">
          <Image
            src={data.coverImage}
            alt={article.title}
            width={1600}
            height={900}
            className="h-auto w-full object-cover"
            priority
          />
        </div>
      )}

      <div className="mb-12">
        <p className="mb-3 text-sm font-medium uppercase tracking-wider text-brand">
          {article.category}
        </p>

        <h1 className="text-5xl font-bold tracking-tight">
          {article.title}
        </h1>

        <div className="mt-5 flex flex-wrap gap-4 text-sm text-muted-foreground">
          {article.year && <span>{article.year}</span>}
          {article.readTime && <span>{article.readTime}</span>}
        </div>
      </div>

      <NotionRenderer blocks={data.blocks} />

      <div className="mt-16 border-t pt-8">
        <a
          href={article.href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-brand hover:underline"
        >
          Read the original article →
        </a>
      </div>
    </main>
  );
}