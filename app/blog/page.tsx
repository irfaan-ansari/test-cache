import { formatDate, getPosts } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ searchParams: Record<string, string> }>;
}) => {
  const posts = getPosts();
  return (
    <div className="flex flex-col gap-2 max-w-xl mx-auto py-10">
      {posts.map((post) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}`}
          className="p-4 border rounded-md"
        >
          <h3 className="text-xl font-bold">{post.title}</h3>
          <p className="opacity-80 text-sm">{post.slug}</p>
          <p className="opacity-80 text-xs mt-4">
            {formatDate(post.publishedAt)}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default page;
