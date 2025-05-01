"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Mission() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Hero />
    </div>
  );
}

function Hero() {
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
    <div className="w-full to-fire-950 bg-gradient-to-b from-fire-950 blade-top-padding-lg blade-bottom-padding-lg">
      <div className="w-container-lg xl:w-container grid grid-cols-1 md:grid-cols-2 gap-7 mx-auto">
        <div className="flex items-center">
          <div className=" h-[350px] md:h-[400px] lg:h-[450px] w-[600px] overflow-hidden rounded-2xl outline outline-offset-2  outline-[rgba(255,255,225,0.1)] ring-offset-2">
            <img
              src="/home_carousel/pexels-fauxels-3183170.jpg"
              className="h-full w-full object-center object-cover"
              alt=""
            />
          </div>
        </div>

        <div className=" gap-8 md:py-10 lg:py-20 xl:py-40 ">
          <div className="flex gap-4 flex-col">
            <span className="text-3xl xl:text-4xl text-white max-w-5xl  tracking-tighter font-regular">
              <span className="text-spektr-cyan-50">
                Empowering your business
              </span>
              <div className="flex gap-2 flex-wrap items-center">
                <span className="text-white">through</span>
                <motion.span
                  key={titles[titleNumber]}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.7 }}
                  className="font-bold text-fire-200"
                >
                  {titles[titleNumber]}
                </motion.span>
              </div>
            </span>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight w-11/12 md:w-full text-white max-w-xl text-left text-opacity-80 max-w-">
              To empower businesses with data-driven insights, AI-powered
              strategies, and transparent marketing processes that accelerate
              growth and maximize ROI.
            </p>
          </div>
          <div className="flex pb-10 md:pb-0 flex-row gap-3 pt-4 md:pt-7 lg:pt-10">
            <Button
              size="lg"
              className="gap-4"
              variant="secondary"
              onClick={() => router.push("/get-in-touch")}
            >
              Get in touch <PhoneCall className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
