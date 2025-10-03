import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Flag } from "lucide-react";

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
  return (
    <section className="py-24">
      <div className="flex justify-center items-center w-full mb-24 ">
        <p className=" text-xl text-center w-xl">
          As a trusted partner in healthcare, we believe it is important to
          introduce who we are, our history, and the principles that guide our
          work.
        </p>
      </div>

      <div className="h-screen flex items-center justify-between px-20">
        <div className="grid grid-cols-4 gap-8">
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
            <div className="grid grid-cols-3 gap-6 text-center mt-8">
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
            <img
              src="/about_images/Healthcare Professional.png"
              alt="Healthcare Professional"
              className="aspect-[5/4] object-contain w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
