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
      <section id="news" ref={sectionRef} className="min-h-screen relative">
        <div className="px-4 sm:px-8 py-30 lg:mx-30 lg:py-30 space-y-14">
          <div className="w-fit flex items-center gap-2">
            <div className="w-8 h-px bg-third rounded-full" />
            <span className="text-black/60 uppercase tracking-wide whitespace-nowrap">
              NEWS & EVENTS
            </span>
          </div>
          <article className="">
            <p className=" text-xl lg:text-4xl text-third max-w-7xl">
              Stay informed with the latest updates, announcements, and industry
              insights from our team.
            </p>
          </article>
          <div className="grid grid-cols-1 lg:grid-cols-13 gap-10">
            {/* FEATURED NEWS */}
            <article className="col-span-1 lg:col-span-6 flex flex-col gap-4">
              <div className="w-full">
                <Image
                  src={featured.coverImage.src}
                  alt={featured.coverImage.alt}
                  width={1200} // higher for retina
                  height={675}
                  priority
                  className="w-full aspect-video object-cover rounded-lg"
                />
              </div>

              <div className="space-y-2">
                <h3 className="text-xl lg:text-2xl font-medium">
                  {featured.title}
                </h3>
                <span className="text-sm lg:text-base text-black/60">
                  {featured.date}
                </span>
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
            <div className="col-span-1 lg:col-span-7 flex flex-col gap-6">
              {secondary.map((item) => (
                <article
                  key={item.slug}
                  className="flex flex-col sm:flex-row gap-4">
                  <div className="shrink-0 sm:w-1/2 lg:w-2/5">
                    <Image
                      src={item.coverImage.src}
                      alt={item.coverImage.alt}
                      width={800}
                      height={450}
                      className="w-full aspect-video object-cover rounded-lg"
                    />
                  </div>

                  <div className="flex-1 space-y-4">
                    <div className="space-y-2">
                      <h4 className="text-md font-medium">{item.title}</h4>
                      <span className="text-sm text-black/60">{item.date}</span>
                    </div>
                    <Link
                      href={`/news/${item.slug}`}
                      className="inline-flex items-center gap-1 text-third font-medium group">
                      Read More
                      <span className="transform transition-transform duration-400 group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
