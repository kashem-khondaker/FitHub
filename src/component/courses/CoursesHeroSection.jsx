import React from "react";

const CoursesHeroSection = () => {
  return (
    <div className="relative p-4 sm:p-8 md:p-30 bg-cover bg-center bg-no-repeat min-h-[40vh] sm:min-h-[60vh] flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=1470&q=80')]">
      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-snug sm:leading-tight">
          Our Fitness Courses
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-200">
          Explore our diverse range of fitness classes designed for all
          experience levels — from beginners to advanced athletes.
        </p>
      </div>
    </div>
  );
};

export default CoursesHeroSection;
