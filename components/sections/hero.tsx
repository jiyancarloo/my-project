"use client";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);
export default function Hero() {
  const [emblaRef] = useEmblaCarousel({ loop: true, dragFree: false }, [
    AutoScroll({ speed: 1, stopOnInteraction: false, startDelay: 100 }),
  ]);
  const brandInfo = [
    { src: "/brand_images/Endosenz.png", alt: "endo" },
    { src: "/brand_images/Pana-Vac_Logo.png", alt: "pana" },
    { src: "/brand_images/Sedasenz_Logo.png", alt: "seda" },
    { src: "/brand_images/Unigard_Logo.png", alt: "uni" },
    { src: "/brand_images/Unimex_Logo.png", alt: "uni" },
    { src: "/brand_images/anchor_Logo.png", alt: "anchor" },
    { src: "/brand_images/Brielle_Logo.png", alt: "bri" },
    { src: "/brand_images/Universal_Logo.png", alt: "uni" },
    { src: "/brand_images/Urosenz_Logo.png", alt: "uro" },
  ];
  const scrollToSection = (sectionId: string) => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: sectionId, offsetY: 0 },
      ease: "power2.inOut",
    });
  };
  const heroRef = useRef(null);
  return (
    <section ref={heroRef} className="relative z-10">
      {/* Container */}
      <div className="relative min-h-screen lg:min-h-[80vh] overflow-hidden border-b-2">
        {/* Background image */}
        <Image
          src="/hero_image/hero1.jpg"
          alt="herobanner"
          fill
          className="object-cover object-center absolute -z-10"
          sizes="(max-width: 768px) 100vw, 100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/50 -z-10"></div>
        {/* Container for content */}
        <div className="absolute z-20 top-[65%] md:top-1/2 left-4 md:left-30 -translate-y-1/2 space-y-4">
          {/* Container for avatar */}
          <div className="flex items-center gap-2 border border-white/50 p-2 rounded-full w-fit">
            <div className="flex -space-x-2 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="1"
                className="inline-block size-6 lg:size-8 rounded-full ring-2 ring-gray-900 outline -outline-offset-1 outline-white/10"
              />
              <img
                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="2"
                className="inline-block size-6 lg:size-8 rounded-full ring-2 ring-gray-900 outline -outline-offset-1 outline-white/10"
              />
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                alt="3"
                className="inline-block size-6 lg:size-8 rounded-full ring-2 ring-gray-900 outline -outline-offset-1 outline-white/10"
              />
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="4"
                className="inline-block size-6 lg:size-8 rounded-full ring-2 ring-gray-900 outline -outline-offset-1 outline-white/10"
              />
            </div>
            <div>
              {/*  <div className="flex items-start ">
                  {Array.from({ length: 5 }).map((_, rate) => (
                    <Star key={rate} className="fill-yellow-400 " size={18} />
                  ))}
                </div> */}
              <span className="text-xs text-white">
                Trusted by 100+ hospitals
              </span>
            </div>
          </div>
          {/* Container for Header */}

          <div className="max-w-5xl">
            <h1 className="text-2xl md:text-4xl lg:text-6xl/18 font-medium  text-white">
              Delivering quality healthcare solutions with{" "}
              <span className="text-blue-200">integrity and innovation</span>
            </h1>
          </div>

          {/* Container fo sub-headher */}
          <div>
            <p className="text-sm md:text-md lg:text-lg text-white ">
              your trusted partner in advanced medical equipment and healthcare
              <br /> supply solutions for more than 20 years
            </p>
          </div>

          {/* Container for Avatar */}

          <div className="pt-2 lg:pt-8">
            <div className="group inline-block relative pt-2 z-20 ">
              <button
                onClick={() => scrollToSection("#product")}
                className="relative overflow-hidden px-4  py-3 lg:py-4 lg:px-6 w-fit rounded-full border border-white/50 text-white lg:text-lg transition-colors duration-500 ">
                <span className="absolute inset-0 bg-blue-200 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out rounded-lg" />
                <span className="relative z-10 group-hover:text-primary-600 transition-colors duration-500 ">
                  Explore Our Solutions
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Carousel */}
      <section className="lg:py-4 sm:py-2 ">
        <div className="overflow-hidden pointer-events-none" ref={emblaRef}>
          <div className="flex lg:gap-2">
            {brandInfo.map((item, index) => (
              <div key={index} className="flex-[0_0_16%]">
                <div className="h-40 flex items-center justify-center">
                  <div className="relative w-36 h-8">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="filter grayscale "
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
