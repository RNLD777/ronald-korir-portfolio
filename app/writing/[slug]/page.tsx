import Image from "next/image";
import { notFound } from "next/navigation";

import { getWriting } from "@/lib/notion/writing";
import { getArticleBySlug } from "@/lib/notion/get-article-by-slug";
import { getArticle } from "@/lib/notion/article";

import { NotionRenderer } from "@/components/notion/renderer";

export async function generateStaticParams() {
  const writing = await getWriting();

  return writing.map((article) => ({
    slug: article.slug,
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
    <main className="container py-16">
      {data.coverImage && (
        <div className="relative mb-10 aspect-[16/8] overflow-hidden rounded-3xl">
          <Image
            src={data.coverImage}
            alt={article.title}
            fill
            priority
            className="object-cover"
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