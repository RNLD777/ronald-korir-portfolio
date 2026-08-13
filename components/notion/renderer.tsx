"use client";

import Image from "next/image";
import type { ReactNode } from "react";

type Props = {
  blocks: any[];
};

function renderRichText(richText: any[]) {
  return richText.map((text, index) => {
    let content: ReactNode = text.plain_text;

    if (text.annotations.bold) {
      content = <strong>{content}</strong>;
    }

    if (text.annotations.italic) {
      content = <em>{content}</em>;
    }

    if (text.annotations.code) {
      content = (
        <code className="rounded bg-muted px-1 py-0.5">
          {content}
        </code>
      );
    }

    if (text.annotations.strikethrough) {
      content = <del>{content}</del>;
    }

    if (text.annotations.underline) {
      content = <u>{content}</u>;
    }

    if (text.href) {
      content = (
        <a
          href={text.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand underline"
        >
          {content}
        </a>
      );
    }

    return <span key={index}>{content}</span>;
  });
}

function getImageSrc(block: any) {
  if (block.image.type === "external") {
    return block.image.external.url;
  }

  if (block.image.type === "file") {
    return `/api/notion-image?blockId=${encodeURIComponent(block.id)}`;
  }

  return "/placeholder.jpg";
}

export function NotionRenderer({ blocks }: Props) {
  return (
    <article
      className="
        prose
        prose-lg
        prose-neutral
        dark:prose-invert
        mx-auto
        max-w-3xl

        leading-8

        prose-p:leading-8
        prose-p:my-7

        prose-headings:mb-6
        prose-headings:mt-12

        prose-h1:text-5xl
        prose-h2:text-3xl
        prose-h3:text-2xl

        prose-img:rounded-2xl
        prose-img:shadow-xl

        prose-blockquote:border-l-4
        prose-blockquote:pl-6

        prose-li:my-2
      "
    >
      {blocks.map((block: any) => {
        switch (block.type) {
          case "heading_1":
            return (
              <h1 key={block.id}>
                {renderRichText(block.heading_1.rich_text)}
              </h1>
            );

          case "heading_2":
            return (
              <h2 key={block.id}>
                {renderRichText(block.heading_2.rich_text)}
              </h2>
            );

          case "heading_3":
            return (
              <h3 key={block.id}>
                {renderRichText(block.heading_3.rich_text)}
              </h3>
            );

          case "paragraph":
            return (
              <p key={block.id}>
                {renderRichText(block.paragraph.rich_text)}
              </p>
            );

          case "quote":
            return (
              <blockquote key={block.id}>
                {renderRichText(block.quote.rich_text)}
              </blockquote>
            );

          case "divider":
            return <hr key={block.id} />;

          case "bulleted_list_item":
            return (
              <ul key={block.id}>
                <li>
                  {renderRichText(block.bulleted_list_item.rich_text)}
                </li>
              </ul>
            );

          case "numbered_list_item":
            return (
              <ol key={block.id}>
                <li>
                  {renderRichText(block.numbered_list_item.rich_text)}
                </li>
              </ol>
            );

          case "code":
            return (
              <pre key={block.id}>
                <code>
                  {renderRichText(block.code.rich_text)}
                </code>
              </pre>
            );

          case "image": {
            const src = getImageSrc(block);

            return (
              <div key={block.id} className="my-8">
                <Image
                  src={src}
                  alt=""
                  width={1200}
                  height={700}
                  className="h-auto w-full rounded-xl"
                  unoptimized
                />
              </div>
            );
          }

          default:
            return null;
        }
      })}
    </article>
  );
}