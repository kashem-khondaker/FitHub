import React from "react";
import { ChevronRight, Star } from "lucide-react";

const PopularCourses = () => {
  return (
    <section id="courses" className="py-16">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 opacity-100 translate-y-0 transition-all duration-1000">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="heading-gradient">Popular Courses</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl">
              Learn from industry experts and advance your career with our most
              sought-after courses
            </p>
          </div>
          <a
            to="/courses"
            className="flex items-center text-primary font-semibold mt-4 md:mt-0 hover:underline"
          >
            View All Courses
            <ChevronRight className="h-5 w-5 ml-1" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Static course card 1 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md card-hover opacity-100 translate-y-0 transition-all duration-1000">
            <div className="relative h-48 overflow-hidden">
              <img
                src="https://source.unsplash.com/featured/?coding"
                alt="Web Development Bootcamp"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-white py-1 px-3 rounded-full text-sm font-medium">
                Development
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 line-clamp-2 h-14">
                Full Stack Web Development Bootcamp
              </h3>
              <p className="text-gray-600 mb-4">by Jane Doe</p>
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="ml-1 font-medium">4.8</span>
                </div>
                <span className="mx-2 text-gray-300">•</span>
                <span className="text-gray-600 text-sm">2,300 reviews</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-primary">$49</span>
                <a
                  to="/courses/1"
                  className="bg-primary/10 text-primary font-semibold py-2 px-4 rounded-lg hover:bg-primary/20 transition duration-300"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>

          {/* Static course card 2 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md card-hover opacity-100 translate-y-0 transition-all duration-1000">
            <div className="relative h-48 overflow-hidden">
              <img
                src="https://source.unsplash.com/featured/?graphic-design"
                alt="UI/UX Design Masterclass"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-white py-1 px-3 rounded-full text-sm font-medium">
                Design
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 line-clamp-2 h-14">
                UI/UX Design Masterclass
              </h3>
              <p className="text-gray-600 mb-4">by John Smith</p>
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="ml-1 font-medium">4.6</span>
                </div>
                <span className="mx-2 text-gray-300">•</span>
                <span className="text-gray-600 text-sm">1,200 reviews</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-primary">$35</span>
                <a
                  to="/courses/2"
                  className="bg-primary/10 text-primary font-semibold py-2 px-4 rounded-lg hover:bg-primary/20 transition duration-300"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>

          {/* Static course card 3 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md card-hover opacity-100 translate-y-0 transition-all duration-1000">
            <div className="relative h-48 overflow-hidden">
              <img
                src="https://source.unsplash.com/featured/?marketing"
                alt="Digital Marketing Crash Course"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-white py-1 px-3 rounded-full text-sm font-medium">
                Marketing
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 line-clamp-2 h-14">
                Digital Marketing Crash Course
              </h3>
              <p className="text-gray-600 mb-4">by Alex Johnson</p>
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="ml-1 font-medium">4.7</span>
                </div>
                <span className="mx-2 text-gray-300">•</span>
                <span className="text-gray-600 text-sm">980 reviews</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-primary">$29</span>
                <a
                  to="/courses/3"
                  className="bg-primary/10 text-primary font-semibold py-2 px-4 rounded-lg hover:bg-primary/20 transition duration-300"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;
