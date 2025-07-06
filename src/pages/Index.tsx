import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyTechnoid } from "@/components/WhyTechnoid";
import { Testimonials } from "@/components/Testimonials";
import { AboutUs } from "@/components/AboutUs";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <WhyTechnoid />
      <Testimonials />
      <AboutUs />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;