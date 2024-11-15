import Link from "next/link";

export default function Home() {
  return (
    <section className="max-w-7xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to Koblin Blog</h1>
      <p className="text-lg mb-8">
        I write about web development, tech, and career tips. Check out my
        latest posts and projects!
      </p>
      <div className="flex space-x-4">
        <Link href="/blog/post">
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Read Blog
          </button>
        </Link>
        <Link href="/portfolio">
          <button className="bg-gray-600 text-white px-4 py-2 rounded">
            View Portfolio
          </button>
        </Link>
      </div>
    </section>
  );
}
