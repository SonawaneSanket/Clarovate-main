import React from "react";
import LeadForm from "./leadForm";

export default function Subfooter() {
  return (
    <section className=" relative ">
      <div className="absolute inset-0 bg-gradient-to-b from-[#fff4c1] to-[#ffe97e] " />
      <div className="blade-top-padding blade-bottom-padding relative subfooter-bg  bg-cover bg-center">
        <div className="grid grid-cols-1  gap-10 lg:grid-cols-2  w-container">
          <div className="flex  pt-8 flex-col text-center lg:text-left gap-4 mx-auto md:max-w-[450px]">
            <span className="text-3xl font-medium text-fire-900 leading-tight">
              Ready to revolutionize your demand generation?
            </span>
            <span className="text-lg text-fire-950 text-opacity-90 leading-tight w-11/12">
              Unlock high-quality leads with precision and scale—globally. At
              Clarovate, we combine AI-driven insights with verified data to
              connect you with the right prospects, ensuring better conversions
              and real revenue impact.
            </span>
            <span className="text-lg text-fire-950 text-opacity-90 leading-tight w-11/12 pt-5">
              Whether you're targeting local markets or expanding worldwide, our
              demand generation solutions deliver results you can trust
            </span>
          </div>
          <div>
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}
