"use client";
import { useRef } from "react";
import { HandHeart } from "lucide-react";
import { Plane } from "lucide-react";
import { ShieldCheck } from "lucide-react";

export default function Services() {
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
      <section id="product" ref={sectionRef} className="">
        <div className="p-8 space-y-8 mx-30 py-30">
          <div className="flex flex-col gap-3">
            <span className="text-black/60  uppercase tracking-wide whitespace-nowrap">
              SERVICES
            </span>
            <div className="border-b border-black/30" />
          </div>

          <article className="text-pretty ">
            <p className=" text-4xl text-third max-w-7xl">
              We partner with leading healthcare institutions to provide
              trusted, high-quality medical products that improve patient care
              and elevate healthcare standards nationwide.
            </p>
          </article>

          <div className="grid grid-cols-3 gap-8 mt-20 ">
            {services.map((item, index) => {
              const ServiceIcon = item.icon;
              return (
                <div className="space-y-8" key={index}>
                  <div className="">
                    <div className="border rounded-xl w-fit p-3 bg-blue-200 shadow-lg ">
                      <ServiceIcon
                        size={30}
                        strokeWidth={1.2}
                        color="#081a5b"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <span className="text-xl text-third ">{item.title}</span>
                    <p className="text-black/60">{item.content}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
