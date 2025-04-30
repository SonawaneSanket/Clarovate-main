"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const featuresData = [
  {
    title: "Built on Technology—Driven by Results.",
    subtitle:
      "Our proprietary Clarovate Platform automates time-consuming operational tasks, enabling:",
    imgSrc: "/features/tech_driven.png",
    paragraph:
      "Streamlined Campaign Management – Faster setup, tracking, and optimization.",
    subParagraph: [
      "Data-Driven Decision Making – Insights powered by AI and predictive analytics.",
      "Hyper-Targeted Outreach – Precision targeting based on intent data and buyer personas.",
    ],
    result: "Faster turnaround, higher-quality leads, and optimized budgets.",
  },
  {
    title: "Unwavering Transparency—No Hidden Metrics.",
    subtitle: "Transparency is in our DNA—our name says it all.",
    imgSrc: "/services-elements/service_elements_engineering_excellence.svg",
    paragraph:
      "We believe clients deserve clarity at every step. From budget utilization to performance analytics, our reporting systems provide:",
    subParagraph: [
      "Real-Time Dashboards – Always know where your campaigns stand.",
      "Performance Insights – Track leads, conversions, and ROI in one place.",
      "Proof of Execution – Get detailed logs of calls, emails, and responses.",
    ],
    result:
      "At Clarovate, what you see is what you get—no guesswork, no surprises.",
  },
  {
    title: "Proven Experience with a Modern Approach.",
    subtitle:
      "Our team brings over a decade of expertise in B2B demand generation but doesn’t stop there.",
    imgSrc: "/services-elements/service_elements_engineering_excellence.svg",
    paragraph: "We combine that experience with cutting-edge tools to deliver:",
    subParagraph: [
      "Scalable Campaigns – From local businesses to global enterprises.",
      "Adaptable Strategies – Tailored approaches for every niche and goal.",
      "Integrated Marketing Efforts – Blending email, telemarketing, and digital ads seamlessly.",
    ],
    result:
      "With Clarovate, you don’t just get a vendor—you get a partner who’s invested in your growth.",
  },
  {
    title: "Measurable Impact That Speaks for Itself.",
    subtitle: "Your Goals Are Our Results.",
    imgSrc: "/services-elements/service_elements_engineering_excellence.svg",
    paragraph: "",
    subParagraph: [
      "50,000+ Qualified Leads Delivered.",
      "90%+ Engagement Rates on Content Syndication.",
      "20% Faster Campaign Completion.",
      "100% Client Retention on Recurring Programs.",
    ],
    result: "Your Goals Are Our Results.",
  },
];

export default function SalientFeatures() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth > 768) {
      const cards = document.querySelectorAll(".seismic-shift-wrapper .card");
      const ctx = gsap.context(() => {
        const tm = gsap.timeline({
          scrollTrigger: {
            trigger: ".seismic-shift-wrapper",
            start: "top top",
            end: "bottom top",
            pin: true,
            scrub: 2,
            markers: false,
          },
        });
        cards.forEach((card, index) => {
          const value = (10 - index / 2) / 10;

          tm.fromTo(
            card,
            { scale: 1.3, y: "160vh" },
            { scale: 1, y: 0, transformOrigin: "top", duration: 3 }
          );
        });
      }, container);
      return () => ctx.revert();
    }
  }, []);
  return (
    <section className="bg-gradient-to-b from-fire-900  to-fire-950">
      {/* Desktop View */}
      <div ref={container} className="md:block hidden">
        <div className="seismic-shift-wrapper  bg-no-repeat bg-cover  relative md:h-screen overflow-hidden blade-bottom-padding-xl bg-center">
          <div className="grid gap-6 px-4">
            {featuresData.map((item, index) => {
              return (
                <div
                  key={item.title}
                  className={`shadow  service-card card card${index} z-${index} absolute inset-x-0 xlg:bottom-16 lg:bottom-10 bottom-6 2xl:min-h-[600px] min-h-[450px] bg-gradient 2xl:w-9/12 w-10/12   z-10  p-8 rounded-xl overflow-hidden lightGray mx-auto blade-top-padding blade-bottom-padding`}
                >
                  <div className="grid grid-cols-2 gap-10">
                    <div className=" d overflow-hidden">
                      <img
                        src={item.imgSrc}
                        alt={item.title}
                        className="h-full w-full object-center object-cover"
                      />
                    </div>
                    <div className="w-11/12 flex flex-col justify-center gap-4 py-4">
                      <span className="text-4xl  from-fire-800 bg-gradient-to-b  text-transparent bg-clip-text to-fire-900 leading-tight font-semibold  max-w-md ">
                        {item.title}
                      </span>
                      <span className="text-xl font-semibold text-black">
                        {item.subtitle}
                      </span>
                      <span className="text-base md:text-lg max-w-lg font-normal text-black">
                        {item.paragraph}
                      </span>
                      <ul className="list-disc text-base w-9/12 pl-8">
                        {item.subParagraph.map((elem, index: number) => {
                          return <li>{elem}</li>;
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
