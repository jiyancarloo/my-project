"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";

import Hero from "@/components/sections/hero";

import About from "@/components/sections/HomeSection/AboutUs";
import People from "@/components/sections/HomeSection/People";
import CoreValues from "@/components/sections/HomeSection/CoreValues";

import Services from "@/components/sections/ProductSection/Services";
import ProductCarousel from "@/components/sections/ProductSection/CarouselProduct";
import Flagship from "@/components/sections/ProductSection/FlagshipProduct";
import TrustedPartners from "@/components/sections/ProductSection/TrustedPartners";

import Contact from "@/components/sections/ContactSection/contactForm";
import AwardsV2 from "@/components/sections/AwardsSection/AwardsV2";
import Footer from "@/components/ui/layout/footer";
import News from "@/components/sections/NewsSection/News";
import NewsV2 from "@/components/sections/NewsSection/NewsV2";

gsap.registerPlugin(ScrollSmoother);

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.2, // scroll smoothing
        effects: true, // enable data-speed / data-lag on children
      });

      return () => smoother.kill();
    }
  }, []);

  return (
    <div id="smooth-wrapper" className="overflow-hidden">
      <div id="smooth-content">
        <Hero data-speed="0.2" />

        {/* ABOUT US */}
        <About data-speed="0.2" />
        <CoreValues data-speed="0.2" />
        <People data-speed="0.15" />

        {/* SERVICES */}
        <Services data-speed="0.1" />
        <ProductCarousel data-speed="0.15" />
        <Flagship data-speed="0.2" />
        <TrustedPartners data-speed="0.1" />

        <AwardsV2 data-speed="0.1" />
        {/* <News data-speed="0.15" /> */}
        <NewsV2 data-speed="0.15" />
        <Contact data-speed="0.1" />
        <Footer />
      </div>
    </div>
  );
}
