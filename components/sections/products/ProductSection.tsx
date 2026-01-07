"use client";
import { useRef } from "react";
import { HeartPulse } from "lucide-react";
import { HandHeart } from "lucide-react";
import { Plane } from "lucide-react";
import { ShieldCheck } from "lucide-react";
import ProductCarousel from "./component/CarouselProduct";
import ProductCatalog from "./component/ProductCatalog";

export default function Products() {
  const sectionRef = useRef(null);

  const services = [
    {
      icon: Plane,
      title: "Nationwide Healthcare Partneships",
      content:
        "Collaborating with top government hospitals and medical centers.",
    },
    {
      icon: ShieldCheck,
      title: "Trusted Medical Products",
      content:
        "Delivering high-quality, cost-efficient equipment that  healthcare professionals rely on.",
    },
    {
      icon: HandHeart,
      title: " Better Patient Outcomes",
      content:
        "Supporting healthcare institutions to enhance care and elevate standards.",
    },
  ];
  return (
    <>
      <section
        id="product"
        ref={sectionRef}
        className="min-h-screen mx-auto relative py-25">
        <div className="w-[80%] mx-auto flex flex-col items-center justify-center p-6 gap-y-4 ">
          <div className="p-6">
            <span className="flex items-center gap-x-1 px-3 py-2 text-sm border border-black/30 rounded-full shadow-lg text-third">
              <HeartPulse size={18} strokeWidth={1.6} />
              What We Do
            </span>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="w-[60%]">
              <p className="text-center text-xl/relaxed ">
                We partner with leading healthcare institutions to provide
                trusted, high-quality medical products that improve patient care
                and elevate healthcare standards nationwide.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 place-items-center text-center py-20">
            {services.map((item, index) => {
              const ServiceIcon = item.icon;
              return (
                <div className="" key={index}>
                  <div className="mb-4">
                    <div className=" mx-auto border rounded-xl w-fit p-3 bg-blue-200 shadow-lg ">
                      <ServiceIcon
                        size={30}
                        strokeWidth={1.2}
                        color="#081a5b"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2   ">
                    <span className="text-xl text-third font-semibold">
                      {item.title}
                    </span>
                    <p className="text-black/60">{item.content}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="py-10">
          <ProductCarousel />
        </div>
        <div className="py-20">
          <ProductCatalog />
        </div>
      </section>
    </>
  );
}
