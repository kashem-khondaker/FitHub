import React from "react";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";

const HomeHeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg"
          alt="Modern Gym Interior"
          className="w-full h-full object-cover"
        />
        {/* Semi-transparent Black Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm text-white">
            <Star className="h-4 w-4 text-orange-400 fill-orange-400" />
            <span>Rated Gym in the City</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Transform Your
              <span className="block bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Body & Mind
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
              Join thousands of members who've achieved their fitness goals with
              our world-class equipment, expert trainers, and supportive
              community.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/register"
              className="group inline-flex items-center gap-2 bg-blue-500 text-white px-8 py-4 text-lg font-semibold rounded-full hover:bg-blue-600 transition-all"
            >
              Start Your Journey
              <svg
                className="h-6 w-6 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14m-7-7l7 7-7 7"
                />
              </svg>
            </Link>

            <button className="group inline-flex items-center gap-2 border-2 border-blue-500 text-blue-500 px-8 py-4 text-lg font-semibold rounded-full hover:bg-blue-500/10 transition-all">
              <svg
                className="h-6 w-6 transition-transform group-hover:scale-110"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M5 3v18l15-9L5 3z" />
              </svg>
              Watch Our Story
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 max-w-2xl mx-auto pt-12 text-white">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400">
                2500+
              </div>
              <div className="text-gray-300">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400">
                50+
              </div>
              <div className="text-gray-300">Expert Trainers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400">
                50+
              </div>
              <div className="text-gray-300">Fitness Classes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400">
                98%
              </div>
              <div className="text-gray-300">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Effects */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-600/20 rounded-full blur-xl animate-pulse delay-1000"></div>
    </section>
  );
};

export default HomeHeroSection;
