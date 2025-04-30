import clsx from "clsx";
import Link from "next/link";
import React from "react";

interface SidebarProps {
  active: string;
}

const navItems = [
  { label: "Articles", url: "/resources/articles" },
  { label: "Blogs", url: "/resources/blogs" },
  { label: "Whitepapers", url: "/resources/white-papers" },
];

export default function Sidebar({ active }: SidebarProps) {
  return (
    <div className="bg-fire-100 p-4 rounded-xl border-[1px] border-solid border-fire-200">
      <div className="grid ">
        {navItems.map((item) => (
          <Link
            href={item.url}
            key={item.url}
            className={clsx(
              "text-base px-3 py-2 ont-medium cursor-pointer tracking-wide",
              {
                "text-fire-700 underline": active === item.url,
              },
              {
                "text-black text-opacity-90 hover:text-fire-900 hover:bg-fire-200 hover:bg-opacity-50":
                  active !== item.url,
              }
            )}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
