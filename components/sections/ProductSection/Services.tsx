"use client";
import { HandHeart } from "lucide-react";
import { Plane } from "lucide-react";
import { ShieldCheck } from "lucide-react";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

export default function Services() {
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

  const sectionRef = useRef(null);
  const lineRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      tl.from(lineRef.current, {
        scaleX: 0,
        transformOrigin: "left",
        duration: 1,
        ease: "power2.out",
      });

      tl.from(
        ".animate-item",
        {
          opacity: 0,
          y: 20,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
        },
        "-=0.4",
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section id="product" ref={sectionRef} className="">
        <div className="px-4 sm:px-8 lg:mx-30 pt-30 lg:py-30 space-y-8 ">
          <div className="flex flex-col gap-3">
            <span className="text-black/60 text-sm lg:text-base uppercase tracking-wide whitespace-nowrap animate-item">
              SERVICES
            </span>
            <div ref={lineRef} className="border-b border-black/30" />
          </div>

          <article className="text-pretty animate-item">
            <p className=" text-xl lg:text-4xl text-third max-w-7xl">
              We partner with leading healthcare institutions to provide
              trusted, high-quality medical products that improve patient care
              and elevate healthcare standards nationwide.
            </p>
          </article>

          <div className="grid lg:grid-cols-3 gap-20 lg:gap-8 mt-20  ">
            {services.map((item, index) => {
              const ServiceIcon = item.icon;
              return (
                <div
                  className="space-y-6 lg:space-y-8 animate-item"
                  key={index}>
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
