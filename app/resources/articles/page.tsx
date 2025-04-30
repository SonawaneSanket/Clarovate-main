import ComingSoon from "@/components/coming_soon";
import React from "react";
import TextCard from "../textcard";

const articles = [
  {
    title:
      "Mastering Demand Generation: How Agencies Are Empowering Tech Companies to Thrive",
    url: "https://marketingmastershub.com/2025/03/13/mastering-demand-generation-how-agencies-are-empowering-tech-companies-to-thrive/",
    excerpt:
      "Introduction: The Demand Generation Imperative in TechIn the technology sector, demand generation is more than just a marketing function—it’s a…",
  },
  {
    title:
      "The Blueprint for Success: How Agencies Are Driving Demand Generation for Technology Companies",
    url: "https://marketingmastershub.com/2025/03/13/the-blueprint-for-success-how-agencies-are-driving-demand-generation-for-technology-companies/",
    excerpt:
      "Introduction: The Critical Role of Demand Generation in TechIn the technology sector, demand generation is the lifeblood of growth. It’s…",
  },
  {
    title:
      "The Power of Partnership: How Agencies Are Revolutionizing Demand Generation for Technology Companies",
    url: "https://marketingmastershub.com/2025/03/13/the-power-of-partnership-how-agencies-are-revolutionizing-demand-generation-for-technology-companies/",
    excerpt:
      "Introduction: The New Era of Demand Generation in TechThe technology sector is undergoing a seismic shift in how it approaches…",
  },
  {
    title:
      "The Evolution of Demand Generation: How Agencies Are Redefining Success for Tech Companies",
    url: "https://marketingmastershub.com/2025/03/13/how-agencies-are-redefining-success-for-tech-companies/",
    excerpt:
      "Introduction: The Shifting Landscape of Tech Demand GenerationIn the technology sector, demand generation is no longer just about filling the…",
  },
  {
    title:
      "Strategic Synergy: How Agencies Elevate Tech Companies’ Demand Generation Efforts",
    url: "https://marketingmastershub.com/2025/03/13/strategic-synergy-how-agencies-elevate-tech-companies-demand-generation-efforts/",
    excerpt:
      "Introduction: The Imperative of Demand Generation in TechIn the fast-paced tech industry, demand generation transcends mere lead acquisition—it’s about cultivating…",
  },
  {
    title: "How Agencies Power Demand Generation for Technology Companies",
    url: "https://marketingmastershub.com/2025/03/03/how-agencies-power-demand-generation-for-technology-companies/",
    excerpt:
      "Understanding Demand Generation Demand generation is a holistic marketing approach focused on creating awareness, building interest, and nurturing potential customers…",
  },
];

export default function Articles() {
  return (
    <div className="px-3">
      <div className="grid gap-1 pt-10 md:pt-0">
        <span className="text-3xl font-semibold text-fire-700">Articles</span>
      </div>
      <div className="py-6 md:py-8 lg:py-10 grid md:grid-cols-2 gap-x-3 gap-y-10">
        {articles.map((elem, index) => {
          return <TextCard key={index} {...elem} />;
        })}
      </div>
    </div>
  );
}
