import Image from "next/image";
import Link from "next/link";

const products = [
  {
    title: "GameTome",
    subtitle: "English Dictionary for Gamers",
    description:
      "GameTome holds a collection of game scenes in a dictionary format.",
    href: "https://gametome.site",
    image: {
      src: "/home/gametome.png",
      alt: "GameTome",
      width: 635,
      height: 432,
    },
  },
];

export default function Product() {
  return (
    <div className="flex flex-col hover:opacity-90 transition-opacity">
      {products.map((p) => {
        return (
          <Link
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            key={p.title}
          >
            <h2 className="text-2xl font-bold">{p.title}</h2>
            <div className="flex flex-col p-4 rounded">
              <h3 className="text-xl font-bold">{p.subtitle}</h3>
              <p className="text-gray-300">{p.description}</p>
            </div>
            <Image
              src={p.image.src}
              alt={p.image.alt}
              width={p.image.width}
              height={p.image.height}
            />
          </Link>
        );
      })}
    </div>
  );
}
