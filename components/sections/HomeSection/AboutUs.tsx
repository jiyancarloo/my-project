"use client";

import { useRef } from "react";

export default function About() {
  const sectionRef = useRef(null);
  return (
    <>
      <section ref={sectionRef} id="home" className="relative bg-[#F4F6FB]">
        {/* Container  */}
        {/* Header */}
        <div className="p-8 space-y-8 mx-30 py-40 ">
          <div className="flex flex-col gap-3">
            <span className="text-black/60 uppercase tracking-widest whitespace-nowrap">
              WHO WE ARE
            </span>
            <div className="border-b border-black/30" />
          </div>

          <article className="text-pretty ">
            <p className=" text-4xl text-third max-w-7xl">
              We are a trusted professional organization specializing in the
              importation, marketing, and distribution of high-quality medical
              devices.
            </p>
          </article>

          <div className="mt-30 grid grid-cols-[auto_1px_auto_auto] gap-20 items-center">
            <article className="text-balance space-y-2">
              <span className=" block text-4xl  text-third font-semibold tracking-wide">
                20+
              </span>
              <p className="text-gray-600 ">
                Years of service and industry partnerships.
              </p>
            </article>
            <div className="hidden sm:block w-px h-16 bg-black/40" />
            <article className="text-balance space-y-2">
              <span className=" block text-4xl  text-third font-semibold tracking-wide">
                100+
              </span>
              <p className="text-gray-600">
                Trusted healthcare partners nationwide.
              </p>
            </article>
            <article className="text-pretty ml-10">
              <p>
                We are committed to providing our clients with the exceptional
                healthcare products to meet their needs, ensuring that we
                continue to make a meaningful impact on healthcare wellness in
                the Philippines.
              </p>
            </article>
          </div>
        </div>
        {/* <div className="">
          <CoreValues />
        </div>
        <div>
          <HomeCarousel />
        </div> */}
      </section>
    </>
  );
}
