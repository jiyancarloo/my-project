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
    <div className="px-20 bg-[#F4F6FB]">
      {/* Two-column grid */}
      <div className="grid grid-cols-2 items-center gap-8">
        {/* LEFT COLUMN – TEXT */}
        <div className="p-8 space-y-6">
          <span className="text-white text-4xl font-semibold block">
            <span className="text-third">Flagship Product Goes here</span>
          </span>

          <p className="text-black/60 text-lg/relaxed">Item Description</p>
          <div className="flex items-center pt-2">
            <div className="group inline-block relative pt-2 z-20 ">
              <button
                className="relative overflow-hidden p-8 py-4 w-fit rounded-full border border-black/50  text-0
                transition-colors duration-500 text-lg text-black">
                <span className="absolute inset-0 bg-third -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out rounded-lg"></span>
                <span className="relative z-10 group-hover:text-white transition-colors duration-500 ">
                  Shop Now
                </span>
              </button>
            </div>
          </div>
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

              {/* Optional content */}
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
