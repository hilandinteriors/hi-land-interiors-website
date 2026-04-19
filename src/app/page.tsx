import Hero from "@/components/Hero";
import TrustBanner from "@/components/TrustBanner";
import Products from "@/components/Products";
import CoreTech from "@/components/CoreTech";
import ColorGrid from "@/components/ColorGrid";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import B2BHub from "@/components/B2BHub";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBanner />
      <Products />
      <ColorGrid />
      <Portfolio />
      <Testimonials />
      <CoreTech />
      <Services />
      <B2BHub />
      <Footer />
    </main>
  );
}
