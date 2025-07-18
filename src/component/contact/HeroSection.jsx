import React from "react";

const HeroSection = () => {
  return (
    <div className="relative bg-primary text-white pt-32 pb-20">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
          Get In Touch
        </h1>
        <p
          className="text-lg md:text-xl max-w-2xl mx-auto animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          Have questions or feedback? We'd love to hear from you. Reach out and
          our team will respond as soon as possible.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
