"use client";

import { Button } from "@/components/ui/button";
import { CSSTransition } from "react-transition-group";
import React, { useEffect, useMemo, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AboutUs() {
  const [active, setActive] = useState(0);
  const nodeRef = useRef(null);

  const pointers = [
    {
      title: "ROI per annum",
      value: "10%",
    },
    {
      title: "Active growth",
      value: "10%",
    },
    {
      title: "Technology backed",
      value: "10%",
    },
    {
      title: "Idea based",
      value: "10%",
    },
    {
      title: "Collaborative approach",
      value: "10%",
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActive((prev) => (prev === pointers.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  const mainTitles = ["check", "this", "animation", "this", "working", "fine"];

  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["Clarity", "Innovation", "Transparency", "Impact"],
    []
  );
  const router = useRouter();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <section className="blade-top-padding-lg blade-bottom-padding-lg bg-fire-50 bg-opacity-50">
      <div className="w-container grid grid-cols-1 lg:grid-cols-2  gap-y-10 gap-6 min-h-[500px]">
        <div className="flex max-w-[600px] mx-auto w-full flex-col gap-6 justify-end">
          <span
            data-aos="mount"
            data-aos-duration="850"
            data-aos-easing="ease-in-out"
            className="text-fire-900 w-11/12 md:w-full pr-3 text-3xl lg:text-4xl leading-tight max-w-[600px] font-medium"
          >
            Clarovate is built on the foundation of Clarity and Innovation
          </span>
          <span
            data-aos="mount"
            data-aos-duration="850"
            data-aos-delay="200"
            data-aos-easing="ease-in-out"
            className="text-base lg:text-lg text-fire-950 leading-tight text-opacity-75 max-w-[500px]"
          >
            Whether you’re a marketer looking for smarter strategies or a
            marketing agency seeking reliable execution, Clarovate empowers you
            to build scalable campaigns, reach the right audiences, and drive
            real revenue growth.
          </span>
          <div
            data-aos="mount"
            data-aos-duration="850"
            data-aos-delay="250"
            className="grid place-content-start pt-4"
          >
            <Button
              size="lg"
              className="text-lg"
              onClick={() => router.push("/get-in-touch")}
            >
              Get started
            </Button>
          </div>
        </div>

        <div
          data-aos="mount"
          className="min-h-[400px] max-w-[600px] mx-auto w-full"
          data-aos-duration="850"
          data-aos-delay="200"
        >
          <div className="rounded-xl grid overflow-hidden bg-[#A33900] h-full relative">
            <div className="absolute inset-0 bg-[url('/about-us.svg')] bg-contain bg-no-repeat bg-left" />
            <div className="relative h-full w-full">
              <div className="absolute inset-0 z-50 flex justify-end align-end">
                <div className="about-us-slides flex flex-col gap-3 ml-auto mt-auto w-10/12 mb-0 mr-0 h-[70%] p-10">
                  <div className="absolute inset-0 bg-[url('/stair.svg')] bg-contain bg-[right_30px_bottom_-40px] bg-no-repeat"></div>
                  <span className="overflow-hidden relative grid h-10">
                    {pointers.map((title, index) => (
                      <motion.span
                        key={index}
                        className="absolute font-semibold mr-auto right-auto"
                        initial={{ opacity: 0, y: "-100" }}
                        transition={{ type: "spring", stiffness: 50 }}
                        animate={
                          titleNumber === index
                            ? {
                                y: 0,
                                opacity: 1,
                              }
                            : {
                                y: titleNumber > index ? -30 : 30,
                                opacity: 0,
                              }
                        }
                      >
                        {title.title}
                      </motion.span>
                    ))}
                  </span>

                  <span className="text-3xl h-10 overflow-hidden -mt-4 font-semibold text-black">
                    <span className="overflow-hidden relative grid  h-10">
                      {pointers.map((title, index) => (
                        <motion.span
                          key={index}
                          className="absolute font-semibold mr-auto right-auto"
                          initial={{ opacity: 0, y: "-100" }}
                          transition={{
                            duration: 2000,
                            type: "spring",
                            stiffness: 50,
                          }}
                          animate={
                            titleNumber === index
                              ? {
                                  y: 0,
                                  opacity: 1,
                                }
                              : {
                                  y: titleNumber > index ? -30 : 30,
                                  opacity: 0,
                                }
                          }
                        >
                          {title.value}
                        </motion.span>
                      ))}
                    </span>
                  </span>
                </div>
              </div>
              <div className="absolute inset-0 -translate-y-12 translate-x-12 z-40 flex justify-end align-end">
                <div className="about-us-slides ml-auto mt-auto w-10/12 mb-0 mr-0 h-[70%] p-4">
                  <span className="font-semibold">
                    <span className="overflow-hidden relative grid h-10">
                      {pointers.map((title, index) => (
                        <motion.span
                          key={index}
                          className="absolute font-semibold mr-auto right-auto"
                          initial={{ opacity: 0, y: "-100" }}
                          transition={{ type: "spring", stiffness: 50 }}
                          animate={
                            titleNumber === index - 1
                              ? {
                                  y: 0,
                                  opacity: 1,
                                }
                              : {
                                  y: titleNumber > index ? -30 : 30,
                                  opacity: 0,
                                }
                          }
                        >
                          {title.title}
                        </motion.span>
                      ))}
                    </span>
                  </span>
                </div>
              </div>
              <div className="absolute inset-0 -translate-y-24 translate-x-24 z-30 flex justify-end align-end">
                <div className="about-us-slides ml-auto mt-auto w-10/12 mb-0 mr-0 h-[70%] p-4">
                  <span className="font-semibold"></span>
                  {pointers.map((title, index) => (
                    <motion.span
                      key={index}
                      className="absolute font-semibold mr-auto right-auto"
                      initial={{ opacity: 0, y: "-100" }}
                      transition={{ type: "spring", stiffness: 50 }}
                      animate={
                        titleNumber === index - 2
                          ? {
                              y: 0,
                              opacity: 1,
                            }
                          : {
                              y: titleNumber > index ? -30 : 30,
                              opacity: 0,
                            }
                      }
                    >
                      {title.title}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
