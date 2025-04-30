import React, { ReactNode } from "react";

export const metadata = {
  title: "Programmatic Advertising | AI-Powered Ad Targeting",
  description:
    "Maximize ROI with AI-driven programmatic advertising, real-time bidding, and intent-based targeting for smarter ad placements.",
  keywords: [
    "Programmatic Advertising",
    "Real-Time Bidding",
    "Dynamic Retargeting",
    "AI-Powered Ads",
    "Digital Marketing",
    "Ad Optimization",
    "Performance Tracking",
  ],
};

export default function Layout({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}
