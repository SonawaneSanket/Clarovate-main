"use client";

import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import AOS from "aos";
import "aos/dist/aos.css";

const slides = [
  "/home_carousel/pexels-canvastudio-3153199.jpg",
  "/home_carousel/pexels-fauxels-3183170.jpg",
  "/home_carousel/pexels-mikael-blomkvist-6476246.jpg",
  "/home_carousel/pexels-divinetechygirl-1181346.jpg",
  "/home_carousel/pexels-fauxels-3184464.jpg",

];
export default function Banner() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className=" bg-fire-50 mt-20 p-2 md:p-3 lg:p-6 relative">
      <div className="border-[1px] border-solid border-fire-300 bg-fire-10 relative rounded-lg overflow-hidden">
        <Swiper
          autoplay={{
            delay: 2000,
          }}
          speed={1000}
          slidesPerView={1}
          effect={"fade"}
          modules={[EffectFade, Autoplay]}
        >
          {slides.map((elem, index) => {
            return (
              <SwiperSlide key={index}>
                <Slide elem={elem} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black z-40" />
      </div>
      <div className="flex flex-col gap-3 md:gap-4 lg:gap-6  z-[50] justify-end align-start absolute inset-0 w-container max-w-full px-4 blade-bottom-padding-lg">
        <span
          data-aos="mount"
          data-aos-duration="850"
          className="text-fire-50 text-3xl md:text-4xl leading-tight  lg:text-6xl font-semibold"
        >
          Transforming B2B Marketing
        </span>
        <span
          data-aos="mount"
          data-aos-duration="850"
          data-aos-delay="200"
          className="text-white text-opacity-90  text-base md:text-lg leading-tight font-semibold"
        >
          Where Clarity Meets Innovation.
        </span>
      </div>
    </div>
  );
}

function Slide({ elem }: { elem: string }) {
  return (
    <article className="h-[300px] md:h-[400px] lg:h-[500px] 2xl:h-[calc(100vh-140px)]">
      <div className="absolute inset-0 ">
        <img
          loading="eager"
          className="h-full w-full object-top object-cover"
          src={elem}
        />
      </div>
    </article>
  );
}
