"use client";

import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      tl.from(lineRef.current, {
        scaleX: 0,
        transformOrigin: "left",
        duration: 1,
        ease: "power2.out",
      });

      tl.from(
        ".animate-item",
        {
          opacity: 0,
          y: 20,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
        },
        "-=0.5", // overlap slightly with line animation
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="home" className="relative bg-[#F4F6FB] ">
      <div className="px-4 py-30 sm:px-8 lg:mx-30 lg:py-40">
        {/* Header */}
        <div className="flex flex-col gap-3 mb-8">
          <span className="text-black/60 uppercase tracking-widest text-sm lg:text-base animate-item">
            WHO WE ARE
          </span>

          {/* Animated line */}
          <div ref={lineRef} className="h-px bg-black/30 w-full origin-left" />
        </div>

        {/* Main Text */}
        <article className="text-pretty mb-12 animate-item">
          <p className="text-xl sm:text-3xl lg:text-4xl text-third max-w-7xl">
            We are a trusted professional organization specializing in the
            importation, marketing, and distribution of high-quality medical
            devices.
          </p>
        </article>

        {/* Stats Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-[auto_1px_auto] lg:grid-cols-[auto_1px_auto_auto] gap-6 sm:gap-10 lg:gap-20 items-center">
          <article className="text-balance space-y-2 animate-item">
            <span className="block text-4xl sm:text-5xl text-third font-semibold tracking-wide">
              20+
            </span>
            <p className="text-gray-600 text-sm sm:text-base">
              Years of service and industry partnerships.
            </p>
          </article>

          <div className="hidden sm:block w-px h-16 bg-black/40 animate-item" />

          <article className="text-balance space-y-2 animate-item">
            <span className="block text-4xl sm:text-5xl text-third font-semibold tracking-wide">
              100+
            </span>
            <p className="text-gray-600 text-sm sm:text-base">
              Trusted healthcare partners nationwide.
            </p>
          </article>

          <article className="text-pretty mt-4 sm:mt-0 sm:ml-10 animate-item">
            <p className="text-md sm:text-base">
              We are committed to providing our clients with exceptional
              healthcare products to meet their needs, ensuring that we continue
              to make a meaningful impact on healthcare wellness in the
              Philippines.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
