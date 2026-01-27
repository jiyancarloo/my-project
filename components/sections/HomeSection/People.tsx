import Image from "next/image";

export default function People() {
  return (
    <section className=" bg-[#F4F6FB]">
      <div className="mx-30 py-30 p-8 space-y-4">
        <div className="inline-grid grid-cols-[1fr_1fr] ">
          <div>
            <span className="text-4xl block ">
              The heart of <br />
              <span className="text-third ">Panamed Philippines</span>
            </span>
          </div>

          <div className="">
            <p className="text-gray-600 text-lg/relaxed ">
              lies in the people behind the growth and success of the company
              over the years. We believe in building a better workforce and
              employing the best manpower are key critical factors to growth and
              sustainability of our company.
            </p>
          </div>

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
