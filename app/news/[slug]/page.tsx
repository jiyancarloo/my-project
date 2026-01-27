import { news } from "@/app/data/news";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import RelatedNews from "../RelatedNews";
type Props = { params: { slug: string } };

export default async function NewsArticle({ params }: Props) {
  const { slug } = await params;

  const article = news.find((item) => item.slug === slug);

  if (!article) return notFound();

  return (
    <>
      <section className="bg-[#F4F6FB] min-h-screen">
        <div>
          <article className="max-w-4xl mx-auto p-8 text-pretty space-y-6">
            <span className="text-black/60 uppercase tracking-wide whitespace-nowrap block">
              {article.date}
            </span>

            <div className="flex gap-4 ">
              <div className="bg-third w-1" />
              <h1 className="text-3xl block">{article.title}</h1>
            </div>

            <div className="bg-red-50">
              <Image
                src={article.images[0].src}
                alt={article.images[0].alt}
                width={500}
                height={400}
                className="object-cover w-full"
              />
            </div>

            <div className="prose">{article.exerpt}</div>
            <p className="">{article.content}</p>
            <Link
              href="/#news"
              className="inline-flex items-center gap-1 text-third font-medium group mt-2">
              Home
              <span className="transform transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
            <RelatedNews currentSlug={slug} />
          </article>
        </div>
      </section>
    </>
  );
}
