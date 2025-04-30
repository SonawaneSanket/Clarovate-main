import React from "react";
import Banner from "../banner";
import AboutService from "../about-service";
import WorkflowDiagram from "../workflow";

export default function ContentSyndication() {
  return (
    <div>
      <Banner
        title="Content Syndication"
        subtitle="Targeted Content That Drives Decisions."
      />
      <AboutService
        features={[
          "AI-driven content targeting and recommendation systems.",
          "GDPR-compliant database ensuring ethical data usage.",
          "Multi-touch marketing for consistent audience engagement.",
        ]}
        title="Content is king, but distribution is the key to unlocking its value. At Clarovate, we amplify your brand’s voice through multi-channel syndication strategies, ensuring your content reaches the right audience, at the right time, in the right format."
        deliveries={[
          "<strong>Audience Targeting:</strong> Reach decision-makers based on job titles, industries, and geographies.",
          "<strong>High-Intent Leads:</strong> Generate actionable insights from prospects who engage with your content.",
          "<strong>Performance Analytics:</strong> Track downloads, views, and conversions to measure ROI.",
        ]}
      />
      <WorkflowDiagram image="/workflow_diagrams/content_syndication.svg" />
    </div>
  );
}
