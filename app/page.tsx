import Hero from "@/components/sections/hero";
import Contact from "@/components/sections/contact/contact";
import Products from "@/components/sections/products/ProductSection";
import Brands from "@/components/sections/CarouselBrand/Brands";
import About from "@/components/sections/home/home";
import Awards from "@/components/sections/awards/Awards";
import News from "@/components/sections/news/News";

export default function Home() {
  return (
    <>
      <div className="">
        <Hero />
        <Brands />
        <About />
        <Products />
        <Awards />
        <News />
        <Contact />
      </div>
    </>
  );
}
