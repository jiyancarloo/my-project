import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import CarouselButton from "./CarouselButton";

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
      content: " Content goes here",
    },
    {
      title: "Title goes here",
      content: " Content goes here",
    },
    {
      title: "Title goes here",
      content: " Content goes here",
    },
    {
      title: "Title goes here",
      content: " Content goes here",
    },
    {
      title: "Title goes here",
      content: " Content goes here",
    },
    {
      title: "Title goes here",
      content: " Content goes here",
    },
  ];

  return (
    <>
      <section className="max-w-8xl mx-auto min-h-[50vh] ">
        {/* Container for buttons and carousel */}
        <div className="relative px-4 py-10 border rounded-lg ">
          <div className="flex justify-end gap-2 p-4">
            {/* Prev Button */}
            <div className="group relative inline-block pt-2 z-20">
              <CarouselButton
                onClick={() => emblaApi?.scrollPrev()}
                disabled={prevDisabled}>
                <ChevronLeft />
              </CarouselButton>
            </div>

            {/* Next Button */}
            <div className="group relative inline-block pt-2 z-20">
              <CarouselButton
                onClick={() => emblaApi?.scrollNext()}
                disabled={nextDisabled}>
                <ChevronRight />
              </CarouselButton>
            </div>
          </div>

          {/* Carousel */}
          <div className="overflow-hidden p-2" ref={emblaRef}>
            <div className="flex gap-4 items-center ">
              {cardInfo.map((item, index) => (
                <div key={index} className="flex-[0_0_40.333%] ">
                  <div className="h-[500px] rounded-2xl bg-base-200 flex text-xl  border bg-white">
                    <div className="p-4">
                      <div className="">{item.title}</div>
                      <div className="">{item.content}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
