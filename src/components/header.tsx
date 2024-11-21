import Image from "next/image";
import Link from "next/link";

export default function Header() {
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
        <div className="flex space-x-4 justify-center">
          <Link
            href="https://x.com/LULlz97poUoiaAN"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-500 hover:underline transition-colors duration-300"
          >
            <Image
              src="/images/x-social-media-logo-icon.svg"
              alt="Neil Son's X"
              width={32}
              height={32}
            />
          </Link>
          <Link
            href="https://www.threads.net/@sensebecommon"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-500 hover:underline transition-colors duration-300"
          >
            <Image
              src="/images/threads-app-icon.svg"
              alt="Neil Son's Threads"
              width={32}
              height={32}
            />
          </Link>
        </div>
      </div>
    </nav>
  );
}
