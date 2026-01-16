"use client";

import { useRef } from "react";
import CoreValues from "./component/CoreValues";
import HomeCarousel from "./component/HomeCarousel";

export default function About() {
  const sectionRef = useRef(null);
  return (
    <>
      <section
        ref={sectionRef}
        id="home"
        className="min-h-screen relative bg-[#002432] py-20">
        <div className="w-fit mx-auto p-6">
          <span className="flex items-center gap-x-1  px-3 py-2 text-sm border border-white/30 rounded-full shadow-lg text-white ">
            <div className="w-2 h-2 bg-white rounded-full" />
            Who we are
          </span>
        </div>
        <div className="mx-auto flex flex-col items-center justify-center p-6 space-y-15">
          <div className="flex flex-col items-center gap-4">
            <div className="">
              <span className="text-4xl font-semibold text-center text-white">
                Panamed Philippines Incorporation
              </span>
            </div>

            <div className="w-[60%]">
              <p className="text-center text-lg/relaxed text-gray-400">
                is a trusted professional organization specializing in the
                importation, marketing and distribution of high-quality medical
                devices. We have been a reliable partner in the healthcare
                industry for over 20 years, delivering exceptional service and
                innovative solutions to the Filipinos.
              </p>
            </div>
          </div>
          <div>
            <CoreValues />
          </div>
          <div>
            <HomeCarousel />
          </div>
        </div>
      </section>
    </>
  );
}
