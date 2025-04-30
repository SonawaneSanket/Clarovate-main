import Footer from "@/components/footer";
import Header from "@/components/header";
import React, { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />
      <div className="mt-20">{children}</div>
      <Footer />
    </div>
  );
}
