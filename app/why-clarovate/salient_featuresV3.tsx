import React from "react";

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
    imgSrc: "/features/transparent.png",
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
    imgSrc: "/features/modern_approach.png",
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
    imgSrc: "/features/measureable_insights.png",
    paragraph:
      "Data-driven results, proven ROI, and measurable success—our impact speaks for itself",
    subParagraph: [
      "50,000+ Qualified Leads Delivered.",
      "90%+ Engagement Rates on Content Syndication.",
      "20% Faster Campaign Completion.",
      "100% Client Retention on Recurring Programs.",
    ],
    result: "Your Goals Are Our Results.",
  },
];

export default function SalientFeaturesV3() {
  return (
    <div className="overflow-hidden">
      <div id="">
        <div className="max-w-[100vw] flex overflow-hidden">
          {featuresData.slice(0, 2).map((elem, index: number) => {
            return (
              <div className="basis-0 grow border-r-[1px] border-solid border-fire-900 last:border-none shrink hover:basis-[100px] bg-fire-950  transition-all duration-300 ease-in-out bg-gradient-to-b from-fire-900 to-fire-950 grid grid-cols-1 grid-rows-[repeat(5,150px)]">
                <div className="overflow-hidden row-span-2">
                  <img
                    src={elem.imgSrc}
                    alt={elem.title}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="row-span-3 pb-7 pt-12 px-7 flex flex-col gap-6">
                  <span className="  text-xl lg:text-2xl xl:text-3xl text-fire-100 flex-0 font-semibold ">
                    {elem.title}
                  </span>
                  <span className="text-lg flex-1 text-fire-50 leading-normal ">
                    {elem.paragraph}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="max-w-[100vw] flex overflow-hidden">
          {featuresData.slice(2, 4).map((elem, index: number) => {
            return (
              <div className="basis-0 grow border-r-[1px] border-solid border-fire-900 last:border-none shrink hover:basis-[100px] bg-fire-950  transition-all duration-300 ease-in-out bg-gradient-to-b from-fire-900 to-fire-950 grid grid-cols-1 grid-rows-[repeat(5,150px)]">
                <div className="overflow-hidden row-span-2">
                  <img
                    src={elem.imgSrc}
                    alt={elem.title}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="row-span-3 pb-7 pt-12 px-7 flex flex-col gap-6">
                  <span className="  text-xl lg:text-2xl xl:text-3xl text-fire-100 flex-0 font-semibold ">
                    {elem.title}
                  </span>
                  <span className="text-lg flex-1 text-fire-50 leading-normal ">
                    {elem.paragraph}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
