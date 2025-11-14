"use client";
import gsap from "gsap";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

const navItems = [
  { id: "#home", name: "Home" },
  { id: "#about", name: "About" },
  { id: "#product", name: "Products" },
  { id: "#contact", name: "Contact" },
];
export default function Navbar() {
  const navRef = useRef(null);
  const [activeSection, setActiveSection] = useState<string>("#about");

  useEffect(() => {
    ScrollTrigger.create({
      trigger: "#home",
      start: "top center",
      end: "bottom top",
      onEnter: () => {
        gsap.fromTo(
          navRef.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "back.out(1.7)" }
        );
      },
      onLeaveBack: () => {
        gsap.to(navRef.current, {
          y: 100,
          opacity: 0,
          duration: 0.4,
          ease: "power2.inOut",
        });
      },
    });

    navItems.forEach((item) => {
      ScrollTrigger.create({
        trigger: item.id,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActiveSection(item.id),
        onEnterBack: () => setActiveSection(item.id),
      });
    });
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: sectionId, offsetY: 0 },
      ease: "power2.inOut",
    });
  };

  return (
    <>
      <section
        ref={navRef}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-20 opacity-0 mx-auto">
        <div className=" backdrop-blur-md shadow-lg rounded-full px-8  py-5 flex items-center justify-center gap-x-2  ">
          <Image
            onClick={() => scrollToSection("#hero")}
            src="/nav_images/logo.png"
            alt="Healthcare Professional"
            width={160}
            height={160}
            className="px-2 cursor-pointer"
          />

          <div className="flex items-center justify-center gap-x-2  max-lg:w-[90%] w-100 space-x-7 ">
            {navItems.map((item) => (
              <button
                className={`group w-auto transition-colors duration-200 text-sm  ${
                  activeSection === item.id
                    ? " text-black transition-all ease-in duration-500 "
                    : " hover:text-gray-900 text-gray-400"
                }`}
                key={item.id}
                onClick={() => scrollToSection(item.id)}>
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
