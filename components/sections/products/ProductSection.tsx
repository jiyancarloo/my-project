"use client";
import { useRef } from "react";
import { Stethoscope } from "lucide-react";
import Carousel from "./component/CarouselProduct";

export default function Products() {
  const sectionRef = useRef(null);
  return (
    <>
      <div
        id="product"
        ref={sectionRef}
        className="min-h-screen mx-auto relative ">
        <div className="w-[80%] mx-auto flex flex-col p-6 gap-y-4 ">
          <div className="p-6 flex items-start">
            <span className="flex items-center gap-x-2  px-4 py-2 text-sm border border-black/30 rounded-full shadow-lg ">
              <Stethoscope size={18} strokeWidth={1.8} />
              Healthcare Solutions
            </span>
          </div>
          <div>
            <Carousel />
          </div>
        </div>
      </div>
    </>
  );
}
