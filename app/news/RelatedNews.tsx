import { news } from "../data/news";
import Link from "next/link";
import Image from "next/image";

type Props = { currentSlug: string };

export default function RelatedNews({ currentSlug }: Props) {
  const relatedNews = news.filter((item) => currentSlug !== item.slug);
  return (
    <>
      <section>
        <h3>Related News</h3>
        <div className="grid grid-cols-3">
          {relatedNews.map((item) => (
            <Link href={`/news/${item.slug}`} key={item.slug}>
              <Image
                src={item.images[0].src}
                alt={item.images[0].alt}
                width={100}
                height={100}
              />
              <span className="block">{item.date}</span>
              <span>{item.title}</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
