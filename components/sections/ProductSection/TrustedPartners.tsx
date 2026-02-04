import Image from "next/image";

export default function TrustedPartners() {
  const partners = [
    {
      href: "/partner_images/EAMC.png",
      alt: "eamc",
    },
    {
      href: "/partner_images/LCP.png",
      alt: "lcp",
    },
    {
      href: "/partner_images/NKTI.png",
      alt: "nkti",
    },
    {
      href: "/partner_images/PGH.png",
      alt: "pgh",
    },
    {
      href: "/partner_images/PHC.png",
      alt: "phc",
    },
    {
      href: "/partner_images/EAMC.png",
      alt: "eamc",
    },
    {
      href: "/partner_images/LCP.png",
      alt: "lcp",
    },
    {
      href: "/partner_images/NKTI.png",
      alt: "nkti",
    },
    {
      href: "/partner_images/PGH.png",
      alt: "pgh",
    },
  ];
  return (
    <>
      <section>
        <div className="px-4 py-12 sm:px-8 lg:px-30 lg:py-20">
          <div className="space-y-10 text-center">
            {/* Heading */}
            <article className="text-pretty max-w-2xl mx-auto">
              <span className="text-lg sm:text-xl lg:text-2xl text-third">
                Working alongside trusted healthcare institutions nationwide.
              </span>
            </article>

            {/* Logos */}
            <div className="flex flex-wrap lg:flex-nowrap justify-center gap-6 sm:gap-8 lg:gap-12">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="w-20 h-20 sm:w-24 sm:h-24 lg:w-24 lg:h-24 relative shrink-0">
                  <Image
                    src={partner.href}
                    alt={partner.alt}
                    fill
                    className="object-contain grayscale hover:grayscale-0 hover:scale-120 transition duration-300  "
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
