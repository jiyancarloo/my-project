"use client";

import { useRef } from "react";

export default function About() {
  const sectionRef = useRef(null);
  return (
    <>
      <section ref={sectionRef} id="home" className="relative bg-[#F4F6FB]">
        {/* Container  */}
        {/* Header */}
        <div className="px-4 sm:px-8 lg:mx-30 space-y-8  lg:py-40 py-25">
          {/* Header */}
          <div className="flex flex-col gap-3">
            <span className="text-black/60 uppercase tracking-widest text-sm lg:text-base">
              WHO WE ARE
            </span>
            <div className="border-b border-black/30" />
          </div>

          {/* Main text */}
          <article className="text-pretty">
            <p className="text-xl sm:text-3xl lg:text-4xl text-third max-w-7xl">
              We are a trusted professional organization specializing in the
              importation, marketing, and distribution of high-quality medical
              devices.
            </p>
          </article>

          {/* Stats grid */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-[auto_1px_auto] lg:grid-cols-[auto_1px_auto_auto] gap-6 sm:gap-10 lg:gap-20 items-center">
            <article className="text-balance space-y-2">
              <span className="block text-4xl sm:text-5xl text-third font-semibold tracking-wide">
                20+
              </span>
              <p className="text-gray-600 text-sm sm:text-base">
                Years of service and industry partnerships.
              </p>
            </article>

            <div className="hidden sm:block w-px h-16 bg-black/40" />

            <article className="text-balance space-y-2">
              <span className="block text-4xl sm:text-5xl text-third font-semibold tracking-wide">
                100+
              </span>
              <p className="text-gray-600 text-sm sm:text-base">
                Trusted healthcare partners nationwide.
              </p>
            </article>

            <article className="text-pretty mt-4 sm:mt-0 sm:ml-10">
              <p className="text-md sm:text-base">
                We are committed to providing our clients with exceptional
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
