"use client";

import { useRef } from "react";
import { HeartPulse } from "lucide-react";
import CoreValues from "./component/CoreValues";
import Carousel from "@/components/sections/home/component/Carousel";

export default function About() {
  const sectionRef = useRef(null);
  return (
    <>
      <section
        ref={sectionRef}
        id="home"
        className=" min-h-screen mx-auto relative">
        <div className="relative flex flex-col py-6 rounded-lg ">
          <div className="w-[80%] mx-auto flex flex-col items-center justify-center p-6 gap-y-4 ">
            <div className="p-6">
              <span className=" flex items-center gap-x-1  px-3 py-2 text-sm border border-black/30 rounded-full shadow-lg ">
                <HeartPulse size={18} strokeWidth={1.6} />
                Who we are
              </span>
            </div>

            <div className="flex flex-col items-center gap-4 ">
              <div className="">
                <span className="text-4xl font-semibold text-center">
                  Panamed Philippines Incorporation
                </span>
              </div>

              <div className="w-[60%]">
                <p className="text-center text-lg/relaxed">
                  is a trusted professional organization specializing in the
                  importation, marketing and distribution of high-quality
                  medical devices. We have been a reliable partner in the
                  healthcare industry for over 20 years, delivering exceptional
                  service and innovative solutions to the Filipinos.
                </p>
              </div>
            </div>

            <div className="">
              <CoreValues />
            </div>
            <div className=" w-full pt-20">
              <Carousel />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
