import React, { ReactNode } from "react";

export const metadata = {
  title: "About Us | Clarovate—Where Clarity Meets Innovation",
  description:
    "Clarovate is redefining B2B marketing with clarity and innovation. We offer cutting-edge solutions for lead generation and demand marketing to drive measurable results.",
  keywords: [
    "About Clarovate",
    "B2B Marketing",
    "Lead Generation",
    "Demand Marketing",
    "Marketing Innovation",
    "Marketing Technology",
    "AI-Powered Strategies",
  ],
};

export default function Layout({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}
