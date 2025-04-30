import React from "react";

export default function BannerV2() {
  return (
    <div className="max-h-[500px] bg-[#953402] bg-[url('/mesh.png')] bg-cover bg-no-repeat min-h-[400px] md:min-h-[500px] blade-top-padding-sm blade-bottom-padding-sm ">
      <div className="w-container text-center grid gap-6 blade-top-padding blade-bottom-padding">
        <span
          data-aos="mount"
          data-aos-duration="800"
          className="text-3xl md:text-4xl lg:text-5xl px-5  xl:text-6xl text-white font-semibold pt-10 md:pt-0 leading-tight"
        >
          Clarovate — Where Clarity <br className="md:block hidden" /> Meets
          Innovation.
        </span>
        <span
          data-aos="mount"
          data-aos-duration="800"
          data-aos-delay="200"
          className="text-white text-opacity-80 leading-tight mx-auto px-5 md:px-0 max-w-[700px] text-base md:text-lg lg:text-xl xl:text-2xl"
        >
          To empower businesses with data-driven insights, AI-powered
          strategies, and transparent marketing processes{" "}
        </span>
      </div>
    </div>
  );
}
