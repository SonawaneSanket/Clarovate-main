import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

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
export default function ServicesMobile() {
  return (
    <div className="blade-top-padding grid md:grid-cols-2 grid-cols-1 blade-bottom-padding ">
      {ChoiceCardsData.map((item, index) => {
        return (
          <Card
            subtitle={item.subtitle}
            key={index}
            title={item.title}
            img={item.img}
            desc={item.desc}
            target={item.target}
          />
        );
      })}
    </div>
  );
}

function Card({ title, target, img, desc, subtitle }: any) {
  const router = useRouter();
  return (
    <article className={` p-2 gallery-article relative grid py-2  `}>
      <div className="service-card !rounded-xl max-h-full">
        <div className="lg:max-h-screen p-2 grid grid-cols-1">
          <div className="overflow-hidden row-span-2 rounded-xl">
            <img
              src={img}
              className="w-full h-full object-cover object-center"
              alt="variant design for"
            />
          </div>
          <div className="row-span-3 flex flex-col gap-5 px-2 py-4">
            <div className="grid gap-3">
              <span className="font-semibold text-inherit text-fire-900 text-xl md:text-2xl lg:text-3xl">
                {title}
              </span>
              <span className="font-semibold text-base md:text-lg lg:text-xl 2xl:text-xl text-inherit text-fire-950">
                {subtitle}
              </span>
            </div>
            <span className="font-normal text-base  pr-4 md:text-lg lg:text-xl 2xl:text-xl text-inherit text-fire-950">
              {desc}
            </span>
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
