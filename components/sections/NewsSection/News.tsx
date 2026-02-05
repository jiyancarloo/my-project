"use client";
import { useRef } from "react";
import { news } from "@/app/data/news";
import Image from "next/image";
import Link from "next/link";

export default function News() {
  const sectionRef = useRef(null);
  return (
    <>
      <section id="news" ref={sectionRef} className="min-h-screen relative ">
        <div className="px-4 sm:px-8 py-30 lg:mx-30 lg:py-30 space-y-14">
          <div className="w-fit flex items-center gap-2">
            <div className="w-8 h-px bg-third rounded-full" />
            <span className="text-black/60 uppercase tracking-wide whitespace-nowrap">
              NEWS & EVENTS
            </span>
          </div>
          <article className="mt-4">
            <p className="text-2xl lg:text-4xl text-third max-w-7xl">
              Stay informed with the latest updates, announcements, and industry
              insights from our team.
            </p>
          </article>

          <div className="mx-auto">
            <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-8 mt-8">
              {news.map((item, index) => (
                <div key={index}>
                  <Image
                    key={index}
                    src={item.coverImage.src}
                    alt={item.coverImage.alt}
                    width={400}
                    height={400}
                    className="mb-3 w-full aspect-video object-cover rounded-lg"
                  />

                  <div className="space-y-2">
                    <span className="text-black/60 text-sm block">
                      {item.date}
                    </span>
                    <div className="">
                      <span className="font-medium">{item.title}</span>
                    </div>
                    <span className="text-gray-600 block">{item.exerpt}</span>
                  </div>

                  <Link
                    href={`/news/${item.slug}`}
                    className="inline-flex items-center gap-1 text-third font-medium group mt-2 ">
                    Read More
                    <span className="transform transition-transform duration-400 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
