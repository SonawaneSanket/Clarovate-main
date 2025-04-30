"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Banner() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="min-h-[600px] max-h-[600px] bg-[url('/banner_gradient.png')] grid bg-center bg-cover bg-no-repeat">
      <div className="w-container flex flex-col gap-6  justify-end blade-bottom-padding">
        <h1
          data-aos="mount"
          data-aos-duration="850"
          className="text-6xl  px-3  text-transparent max-w-4xl leading-tight font-semibold bg-gradient-to-b from-fire-800 to-fire-950 bg-clip-text lg:px-10"
        >
          <span className="italic font-bold">Clarovate</span> — Where Clarity
          Meets Innovation.{" "}
        </h1>
      </div>
    </div>
  );
}
