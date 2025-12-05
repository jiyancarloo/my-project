"use client";
import gsap from "gsap";
import { useRef } from "react";
import React from "react";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Star } from "lucide-react";

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
      className="min-h-[100vh]flex items-center relative z-10 ">
      {/* Container */}
      <div className="relative h-[80vh] w-full flex flex-col items-center justify-center overflow-hidden border-b-2">
        {/* Background image */}
        <Image
          src="/hero_image/hero1.jpg"
          alt="herobanner"
          fill
          className="object-cover object-center absolute inset-0 -z-10 "
          priority
        />

        <div className="absolute inset-0 bg-black/50 -z-10"></div>

        {/* CENTER CONTENT */}
        <div className="relative z-20 flex flex-col justify-center items-center gap-y-8  text-center  ">
          {/* <div className="flex items-center gap-2 border rounded-full px-5 py-2 bg-blue-200 backdrop-blur-lg">
              <Stethoscope strokeWidth={1.8} size={18} />
              <span className="text-sm text-black/40 font-semibold">
                Premium Solutions
              </span>
            </div> */}

          <h1 className="text-6xl/17 font-semibold text-shadow-2xs antialiased text-white">
            Delivering quality healthcare solutions <br />
            with <span className="text-blue-200">integrity and innovation</span>
          </h1>

          <p className="text-2xl text-white ">
            your trusted partner in advanced medical equipment and healthcare
            <br /> supply solutions for more than
            <span className="text-blue-200"> 20 years</span>{" "}
          </p>

          <div className="flex items-center gap-2">
            <div className="flex -space-x-2 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="1"
                className="inline-block size-10 rounded-full ring-2 ring-gray-900 outline -outline-offset-1 outline-white/10"
              />

              <img
                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="2"
                className="inline-block size-10 rounded-full ring-2 ring-gray-900 outline -outline-offset-1 outline-white/10"
              />
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                alt="3"
                className="inline-block size-10 rounded-full ring-2 ring-gray-900 outline -outline-offset-1 outline-white/10"
              />
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="4"
                className="inline-block size-10 rounded-full ring-2 ring-gray-900 outline -outline-offset-1 outline-white/10"
              />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-start ">
                {Array.from({ length: 5 }).map((_, rate) => (
                  <Star key={rate} size={18} className="fill-yellow-400 " />
                ))}
              </div>
              <span className="text-xs text-white">
                Trusted by 100+ hospitals
              </span>
            </div>
          </div>

          <div className="flex items-center pt-2">
            <div className="group inline-block relative pt-2 z-20 ">
              <button
                onClick={() => scrollToSection("#product")}
                className="relative overflow-hidden p-8 py-4 w-fit rounded-full border border-white/50  text-white  transition-colors duration-500 text-lg">
                <span className="absolute inset-0 bg-blue-200 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out rounded-lg"></span>
                <span className="relative z-10 group-hover:text-primary-600 transition-colors duration-500 ">
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
