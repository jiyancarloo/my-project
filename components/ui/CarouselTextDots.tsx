import { EmblaCarouselType } from "embla-carousel";
import { useEffect, useState } from "react";

interface CarouselDotsProps {
  emblaApi: EmblaCarouselType | undefined;
  labels: string[];
}

export default function CarouselTextDots({
  emblaApi,
  labels,
}: CarouselDotsProps) {
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
    <div className="flex gap-x-6 my-10 ">
      {labels.map((label, index) => (
        <span
          key={index}
          onClick={() => emblaApi?.scrollTo(index)}
          className={`cursor-pointer transition-colors duration-300 text-4xl
            ${selectedIndex === index ? "text-third " : "text-black/40"}
          `}>
          {label}
        </span>
      ))}
    </div>
  );
}
