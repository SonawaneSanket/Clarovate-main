import React from "react";
import Banner from "../banner";
import AboutService from "../about-service";
import WorkflowDiagram from "../workflow";

export default function Page() {
  return (
    <div>
      <Banner
        title="Programmatic Advertising"
        subtitle="AI-Powered Precision for Smarter Ads."
      />
      <AboutService
        title="Harness the power of AI-driven ad placements to target high-intent buyers in real time. Our programmatic advertising services ensure you get maximum ROI with minimal ad spend."
        deliveries={[
          "<strong>Real-Time Bidding (RTB):</strong> Automated ad placements across premium networks.",
          "<strong>Dynamic Retargeting:</strong> Keep your brand top-of-mind with personalized ads.",
          "<strong>Intent-Based Targeting:</strong> Focus on prospects showing buying signals.",
        ]}
        features={[
          "AI-powered bidding algorithms for cost-effective ad placements.",
          "A/B testing to optimize messaging and creatives.",
          "Integration with analytics platforms for performance tracking.",
        ]}
      />
      <WorkflowDiagram image="/workflow_diagrams/programmatic_advertising.svg" />
    </div>
  );
}
