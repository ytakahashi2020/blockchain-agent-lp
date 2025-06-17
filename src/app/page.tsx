import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Instructor from "@/components/Instructor";
import Pricing from "@/components/Pricing";
import CaseStudies from "@/components/CaseStudies";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Instructor />
      <Pricing />
      <CaseStudies />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}