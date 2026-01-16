"use client";
import { useRef } from "react";
import { news } from "@/app/data/news";
import Image from "next/image";

export default function News() {
  const sectionRef = useRef(null);
  return (
    <>
      <section
        id="news"
        ref={sectionRef}
        className="min-h-screen relative py-25">
        <div className="w-[90%] mx-auto">
          <div className="flex justify-center">
            <div className="">
              <span className="flex items-center gap-x-1  px-3 py-2 text-sm border border-black/30 rounded-full shadow-lg text-third ">
                <div className="w-2 h-2 bg-third rounded-full" />
                News & Events
              </span>
            </div>
          </div>
          <div className="my-10">
            <p className="text-center text-lg ">
              Stay informed with the latest updates, announcements, and industry
              insights from our team.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-6 mt-8">
            {news.map((item, index) => (
              <div className="" key={index}>
                {item.images.map((image, index) => (
                  <Image
                    key={index}
                    src={image.src}
                    width={400}
                    height={400}
                    alt={image.alt}
                    className="mb-3 rounded-lg object-fit-cover"
                  />
                ))}
                <div className="mb-2">
                  <span className="text-black/60 text-sm">{item.date}</span>
                </div>
                <div className="space-y-2">
                  <div>
                    <span className="text-lg font-semibold">{item.title}</span>
                  </div>
                  <div>
                    <span>{item.exerpt}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
