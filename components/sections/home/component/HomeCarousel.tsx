import Image from "next/image";

export default function HomeCarousel() {
  const cardInfo = [
    {
      title: "Title goes here",
      content: "Content",
      href: "/home_images/CARE.jpg",
      alt: "Healthcare",
    },
  ];

  return (
    <div className="px-20">
      {/* Two-column grid */}
      <div className="grid grid-cols-2 items-center gap-8">
        {/* LEFT COLUMN – TEXT */}
        <div className="p-8 space-y-6">
          <span className="text-black text-4xl font-semibold block">
            The heart of <span className="text-third">Panamed Philippines</span>
          </span>

          <p className="text-black text-lg/relaxed">
            lies in the people behind the growth and success of the company over
            the years. We believe in building a better workforce and employing
            the best manpower are key critical factors to growth and
            sustainability of our company. We take pride in our people as they
            embody the essential characteristic of a well-disciplined and
            responsible employee coupled with dedication, integrity, and
            trustworthiness.
          </p>
        </div>

        {/* RIGHT COLUMN – IMAGE */}
        <div className="py-10 px-4">
          {cardInfo.map((item, index) => (
            <div
              key={index}
              className="relative h-112.5 w-full overflow-hidden rounded-2xl">
              <Image
                src={item.href}
                alt={item.alt}
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
          ))}
        </div>
      </div>
    </div>
  );
}
