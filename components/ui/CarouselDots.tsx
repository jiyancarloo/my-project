import { EmblaCarouselType } from "embla-carousel";
import { useEffect, useState } from "react";

interface CarouselDotsProps {
  emblaApi: EmblaCarouselType | undefined;
}

export default function CarouselDots({ emblaApi }: CarouselDotsProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  return (
    <div className="flex justify-end p-2 gap-2 mt-10 mx-40 ">
      {scrollSnaps.map((_, index) => (
        <button
          key={index}
          onClick={() => emblaApi?.scrollTo(index)}
          className={`h-0.5 w-8  transition-all duration-300 
            ${selectedIndex === index ? "bg-third scale-110" : "bg-gray-300"}
          `}></button>
      ))}
    </div>
  );
}
