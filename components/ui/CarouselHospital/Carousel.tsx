"use client";

import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
export default function HospitalCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true, dragFree: false }, [
    AutoScroll({
      speed: 1,
      stopOnInteraction: false,
      startDelay: 500,
    }),
  ]);

  const cardInfo = [
    {
      title: "TITLE",
      content: "CONTENT",
    },
    {
      title: "TITLE",
      content: "CONTENT",
    },
    {
      title: "TITLE",
      content: "CONTENT",
    },
    {
      title: "TITLE",
      content: "CONTENT",
    },
    {
      title: "TITLE",
      content: "CONTENT",
    },
    {
      title: "TITLE",
      content: "CONTENT",
    },
  ];
  return (
    <>
      <div className="overflow-hidden pointer-events-none" ref={emblaRef}>
        <div className="-ml-4 flex">
          {cardInfo.map((item, index) => (
            <div key={index} className="flex-[0_0_20.333%] pl-3">
              <div className="h-40 rounded-2xl  border border-black/20 p-4  text-black flex flex-col items-center justify-center">
                <div>{item.title}</div>
                <div>{item.content}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
