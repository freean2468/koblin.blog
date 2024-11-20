import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import MDXContent from "@/components/mdxContent";

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params; // Await the params object
  const filePath = path.join(
    process.cwd(),
    "src",
    "posts",
    `${resolvedParams.slug}.mdx`
  );
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);
  const mdxSource = await serialize(content);

  return (
    <article className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold">{data.title}</h1>
      <p className="text-gray-500 mb-4">{data.date}</p>
      <MDXContent source={mdxSource} />
    </article>
  );
}

// Dynamic parameters for the App Router
export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "src", "posts");
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => ({
    slug: fileName.replace(/\.mdx$/, ""),
  }));
}
