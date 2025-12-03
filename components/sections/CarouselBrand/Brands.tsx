"use client";

import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";
export default function HospitalCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true, dragFree: false }, [
    AutoScroll({
      speed: 1,
      stopOnInteraction: false,
      startDelay: 100,
    }),
  ]);

  const hospInfo = [
    {
      src: "/brand_images/Endosenz.png",
      alt: "endo",
    },
    {
      src: "/brand_images/Pana-Vac_Logo.png",
      alt: "pana",
    },
    {
      src: "/brand_images/Sedasenz_Logo.png",
      alt: "seda",
    },
    {
      src: "/brand_images/Unigard_Logo.png",
      alt: "uni",
    },
    {
      src: "/brand_images/Unimex_Logo.png",
      alt: "uni",
    },
    {
      src: "/brand_images/anchor_Logo.png",
      alt: "anchor",
    },
    {
      src: "/brand_images/Brielle_Logo.png",
      alt: "bri",
    },
    {
      src: "/brand_images/Universal_Logo.png",
      alt: "uni",
    },
    {
      src: "/brand_images/Urosenz_Logo.png",
      alt: "uro",
    },
  ];
  return (
    <>
      <section className="py-4 bg-[#F4F6FB]">
        <div className="overflow-hidden pointer-events-none" ref={emblaRef}>
          <div className="flex gap-2">
            {hospInfo.map((item, index) => (
              <div key={index} className="flex-[0_0_16%]">
                <div className="h-40 rounded-2xl flex items-center justify-center">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={150}
                    height={150}
                    className="filter grayscale"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
