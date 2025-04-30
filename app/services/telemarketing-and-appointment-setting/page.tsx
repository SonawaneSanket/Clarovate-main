import React from "react";
import Banner from "../banner";
import AboutService from "../about-service";
import WorkflowDiagram from "../workflow";

export default function TelemarketingAndAppointmentSetting() {
  return (
    <div>
      <Banner
        title="Telemarketing & Appointment Setting"
        subtitle="Personalized Outreach That Opens Doors."
      />

      <AboutService
        title="Leverage human-to-human interactions to drive meaningful conversations and uncover opportunities. Our telemarketing services focus on understanding your prospects’ pain points and delivering customized solutions."
        deliveries={[
          "<strong>Lead Nurturing Calls:</strong> Build rapport and provide value-driven insights.",
          "<strong>Surveys & Polling:</strong> Collect market feedback and intelligence.",
          "<strong>Appointment Scheduling:</strong> Book meetings with pre-qualified leads.",
        ]}
        features={[
          "Multilingual support for global reach.",
          "Daily metrics and campaign progress for transparency.",
          "Compliance with GDPR, CCPA, CASL, and other telemarketing regulations.",
        ]}
      />

      <WorkflowDiagram image="/workflow_diagrams/telemarketing_appointment_setting.svg" />
    </div>
  );
}
