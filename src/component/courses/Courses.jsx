import React from "react";
import CoursesHeroSection from "./CoursesHeroSection";
import { useEffect, useRef, useState } from "react";
import ApiClient from "../../services/ApiClient";

const Courses = () => {
  const dummyCourses = [
    {
      id: 1,
      title: "HIIT Burn",
      description:
        "High-intensity interval training designed to maximize calorie burn and improve cardiovascular fitness.",
      price: 29,
      oldPrice: 49,
      rating: 4.5,
      reviews: 120,
      image: "https://via.placeholder.com/300x200",
    },
    {
      id: 2,
      title: "Yoga Flow",
      description:
        "Fluid movement sequences combined with breath to build strength, flexibility, and concentration.",
      price: 25,
      oldPrice: 40,
      rating: 4.8,
      reviews: 90,
      image: "https://via.placeholder.com/300x200",
    },
    {
      id: 3,
      title: "Strength Fundamentals",
      description:
        "Learn proper form and technique for strength exercises using various equipment.",
      price: 35,
      oldPrice: 60,
      rating: 4.6,
      reviews: 75,
      image: "https://via.placeholder.com/300x200",
    },
  ];

  const [courses, setCourses] = useState([]);
  const hasFetched = useRef(false);

  const loadCourses = async () => {
    try {
      const response = await ApiClient.get(`/fitness_classes/`);
      console.log(response.data);
      setCourses(response.data);
      console.log(courses)
      hasFetched.current = true;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!hasFetched.current) {
      hasFetched.current = true;
      loadCourses();
    }
  }, []);

  return (
    <section className="bg-gray-100 py-12">

      {/* <CoursesHeroSection/> */}
      <div className="bg-blue-700 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Our Fitness Courses</h1>
            <p className="text-lg max-w-2xl mx-auto">
              Explore our diverse range of fitness classes designed for all
              experience levels
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Explore Our Courses
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Filters Section */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-xl font-semibold mb-2">Filters</h2>
              <p className="text-sm text-gray-500 mb-4">
                Customize your course search.
              </p>

              {/* Static Search Input */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Search
                </label>
                <input
                  type="text"
                  className="w-full border rounded px-3 py-2"
                  placeholder="Enter course name"
                  disabled
                />
              </div>

              {/* Static Category */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <select className="w-full border rounded px-3 py-2" disabled>
                  <option>All Categories</option>
                  <option>Yoga</option>
                  <option>Strength</option>
                </select>
              </div>

              {/* Level Options */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Level
                </label>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="level" disabled />
                    <span>All Levels</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="level" disabled />
                    <span>Beginner</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="level" disabled />
                    <span>Intermediate</span>
                  </label>
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Price Range
                </label>
                <p className="text-sm text-gray-500">$0 - $70</p>
                <div className="bg-gray-200 h-2 rounded w-full mt-2"></div>
              </div>

              {/* Tags */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tags
                </label>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-200 px-3 py-1 rounded text-sm">
                    React
                  </span>
                  <span className="bg-gray-200 px-3 py-1 rounded text-sm">
                    Node.js
                  </span>
                </div>
              </div>

              {/* Date Picker */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Updated
                </label>
                <input
                  type="text"
                  placeholder="Pick a date"
                  className="w-full border rounded px-3 py-2"
                  disabled
                />
              </div>

              <button
                className="w-full border mt-4 py-2 rounded bg-gray-50"
                disabled
              >
                Reset Filters
              </button>
            </div>
          </div>

          {/* Course Listings Section */}
          <div className="md:col-span-3">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-gray-600">
                Showing {dummyCourses.length} courses
              </p>
              <select className="border px-3 py-2 rounded" disabled>
                <option>Sort by</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dummyCourses.map((course) => (
                <div
                  key={course.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="relative">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-48 object-cover"
                    />
                    <span className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs">
                      Sale
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-800 line-clamp-2">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 line-clamp-3">
                      {course.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <div>
                        <span className="text-gray-700 font-bold">
                          ${course.price}
                        </span>
                        <span className="text-gray-500 line-through ml-2">
                          ${course.oldPrice}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-yellow-500 mr-1">
                          {course.rating}
                        </span>
                        <span className="text-gray-500">
                          ({course.reviews})
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
