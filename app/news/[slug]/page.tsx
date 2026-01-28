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
      <section className="min-h-screen bg-[#F4F6FB]  ">
        <div className="max-w-4xl mx-auto p-8 text-pretty space-y-6   ">
          {/* <div className="bg-red-50 w-full relative aspect-video ">
            <Image
              src={article.coverImage.src}
              alt={article.coverImage.alt}
              fill
              className="object-cover object-bottom rounded-lg"
            />
          </div> */}
          <article className="flex gap-4">
            <div className="bg-third w-1" />
            <h1 className="text-3xl block ">{article.title}</h1>
          </article>

          <span className="text-black/60 uppercase tracking-wide whitespace-nowrap block prose prose-md">
            {article.date}
          </span>

          <article className="prose prose-md prose-stone max-w-none">
            <p>{article.exerpt}</p>
          </article>

          <article className="prose max-w-none">
            {article.content.map((block, index) => {
              if (block.type === "paragraph") {
                return (
                  <p key={index} className="">
                    {block.text}
                  </p>
                );
              }

              if (block.type === "image") {
                const img = article.images[block.imageIndex!];
                return (
                  <div
                    className="w-full max-w-5xl overflow-hidden "
                    key={index}>
                    <div className="relative w-full aspect-video">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        priority
                        className="object-cover"
                      />
                    </div>
                  </div>
                );
              }
            })}
          </article>
          <Link
            href="/#news"
            className="inline-flex items-center gap-1 text-third font-medium group mt-2">
            Home
            <span className="transform transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
          <div>
            <RelatedNews currentSlug={slug} />
          </div>
        </div>
      </section>
    </>
  );
}
