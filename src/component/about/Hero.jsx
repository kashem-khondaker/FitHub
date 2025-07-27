import React from "react";

const Hero = () => {
  return (
    <div className="relative h-[500px] md:h-[600px] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] 
        bg-cover bg-center"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto h-full flex items-center relative z-10 px-4">
        <div className="max-w-xl text-white animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About FitHub
          </h1>
          <p 
            className="text-lg md:text-xl mb-8"
            style={{ animationDelay: "0.2s" }}
          >
            Empowering individuals to transform their lives through fitness
            since 2010. Our mission is to create a supportive environment where
            everyone can achieve their health goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;