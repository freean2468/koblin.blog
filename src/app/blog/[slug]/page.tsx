import fs from "fs";
import path from "path";
import matter from "gray-matter";

export async function generateStaticParams() {
  const posts = fs.readdirSync(path.join(process.cwd(), "src", "posts"));
  return posts.map((filename) => ({ slug: filename.replace(".mdx", "") }));
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const filePath = path.join(
    process.cwd(),
    "src",
    "posts",
    `${params.slug}.mdx`
  );
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);

  return (
    <article className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold">{data.title}</h1>
      <p className="text-gray-500 mb-4">{data.date}</p>
      <div className="prose">{content}</div>
    </article>
  );
}
