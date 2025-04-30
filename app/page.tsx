"use client";

import Header from "@/components/header";
import AboutUs from "./aboutUs";
import Banner from "./banner";
import Services from "./services";
import WhyUs from "./whyus";
import Footer from "@/components/footer";
import Subfooter from "@/components/subFooter";
import ServicesMobile from "./services_mobile";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Header />
      <Banner />
      <AboutUs />
      <WhyUs />
      <div className="lg:block hidden">
        <Services />
      </div>
      <div className="lg:hidden block">
        <ServicesMobile />
      </div>
      <Subfooter />
      <Footer />
    </>
  );
}
