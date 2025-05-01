"use client";

import { Button } from "@/components/ui/button";
import { ExternalLink, ExternalLinkIcon } from "lucide-react";
import React from "react";

const whitepapers = [
  {
    title: "Fully-Automated Payroll & Compliance Software",
    url: "https://publishers.clarovate.io/razorpayx-landing-page/",
    cover: "/whitepapers/payroll.png",
  },
  {
    title: "Achieve Digital Transformation with Data Analytics",
    url: "https://publishers.clarovate.io/hitachi-inspire-next-landing-page/",
    cover: "/whitepapers/digital.jpg",
  },
  {
    title: "Quarterly Retail Review: Q4 2025",
    cover: "/whitepapers/placer.jpeg",
    url: "https://publishers.clarovate.io/placer-ai-landing-page/",
  },
  {
    title:
      "Oracle Forms Services & Oracle Forms Developer 11g Technical Overview",
    cover: "/whitepapers/oracle.jpg",
    url: "https://publishers.clarovate.io/oracle-landing-page/",
  },
  {
    title:
      "Assessing the Business Value of Cisco’s Desktop and Application Virtualization Solution",
    cover: "/whitepapers/idc_two.png",
    url: "https://publishers.clarovate.io/idc-landing-page/",
  },
  {
    title: "Your Essential Guide to GDPR Compliance",
    cover: "/whitepapers/gdpr.png",
    url: "https://publishers.clarovate.io/landing-page/",
  },

  {
    title: "Workshop Methods for Innovation",
    cover: "/whitepapers/workshop.png",
    url: "https://publishers.clarovate.io/fresh-consulting-landing-page/",
  },

  {
    title: "Flaunt Your Business By Launching On-Demand App",
    cover: "/whitepapers/opnrdfr.jpg",
    url: "https://publishers.clarovate.io/elluminati/",
  },
];

export default function Whitepapers() {
  return (
    <div className="px-3">
      <div className="grid  pt-8 md:pt-0 gap-1">
        <span className=" text-2xl md:text-3xl font-semibold text-fire-700">
          White papers
        </span>
      </div>
      <div className="py-6 md:py-8 lg:py-10 grid md:grid-cols-2 gap-x-3 gap-y-12 w-full">
        {whitepapers.map((elem, index: number) => {
          const key = `${index}`;
          return <Card key={key} elem={elem} />;
        })}
      </div>
    </div>
  );
}

function Card({ elem }: { elem: any }) {
  const { title, cover, url } = elem;

  return (
    <article className="w-full h-full flex flex-col">
      <div className="w-full relative pb-[56.25%] bg-fire-100 border border-fire-400 overflow-hidden rounded-lg">
        {" "}
        <img
          src={cover}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </div>
      <div className="pt-6 flex gap-4 flex-1 flex-col items-start">
        <span className="text-lg md:text-xl flex-1 font-semibold leading-tight">
          {title}
        </span>
        <Button variant="outline" onClick={() => window.open(url, "_blank")}>
          Read more
          <ExternalLink className="h-2 w-2" />
        </Button>
      </div>
    </article>
  );
}
