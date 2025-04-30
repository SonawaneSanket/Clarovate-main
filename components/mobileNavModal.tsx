"use client";

import React, { useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import gsap from "gsap";
import { useRouter } from "next/navigation";
import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "./ui/button";

gsap.registerPlugin(ScrollTrigger);

export default function MobileNavModal({ toggleNav }: { toggleNav: any }) {
  const navigate = useRouter();
  const navigateTo = (target: string) => {
    navigate.push(target);
    toggleNav();
  };
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const dropdownRef = useRef<any>(null);

  const toggleDropdown = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    /* eslint-disable */
    <nav className="h-svh max-h-[100svh] bg-fire-50 font-normal">
      <section className="w-container min-h-full text-black  overflow-auto flex flex-col flex-nowrap z-[999]">
        <div className="flex flex-col flex-1 pt-28 ">
          <ul className="list-none grid gap-4 font">
            <li onClick={toggleNav}>
              <Link className="/about-us" href="/about">
                About us
              </Link>
            </li>

            <li onClick={toggleNav}>
              <Link className="/why-clarovate" href="/why-clarovate">
                Why clarovate
              </Link>
            </li>

            <li>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    <button
                      onClick={toggleDropdown}
                      type="button"
                      className="dropdown-toggle  text-black text-base border-none leading-none flex justify-between w-full items-center opacity-80"
                    >
                      Services
                    </button>
                  </AccordionTrigger>
                  <AccordionContent
                    onClick={() => toggleNav()}
                    className=" gap-4 grid text-black bg-fire-100 p-4 rounded-lg border-fire-200 border-[1px] border-solid"
                  >
                    <Link
                      href="/services/content-syndication"
                      className="text-link !text-black !hover:text-underline"
                    >
                      Content Syndication
                    </Link>
                    <Link
                      href="/services/telemarketing-and-appointment-setting"
                      className="text-link !text-black !hover:text-underline"
                    >
                      Telemarketing & Appointment <br /> Setting
                    </Link>
                    <Link
                      href="/services/sdr-as-service"
                      className="text-link !text-black !hover:text-underline"
                    >
                      SDR as a Service
                    </Link>
                    <Link
                      href="/services/data-services"
                      className="text-link !text-black !hover:text-underline"
                    >
                      Data Services
                    </Link>
                    <Link
                      href="/services/programmatic-advertising"
                      className="text-link !text-black !hover:text-underline"
                    >
                      Programmatic Advertising
                    </Link>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="mt-2">
                  <AccordionTrigger>
                    <button
                      type="button"
                      className="dropdown-toggle  text-black text-base border-none leading-none flex justify-between w-full items-center opacity-80"
                    >
                      Resources
                    </button>
                  </AccordionTrigger>
                  <AccordionContent
                    onClick={() => toggleNav()}
                    className=" gap-4 grid text-black bg-fire-100 p-4 rounded-lg border-fire-200 border-[1px] border-solid"
                  >
                    <Link
                      href="/resources/blogs"
                      className="text-link !text-black !hover:text-underline"
                    >
                      Blogs
                    </Link>
                    <Link
                      href="/resources/white-papers"
                      className="text-link !text-black !hover:text-underline"
                    >
                      White papers
                    </Link>
                    <Link
                      href="/resources/articles"
                      className="text-link !text-black !hover:text-underline"
                    >
                      Articles
                    </Link>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </li>
          </ul>
        </div>
        <div className="mt-auto pt-10 grid pb-6">
          <Button
            size="lg"
            className="h-12 text-lg"
            role="link"
            type="button"
            onClick={() => navigateTo("/get-in-touch")}
          >
            Get in touch
          </Button>
        </div>
      </section>
    </nav>
  );
}
