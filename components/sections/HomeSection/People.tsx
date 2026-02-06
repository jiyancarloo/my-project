"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function People() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        },
      });

      // Title
      tl.from(".animate-title", {
        opacity: 0,
        y: 20,
        duration: 0.7,
        ease: "power3.out",
      })

        .from(
          ".animate-text",
          {
            opacity: 0,
            y: 20,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.5",
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#F4F6FB]">
      <div className="px-4 sm:px-8 lg:mx-30 space-y-4 py-20 lg:py-30">
        {/* TEXT GRID */}
        <div className="inline-grid lg:grid-cols-[1fr_1fr] space-y-7">
          <div className="max-w-3xl">
            <span className="animate-title text-xl lg:text-4xl block">
              The heart of{" "}
              <span className="text-third">Panamed Philippines</span>
            </span>
          </div>

          <p className="animate-text text-gray-600 text-base block">
            lies in the people behind the growth and success of the company over
            the years. We believe in building a better workforce and employing
            the best manpower are key critical factors to growth and
            sustainability of our company.
          </p>
        </div>

        {/* IMAGE */}
        <div className="py-10">
          <div className="animate-image relative h-112.5 w-full overflow-hidden rounded-2xl will-change-transform will-change-opacity">
            <Image
              src="/home_images/CARE.jpg"
              alt="Healthcare"
              fill
              priority
              className="object-cover object-center"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
