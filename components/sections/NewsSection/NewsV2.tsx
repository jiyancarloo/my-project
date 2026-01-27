import { useRef } from "react";
import { news } from "@/app/data/news";
import Image from "next/image";
import Link from "next/link";

export default function NewsV2() {
  const sectionRef = useRef(null);

  const featured = news[0];
  const secondary = news.slice(1, 3);
  return (
    <>
      <section id="news" ref={sectionRef} className="relative">
        <div className="p-8 mx-30 py-30 space-y-14">
          <div className="w-fit flex items-center gap-2">
            <div className="w-8 h-px bg-third rounded-full" />
            <span className="text-black/60 uppercase tracking-wide whitespace-nowrap">
              NEWS & EVENTS
            </span>
          </div>
          <article className="">
            <p className=" text-4xl text-third max-w-7xl">
              Stay informed with the latest updates, announcements, and industry
              insights from our team.
            </p>
          </article>
          <div className="grid grid-cols-12 gap-10">
            {/* FEATURED NEWS */}
            <article className="col-span-5">
              <Image
                src={featured.images[0].src}
                alt={featured.images[0].alt}
                width={900}
                height={500}
                priority
                className="w-full h-125 object-cover rounded-lg"
              />
              <div className="mt-4 space-y-2">
                <span className="block text-sm text-black/60">
                  {featured.date}
                </span>
                <h3 className="text-2xl font-semibold">{featured.title}</h3>
              </div>
              <Link
                href={`/news/${featured.slug}`}
                className="inline-flex items-center gap-1 text-third font-medium group mt-2">
                Read More
                <span className="transform transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </article>
            {/* SECONDARY NEWS */}
            <div className="col-span-7  flex flex-col gap-6">
              {secondary.map((item) => (
                <article key={item.slug} className="flex gap-4   ">
                  <div className="space-y-4">
                    <span className="text-sm text-black/60 ">{item.date}</span>
                    <h4 className="text-lg font-medium">{item.title}</h4>
                    <Link
                      href={`/news/${item.slug}`}
                      className="inline-flex items-center gap-1 text-third font-medium  group">
                      Read More
                      <span className="transform transition-transform duration-400 group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                  </div>

                  <Image
                    src={item.images[0].src}
                    alt={item.images[0].alt}
                    width={400}
                    height={200}
                    className=" object-cover rounded-lg"
                  />
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
