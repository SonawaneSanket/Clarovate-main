import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Clarovate | B2B Marketing Simplified for Scalable Growth",
  description:
    "Clarovate transforms B2B marketing with AI-driven insights, lead generation, and demand marketing. Scale your business with innovative marketing solutions.",
  keywords: [
    "Clarovate",
    "B2B Marketing",
    "Lead Generation",
    "Marketing Automation",
    "AI-Powered Marketing",
    "Demand Generation",
    "Sales Enablement",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
