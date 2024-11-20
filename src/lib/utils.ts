import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { PostData } from "@/types/post";

const postsDirectory = path.join(process.cwd(), "src", "posts");

export function getSortedPosts() {
  const fileNames = fs.readdirSync(postsDirectory);

  const posts: PostData[] = fileNames.map((fileName) => {
    const filePath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
      ...data,
      slug: fileName.replace(/\.mdx$/, ""),
    } as PostData;
  });

  return posts.sort(
    (a: PostData, b: PostData) =>
      new Date(b.date).getUTCMilliseconds() -
      new Date(a.date).getUTCMilliseconds()
  );
}

export function getPaginatedPosts(page = 1, limit = 5) {
  const sortedPosts = getSortedPosts();
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  return sortedPosts.slice(startIndex, endIndex);
}
