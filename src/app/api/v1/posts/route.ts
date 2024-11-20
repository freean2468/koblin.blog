import { getPaginatedPosts } from "@/lib/utils";
import { HttpStatus } from "@/types/status";
import { NextRequest, NextResponse } from "next/server";

export default async function GET(
  req: NextRequest,
  res: NextResponse
): Promise<NextResponse<any>> {
  const page = req.nextUrl.searchParams.get("page") || 1;
  const limit = req.nextUrl.searchParams.get("limit") || 5;

  const posts = getPaginatedPosts(Number(page), Number(limit));

  return NextResponse.json(posts, { status: HttpStatus.OK });
}
