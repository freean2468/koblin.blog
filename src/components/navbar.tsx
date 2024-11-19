import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white px-4 py-3">
      <div className="max-w-7xl mx-auto flex justify-between">
        <h1 className="font-bold text-xl">
          <Link href="/">Koblin Blog</Link>
        </h1>
        <div className="flex space-x-4">
          <Link href="/blog">Blog</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
