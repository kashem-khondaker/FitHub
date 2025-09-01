import HomeHeroSection from "../../component/Home/HomeHeroSection";
import Testimonials from "../../component/Home/Testimonials";
import BenefitsSection from "../../component/Home/BenefitsSection";
import PricingSection from "../../component/Home/PricingSection";
import FeaturedClasses from "../../component/Home/FeatuerdClasses";
import FAQ from "../../component/Home/FAQ";
import CTA from "../../component/about/CTA";

const Home = () => {
  return (
    <div>
      {/* Hero section */}
      <HomeHeroSection />

      {/* Benefits section */}
      <BenefitsSection />

      {/* Popular Courses section */}
      <FeaturedClasses />

      {/*Testimonials section */}
      <Testimonials />

      {/* Pricing section */}
      <PricingSection />

      {/* faq section  */}
      <FAQ />

      {/* CTA section */}
      <CTA />
    </div>
  );
};

export default Home;
