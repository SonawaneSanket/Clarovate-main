import React, { ReactNode } from "react";

export const metadata = {
  title: "Content Syndication | Targeted Content for Decision Makers",
  description:
    "Expand your brand's reach with multi-channel content syndication, AI-driven targeting, and GDPR-compliant lead generation.",
  keywords: [
    "Content Syndication",
    "B2B Marketing",
    "AI-Driven Targeting",
    "Lead Generation",
    "Multi-Touch Marketing",
    "GDPR Compliance",
    "Audience Engagement",
  ],
};

export default function Layout({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}
