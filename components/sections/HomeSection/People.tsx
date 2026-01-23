import Image from "next/image";

export default function People() {
  return (
    <section className=" bg-[#F4F6FB]">
      <div className="p-8 space-y-8 mx-40 ">
        {/* Two-column grid */}
        <div className=" items-center gap-8">
          {/* LEFT COLUMN – TEXT */}
          <div className="space-y-6">
            <span className=" text-4xl block">
              The heart of{" "}
              <span className="text-third">Panamed Philippines</span>
            </span>

            <article className="text-pretty">
              <p className="text-black text-lg/relaxed">
                lies in the people behind the growth and success of the company
                over the years. We believe in building a better workforce and
                employing the best manpower are key critical factors to growth
                and sustainability of our company. We take pride in our people
                as they embody the essential characteristic of a
                well-disciplined and responsible employee coupled with
                dedication, integrity, and trustworthiness.
              </p>
            </article>
          </div>

          {/* RIGHT COLUMN – IMAGE */}
          <div className="py-10 ">
            <div className="relative h-112.5 w-full overflow-hidden rounded-2xl">
              <Image
                src="/home_images/CARE.jpg"
                alt="Healthcare"
                fill
                priority
                className="object-cover object-center"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20" />

              <div className="relative z-10 h-full grid place-items-center">
                <span className="text-white text-xl"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
