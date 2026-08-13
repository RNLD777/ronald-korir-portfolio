import { notion } from "@/lib/notion/client";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const blockId = searchParams.get("blockId");

  if (!blockId) {
    return new Response("Missing blockId", {
      status: 400,
    });
  }

  try {
    const block = (await notion.blocks.retrieve({
      block_id: blockId,
    })) as any;

    if (block.type !== "image") {
      return new Response("Block is not an image", {
        status: 400,
      });
    }

    let imageUrl: string | null = null;

    if (block.image.type === "file") {
      imageUrl = block.image.file.url;
    } else if (block.image.type === "external") {
      imageUrl = block.image.external.url;
    }

    if (!imageUrl) {
      return new Response("Image URL not found", {
        status: 404,
      });
    }

    const imageResponse = await fetch(imageUrl);

    if (!imageResponse.ok) {
      return new Response("Failed to fetch image", {
        status: imageResponse.status,
      });
    }

    const contentType =
      imageResponse.headers.get("content-type") || "image/jpeg";

    const imageBuffer = await imageResponse.arrayBuffer();

    return new Response(imageBuffer, {
      status: 200,
      headers: {
        "Content-Type": contentType,

        // Cache the actual image, not Notion's temporary URL.
        "Cache-Control":
          "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch (error) {
    console.error("Notion image error:", error);

    return new Response("Failed to load image", {
      status: 500,
    });
  }
}