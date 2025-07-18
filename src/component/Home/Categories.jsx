import React from "react";
import { Code, Palette, MonitorPlay, BarChart3 } from "lucide-react"; // Example icons

const Categories = () => {
  return (
    <section id="categories" className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12 opacity-100 translate-y-0 transition-all duration-1000">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explore Our <span className="heading-gradient">Top Categories</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Browse through our diverse range of courses categorized for your
            convenience
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {/* Static Category Cards */}
          <a
            to="/courses?category=development"
            className="bg-white rounded-xl shadow-md hover:shadow-lg p-6 text-center card-hover opacity-100 translate-y-0 transition-all duration-1000"
          >
            <div className="text-4xl mb-3">
              <Code />
            </div>
            <h3 className="font-semibold text-lg mb-1">Development</h3>
            <p className="text-gray-500 text-sm">120 Courses</p>
          </a>

          <a
            to="/courses?category=design"
            className="bg-white rounded-xl shadow-md hover:shadow-lg p-6 text-center card-hover opacity-100 translate-y-0 transition-all duration-1000"
          >
            <div className="text-4xl mb-3">
              <Palette />
            </div>
            <h3 className="font-semibold text-lg mb-1">Design</h3>
            <p className="text-gray-500 text-sm">80 Courses</p>
          </a>

          <a
            to="/courses?category=marketing"
            className="bg-white rounded-xl shadow-md hover:shadow-lg p-6 text-center card-hover opacity-100 translate-y-0 transition-all duration-1000"
          >
            <div className="text-4xl mb-3">
              <BarChart3 />
            </div>
            <h3 className="font-semibold text-lg mb-1">Marketing</h3>
            <p className="text-gray-500 text-sm">60 Courses</p>
          </a>

          <a
            to="/courses?category=video"
            className="bg-white rounded-xl shadow-md hover:shadow-lg p-6 text-center card-hover opacity-100 translate-y-0 transition-all duration-1000"
          >
            <div className="text-4xl mb-3">
              <MonitorPlay />
            </div>
            <h3 className="font-semibold text-lg mb-1">Video Editing</h3>
            <p className="text-gray-500 text-sm">45 Courses</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Categories;
