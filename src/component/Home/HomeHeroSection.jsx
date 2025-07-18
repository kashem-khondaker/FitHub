import React from "react";

const HomeHeroSection = () => {
  return (
    <section className="relative bg-blue-700 text-white pt-40 pb-32 overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Right Side Background Image */}
      <div className="absolute inset-y-0 right-0 w-full md:w-1/2 bg-[url('https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 animate-fade-in leading-tight">
            Transform Your Body, Transform Your Life
          </h1>
          <p
            className="text-xl md:text-2xl mb-10 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Join FitHub's community of fitness enthusiasts and reach your health
            goals with our expert trainers and state-of-the-art facilities.
          </p>
          <div
            className="flex flex-wrap gap-4 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <a href="/courses">
              <button className="px-8 py-4 text-lg font-semibold rounded-xl bg-red-500/50 backdrop-blur-sm text-white border hover:bg-red-500/80 transition duration-300">
                Explore Classes
              </button>
            </a>
            <a href="/register">
              <button className="px-8 py-4 text-lg font-semibold rounded-xl bg-blue-900/50 backdrop-blur-sm text-white border border-white hover:bg-blue-900/80 transition duration-300">
                Join Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHeroSection;
