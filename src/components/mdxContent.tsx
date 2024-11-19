"use client";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Image from "next/image";

interface MDXContentProps {
  source: MDXRemoteSerializeResult;
}

const components = {
  img: (props: any) => (
    <Image
      {...props}
      alt={props.alt || ""}
      width={props.width || 800}
      height={props.height || 400}
      layout="responsive"
    />
  ),
};

export default function MDXContent({ source }: MDXContentProps) {
  return (
    <article className="prose dark:prose-invert max-w-full">
      <MDXRemote {...source} components={components} />
    </article>
  );
}
