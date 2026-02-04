"use client";
import gsap from "gsap";
import Image from "next/image";
import { ShoppingBasket, Menu, X } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

const navItems = [
  { id: "#home", name: "About" },
  { id: "#product", name: "Services" },
  { id: "#awards", name: "Awards" },
  { id: "#news", name: "News" },
  { id: "#contact", name: "Contact" },
];

export default function Navbar() {
  const navRef = useRef<HTMLDivElement | null>(null);
  const [activeSection, setActiveSection] = useState<string>("#home");
  const [open, setOpen] = useState(false);

  const mobileMenuRef = useRef(null);
  const buttonRef = useRef(null);
  const toggleMenu = () => setOpen((prev) => !prev);

  useEffect(() => {
    if (!mobileMenuRef.current) return;

    gsap.to(mobileMenuRef.current, {
      duration: 0.5,
      y: open ? 0 : -20,
      opacity: open ? 1 : 0,
      pointerEvents: open ? "auto" : "none",
      ease: "power3.out",
    });
    gsap.to(buttonRef.current, {
      rotation: open ? 90 : 0,
      duration: 0.2,
      ease: "power3.inOut",
    });
  }, [open]);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: "#home",
      start: "top center",
      end: "bottom top",
      onEnter: () => {
        gsap.fromTo(
          navRef.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: "back.out(1.7)" },
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
    setOpen(false);

    gsap.to(window, {
      duration: 1,
      scrollTo: { y: sectionId, offsetY: 0 },
      ease: "power2.inOut",
    });
  };

  return (
    <section
      ref={navRef}
      className="fixed top-3 left-1/2 -translate-x-1/2 z-50 opacity-0 w-full px-4">
      <div className="mx-auto max-w-4xl backdrop-blur-lg shadow-xl rounded-full bg-[#F4F6FB] px-4 md:px-8 py-3 md:py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            onClick={() => scrollToSection("#hero")}
            src="/nav_images/PPI_logo.png"
            alt="Logo"
            width={140}
            height={140}
            className="cursor-pointer w-25 md:w-35"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-sm px-4 py-2 rounded-full transition-all duration-300 ${
                activeSection === item.id
                  ? "bg-third text-white"
                  : "text-gray-400 hover:text-third"
              }`}>
              {item.name}
            </button>
          ))}

          {/* Shop Button */}
          <button className="ml-2 flex items-center gap-2 px-4 py-2 rounded-full text-sm text-black/60 hover:text-third transition">
            <ShoppingBasket size={20} strokeWidth={1.2} />
            Shop
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          ref={buttonRef}
          className="lg:hidden p-2 rounded-full hover:bg-black/5 transition"
          onClick={toggleMenu}>
          {open ? <X /> : <Menu />}
        </button>
        {/*  <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 rounded-full hover:bg-black/5 transition">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button> */}
      </div>
      {/* Mobile Menu (Always Rendered) */}
      <div
        ref={mobileMenuRef}
        className="lg:hidden mt-2 mx-auto max-w-6xl bg-[#F4F6FB] backdrop-blur-lg shadow-xl rounded-2xl p-4 transform origin-top"
        style={{ opacity: 0, y: -20, pointerEvents: "none" }}>
        <div className="flex flex-col gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`w-full text-left px-4 py-2 rounded-xl text-sm transition ${
                activeSection === item.id
                  ? "bg-third text-white"
                  : "text-gray-500 hover:bg-black/5"
              }`}>
              {item.name}
            </button>
          ))}

          <button className="mt-2 flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-sm text-black/60 hover:text-third hover:bg-black/5 transition">
            <ShoppingBasket size={20} strokeWidth={1.2} />
            Shop
          </button>
        </div>
      </div>
    </section>
  );
}
