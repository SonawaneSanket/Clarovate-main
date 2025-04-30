import React, { ReactNode } from "react";

export const metadata = {
  title: "SDR as a Service | Expert Sales Development Team",
  description:
    "Scale your sales pipeline with dedicated SDRs who handle prospecting, lead qualification, and appointment setting for seamless sales growth.",
  keywords: [
    "SDR as a Service",
    "Sales Development Representatives",
    "Lead Qualification",
    "Outbound Prospecting",
    "Appointment Setting",
    "CRM Integration",
    "Sales Pipeline Growth",
  ],
};

export default function Layout({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}
