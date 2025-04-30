"use client";

export default function AboutService({
  title,
  deliveries,
  features,
}: {
  deliveries: Array<string>;
  features: Array<string>;
  title: string;
}) {
  return (
    <div className="blade-top-padding-sm rounded-t-[20px] md:rounded-t-[32px] -mt-10 blade-bottom-padding-lg bg-fire-50">
      <div className="w-container py-6 md:py-10 overflow-hidden max-w-[100vw] ">
        <div className="flex flex-col gap-2">
          <div className="md:grid grid-cols-10 gap-8">
            <div className="col-span-7 xl:col-span-8 flex flex-col gap-2">
              {/* <div className="h-[1px] w-full bg-gradient-to-r from-fire-800 to-black" /> */}
              <span
                data-aos="mount"
                data-aos-duration="850"
                className="text-xl md:text-2xl lg:text-xl pt-4 md:pt-6 lg:pt-10 font-normal text-black leading-tight max-w-3xl"
              >
                {title}
              </span>
            </div>
            <div className="md:block hidden col-span-2">
              <svg
                width={156}
                height={120}
                viewBox="0 0 156 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="78.499"
                  y="0.5"
                  width="37.9994"
                  height={39}
                  fill="#FFF4C1"
                  stroke="url(#paint0_linear_207_84)"
                />
                <rect
                  x="0.5"
                  y="40.5"
                  width="37.9994"
                  height={39}
                  fill="#FFF4C1"
                  stroke="url(#paint1_linear_207_84)"
                />
                <rect
                  x="117.498"
                  y="80.5"
                  width="37.9994"
                  height={39}
                  fill="#FFF4C1"
                  stroke="url(#paint2_linear_207_84)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_207_84"
                    x1="97.4987"
                    y1={0}
                    x2="97.4987"
                    y2={40}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#A33900" />
                    <stop offset={1} />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_207_84"
                    x1="19.4997"
                    y1={40}
                    x2="19.4997"
                    y2={80}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#A33900" />
                    <stop offset={1} />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_207_84"
                    x1="136.498"
                    y1={80}
                    x2="136.498"
                    y2={120}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#A33900" />
                    <stop offset={1} />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          <div className="grid  grid-cols-1 md:grid-cols-2  md:w-container !ml-0">
            <div className="grid w-full sm:px-2 md:px-7 grid-cols-1 blade-top-padding ">
              <span
                data-aos="mount"
                data-aos-duration="850"
                data-aos-delay="200"
                className="text-xl md:text-2xl font-semibold text-black pb-6 block "
              >
                What We Deliver:
              </span>
              <ul className=" list-disc space-y-2 md:space-y-6 pl-8 max-w-md ">
                {deliveries.map((elem, index: number) => {
                  return (
                    <li
                      className="max-w-md"
                      data-aos="mount"
                      data-aos-duration="850"
                      data-aos-delay={`${200 + 100 * (index + 1)}`}
                      key={`${index}`}
                    >
                      <span
                        className="text-black text-opacity-80 leading-tight text-base md:text-lg "
                        dangerouslySetInnerHTML={{ __html: elem }}
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="grid w-full  px-2 md:px-7 grid-cols-1 blade-top-padding  blade-top-padding-lg">
              <div>
                <span
                  className=" text-xl md:text-2xl font-semibold text-black pb-6 block "
                  data-aos="mount"
                  data-aos-duration="850"
                  data-aos-delay="200"
                >
                  Our salient features:
                </span>
                <ul className="list-disc  space-y-2 md:space-y-6 pl-8 max-w-md">
                  {features.map((elem, index: number) => {
                    return (
                      <li
                        className="max-w-md"
                        key={`${index}`}
                        data-aos="mount"
                        data-aos-duration="850"
                        data-aos-delay={`${200 + 100 * (index + 1)}`}
                      >
                        <span
                          className="text-black text-opacity-80 leading-tight text-base md:text-lg "
                          dangerouslySetInnerHTML={{ __html: elem }}
                        />
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
