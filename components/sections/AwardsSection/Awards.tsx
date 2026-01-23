"use client";
import { useRef } from "react";
export default function Awards() {
  const awards = [
    {
      month: "Dec",
      day: "2011",
      title: "Borderless ICU Care",
      description: "Booth Exhibitor",
    },
    {
      month: "Oct",
      day: "2011",
      title: "ISO Certification",
      description:
        "Healthcare Products Distribution and Secondary Assembly - Medical Devices.",
    },
    {
      month: "Jul",
      day: "2011",
      title: "National Excellence Award",
      description:
        "Healthcare Products Distribution and Secondary Assembly - Medical Devices.",
    },
    {
      month: "Oct",
      day: "2011",
      title: "Top Industry Partner",
      description: "Awarded by leading medical institutions.",
    },
    {
      month: "Dec",
      day: "2011",
      title: "Borderless ICU Care",
      description: "Booth Exhibitor",
    },
    {
      month: "Oct",
      day: "2011",
      title: "ISO Certification",
      description:
        "Healthcare Products Distribution and Secondary Assembly - Medical Devices.",
    },
    {
      month: "Jul",
      day: "2011",
      title: "National Excellence Award",
      description:
        "Healthcare Products Distribution and Secondary Assembly - Medical Devices.",
    },
    {
      month: "Oct",
      day: "2011",
      title: "Top Industry Partner",
      description: "Awarded by leading medical institutions.",
    },
  ];

  const sectionRef = useRef(null);

  return (
    <section id="awards" ref={sectionRef} className=" min-h-screen py-25">
      <div className="p-6 place-items-center">
        <span className="flex items-center gap-1 px-3 py-2 text-sm border border-black/30 rounded-full shadow-lg text-third">
          <div className="w-2 h-2 bg-third rounded-full" />
          Milestones
        </span>
      </div>

      {/* SECTION TITLE */}

      <div className="max-w-6xl mx-auto my-10">
        <p className="text-center text-xl/relaxed ">
          Our awards and certification only shows that the company is sincere
          with its aim of providing a good product of choice in the medical
          industry.
        </p>
      </div>

      {/* TIMELINE WRAPPER */}
      <div className="relative max-w-6xl mx-auto">
        {/* Center vertical line */}
        <div className="absolute left-1/2 top-0 h-full w-px bg-gray-300  -translate-x-1/2 hidden md:block " />

        <div className="space-y-16">
          {awards.map((award, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-3 items-center">
                {/* LEFT */}
                <div
                  className={`md:col-span-1 ${
                    isLeft ? "md:pr-8 text-right" : ""
                  }`}>
                  {isLeft && <AwardCard award={award} align="right" />}
                </div>

                {/* CENTER DOT */}
                <div className="relative flex justify-center md:col-span-1">
                  <span className="w-4 h-4 rounded-full bg-blue-200 border border-third p-2  z-10" />
                </div>

                {/* RIGHT */}
                <div
                  className={`md:col-span-1 ${
                    !isLeft ? "md:pl-8 text-left" : ""
                  }`}>
                  {!isLeft && <AwardCard award={award} align="left" />}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function AwardCard({
  award,
  align,
}: {
  award: {
    month: string;
    day: string;
    title: string;
    description: string;
  };
  align: "left" | "right";
}) {
  return (
    <div className="p-6">
      <div className="pb-2">
        <div
          className={`border border-black/20 rounded-lg bg-white shadow-lg px-2 py-2 w-18 text-center leading-tight ${
            align === "right" ? "ml-auto" : "mr-auto"
          }`}>
          <div className="flex flex-col gap-2">
            <span className="block break-all text-md font-semibold text-third">
              {award.month}
            </span>
            <span className="block break-all text-md font-semibold ">
              {award.day}
            </span>
          </div>
        </div>
      </div>

      <h3
        className={`text-lg font-semibold mt-1 text-third ${
          align === "right" ? "text-right" : "text-left"
        }`}>
        {award.title}
      </h3>

      <p
        className={`text-black/50 mt-2 ${
          align === "right" ? "text-right" : "text-left"
        }`}>
        {award.description}
      </p>
    </div>
  );
}
