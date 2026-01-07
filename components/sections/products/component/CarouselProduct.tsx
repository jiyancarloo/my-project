import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import CarouselButton from "@/components/ui/CarouselButton";
import CarouselDots from "@/components/ui/CarouselDots";

export default function ProductCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(true);

  const updateButtons = useCallback(() => {
    if (!emblaApi) return;
    setPrevDisabled(!emblaApi.canScrollPrev());
    setNextDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    updateButtons();
    emblaApi.on("select", updateButtons);
  }, [emblaApi, updateButtons]);

  const cardInfo = [
    {
      title: "Anesthesia",
      content:
        "Experience a wide range of reliable medical equipment  built to empower professionals and strengthen healthcare delivery",
      href: "/home_images/CARE.jpg",
      alt: "Healthcare",
    },
    {
      title: "Critical Care",
      content: "Content",
      href: "/home_images/CARE2.jpg",
      alt: "Healthcare",
    },
    {
      title: "Dialysis Products",
      content: "Content",
      href: "/about_images/Healthcare Professional.png",
      alt: "Healthcare",
    },
    {
      title: "Category",
      content: "Content",
      href: "/home_images/CARE.jpg",
      alt: "Healthcare",
    },
    {
      title: "Category",
      content: "Content",
      href: "/home_images/CARE2.jpg",
      alt: "Healthcare",
    },
    {
      title: "Category",
      content: "Content",
      href: "/about_images/Healthcare Professional.png",
      alt: "Healthcare",
    },
    {
      title: "Category",
      content: "Content",
      href: "/home_images/CARE.jpg",
      alt: "Healthcare",
    },
    {
      title: "Category",
      content: "Content",
      href: "/home_images/CARE2.jpg",
      alt: "Healthcare",
    },
    {
      title: "Category",
      content: "Content",
      href: "/about_images/Healthcare Professional.png",
      alt: "Healthcare",
    },
  ];

  return (
    <>
      <div className="px-20 h-full">
        <div className=" flex items-center justify-between p-8">
          <div className=" flex flex-col gap-2">
            <span className="text-third text-4xl font-semibold">
              Browse different healthcare solutions
            </span>
            <p className="text-lg">
              Experience a wide range of reliable medical equipment <br /> built
              to empower professionals and strengthen healthcare delivery
            </p>
          </div>
          <div className="flex gap-2">
            {/* Prev Button */}
            <CarouselButton
              onClick={() => emblaApi?.scrollPrev()}
              disabled={prevDisabled}>
              <ChevronLeft />
            </CarouselButton>

            {/* Next Button */}
            <CarouselButton
              onClick={() => emblaApi?.scrollNext()}
              disabled={nextDisabled}>
              <ChevronRight />
            </CarouselButton>
          </div>
        </div>

        <div className="relative flex-1">
          {/* Carousel */}
          <div className="overflow-hidden " ref={emblaRef}>
            <div className="flex items-center  ">
              {cardInfo.map((item, index) => (
                <div key={index} className="flex-[0_0_33%] px-3 ">
                  <div className="h-112.5 flex text-xl  ">
                    <div className="relative w-full h-full overflow-hidden rounded-2xl">
                      {/* Background image */}
                      <Image
                        src={item.href}
                        alt={item.alt}
                        fill
                        className="object-cover"
                      />

                      <div className="absolute inset-0 bg-black/30" />
                      <div className="absolute top-5 left-4 z-30">
                        <span className="text-white text-sm px-3 py-1 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg">
                          {item.title}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <CarouselDots emblaApi={emblaApi} />
          </div>
        </div>
      </div>
    </>
  );
}
