import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState, useRef } from "react";
import Image from "next/image";
import CarouselButton from "@/components/ui/CarouselButton";
import CarouselDots from "@/components/ui/CarouselDots";
import { cardInfo } from "./data/CardInfo";

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

  return (
    <>
      <div className="py-20 lg:py-30 space-y-10 ">
        <div className="px-4 sm:px-8 lg:mx-30 lg:flex lg:items-center lg:justify-between lg:space-y-8 p-8">
          <div className="flex flex-col gap-2 max-w-3xl">
            <span className="text-third text-xl lg:text-4xl ">
              Browse different healthcare solutions
            </span>
            <p className="text-base lg:text-lg">
              Experience a wide range of reliable medical equipment built to
              empower professionals and strengthen healthcare delivery
            </p>
          </div>
          <div className=" hidden lg:flex gap-2">
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
                <div
                  key={index}
                  className="flex-[0_0_90%] sm:flex-[0_0_45%] md:flex-[0_0_28%] px-3">
                  <div className="w-full aspect-4/3 sm:aspect-video md:aspect-16/10 relative overflow-hidden rounded-2xl">
                    <Image
                      src={item.href}
                      alt={item.alt}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute top-5 left-4 z-30">
                      <span className="text-white text-sm px-3 lg:px-4 py-1 lg:py-2 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg">
                        {item.title}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div></div>
          <CarouselDots emblaApi={emblaApi} />
        </div>
      </div>
    </>
  );
}
