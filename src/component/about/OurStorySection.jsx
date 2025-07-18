import React from "react";

const OurStorySection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <span className="text-primary font-semibold">OUR STORY</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
              A Decade of Fitness Excellence 
            </h2>
            <p className="text-gray-700 mb-4">
              FitHub was founded in 2010 by fitness enthusiasts who believed
              that quality training should be accessible to everyone. What
              started as a small studio with just five trainers has grown into a
              comprehensive fitness center with state-of-the-art facilities and
              a team of certified professionals.
            </p>
            <p className="text-gray-700 mb-4">
              Our journey has been defined by a commitment to excellence,
              personalized attention, and creating a community that supports
              each other. We've helped thousands of members achieve their
              fitness goals, whether that's weight loss, muscle gain, improved
              athletic performance, or simply leading a healthier lifestyle.
            </p>
            <p className="text-gray-700">
              Today, FitHub stands as a testament to our founding principles,
              offering diverse programs designed to meet the needs of members at
              every fitness level. We continue to evolve, embracing new training
              methodologies while staying true to what works.
            </p>
          </div>
          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="FitHub early days"
                  className="rounded-lg shadow-md h-48 w-full object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1574680088814-c9e8a10d8a4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Group fitness class"
                  className="rounded-lg shadow-md h-64 w-full object-cover"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="https://images.unsplash.com/photo-1571388208497-71bedc66e932?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Personal training"
                  className="rounded-lg shadow-md h-64 w-full object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Modern gym equipment"
                  className="rounded-lg shadow-md h-48 w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
