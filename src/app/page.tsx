"use client";

import Product from "@/components/products";
import { PostPreviewData } from "@/types/post";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

export default function Home() {
  const [posts, setPosts] = React.useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await fetch("/api/v1/posts");
      setPosts(await posts.json());
    };

    fetchPosts();
  }, []);
  const [doesDisplayPosts, setDoesDisplayPosts] = React.useState(true);

  return (
    <section className="mx-auto p-8 flex flex-col">
      <div className="flex flex-col flex-auto border-b-2 border-b-gray-400 pb-2">
        <h1 className="text-xl sm:text-3xl font-bold mb-4 ">
          Welcome to Koblin Blog
        </h1>
        <p className="sm:text-lg mb-2">
          I write about web development, technology, and career growth. My work
          is also published on Medium. Check out my latest posts and projects!
        </p>
        <div className="flex flex-col sm:hidden">
          <div className="flex space-x-4">
            <button
              className={`${
                doesDisplayPosts ? "bg-gray-800" : "bg-gray-600"
              } text-white px-4 py-2 rounded hover:opacity-90 transition-opacity`}
              onClick={() => setDoesDisplayPosts(true)}
            >
              Read Blog
            </button>
            <button
              className={`${
                doesDisplayPosts ? "bg-gray-600" : "bg-gray-800"
              } text-white px-4 py-2 rounded hover:opacity-50 transition-opacity`}
              onClick={() => setDoesDisplayPosts(false)}
            >
              View Projects
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-row mt-2">
        <span
          className={`flex-col flex-auto ${
            doesDisplayPosts
              ? "flex basis-2/3 pr-2"
              : "hidden sm:flex sm:basis-2/3 sm:pr-2"
          }`}
        >
          {posts.map((post: PostPreviewData) => (
            <div
              key={post.slug}
              className="mb-8 hover:opacity-90 transition-opacity"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="flex flex-row">
                  <div className="flex-basis-3/4">
                    <h2 className="text-xl sm:text-2xl font-bold">
                      {post.title}
                    </h2>
                    <p className="text-gray-400 mb-4">{post.date}</p>
                    <p className="text-gray-300">{post.previewText}...</p>
                  </div>
                  {post.firstImage && (
                    <div className="relative w-[100px] h-[100px] overflow-hidden">
                      <Image
                        src={post.firstImage}
                        alt={post.title}
                        className="my-4 flex-basis-1/4"
                        objectFit="cover"
                        layout="fill"
                      />
                    </div>
                  )}
                </div>
              </Link>
            </div>
          ))}
        </span>
        <span
          className={`flex-auto ${
            doesDisplayPosts
              ? "hidden sm:flex sm:basis-1/3 sm:border-l-2 sm:border-l-gray-400 sm:pl-2"
              : "flex basis-1/3"
          }`}
        >
          <Product />
        </span>
      </div>
    </section>
  );
}
