import { Button } from "@/components/ui/button";
import Hero from "@/components/sections/hero";
import PMCInformation from "@/components/sections/about/PMCinformation";

export default function Home() {
  return (
    <>
      <div>
        <Hero />
        <PMCInformation />
      </div>
    </>
  );
}
