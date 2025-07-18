import React from "react";
import HomeHeroSection from "../../component/Home/HomeHeroSection";
import Testimonials from "../../component/Home/Testimonials";
import Features from "../../component/Home/Features";
import PopularCourses from "../../component/Home/Popular-courses";
import CTA from "../../component/Home/CTA";
import StatsSection from "../../component/Home/StatsSection";
import BenefitsSection from "../../component/Home/BenefitsSection";
import PricingSection from "../../component/Home/PricingSection";
import FeaturedClasses from "../../component/Home/FeatuerdClasses";

const Home = () => {
  return (
    <div>
      {/* Hero section */}
      <HomeHeroSection />

      {/* Stats section */}
      <StatsSection />

      {/* Benefits section */}
      <BenefitsSection />

      {/* Popular Courses section */}
      {/* <PopularCourses /> */}
      <FeaturedClasses />

      {/*Tastimonial section */}
      <Testimonials />
      {/* Features section */}
      {/* <Features /> */}
      {/*  */}

      {/* Pricing section */}
      <PricingSection />

      {/* CTA section */}
      <CTA />
    </div>
  );
};

export default Home;
