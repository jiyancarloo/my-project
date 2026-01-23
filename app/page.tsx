"use client";

import Hero from "@/components/sections/hero";

import Brands from "@/components/sections/CarouselSection/Brands";

import About from "@/components/sections/HomeSection/AboutUs";
import People from "@/components/sections/HomeSection/People";
import CoreValues from "@/components/sections/HomeSection/CoreValues";

import Services from "@/components/sections/ProductSection/Services";
import ProductCarousel from "@/components/sections/ProductSection/CarouselProduct";
import Flagship from "@/components/sections/ProductSection/FlagshipProduct";
import TrustedPartners from "@/components/sections/ProductSection/TrustedPartners";

import Contact from "@/components/sections/ContactSection/contactForm";

import AwardsV2 from "@/components/sections/AwardsSection/AwardsV2";
import News from "@/components/sections/NewsSection/News";

export default function Home() {
  return (
    <>
      <div className="">
        <Hero />

        <Brands />

        {/* ABOUT US */}
        <About />
        <People />
        <CoreValues />

        {/* SERVICES */}
        <Services />
        <ProductCarousel />
        <Flagship />
        <TrustedPartners />

        <AwardsV2 />
        <News />
        <Contact />
      </div>
    </>
  );
}
