import { news } from "@/app/data/news";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import RelatedNews from "../RelatedNews";
import Footer from "@/components/ui/layout/footer";
type Props = { params: { slug: string } };

export default async function NewsArticle({ params }: Props) {
  const { slug } = await params;

  const article = news.find((item) => item.slug === slug);

  if (!article) return notFound();

  return (
    <>
      <section className="min-h-screen bg-[#F4F6FB] ">
        <div className="max-w-380 mx-auto px-4 sm:px-8 lg:px-12  text-pretty py-10 ">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_380px] gap-20">
            <main className="space-y-6 max-w-none">
              <Link
                href="/#news"
                className="inline-flex items-center gap-1 text-third font-medium group mt-2">
                <span className="transform transition-transform duration-300 group-hover:-translate-x-1">
                  ←
                </span>
                Back to Home
              </Link>
              <div className=" w-full relative aspect-video ">
                <Image
                  src={article.coverImage.src}
                  alt={article.coverImage.alt}
                  fill
                  priority
                  className="object-cover object-bottom rounded-lg"
                />
              </div>
              <article className="flex gap-3">
                <div className="bg-third w-1" />
                <h1 className="lg:text-3xl block font-semibold">
                  {article.title}
                </h1>
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
                        className="w-full max-w-5xl overflow-hidden not-prose my-6 "
                        key={index}>
                        <div className="relative w-full  aspect-video">
                          <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            priority
                            className="object-cover rounded-lg overflow-hidden"
                          />
                        </div>
                      </div>
                    );
                  }
                })}
              </article>
            </main>
            <aside className="lg:sticky lg:top-26 h-fit">
              <RelatedNews currentSlug={slug} />
            </aside>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
