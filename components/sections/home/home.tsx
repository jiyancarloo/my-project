"use client";

import { useRef } from "react";
import Image from "next/image";
import { CircleSmall } from "lucide-react";

export default function Details() {
  const sectionRef = useRef(null);
  return (
    <>
      <section
        ref={sectionRef}
        id="home"
        className=" min-h-screen  mx-auto relative bg-white">
        <div className=" relative flex flex-col gap-4 p-6 rounded-lg py-20">
          <div className=" flex items-center justify-center">
            <span className=" flex items-center border rounded-full px-3 py-2 text-sm ">
              <CircleSmall size={18} className="" />
              Who we are
            </span>
          </div>

          <div className="w-[60%] mx-auto flex items-start justify-center p-6 ">
            <div className="flex flex-col items-center gap-2">
              <span className="text-4xl font-semibold text-center">
                Panamed Philippines Incorporation
              </span>
              <p className="text-center text-lg/relaxed">
                is a trusted professional organization specializing in the
                importation, marketing and distribution of high-quality medical
                devices. We have been a reliable partner in the healthcare
                industry for over 20 years,
              </p>
            </div>
          </div>

          <div>Hello</div>
        </div>
      </section>
    </>
  );
}
