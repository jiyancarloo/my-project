"use client";
import { Flag } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

export default function PMCInformation() {
  const info = [
    {
      title: " 6257",
      content: " Customers",
      icon: Flag,
    },
    {
      title: "5124",
      content: " Products",
      icon: Flag,
    },
    {
      title: " 10",
      content: " Branches",
      icon: Flag,
    },
  ];
  const sectionRef = useRef(null);
  return (
    <section id="about" ref={sectionRef} className="py-24">
      <div className="flex justify-center items-center w-full mb-24 ">
        <p className=" text-xl text-center w-xl">
          As a trusted partner in healthcare, we believe it is important to
          introduce who we are, our history, and the principles that guide our
          work.
        </p>
      </div>

      <div className="h-screen flex items-center justify-between ">
        <div className="grid grid-cols-4 text-right">
          {/* Left column */}
          <div className="col-span-2 flex flex-col space-y-12">
            <p className="text-2xl">
              Dedicated to strengthening the nation’s healthcare system,
              Progressive Medical Corporation works hand in hand with providers
              to deliver reliable equipment and innovative medical solutions.
            </p>
            <p className="text-2xl">
              The strength of our commitment is measured by the trust we’ve
              earned.
            </p>

            {/* Info Grid */}
            <div className="grid grid-cols-3 text-center mt-8">
              {info.map((item, index) => (
                <div key={index}>
                  <p className="text-2xl font-bold">{item.title}</p>
                  <p className="text-gray-600">{item.content}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div className="col-span-2 flex justify-center items-center ">
            <Image
              src="/about_images/Healthcare Professional.png"
              alt="Healthcare Professional"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
