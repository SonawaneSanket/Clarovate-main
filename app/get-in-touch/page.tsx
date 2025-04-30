"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import LeadForm from "@/components/leadForm";
import Subfooter from "@/components/subFooter";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

export default function GetInTouch() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Header />
      <Banner />
      <FormWrapper />
      <Footer />
    </div>
  );
}

function Banner() {
  return (
    <div className=" min-h-[350px] blade-top-padding-lg grid blade-bottom-padding-lg bg-gradient-to-b from-black to-fire-950">
      <div className=" px-3 md:w-container blade-top-padding-lg grid ">
        <div className="md:pt-6 flex justify-end items-start flex-col gap-3 md:gap-6 h-full">
          <h1
            data-aos="mount"
            data-aos-duration="850"
            data-aos-easing="ease-in-out"
            className="text-3xl md:text-4xl font-semibold text-fire-50"
          >
            Get in touch with our team
          </h1>

          <span
            data-aos="mount"
            data-aos-duration="850"
            data-aos-delay="200"
            className="text-lg text-white text-opacity-80"
          >
            Our team will be more than happy to get in touch <br />
            with you and resolve the problems.
          </span>
        </div>
      </div>
    </div>
  );
}

function FormWrapper() {
  return (
    <div>
      <Subfooter />
    </div>
  );
}
