"use client";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Image from "next/image";

interface MDXContentProps {
  source: MDXRemoteSerializeResult;
}

import { ImgHTMLAttributes } from "react";

const components = {
  img: (props: ImgHTMLAttributes<HTMLImageElement>) => (
    <Image
      {...props}
      src={props.src || ""}
      alt={props.alt || ""}
      width={Number(props.width) || 800}
      height={Number(props.height) || 400}
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
