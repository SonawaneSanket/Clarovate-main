import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function WhyUs() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="blade-top-padding blade-bottom-padding why-us-wrapper">
      <div className="w-container blade-bottom-padding-sm">
        <div className="grid grid-cols-9">
          <div className="col-span-8  overflow-hidden max-w-[100vw] flex flex-col gap-2">
            <div className="h-[1px] w-full bg-[#ECD947]" />
            <span
              data-aos="mount"
              data-aos-duration="850"
              className="block pb-8 text-4xl md:text-5xl lg:text-6xl leading-tight  font-bold text-fire-100 pt-6 md:pt-8 lg:pt-10"
            >
              The Clarovate Edge
            </span>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <span
                data-aos="mount"
                data-aos-duration="850"
                data-aos-delay="150"
                className="text-fire-50 font-medium text-xl md:text-2xl leading-tight block"
              >
                Smarter Technology. Transparent Results. <br /> Unmatched
                Efficiency.
              </span>
              <span
                data-aos="mount"
                data-aos-duration="850"
                data-aos-delay="300"
                className="text-base md:text-lg leading-tight text-fire-50 w-full md:w-10/12 xl:w-9/12 "
              >
                At Clarovate, we’ve taken the complexity out of B2B marketing
                operations and built a platform that delivers efficiency,
                quality, and speed—so you can focus on scaling your business,
                not managing chaos.
              </span>
            </div>
          </div>
          <div className="col-span-1 lg:block hidden">
            <svg
              width="156"
              height="120"
              viewBox="0 0 156 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="78.0012" width="38.9994" height="40" fill="#FFF4C1" />
              <rect
                x="0.00244141"
                y="40"
                width="38.9994"
                height="40"
                fill="#FFF4C1"
              />
              <rect
                x="117.001"
                y="80"
                width="38.9994"
                height="40"
                fill="#FFF4C1"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  blade-top-padding lg:grid-cols-3  gap-y-12 gap-x-6 w-container blade-bottom-padding">
        <article
          data-aos="mount"
          data-aos-duration="850"
          data-aos-delay="450"
          className="flex flex-col gap-2 w-11/12 "
        >
          <Image
            src="/why-us/first.svg"
            alt="built on technology"
            height={60}
            loading="eager"
            width={60}
          />
          <span className="text-lg  font-medium lg:text-xl text-fire-50 ">
            Built on Technology—Driven by Results.
          </span>
          <span className="text-sm md:text-base text-fire-100 text-opacity-90 w-11/12 leading-tight">
            Our proprietary Clarovate Platform automates time-consuming
            operational tasks, enabling:
          </span>
        </article>
        <article
          data-aos="mount"
          data-aos-duration="850"
          data-aos-delay="600"
          className="flex flex-col gap-2 w-11/12 "
        >
          <Image
            src="/why-us/second.svg"
            alt="built on technology"
            height={60}
            loading="eager"
            width={60}
          />
          <span className="text-lg  font-medium lg:text-xl text-fire-50 ">
            Unwavering Transparency
          </span>
          <span className="text-sm md:text-base text-fire-100 text-opacity-90 w-11/12 leading-tight">
            Transparency is in our DNA—our name says it all.We believe clients
            deserve clarity at every step. From budget utilization to
            performance
          </span>
        </article>
        <article
          data-aos="mount"
          data-aos-duration="850"
          data-aos-delay="750"
          className="flex flex-col gap-2 w-11/12 "
        >
          <Image
            src="/why-us/third.svg"
            alt="built on technology"
            height={60}
            loading="eager"
            width={60}
          />
          <span className="text-lg  font-medium lg:text-xl text-fire-50 ">
            Proven Experience with a <br className="md:block hidden" /> Modern
            Approach.
          </span>
          <span className="text-sm md:text-base text-fire-100 text-opacity-90 w-11/12 leading-tight">
            Our team brings over a decade of expertise in B2B demand generation
            but doesn’t stop there.
          </span>
        </article>
      </div>
    </section>
  );
}
