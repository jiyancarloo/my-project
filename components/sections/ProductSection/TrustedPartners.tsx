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
    {
      href: "/partner_images/PHC.png",
      alt: "phc",
    },
  ];
  return (
    <>
      <section className="   ">
        <div className="mx-30 py-20">
          <div className="place-items-center space-y-14">
            <div>
              <article className="text-pretty">
                <span className="text-xl text-third">
                  Working alongside trusted healthcare institutions nationwide.
                </span>
              </article>
            </div>
            <div className="flex gap-12">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className=" inline-flex items-center justify-center rounded-lg ">
                  <Image
                    src={partner.href}
                    alt={partner.alt}
                    width={100}
                    height={100}
                    className="object-cover grayscale"
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
