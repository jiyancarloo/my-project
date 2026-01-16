import { Sparkles, Sun, Lightbulb, Ribbon, HeartPulse } from "lucide-react";
import { Target } from "lucide-react";

export default function CoreValues() {
  const coreItems = [
    {
      icon: Target,
      title: "Commitment",
      content:
        "We are committed on what we do and we promise to deliver on time outcome.",
    },
    {
      icon: Lightbulb,
      title: "Innovative",
      content:
        "We are always innovative on our products, solution and work flow.",
    },
    {
      icon: Sparkles,
      title: "Execellence",
      content:
        "We do things to achieve excellent and not just mediocre results.",
    },
    {
      icon: HeartPulse,
      title: "Care",
      content:
        "We deliver skilled, dedicated, and compassionate care supporting our customers, their families, and communities in times of need.",
    },
    {
      icon: Ribbon,
      title: "Honesty",
      content:
        "We are honest on dealing with our suppliers, customers, stake holders, employees and through the rest of our business transactions.",
    },
    {
      icon: Sun,
      title: "Optimism",
      content:
        " We look at the positive side of things and situations, which allows us to have positive mindset that leads to positive results.",
    },
  ];

  return (
    <>
      <div className="mx-auto w-[80%]">
        <div className="grid grid-cols-3 gap-8 items-stretch ">
          {coreItems.map((item, index) => {
            const CoreIcon = item.icon;
            return (
              <div key={index} className=" rounded-lg h-full flex flex-col ">
                <div className="p-6 flex flex-col gap-y-6 ">
                  <div className="border rounded-xl w-fit p-3 bg-blue-200 shadow-lg ">
                    <CoreIcon size={30} strokeWidth={1.2} color="#081a5b" />
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <span className="text-xl text-white font-semibold">
                      {item.title}
                    </span>
                    <p className="text-base text-white/60 text-pretty">
                      {item.content}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
