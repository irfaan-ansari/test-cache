"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const data = [
  { title: "Home", slug: "/" },
  { title: "Blog", slug: "/blog" },
];
const Header = () => {
  const path = usePathname();
  return (
    <div className="max-w-xl mx-auto">
      <div className="rounded-md bg-neutral-800 border-neutral-900">
        {data.map((i) => (
          <Link className="py-2 px-3" key={i.slug} href={i.slug}>
            {i.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
