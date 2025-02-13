import { getPaginatedPosts } from "@/lib/utils";
import { HttpStatus } from "@/types/status";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const page = request.nextUrl.searchParams.get("page") || 1;
  const limit = request.nextUrl.searchParams.get("limit") || 100;

  const posts = getPaginatedPosts(Number(page), Number(limit));

  return NextResponse.json(posts, { status: HttpStatus.OK });
}
