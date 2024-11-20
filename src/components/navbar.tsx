import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white px-4 py-3">
      <div className="max-w-7xl mx-auto flex justify-between">
        <h1 className="font-bold text-xl">
          <Link href="/">
            <div className="flex flex-row gap-2 items-center">
              <Image
                src="/favicon-32x32.png"
                alt="koblin"
                width={32}
                height={32}
              />
              Koblin Blog
            </div>
          </Link>
        </h1>
        {/* <div className="flex space-x-4">
          <Link href="/blog">Blog</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div> */}
      </div>
    </nav>
  );
}
