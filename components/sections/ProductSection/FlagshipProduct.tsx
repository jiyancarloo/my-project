import Image from "next/image";
import Link from "next/link";

export default function Flagship() {
  return (
    <div className="bg-[#0D1B2A]">
      {/* Two-column grid */}
      <div className="lg:mx-30 py-10 lg:py-20 ">
        <div className="grid lg:grid-cols-2 items-center ">
          {/* LEFT COLUMN – TEXT */}
          <div className="p-8 space-y-6">
            <span className="text-white text-xl lg:text-4xl  block">
              Flagship Product Goes here
            </span>

            <p className="text-white/60 text-base lg:text-lg text-pretty">
              The Paramount Biopsy Punch is a hollow, circular scalpel used in
              skin biopsies to obtain a full-thickness skin specimen by cutting
              into a skin lesion. It is commonly used in the evaluation of
              cutaneous neoplasms, pigmented lesions, and chronic skin
              disorders.
            </p>
            <div className="flex items-center pt-2">
              <div className="group inline-block relative pt-2 z-20 ">
                <Link href="https://panamed.com.ph/shop/index.php?route=product/product&product_id=791">
                  <button
                    className="relative overflow-hidden px-4 lg:p-8 py-2 lg:py-3 w-fit rounded-full border border-white/50  text-0
                transition-colors duration-500 text-base lg:text-lg text-white">
                    <span className="absolute inset-0 bg-blue-100 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out rounded-lg"></span>
                    <span className="relative z-10 group-hover:text-third transition-colors duration-500 ">
                      Buy Now
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN – IMAGE */}
          <div className="py-10 px-4">
            <div className="relative h-100 w-full overflow-hidden rounded-2xl">
              <Image
                src="/home_images/CARE.jpg"
                alt="Healthcare"
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
          </div>
        </div>
      </div>
    </div>
  );
}
