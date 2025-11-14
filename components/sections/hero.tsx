"use client";
import gsap from "gsap";
import { useRef } from "react";
import React from "react";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: sectionId, offsetY: -50 },
      ease: "power2.inOut",
    });
  };
  const heroRef = useRef(null);
  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center relative z-10 py-6 ">
      {/* Container */}
      <div className="relative border w-15/16 flex flex-col justify-between mx-auto rounded-2xl p-8 min-h-[90vh] overflow-hidden">
        {/* Background image */}
        <Image
          src="/hero_image/hero1.jpg"
          alt="herobanner"
          fill
          className="object-cover object-center absolute inset-0 -z-10"
          priority
        />

        <div className="absolute inset-0 bg-black/40 -z-10"></div>

        {/* Bottom Content */}
        <div className="relative z-20 flex flex-col gap-y-4 mt-auto items-start text-left p-6 text-white left-2.5">
          <span className="text-5xl leading-tight">
            Delivering quality healthcare solutions <br />
            with integrity and innovation
          </span>

          <p className="text-lg text-gray-100 text-justify">
            Delivering world-class healthcare solutions to Filipino families for
            over four decades.
            <br /> Progressive Medical Corporation the Philippines’ first
            ISO-9001:2015 certified distributor
          </p>

          <div className="flex items-center ">
            <div className="group inline-block relative pt-2 z-20 ">
              <button
                onClick={() => scrollToSection("#home")}
                className="relative overflow-hidden px-6 py-3 w-fit rounded-full border border-white text-white text-md transition-colors duration-500">
                <span className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out rounded-full"></span>
                <span className="relative z-10 group-hover:text-primary-600 transition-colors duration-500">
                  Explore Our Solutions
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
