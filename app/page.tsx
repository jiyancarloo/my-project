import { Button } from "@/components/ui/button";
import Hero from "@/components/sections/hero";
import PMCInformation from "@/components/sections/about/PMCinformation";
import Contact from "@/components/sections/contact/contact";
import Details from "@/components/sections/home/home";
import Products from "@/components/sections/products/ProductSection";

export default function Home() {
  return (
    <>
      <div>
        <Hero />
        <Details />
        <PMCInformation />
        <Products />
        <Contact />
      </div>
    </>
  );
}
