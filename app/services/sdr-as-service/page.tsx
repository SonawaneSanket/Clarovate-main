"use client";
import React, { useEffect, useLayoutEffect } from "react";
import Banner from "../banner";
import AboutService from "../about-service";
import WorkflowDiagram from "../workflow";

export default function SDRAsService() {
  return (
    <>
      <Banner
        title="SDR as a Service"
        subtitle="Your Dedicated Sales Development Team."
      />

      <AboutService
        title="Scale your sales pipeline with our expert SDR team, acting as an extension of your internal team to qualify leads, schedule appointments, and keep your sales pipeline active."
        deliveries={[
          "<strong>Outbound Prospecting:</strong> Multi-channel outreach for prospect engagement.",
          "<strong>Lead Qualification:</strong> Evaluate leads based on readiness and interest.",
          "<strong>Appointment Setting:</strong> Schedule high-quality meetings for your sales team.",
        ]}
        features={[
          "24/7 coverage to match global time zones.",
          "CRM integration for seamless lead tracking.",
          "Script optimization and training for consistent messaging.",
        ]}
      />

      <WorkflowDiagram image="/workflow_diagrams/sdr_service.svg" />
    </>
  );
}
