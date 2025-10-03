import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Benefits from "@/components/Benefits";
import Specifications from "@/components/Specifications";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Benefits />
      <Specifications />
      <CTA />
      <Footer />
    </div>
  );
}
