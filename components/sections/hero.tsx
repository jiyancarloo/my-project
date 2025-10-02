import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      <div className="absolute inset-0 "></div>
      {/* Foreground content */}
      <div className="flex w-8xl mx-auto relative z-10">
        <div className="w-5xl p-5">
          <p className=" sm:text-8xl text-left mb-10">
            Healthcare Excellence Since 1982
          </p>

          <p className="text-xl mb-10">
            For over four decades, Progressive Medical Corporation has been
            committed to delivering world-class healthcare products to Filipino
            families. As the first ISO-9001:2015 certified healthcare products
            distributor in the Philippines, we stand for quality, innovation,
            and care.
          </p>

          <Button variant="outline" size="lg" className="">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
