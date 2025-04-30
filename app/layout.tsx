import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Clarovate | B2B Marketing Simplified for Scalable Growth",
  openGraph: {
    images: "/og_image.png",
  },
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
      <Head>
        <title>
          Clarovate - B2B Demand Generation Marketing Simplified for Scalable
          Growth
        </title>
        <link rel="canonical" href="https://www.clarovate.io/" />

        <meta
          property="og:title"
          content="Clarovate - B2B Demand Generation Marketing Simplified for Scalable Growth"
        />
        <meta
          property="og:description"
          content="Clarovate simplifies B2B demand generation marketing, driving scalable growth with data-driven strategies and innovative solutions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.clarovate.io/" />
        <meta property="og:image" content="/og_image.png" />
        <meta
          property="og:image:alt"
          content="Clarovate - B2B Demand Generation Marketing"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Clarovate" />
        <meta name="twitter:creator:id" content="clarovate" />
        <meta
          name="twitter:title"
          content="Clarovate - B2B Demand Generation Marketing Simplified for Scalable Growth"
        />
        <meta
          name="twitter:description"
          content="Clarovate simplifies B2B demand generation marketing, driving scalable growth with data-driven strategies and innovative solutions."
        />
        <meta name="twitter:url" content="https://www.clarovate.io/" />
        <meta name="twitter:image" content="/og_image.png" />
        <meta
          name="twitter:image:alt"
          content="Clarovate - B2B Demand Generation Solutions"
        />

        <meta
          name="title"
          content="Clarovate - B2B Demand Generation Marketing Simplified for Scalable Growth"
        />
        <meta
          name="description"
          content="Clarovate helps B2B businesses scale with strategic demand generation marketing, optimized campaigns, and data-driven insights for sustainable growth."
        />
        <meta name="theme-color" content="#a33900" />
        <meta name="color-scheme" content="light" />
        <meta
          name="keywords"
          content="B2B marketing, demand generation, lead generation, digital marketing, scalable growth, inbound marketing, content marketing, SEO, PPC, email marketing, Content Syndication, Telemarketing, Appointment Setting, Data Services, Advertising, sales, sales pipeline"
        />
        <meta name="robots" content="index,follow" />

        <link
          rel="icon"
          type="image/svg+xml"
          href="absolute href for the icon"
        />
        <link rel="apple-touch-icon" href="" />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="sitemap"
          type="application/xml"
          href="https://www.clarovate.io/sitemap.xml"
        />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Organization",
              name: "Clarovate - B2B Demand Generation Marketing Simplified for Scalable Growth",
              url: "https://www.clarovate.io",
              logo: "",
              email: ["info@clarovate.io"],
              telephone: ["+91-"],
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "office no 223, B1 Kumar, CEREBRUM IT PARK, road, Marigold complex,",
                addressLocality: "Kalyani Nagar, Pune",
                addressRegion: "Maharashtra",
                postalCode: "411006",
                addressCountry: "India",
              },
              sameAs: [],
              potentialAction: [
                {
                  "@type": "EmailMessage",
                  name: "Contact Clarovate",
                  target: "mailto:info@clarovate.io",
                  description:
                    "Send an email inquiry to Clarovate for B2B demand generation marketing.",
                },
                {
                  "@type": "PhoneCall",
                  name: "Contact Clarovate",
                  target: {
                    "@type": "EntryPoint",
                    urlTemplate: "tel:+",
                    inLanguage: "en",
                    actionPlatform: [
                      "http://schema.org/DesktopWebPlatform",
                      "http://schema.org/MobileWebPlatform",
                      "http://schema.org/AndroidPlatform",
                      "http://schema.org/IOSPlatform",
                    ],
                  },
                },
              ],
            }),
          }}
        />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
