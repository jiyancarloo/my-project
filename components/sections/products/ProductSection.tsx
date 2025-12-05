"use client";
import { useRef } from "react";
import { Stethoscope } from "lucide-react";

import ProductCarousel from "./component/CarouselProduct";

export default function Products() {
  const sectionRef = useRef(null);
  return (
    <>
      <section id="product" ref={sectionRef} className="min-h-screen relative">
        <div className="py-20">
          <div className="flex-1 py-20 justify-center ">
            <div className="px-8 ">
              <div className="flex items-start px-6">
                <span className="flex items-center gap-x-2  px-4 py-2 text-sm border border-black/30 rounded-full shadow-lg ">
                  <Stethoscope size={18} strokeWidth={1.8} />
                  Healthcare Solutions
                </span>
              </div>
            </div>
            <ProductCarousel />
          </div>
        </div>
      </section>
    </>
  );
}
