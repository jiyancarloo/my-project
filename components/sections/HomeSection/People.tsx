import Image from "next/image";

export default function People() {
  return (
    <section className=" bg-[#F4F6FB]">
      <div className="px-4 sm:px-8 lg:mx-30 space-y-4 py-20 lg:py-30 ">
        <div className="inline-grid lg:grid-cols-[1fr_1fr] space-y-7">
          <div className="max-w-3xl ">
            <span className="text-xl lg:text-4xl block ">
              The heart of {""}
              <span className="text-third ">Panamed Philippines</span>
            </span>
          </div>

          <p className="text-gray-600 text-base block ">
            lies in the people behind the growth and success of the company over
            the years. We believe in building a better workforce and employing
            the best manpower are key critical factors to growth and
            sustainability of our company.
          </p>

          {/* RIGHT COLUMN – IMAGE */}
        </div>
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
    </section>
  );
}
