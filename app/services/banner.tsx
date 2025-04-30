"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

export default function Banner({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      id="why-us"
      className="bg-gradient-to-b from-fire-100 to-fire-50 z-50 blade-top-padding blade-bottom-padding"
    >
      <div>
        <div className="  pb-3 md:pb-5 lg:pb-7 2xl:pb-10 flex items-center place-items-center text-center ">
          <div className="flex-1 lg:block hidden ">
            <img
              src="/left_title_dark.png"
              alt="left divider"
              aria-hidden
              className="h-full w-full object-contain object-center"
            />
          </div>
          <div
            // data-aos="appear-down"
            // data-aos-offset="400"
            // data-aos-duration="400"
            // data-aos-easing="ease-in-out"
            // data-aos-delay="100"
            className="grid mx-auto flex-0   px-3 lg:px-10 xl:px-20 gap-3 "
          >
            <span className=" text-3xl lg:text-4xl 2xl:text-5xl block apart-title  bg-gradient-to-b from-fire-900 to-fire-800 font-medium text-transparent bg-clip-text ">
              {title}
            </span>
            <span className="block max-w-xl mx-auto text-center leading-tight text-2xl text-fire-800">
              {subtitle}
            </span>
          </div>

          <div className="flex-1 lg:block hidden ">
            <img
              src="/right_title_final.png"
              alt="right divider"
              aria-hidden
              className="h-full w-full object-contain object-center"
            />
          </div>
        </div>
      </div>
    </section>
    // <div className="min-h-[400px] md:min-h-[550px] grid blade-bottom-padding max-h-[550px] bg-service-banner">
    //   <div className=" px-5 md:w-container md:px-12 flex flex-col gap-3 justify-end pb-14">
    //     <span
    //       data-aos="mount"
    //       data-aos-duration="850"
    //       data-aos-easing="ease-in-out"
    //       className="text-3xl md:text-4xl lg:text-5xl text-fire-50 font-semibold "
    //     >
    //       {title}
    //     </span>
    //     <span
    //       data-aos="mount"
    //       data-aos-duration="850"
    //       data-aos-delay="200"
    //       data-aos-easing="ease-in-out"
    //       className="text-xl md:text-2xl text-fire-100 font-normal max-w-4xl leading-tight"
    //     >
    //       {subtitle}
    //     </span>
    //   </div>
    // </div>
  );
}
