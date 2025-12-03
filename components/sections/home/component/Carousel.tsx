import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import CarouselButton from "../../../ui/CarouselButton";

export default function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
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
      title: "Title goes here",
      content: "Content",
      href: "/home_images/CARE.jpg",
      alt: "Healthcare",
    },
    {
      title: "Title goes here",
      content: "Content",
      href: "/home_images/CARE2.jpg",
      alt: "Healthcare",
    },
    {
      title: "Title goes here",
      content: "Content",
      href: "/about_images/Healthcare Professional.png",
      alt: "Healthcare",
    },
  ];

  return (
    <>
      <div className="flex items-center gap-6 px-8 py-10 h-full bg-[#F4F6FB] rounded-lg">
        <div className="p-8 flex-1 flex flex-col gap-6">
          <span className="text-black text-4xl font-semibold">
            The heart of{" "}
            <span className="text-primary-500">Panamed Philippines</span>
          </span>

          <p className="text-black text-lg/relaxed">
            lies in the people behind the growth and success of the company over
            the years. We believe in building a better workforce and employing
            the best manpower are key critical factors to growth and
            sustainability of our company. We take pride in our people as they
            embody the essential characteristic of a well-disciplined and
            responsible employee coupled with dedication, integrity, and
            trustworthiness.
          </p>

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

        <div className="relative px-4 flex-1 py-10">
          {/* Carousel */}
          <div className="overflow-hidden p-2 " ref={emblaRef}>
            <div className="flex  gap-4 items-center  ">
              {cardInfo.map((item, index) => (
                <div key={index} className="flex-[0_0_100%] ">
                  <div className="h-[450px] flex text-xl  ">
                    <div className="w-full h-full relative overflow-hidden rounded-2xl flex items-center justify-center ">
                      <Image
                        src={item.href}
                        alt={item.alt}
                        fill
                        priority
                        className="object-cover object-center absolute inset-0 rounded-2xl "
                      />
                      <div className="absolute inset-0 bg-black/20 "></div>
                      <div className="relative z-20">
                        <span className="text-white">
                          {/* {item.content} */}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
