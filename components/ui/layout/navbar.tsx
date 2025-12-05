"use client";
import gsap from "gsap";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

const navItems = [
  { id: "#home", name: "About " },
  { id: "#product", name: "Products" },
  { id: "#awards", name: "Awards" },
  { id: "#news", name: "News" },
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
      scrollTo: { y: sectionId, offsetY: 50 },
      ease: "power2.inOut",
    });
  };

  return (
    <>
      <section
        ref={navRef}
        className="fixed top-3 left-1/2 -translate-x-1/2 z-20 opacity-0 mx-auto">
        <div className=" backdrop-blur-lg shadow-xl rounded-full px-10  py-5 flex items-center justify-center gap-x-8 bg-[#F4F6FB]">
          <Image
            onClick={() => scrollToSection("#hero")}
            src="/nav_images/PPI_logo.png"
            alt="Healthcare Professional"
            width={180}
            height={180}
            className="cursor-pointer px-2"
          />

          <div className="flex items-center justify-center  max-lg:w-[90%] w-120 gap-2">
            {navItems.map((item) => (
              <button
                className={`group w-auto transition-colors duration-200 text-sm px-4 py-2 rounded-full  ${
                  activeSection === item.id
                    ? " text-white transition-all ease-in duration-500 bg-third  "
                    : " hover:text-third text-gray-400"
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
