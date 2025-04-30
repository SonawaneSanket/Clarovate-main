import React, { ReactNode } from "react";

export const metadata = {
  title: "Why Clarovate | Your Growth Partner in B2B Marketing",
  description:
    "Discover why businesses choose Clarovate. We deliver clarity, innovation, and measurable results through data-driven insights, AI-powered marketing, and transparent processes.",
  keywords: [
    "Why Clarovate",
    "B2B Marketing Expertise",
    "Marketing Technology",
    "AI-Powered Insights",
    "Data-Driven Marketing",
    "Transparent Marketing",
    "Growth Strategies",
  ],
};

export default function Layout({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}
