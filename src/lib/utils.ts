import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { PostPreviewData } from "@/types/post";
import * as cheerio from "cheerio";

const postsDirectory = path.join(process.cwd(), "src", "posts");

export function getSortedPosts() {
  const fileNames = fs.readdirSync(postsDirectory);

  const posts: PostPreviewData[] = fileNames.map((fileName) => {
    const filePath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, "utf8");

    // Extract metadata and content using gray-matter
    const { data, content } = matter(fileContents);
    const $ = cheerio.load(content);
    const firstImage: string | null = $("img").first().attr("src") || null;

    // Strip out HTML/MDX and get the first 50 characters
    const plainText = content
      .replace(/<\/?[^>]+(>|$)/g, "")
      .replace(/\{.*?\}/g, "");
    const previewText = plainText.slice(0, 100);

    return {
      slug: fileName.replace(/\.mdx$/, ""), // Generate a slug from the file name
      ...data, // Spread metadata (e.g., title, date, tags)
      content, // Include the content
      firstImage, // Include the first image
      previewText, // Include the preview text
    } as PostPreviewData;
  });

  return posts.sort(
    (a: PostPreviewData, b: PostPreviewData) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPaginatedPosts(page = 1, limit = 5) {
  const sortedPosts = getSortedPosts();
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  return sortedPosts.slice(startIndex, endIndex);
}
