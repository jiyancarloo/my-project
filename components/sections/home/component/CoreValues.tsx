import { Sparkles, Palette, Lightbulb, Ribbon, HeartPulse } from "lucide-react";
import { Icon } from "lucide-react";
import { targetArrow } from "@lucide/lab";
import Image from "next/image";
export default function CoreValues() {
  return (
    <>
      <div className="p-8 ">
        <div className="grid grid-cols-3 gap-4 items-stretch ">
          <div className="border rounded-lg h-full flex flex-col shadow-lg ">
            <div className="p-6 flex flex-col gap-y-6 ">
              <div className="border rounded-xl w-fit p-3 bg-blue-200 shadow-lg">
                <Icon
                  iconNode={targetArrow}
                  size={30}
                  strokeWidth={1.1}
                  color="#081a5b"
                />
              </div>

              <div className="flex flex-col gap-y-2">
                <span className="text-xl font-semibold">Commitment</span>
                <p className="text-base">
                  We are committed on what we do and we promise to deliver on
                  time outcome.
                </p>
              </div>
            </div>
          </div>

          <div className="border row-span-2 col-span-2  rounded-lg shadow-lg">
            <div className="p-6 flex flex-col gap-y-6 ">
              <div className="border rounded-xl w-fit p-3 bg-blue-200 shadow-lg">
                <HeartPulse size={30} strokeWidth={1.1} color="#081a5b" />
              </div>

              <div className="flex flex-col gap-y-2">
                <span className="text-xl font-semibold">Care</span>
                <p className="text-base">
                  We are highly competent, dedicated, technically skilled and
                  actively responsive in caring for the needs of our customers,
                  their families and we care for the people who are affected by
                  calamities and disasters.
                </p>
              </div>
              <div className="relative w-full h-70 rounded-md overflow-hidden">
                <Image
                  src="/home_images/care1.jpg"
                  alt="care"
                  fill
                  className="object-cover "
                />
              </div>
            </div>
          </div>

          <div className="border rounded-lg h-full flex flex-col shadow-lg">
            <div className="p-6 flex flex-col gap-y-6 ">
              <div className="border rounded-xl w-fit p-3 bg-blue-200 shadow-lg">
                <Ribbon size={30} strokeWidth={1.1} color="#081a5b" />
              </div>

              <div className="flex flex-col gap-y-2">
                <span className="text-xl font-semibold">Honesty</span>
                <p className="text-base">
                  We are honest on dealing with our suppliers, customers, stake
                  holders, employees and through the rest of our business
                  transactions.
                </p>
              </div>
            </div>
          </div>

          <div className="border rounded-lg h-full flex flex-col shadow-lg">
            <div className="p-6 flex flex-col gap-y-6 ">
              <div className="border rounded-xl w-fit p-3 bg-blue-200 shadow-lg">
                <Palette size={30} strokeWidth={1.1} color="#081a5b" />
              </div>

              <div className="flex flex-col gap-y-2">
                <span className="text-xl font-semibold">Optimism</span>
                <p className="text-base">
                  We look at the positive side of things and situations, which
                  allows us to have positive mindset that leads to positive
                  results.
                </p>
              </div>
            </div>
          </div>
          <div className="border rounded-lg h-full flex flex-col shadow-lg">
            <div className="p-6 flex flex-col gap-y-6 ">
              <div className="border rounded-xl w-fit p-3 bg-blue-200 shadow-lg">
                <Lightbulb size={30} strokeWidth={1.1} color="#081a5b" />
              </div>

              <div className="flex flex-col gap-y-2">
                <span className="text-xl font-semibold">Innovative</span>
                <p className="text-base">
                  We are always innovative on our products, solution and work
                  flow.
                </p>
              </div>
            </div>
          </div>
          <div className="border rounded-lg h-full flex flex-col shadow-lg">
            <div className="p-6 flex flex-col gap-y-6 ">
              <div className="border rounded-xl w-fit p-3 bg-blue-200 shadow-lg">
                <Sparkles size={30} strokeWidth={1.1} color="#081a5b" />
              </div>

              <div className="flex flex-col gap-y-2">
                <span className="text-xl font-semibold">Execellence</span>
                <p className="text-base">
                  We do things to achieve excellent and not just mediocre
                  results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
