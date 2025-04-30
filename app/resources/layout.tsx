"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import React, { ReactNode, useEffect } from "react";
import Sidebar from "./sidebar";
import { usePathname } from "next/navigation";
import ComingSoon from "@/components/coming_soon";

export default function Layout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  useEffect(() => {
    if (document) {
      document.title = "Resources";
    }
  });

  return (
    <div className="bg-gradient-to-b pt-20 min-h-screen flex flex-col from-fire-50 to-fire-50">
      <Header />
      <div className=" px-3 md:w-container-sm flex-1 lg:grid grid-cols-4 blade-top-padding-lg blade-bottom-padding-lg max-w-screen-xl">
        <div className="col-span-1">
          <div className="sticky top-32">
            <Sidebar active={pathname} />
          </div>
        </div>
        <div className="col-span-3 md:px-5 lg:px-8">{children}</div>
      </div>
      <Footer />
    </div>
  );
}
