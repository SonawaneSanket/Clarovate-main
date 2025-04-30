import Image from "next/image";
import React from "react";

export default function WhyUsExplanation() {
  return (
    <div className="bg-fire-50 bg-opacity-50 blade-top-padding-lg blade-bottom-padding-lg">
      <div className=" px-3 md:w-container-sm max-w-screen-xl grid grid-cols-1 md:grid-cols-2  gap-y-10 gap-x-6">
        <div>
          <div
            data-aos="mount-left"
            data-aos-duration="850"
            className=" flex flex-col gap-4"
          >
            <span className="text-base font-semibold text-black">
              What we believe in
            </span>
            <span className="text-2xl pr-6 md:pr-0 pb-8 text-black font-medium  leading-tight w-full md:w-11/12">
              we’ve taken the complexity out of B2B marketing operations and
              built a platform that delivers efficiency, quality, and speed
            </span>
            <div className="overflow-hidden h-[400px] md:h-[550px] lg:h-[650px] rounded-xl">
              <img
                src="/why_us_first.jpg"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
        <div
          data-aos="mount-right"
          data-aos-duration="850"
          className="flex flex-col justify-end  "
        >
          <span className="text-2xl  pb-8 px-3 text-black font-normal leading-tight w-11/12">
            so you can focus on scaling your business,{" "}
            <br className="md:block hidden" /> not managing chaos.
          </span>
          <div className="overflow-hidden h-[350px] rounded-xl">
            <img
              src="/why_us_second.png"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
