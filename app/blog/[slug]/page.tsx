import { formatDate, getPost, getPosts } from "@/lib/utils";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export const generateStaticParams = async () => {
  return getPosts().map((post) => ({ slug: post.slug }));
};
const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  const post = getPost(slug);
  if (!post) notFound();
  return (
    <div className="max-w-xl mx-auto py-10">
      <h1 className="text-4xl">{post?.title}</h1>
      <h2 className="text-2xl">{post?.slug}</h2>

      <Suspense fallback={"Loading..."}>
        <Publish date={post?.publishedAt ?? ""} />
      </Suspense>
    </div>
  );
};

export default page;

const Publish = async ({ date }: { date: string }) => {
  "use cache";
  //   cacheLife("seconds");
  return <div>{formatDate(date)}</div>;
};
