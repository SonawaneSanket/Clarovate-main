"use client";

import React, { useEffect, useRef } from "react";
import officeFronteView from "assets/who-we-are/office.webp";
import officeFronteViewMobile from "assets/who-we-are/office_mobile.webp";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

export default function AboutCompany() {
  return (
    <section className="2xl:blade-top-padding blade-top-padding-lg md:-mt-32  blade-bottom-padding bg-fire-100">
      <div className="w-container-sm blade-toppadding-sm">
        <h2
          data-aos="mount"
          data-aos-duration="850"
          className={` text-fire-800   text-2xl md:text-3xl xl:text-4xl text-opacity-100 font-medium   transition-all duration-700 ease-in-out  ${
            true ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Who we are
        </h2>


        <h2
          data-aos="mount"
          data-aos-duration="850"
          data-aos-delay="200"
          className={` ${
            true ? "opacity-100 text-xl md:text-2xl translate-y-0" : ""
          } transition-opacity delay-100 duration-700 font-semibold max-w-4xl ease-in-out leading-snug pt-2 md:block hidden `}
        >
          At Clarovate, we are redefining B2B marketing with clarity and
          innovation, offering cutting-edge solutions for lead generation and
          demand marketing.
        </h2>
        <h3
          data-aos="mount"
          data-aos-duration="850"
          data-aos-delay="200"
          className="leading-snug md:hidden block pt-2 w-11/12 "
        >
          At Clarovate, we are redefining B2B marketing with clarity and
          innovation, offering cutting-edge solutions for lead generation and
          demand marketing.
        </h3>
        <div className="md:block hidden md:h-[280px] lg:h-[300px] xl:h-[330px] 2xl:h-[350px] my-6 md:my-8 lg:my-10 xl:my-12 bg-black bg-center bg-cover bg-no-repeat">
          <img
            loading="lazy"
            className="h-full w-full object-cover object-center"
            src="/team_udpated.png"
            alt="front view of office of supreme group"
          />
        </div>
        <div className="mh-[200px] my-6 md:hidden block bg-black bg-center bg-cover bg-no-repeat">
          <img
            loading="lazy"
            className="h-full w-full object-cover object-center"
            src="/team_udpated.png"
            alt="front view of office of supreme group"
          />
        </div>
        <div
          data-aos="mount"
          data-aos-duration="850"
          data-aos-delay="200"
          className="lg:grid grid-cols-5 gap-y-4 flex flex-col gap-x-4 xl:gap-x-6 blade-bottom-padding-sm"
        >
          <h5 className="leading-relaxed col-start-1 col-end-4 text-base md:text-lg lg:text-xl  pr-3 max-w-xl">
            To empower businesses with{" "}
            <strong>data-driven insights, AI-powered strategies, </strong>and{" "}
            <strong>transparent marketing processes</strong> that accelerate
            growth and maximize ROI.
          </h5>
          <h5 className="leading-relaxed w-11/12 md:w-full text-base md:text-lg lg:text-xl col-start-4 col-end-6 max-w-xl">
            we’re here to{" "}
            <strong>simplify marketing, streamline operations,</strong> and{" "}
            <strong>scale results.</strong>
          </h5>
        </div>
      </div>
    </section>
  );
}

function Circle({ text, bgColor }: { bgColor: string; text: string }) {
  return (
    <article className="basis-48 lg:basis-52 xl:basis-60 xlg:basis-60 hover: hover:xlg:basis-72  group">
      <div className=" group-hover:scale-100 scale-110 bg-blueDark bg-opacity-0 hover:bg-opacity-5 transition-all duration-100 ease-in-out   translate-y-4 md:translate-y-0 md:translate-x-6 aspect-square border-1 border-solid border-blue grid place-content-center place-items-center gap-3 md:gap-6 xl:gap-8 rounded-full">
        <span className="font-semibold text-center text-base xl:text-lg px-2">
          {text}
        </span>
      </div>
    </article>
  );
}
