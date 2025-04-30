"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import React, { useState } from "react";
import Banner from "./banner";
import Mission from "./mission";
import AboutCompany from "./about_us";
import BannerV2 from "./bannerv2";

export default function AboutUs() {
  const [ismission, setmission] = useState(true);
  return (
    <div>
      <Header />
      <div className=" bg-red-800 pt-20">
        <BannerV2 />
        <div className="max-w-[100vw] lg:block hidden place-content-start  overflow-hidden">
          <svg
            className="w-screen max-w-[100vw] object-top h-full object-cover"
            width={1920}
            height={326}
            viewBox="0 0 1920 326"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_242_190)">
              <rect width={1920} height={326} fill="#953402" />
              <ellipse cx={1506} cy={624} rx={1998} ry={550} fill="#FFF4C1" />
            </g>
            <defs>
              <clipPath id="clip0_242_190">
                <rect width={1920} height={326} fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>

        <AboutCompany />
        <Mission />
      </div>
      <Footer />
    </div>
  );
}
