"use client";

import { useRef } from "react";
import { HeartPulse } from "lucide-react";
import CoreValues from "./component/CoreValues";
import Carousel from "./component/HomeCarousel";
import HomeCarousel from "./component/HomeCarousel";

export default function About() {
  const sectionRef = useRef(null);
  return (
    <>
      <section
        ref={sectionRef}
        id="home"
        className="min-h-screen mx-auto relative bg-white">
        <div className="">
          <div className="w-[80%] mx-auto flex flex-col items-center justify-center p-6 gap-y-4 py-20">
            <div className="p-6">
              <span className=" flex items-center gap-x-1  px-3 py-2 text-sm border border-black/30 rounded-full shadow-lg text-third ">
                <HeartPulse size={18} strokeWidth={1.6} />
                Who we are
              </span>
            </div>

            <div className="flex flex-col items-center gap-4 text-third">
              <div className="">
                <span className="text-4xl font-semibold text-center">
                  Panamed Philippines Incorporation
                </span>
              </div>

              <div className="w-[60%]">
                <p className="text-center text-lg/relaxed ">
                  is a trusted professional organization specializing in the
                  importation, marketing and distribution of high-quality
                  medical devices. We have been a reliable partner in the
                  healthcare industry for over 20 years, delivering exceptional
                  service and innovative solutions to the Filipinos.
                </p>
              </div>
            </div>

            <div className="py-10">
              <CoreValues />
            </div>
          </div>
        </div>
        <div className=" w-full    ">
          <HomeCarousel />
        </div>
      </section>
    </>
  );
}
