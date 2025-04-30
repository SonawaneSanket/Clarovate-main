import React from "react";
import Banner from "./banner";
import Header from "@/components/header";
import Footer from "@/components/footer";
import WhyUsExplanation from "./why_us_content";
import SalientFeaturesV2 from "./salient_featuresV2";
import SalientMobile from "./salient_mobile";
import SalientFeaturesV3 from "./salient_featuresV3";

export default function WhyClarovate() {
  return (
    <div className="overflow-auto">
      <Header />
      <div>
        <Banner />
        <WhyUsExplanation />
        {/* <SalientFeatures /> */}
        <div className="lg:block hidden">
          <SalientFeaturesV2 />
        </div>

        <div className="lg:hidden hidden md:block">
          <SalientFeaturesV3 />
        </div>
        <div className="md:hidden block">
          <SalientMobile />
        </div>
      </div>
      <Footer />
    </div>
  );
}
