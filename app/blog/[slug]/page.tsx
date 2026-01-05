import { cacheLife } from "next/cache";
import React, { Suspense } from "react";

export const generateStaticParams = async () => {
  const date = new Date();
  console.log(date.toISOString());
  return [
    { slug: "1" },
    { slug: "2" },
    { slug: "3" },
    { slug: "4" },
    { slug: "5" },
    { slug: "6" },
  ];
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
