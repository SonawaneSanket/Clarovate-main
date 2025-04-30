"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

export type GalleryList = {
  title: string;
  img: string;
  desc: string;
  subtitle: string;
  target: string;
};

export const ChoiceCardsData = [
  {
    img: "/content_syndication.jpg",
    title: "Content syndication",
    subtitle: "Targeted Content That Drives Decisions.",
    desc: "Distribute content across multi-channel platforms to reach your ideal audience, generate qualified leads, and build brand visibility—all with measurable ROI",
    target: "/services/content-syndication",
  },

  {
    subtitle: "Personalized Outreach That Opens Doors.",
    img: "/telemarketing.jpeg",
    title: "Telemarketing & Appointment Setting",
    desc: "Build genuine connections through one-to-one interactions designed to uncover pain points and deliver solutions that resonate.",
    target: "/services/telemarketing-and-appointment-setting",
  },

  {
    img: "/sdr_updated.jpeg",
    title: "SDR as a Service",
    subtitle: "Your Dedicated Sales Development Team.",
    desc: "Our SDRs act as an extension of your sales team, qualifying leads, setting appointments, and driving opportunities directly to your pipeline.",
    target: "/services/sdr-as-service",
  },
  {
    img: "/lead_generation.jpeg",
    title: "Data Services",
    subtitle: "Fuel Your Campaigns with High-Quality, Verified Data.",
    desc: "At Clarovate, we understand that successful marketing and sales efforts start with accurate and reliable data.",
    target: "/services/data-services",
  },

  {
    img: "/advertising.jpeg",
    subtitle: "AI-Powered Precision for Smarter Ads.",
    title: "Programmatic Advertising",
    desc: "Target high-intent buyers with dynamic ads placed through real-time bidding, ensuring that your message is seen by the right people, at the right time.",
    target: "/services/programmatic-advertising",
  },
];

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.defaults({
  toggleActions: "restart pause resume none",
});
ScrollTrigger.config({ limitCallbacks: true });

function Gallery({
  divider,
  galleryList,
}: {
  divider: string;
  galleryList: GalleryList[];
}) {
  const sliderRef = useRef<any>(null);
  const sliderParentRef = useRef<any>(null);
  const partitionRef = useRef<any>(null);

  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    let ctx = gsap.context(() => {
      let panels: any = gsap.utils.toArray(".gallery-article");
      gsap.to(panels, {
        x: -width + window.innerWidth,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: sliderParentRef.current,
          pin: true,
          scrub: 1,
          end: () => "+=200%",
          fastScrollEnd: true,
        },
      });
    }, sliderParentRef);
    return () => ctx.revert();
  }, [width, height]);

  useEffect(() => {
    if (!sliderRef.current || !partitionRef.current) return;

    new ResizeObserver((entries: any) => {
      setWidth(Math.trunc(entries?.[0]?.contentRect?.width));
    }).observe(sliderRef.current);

    new ResizeObserver((entries: any) => {
      const cardHeight =
        window.innerHeight -
        Math.trunc(entries?.[0]?.borderBoxSize?.[0]?.blockSize);
      setHeight(cardHeight);
    }).observe(partitionRef.current);
  }, []);

  return (
    <section className="overflow-visible bg-gradient-to-b from-fire-50 to-fire-50">
      <section className="bg-green " ref={sliderParentRef}>
        <div ref={partitionRef} className="py-0" />
        <section className="hide-scrollbar !border-transparent h-full max-h-fit overflow-hidden">
          <div
            ref={sliderRef}
            className={`flex min-w-max overflow-hidden`}
            style={{ maxHeight: height }}
          >
            {galleryList.map((item, index) => {
              return (
                <GallerySlider
                  target={item.target}
                  subtitle={item.subtitle}
                  key={index}
                  title={item.title}
                  img={item.img}
                  desc={item.desc}
                />
              );
            })}
          </div>
        </section>
      </section>
    </section>
  );
}

function GallerySlider({ title, img, desc, subtitle, target }: GalleryList) {
  const router = useRouter();
  return (
    <article
      className={` px-4 py-3 gallery-article relative  grid h-screen w-[580px]`}
    >
      <div className="service-card lg:h-[calc(100vh-50px)] max-h-full">
        <div className="lg:max-h-screen grid-rows-5 h-full p-4 grid grid-cols-1">
          <div className="overflow-hidden row-span-2 rounded-2xl">
            <img
              src={img}
              className="w-full h-full object-cover object-center"
              alt="variant design for"
            />
          </div>
          <div className="row-span-3 flex flex-col flex-1 h-full gap-5 px-4 pt-8 pb-2">
            <div className="flex flex-col flex-1 gap-3">
              <div className="flex flex-col">
                <span className="font-semibold text-inherit text-fire-900 text-3xl">
                  {title}
                </span>
                <span className="font-semibold text-base md:text-lg lg:text-xl 2xl:text-xl text-inherit text-fire-950">
                  {subtitle}
                </span>
              </div>
              <span className="font-normal text-base md:text-base lg:text-lg 2xl:text-xl text-inherit text-fire-950">
                {desc}
              </span>
            </div>
            <div className="grid flex-0 place-content-start">
              <Button
                size="lg"
                onClick={() => {
                  router.push(target);
                }}
              >
                View details
                <ArrowRight />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function CropGallery() {
  return <Gallery divider="What it covers" galleryList={ChoiceCardsData} />;
}

export default CropGallery;
