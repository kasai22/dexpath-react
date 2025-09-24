import AboutUs from "@/components/home/aboutus";
import FAQ from "@/components/home/faq";
import ProductFeatures from "@/components/home/features";
import Hero from "@/components/home/hero";
import SustainabilityPolicy from "@/components/home/sustainabilityPolicy";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <ProductFeatures />
      <SustainabilityPolicy />
      <FAQ />
    </main>
  );
}
