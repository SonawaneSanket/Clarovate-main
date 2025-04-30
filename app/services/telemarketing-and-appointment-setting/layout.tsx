import React, { ReactNode } from "react";

export const metadata = {
  title: "Telemarketing & Appointment Setting | Personalized Outreach",
  description:
    "Drive meaningful conversations and book high-quality meetings through human-to-human telemarketing, lead nurturing, and multilingual support.",
  keywords: [
    "Telemarketing",
    "Appointment Setting",
    "Lead Nurturing",
    "Outbound Calls",
    "Market Surveys",
    "Multilingual Support",
    "GDPR & CCPA Compliance",
  ],
};

export default function Layout({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}
