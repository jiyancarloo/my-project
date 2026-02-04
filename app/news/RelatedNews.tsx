import { news } from "../data/news";
import Link from "next/link";
import Image from "next/image";

type Props = { currentSlug: string };

export default function RelatedNews({ currentSlug }: Props) {
  const relatedNews = news.filter((item) => currentSlug !== item.slug);
  return (
    <>
      <section className="space-y-4 ">
        <h3 className="prose prose-lg">Related News</h3>
        <div className="grid grid-cols-1 gap-6 ">
          {relatedNews.map((item, index) => (
            <Link href={`/news/${item.slug}`} key={index} className="">
              <div className="relative w-full h-60 ">
                <Image
                  src={item.coverImage.src}
                  alt={item.coverImage.alt}
                  fill
                  className="mb-3 rounded-lg object-cover "
                />
              </div>
              <article className="prose prose-md mt-3">
                <span className="block font-semibold">{item.title}</span>
                <span className="text-black/60 text-sm">{item.date}</span>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
