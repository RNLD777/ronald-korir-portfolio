import { NextResponse } from "next/server";
import { notion } from "@/lib/notion/client";

export async function GET() {
  try {
    const response = await notion.search({
      filter: {
        property: "object",
        value: "data_source",
      },
      page_size: 20,
    });

    return NextResponse.json(response.results);
  } catch (error: any) {
    return NextResponse.json({
      message: error.message,
      code: error.code,
      status: error.status,
    });
  }
}