import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import MDXContent from "@/components/mdxContent";
import { notFound } from "next/navigation";
import { BASE_URL } from "@/constants";
import { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
  {
    params,
  }: {
    params: Promise<{ slug: string }>;
  },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const parentMetadata = await parent;
  // read route params
  const slug = (await params).slug;

  console.log(slug);

  const filePath = path.join(process.cwd(), "src", "posts", `${slug}.mdx`);

  try {
    fs.accessSync(filePath);
  } catch {
    notFound();
  }

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data } = matter(fileContent);

  return {
    title: parentMetadata.title,
    description: data.description,
    openGraph: parentMetadata.openGraph,
    twitter: parentMetadata.twitter,
    robots: parentMetadata.robots,
    alternates: {
      canonical: `${BASE_URL}/blog/${slug}`,
    },
  } as Metadata;
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const filePath = path.join(
    process.cwd(),
    "src",
    "posts",
    `${resolvedParams.slug}.mdx`
  );

  try {
    fs.accessSync(filePath);
  } catch {
    notFound();
  }

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);
  const mdxSource = await serialize(content);

  return (
    <article className="max-w-4xl mx-auto p-8">
      <h1 className="text-2xl sm:text-3xl font-bold">{data.title}</h1>
      <p className="text-gray-500 mb-4">{data.date}</p>
      <MDXContent source={mdxSource} />
    </article>
  );
}
