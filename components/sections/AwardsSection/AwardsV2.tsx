import { useRef } from "react";

export default function AwardsV2() {
  const sectionRef = useRef(null);
  const awards = [
    {
      title: "ISO CERTIFICATION",
      year: "2015",
      description:
        "Panamed Philippines Inc. is an ISO 9001:2015 certified company, and has been consistent in ensuring that clients receive high quality products and services.",
    },
    {
      title: "BORDERLESS ICU CARE",
      year: "2011",
      description:
        "Panamed Philippines Inc. is an ISO 9001:2015 certified company, and has been consistent in ensuring that clients receive high quality products and services.",
    },
    {
      title: "TOP PERFORMING VENDOR",
      year: "2011",
      description: "Lorem Ipmsum Dolor Sit Amet Consectetur Adipisicing Elit.",
    },
    {
      title: "National Excellence Award",
      year: "2018",
      description: "Lorem Ipmsum Dolor Sit Amet Consectetur Adipisicing Elit.",
    },
    {
      title: "ISO CERTIFICATION",
      year: "2015",
      description:
        "Panamed Philippines Inc. is an ISO 9001:2015 certified company,and has been consistent in ensuring that clients receive high quality products and services.",
    },
    {
      title: "ISO CERTIFICATION",
      year: "2015",
      description:
        "Panamed Philippines Inc. is an ISO 9001:2015 certified company,and has been consistent in ensuring that clients receive high quality products and services.",
    },
    {
      title: "Borderless ICU Care",
      year: "2011",
      description: "Lorem Ipmsum Dolor Sit Amet Consectetur Adipisicing Elit.",
    },
    {
      title: "National Excellence Award",
      year: "2018",
      description: "Lorem Ipmsum Dolor Sit Amet Consectetur Adipisicing Elit.",
    },
  ];
  return (
    <>
      <section className="bg-[#F4F6FB]" id="awards" ref={sectionRef}>
        <div className="mx-30 py-40 space-y-8 p-8">
          <div className="w-fit flex items-center gap-2">
            <div className="w-8 h-px bg-third rounded-full" />
            <span className="text-black/60 uppercase tracking-wide whitespace-nowrap">
              MILESTONES
            </span>
          </div>
          {/* Container 1 */}
          <div className=" grid grid-cols-1 lg:grid-cols-[2fr_2fr] items-start ">
            {/* Left Column */}
            <div className="py-8 max-w-2xl">
              <article className="mr-8 text-pretty">
                <span className="text-4xl text-third ">
                  Recognition that validates our approach
                </span>
              </article>
            </div>
            {/* Right Column */}
            <div className="">
              {awards.map((item, index) => (
                <div
                  key={index}
                  className="border-b border-black/20 py-8  space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl">{item.title}</span>

                    <h2 className="text-2xl">{item.year}</h2>
                  </div>
                  <article className="text-pretty w-2xl">
                    <p className="text-gray-600">{item.description}</p>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
