import Hero from "@/components/sections/hero";
import PMCInformation from "@/components/sections/about/PMCinformation";
import Contact from "@/components/sections/contact/contact";
import Details from "@/components/sections/home/home";
import Products from "@/components/sections/products/ProductSection";
import Brands from "@/components/sections/CarouselBrand/Brands";

export default function Home() {
  return (
    <>
      <div className="bg-[#F4F6FB]">
        <Hero />
        <Brands />
        <Details />
        <PMCInformation />
        <Products />
        <Contact />
      </div>
    </>
  );
}
