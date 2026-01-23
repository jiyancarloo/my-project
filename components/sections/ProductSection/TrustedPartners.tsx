import Image from "next/image";

export default function TrustedPartners() {
  const partners = [
    {
      href: "/brand_images/EAMC.png",
      alt: "eamc",
    },
    {
      href: "/brand_images/LCP.png",
      alt: "lcp",
    },
    {
      href: "/brand_images/NKTI.png",
      alt: "nkti",
    },
    {
      href: "/brand_images/PGH.png",
      alt: "pgh",
    },
    {
      href: "/brand_images/PHC.png",
      alt: "phc",
    },
  ];
  return (
    <>
      <section className="bg-[#F4F6FB]">
        <div className="mx-40 py-20 ">
          <div className="mx-8 w-fit flex items-center gap-2">
            <div className="w-8 h-px bg-third rounded-full" />
            <span className="text-black/60 uppercase tracking-wide whitespace-nowrap">
              TRUSTED PARTNERS
            </span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_2fr] max-w-8xl place-items-center ">
            <div className="p-8 space-y-10">
              <article className="text-pretty">
                <span className="text-4xl text-third">
                  Working alongside trusted healthcare institutions nationwide.
                </span>
              </article>
            </div>
            <div className="flex items-center">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="w-34 h-34 flex items-center justify-center border p-4">
                  <Image
                    src={partner.href}
                    alt={partner.alt}
                    width={300}
                    height={300}
                    className="object-contain grayscale "
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
