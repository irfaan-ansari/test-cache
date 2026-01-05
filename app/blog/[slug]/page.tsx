import { getPosts } from "@/lib/utils";
import { cacheLife } from "next/cache";
import { Suspense } from "react";

export const generateStaticParams = async () => {
  return getPosts().map((post) => ({ slug: post.slug }));
};
const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  return (
    <div>
      <h1 className="text-4xl">single blog page</h1>
      <h2 className="text-2xl">{slug}</h2>
      <Suspense fallback={"Loading..."}>
        <Publish />
      </Suspense>
    </div>
  );
};

export default page;

const Publish = async () => {
  "use cache";
  cacheLife("seconds");
  return <div>{new Date().toString()}</div>;
};
