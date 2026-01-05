import { cacheLife } from "next/cache";
import React, { Suspense } from "react";

export const generateStaticParams = () => {
  return [
    { slug: "1" },
    { slug: "2" },
    { slug: "3" },
    { slug: "4" },
    { slug: "5" },
    { slug: "6" },
  ];
};
const page = () => {
  return (
    <div>
      single blog page
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
