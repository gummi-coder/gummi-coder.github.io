import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import PricingPlans from "@/components/PricingPlans";
import About from "@/components/About";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <div id="thjalfun">
        <Features />
      </div>
      <div id="verd">
        <PricingPlans />
      </div>
      <div id="um-mig">
        <About />
      </div>
      <div id="umsagnir">
        <Reviews />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
