import React, { ReactNode } from "react";

export const metadata = {
  title: "Lead Generation | High-Intent Leads & ABM Strategies",
  description:
    "Accelerate your sales pipeline with data-driven lead generation strategies, outbound campaigns, and account-based marketing.",
  keywords: [
    "Lead Generation",
    "Outbound Campaigns",
    "Account-Based Marketing",
    "High-Intent Leads",
    "Sales Pipeline",
    "AI-driven Segmentation",
    "Multi-Touch Engagement",
  ],
};

export default function Layout({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}
