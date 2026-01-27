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
        <div className="mx-40 py-30 p-8 space-y-14">
          <div className="w-fit flex items-center gap-2">
            <div className="w-8 h-px bg-third rounded-full" />
            <span className="text-black/60 uppercase tracking-wide whitespace-nowrap">
              NEWS & EVENTS
            </span>
          </div>
          <article className="mt-4">
            <p className=" text-4xl text-third max-w-7xl">
              Stay informed with the latest updates, announcements, and industry
              insights from our team.
            </p>
          </article>

          <div className="mx-auto">
            <div className="grid lg:grid-cols-4 sm:grid-cols-1 gap-6 mt-8">
              {news.map((item, index) => (
                <Link key={index} href={`/news/${item.slug}`}>
                  {index === 0}
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
                      <span className=" font-semibold">{item.title}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">{item.exerpt}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
