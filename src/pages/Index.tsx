import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyTechnoid } from "@/components/WhyTechnoid";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <WhyTechnoid />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;