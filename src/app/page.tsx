import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="max-w-7xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to Koblin Blog</h1>
      <Image
        src="/koblin.png"
        alt="Koblin character"
        width={256}
        height={256}
      />
      <p className="text-lg mb-8">
        I write about web development, technology, and career growth. My work is
        also published on Medium. Check out my latest posts and projects!
      </p>
      <div className="flex flex-col">
        <div className="flex flex-col hover:opacity-90 transition-opacity">
          <Link
            href="https://gametome.site"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="text-2xl font-bold">GameTome</h2>
            <div className="flex flex-col p-4 rounded">
              <h3 className="text-xl font-bold">
                English Dictionary for Gamers
              </h3>
              <p className="text-lg">
                GameTome holds a collection of game scenes in a dictionary
                format.
              </p>
            </div>
            <Image
              src="/home/gametome.png"
              alt="gametome web app"
              width={535}
              height={432}
            />
          </Link>
        </div>
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
      </div>
    </section>
  );
}
