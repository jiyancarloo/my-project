"use client";
import { Sparkles, Sun, Lightbulb, Ribbon, HeartPulse } from "lucide-react";
import { Target } from "lucide-react";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);
export default function CoreValues() {
  const coreItems = [
    {
      icon: Target,
      title: "Commitment",
      content:
        "We are committed on what we do and we promise to deliver on time outcome.",
    },
    {
      icon: HeartPulse,
      title: "Care",
      content:
        "We deliver skilled, dedicated, and compassionate care supporting our customers, their families, and communities in times of need.",
    },
    {
      icon: Ribbon,
      title: "Honesty",
      content:
        "We are honest on dealing with our suppliers, customers, stake holders, employees and through the rest of our business transactions.",
    },
    {
      icon: Lightbulb,
      title: "Innovative",
      content:
        "We are always innovative on our products, solution and work flow.",
    },
    {
      icon: Sparkles,
      title: "Execellence",
      content:
        "We do things to achieve excellent and not just mediocre results.",
    },

    {
      icon: Sun,
      title: "Optimism",
      content:
        " We look at the positive side of things and situations, which allows us to have positive mindset that leads to positive results.",
    },
  ];
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        },
      });
      tl.from(".animate-line", {
        scaleX: 0,
        transformOrigin: "left",
        duration: 0.8,
        ease: "power3.out", // smoother than power2
        stagger: 0.25,
        force3D: true,
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
        "-=0.3", // start 1s before the previous animation finishes
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section ref={sectionRef} className=" bg-[#0D1B2A] min-h-screen">
        <div className="px-4 sm:px-8 lg:mx-30 lg:py-30 py-25 space-y-14">
          <div className="w-fit flex items-center gap-2">
            <div className="w-8 h-px bg-white rounded-full animate-line will-change-transform" />
            <span className="uppercase tracking-wide whitespace-nowrap text-white/60 animate-item">
              OUR VALUES
            </span>
          </div>
          <div className="">
            <article className="text-pretty space-y-6 animate-item">
              <p className="text-xl lg:text-4xl text-white max-w-7xl">
                The principles that guide our decisions, partnerships, and
                commitment to healthcare excellence.
              </p>
            </article>

            {/* CORE VALUES */}
            <div className="mt-20">
              {/* First row (3 items) */}
              <div className="grid lg:grid-cols-3 gap-10  ">
                {coreItems.slice(0, 3).map((item, index) => {
                  const CoreIcon = item.icon;
                  return (
                    <div key={index} className="space-y-6 animate-item">
                      <div className="inline-flex items-center gap-3">
                        <CoreIcon size={36} strokeWidth={1} color="#90CAF9" />
                        <span className="text-xl text-blue-200 ">
                          {item.title}
                        </span>
                      </div>
                      <p className="text-base text-white text-pretty">
                        {item.content}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* FULL-WIDTH DIVIDER */}

              <div className=" mx-auto h-px bg-white/60  my-20 animate-line will-change-transform" />

              {/* Second row (3 items) */}
              <div className="grid lg:grid-cols-3 gap-10 ">
                {coreItems.slice(3, 6).map((item, index) => {
                  const CoreIcon = item.icon;
                  return (
                    <div key={index} className="space-y-6 animate-item">
                      <div className="inline-flex items-center gap-3 ">
                        <CoreIcon size={36} strokeWidth={1} color="#90CAF9" />
                        <span className="text-xl text-blue-200 ">
                          {item.title}
                        </span>
                      </div>
                      <p className="text-base text-white text-pretty">
                        {item.content}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
