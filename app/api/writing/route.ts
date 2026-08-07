import { NextResponse } from "next/server";
import { getWriting } from "@/lib/notion/writing";

export async function GET() {
  try {
    const writing = await getWriting();
    return NextResponse.json(writing);
  } catch (error: any) {
    return NextResponse.json(
      {
        message: error.message,
        code: error.code,
      },
      { status: 500 }
    );
  }
}