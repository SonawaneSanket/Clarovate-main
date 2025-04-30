import React from "react";
import Banner from "../banner";
import AboutService from "../about-service";
import WorkflowDiagram from "../workflow";

export default function LeadGeneration() {
  return (
    <div>
      <Banner title="Data services" subtitle="Conversations That Convert." />

      <AboutService
        title="Whether you’re building your pipeline or accelerating growth, our data-driven lead generation strategies ensure you attract, nurture, and convert leads faster."
        deliveries={[
          "<strong>Outbound Campaigns:</strong> Proactive outreach using telemarketing, email, and LinkedIn automation.",
          "<strong>Account-Based Marketing (ABM):</strong> Target high-value accounts with personalized messaging.",
        ]}
        features={[
          "Data enrichment tools to enhance lead profiling.",
          "AI-powered insights for accurate segmentation.",
          "Multi-touch engagement for higher response rates.",
        ]}
      />

      <WorkflowDiagram image="/workflow_diagrams/lead_generation.svg" />
    </div>
  );
}
