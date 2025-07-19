import { useState } from "react";
import CoursesHeroSection from "../../component/courses/CoursesHeroSection";
import FilterSection from "../../component/courses/FilterSection";
import useFetchClasses from "../../hooks/useFetchClasses";
import Pagination from "../../component/courses/Pagination";

const courses = () => {
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

  const [capacityRange, setCapacityRange] = useState([0, 1000]);
  const [Ordering, setOrdering] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [instructorEmail, setInstructorEmail] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  const { classes, loading, totalPages } = useFetchClasses(
    currentPage,
    instructorEmail,
    searchQuery,
    Ordering,
    capacityRange
  );

  const handleCapacityChange = (index, value) => {
    setCapacityRange((prev) => {
      const newCapacityRange = [...prev];
      newCapacityRange[index] = value;
      return newCapacityRange;
    });
    setCurrentPage(1);
  };

  return (
    <section className="bg-gray-100 py-12">
      <CoursesHeroSection />

      <div className="container mx-auto px-4 mt-12">
        <h1 className="text-3xl text-center font-bold text-gray-800 mb-6">
          Explore Our Courses
        </h1>
        <p className="text-xl text-center font-semibold text-gray-500 mb-5">
          {" "}
          Fitness Course
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Filters Section */}
          <FilterSection
            capacityRange={capacityRange}
            handleCapacityChange={handleCapacityChange}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            instructorEmail={instructorEmail}
            setInstructorEmail={setInstructorEmail}
            Ordering={Ordering}
            setOrdering={setOrdering}
          />

          {/* Course Listings Section */}
          <div className="md:col-span-3">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              {/* Showing Count */}
              <p className="text-sm text-muted-foreground">
                Showing <span className="font-medium">{classes.length}</span>{" "}
                courses
              </p>

              {/* Search & Sort Controls */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                {/* Search Input */}
                <div className="relative w-full sm:w-64">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search course name..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                  <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-400">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
                      />
                    </svg>
                  </div>
                </div>

                {/* Sort Dropdown */}
                <select
                  className="border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-100 rounded-lg px-4 py-2 text-sm shadow-sm transition duration-200 bg-white"
                  value={Ordering}
                  onChange={(e) => setOrdering(e.target.value)}
                >
                  <option value="">Sort by</option>
                  <option value="schedule">Schedule: Low to High</option>
                  <option value="-schedule">Schedule: High to Low</option>
                  <option value="max_capacity">Capacity Ascending</option>
                  <option value="-max_capacity">Capacity Descending</option>
                </select>
              </div>
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
            <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                handlePageChange={setCurrentPage}
              />
          </div>
        </div>
      </div>
    </section>
  );
};

export default courses;
