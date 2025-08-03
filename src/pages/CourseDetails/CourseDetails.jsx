import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Calendar, Clock, Dumbbell, Star, Users } from "lucide-react";
import axios from "axios";
import { motion } from "framer-motion";
import CourseHero from "../../component/courseDetails/CourseHero";

const dummySchedules = [
  { day: "Monday", time: "6:00 PM - 6:45 PM", instructor: "John Smith" },
  { day: "Wednesday", time: "6:00 PM - 6:45 PM", instructor: "John Smith" },
  { day: "Friday", time: "6:00 PM - 6:45 PM", instructor: "John Smith" },
  { day: "Saturday", time: "10:00 AM - 10:45 AM", instructor: "Sarah Johnson" },
];

const dummyReviews = [
  {
    id: 1,
    username: "FitnessFanatic",
    rating: 5,
    date: "2023-04-15",
    comment:
      "Incredible workout! John really pushes you to your limit but in a motivating way. I've seen great results after just a few weeks of attending this class.",
  },
  {
    id: 2,
    username: "GymNewbie",
    rating: 4,
    date: "2023-03-22",
    comment:
      "As someone new to HIIT, I was intimidated at first but John offers great modifications. Very challenging but rewarding!",
  },
  {
    id: 3,
    username: "HealthyLifestyle",
    rating: 5,
    date: "2023-02-10",
    comment:
      "This class is exactly what I needed to break through my fitness plateau. High energy, great music, and effective workouts.",
  },
];

const dummyRelatedCourses = [
  {
    id: 2,
    title: "Strength Fundamentals",
    image:
      "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Strength",
    price: 20,
    oldPrice: 30,
    rating: 4.5,
    reviews: 18,
  },
  {
    id: 3,
    title: "Cardio Kickboxing",
    image:
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Cardio",
    price: 18,
    oldPrice: 28,
    rating: 4.8,
    reviews: 32,
  },
  {
    id: 4,
    title: "Tabata Training",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "HIIT",
    price: 22,
    oldPrice: 32,
    rating: 4.6,
    reviews: 25,
  },
];

const CourseDetail = () => {
  const { classesId } = useParams();
  const [course, setCourse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("description");

  useEffect(() => {
    const fetchCourse = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(
          `http://127.0.0.1:8000/fitness_classes/${classesId}/`
        );
        const data = res.data;

        // Add proper fallbacks for all required fields
        const mappedCourse = {
          id: data.id || classesId,
          title: data.name || "Unnamed Class",
          description: data.description || "No description available",
          longDescription:
            data.long_description ||
            data.description ||
            "No detailed description available",
          image:
            data.image ||
            "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          duration: data.duration
            ? `${data.duration} min`
            : "Duration not specified",
          capacity: data.max_capacity || 0,
          level: data.level || "All Levels",
          price: Number(data.price) || 0,
          oldPrice: Number(data.old_price) || 0,
          avgRating: 4.5, // Default rating if not available
          totalReviews: dummyReviews.length, // Default to dummy reviews count
          instructor:
            (data.instructor?.first_name || "Unknown") +
            " " +
            (data.instructor?.last_name || "Instructor"),
          instructorBio: data.instructor?.profile?.bio || "No bio available",
          equipment: data.equipment_needed || ["None required"], // Fallback equipment
          schedules:
            data.schedules && data.schedules.length > 0
              ? data.schedules.map((sch) => ({
                  day: sch.day || "TBD",
                  time: sch.time || "TBD",
                  instructor:
                    sch.instructor ||
                    (data.instructor?.first_name || "") +
                      " " +
                      (data.instructor?.last_name || ""),
                }))
              : dummySchedules,
          reviews: dummyReviews,
          relatedCourses: dummyRelatedCourses,
          category: data.category || "Fitness", // Added category fallback
        };

        setCourse(mappedCourse);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to load course data");

        // Set a fallback course with dummy data if API fails
        setCourse({
          id: classesId,
          title: "Sample Fitness Class",
          description: "This is a sample fitness class description",
          longDescription:
            "<p>This is a detailed description of the sample fitness class. The API failed to load real data.</p>",
          image:
            "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          duration: "45 min",
          capacity: 20,
          level: "Intermediate",
          price: 25,
          oldPrice: 35,
          avgRating: 4.5,
          totalReviews: dummyReviews.length,
          instructor: "John Doe",
          instructorBio:
            "Certified fitness instructor with 10 years of experience",
          equipment: ["Yoga mat", "Dumbbells", "Water bottle"],
          schedules: dummySchedules,
          reviews: dummyReviews,
          relatedCourses: dummyRelatedCourses,
          category: "HIIT",
        });

        setIsLoading(false);
      }
    };

    fetchCourse();
  }, [classesId]);

  const renderStars = (rating = 0) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`h-4 w-4 ${
            i <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
          }`}
        />
      );
    }
    return stars;
  };

  if (isLoading) {
    return <div className="text-center py-10 text-lg">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 py-10">{error}</div>;
  }

  if (!course) {
    return <div className="text-center py-10">No course data found.</div>;
  }

  return (
    <section className="bg-gray-100 py-12">
      {/* Hero Section - Improved from first design */}
      <div
        className="relative bg-cover bg-center bg-no-repeat min-h-[50vh] flex items-center justify-center py-20"
        style={{ backgroundImage: `url(${course.image})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block bg-white/20 text-white text-sm font-medium px-3 py-1 rounded-full mb-4"
          >
            {course.category}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            {course.title}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center space-x-1 text-yellow-400 mb-4"
          >
            {renderStars(course.avgRating)}
            <span className="ml-2 text-white">
              ({course.avgRating}) • {course.totalReviews} reviews
            </span>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg max-w-2xl mx-auto"
          >
            Instructor: {course.instructor} • Level: {course.level}
          </motion.p>
        </div>
      </div>
      {/* <CourseHero course={course} renderStars={renderStars} /> */}

      {/* Main Content - Restructured to match first design */}
      <div className="container mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2">
            {/* Tabs - Improved styling */}
            <div className="mb-8 border-b border-gray-200">
              <div className="flex space-x-8">
                {["description", "schedule", "reviews"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-4 px-1 font-medium transition-colors ${
                      activeTab === tab
                        ? "border-b-2 border-blue-700 text-blue-700"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    {tab === "reviews" && ` (${course.reviews.length})`}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content with Framer Motion */}
            <div className="mb-12">
              {/* Description Tab */}
              {activeTab === "description" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">
                    About This Course
                  </h2>
                  <div
                    className="prose max-w-none text-gray-700 mb-8"
                    dangerouslySetInnerHTML={{ __html: course.longDescription }}
                  />

                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    Equipment Needed
                  </h3>
                  <div className="flex flex-wrap gap-3 mb-8">
                    {course.equipment.map((item, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="inline-flex items-center px-4 py-1.5 bg-gray-100 text-gray-800 text-sm rounded-full shadow-sm"
                      >
                        <Dumbbell className="h-4 w-4 mr-2 text-gray-500" />
                        {item}
                      </motion.span>
                    ))}
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    About the Instructor
                  </h3>
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    className="flex items-start gap-6 p-6 rounded-2xl shadow-sm border border-blue-100 hover:border-blue-200 hover:shadow-md mb-10 transition-all"
                  >
                    <div className="flex-shrink-0 h-20 w-20 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-2xl font-bold shadow-inner">
                      {course.instructor
                        .split(" ")
                        .map((name) => name[0])
                        .join("")}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-1">
                        {course.instructor}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {course.instructorBio}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              )}

              {/* Schedule Tab */}
              {activeTab === "schedule" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">
                    Class Schedule
                  </h2>
                  <div className="space-y-4">
                    {course.schedules.map((schedule, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ scale: 1.01 }}
                        className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 border border-gray-200 rounded-2xl bg-white hover:shadow-md transition-all"
                      >
                        <div className="flex items-center gap-2 text-gray-800">
                          <Calendar className="h-5 w-5 text-blue-700" />
                          <span className="font-medium">{schedule.day}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-800">
                          <Clock className="h-5 w-5 text-gray-600" />
                          <span>{schedule.time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-800">
                          <Users className="h-5 w-5 text-gray-600" />
                          <span>With {schedule.instructor}</span>
                        </div>
                        <button className="rounded-full px-6 py-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold shadow-md hover:shadow-lg transition-all">
                          Book Now
                        </button>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Reviews Tab */}
              {activeTab === "reviews" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-3xl font-bold text-gray-900">
                      Student Reviews
                    </h2>
                    <button className="rounded-full px-5 py-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold shadow-md hover:shadow-lg transition-all">
                      Write a Review
                    </button>
                  </div>

                  <div className="space-y-6">
                    {course.reviews.map((review, i) => (
                      <motion.div
                        key={review.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="border border-gray-200 p-6 bg-white rounded-xl shadow-sm"
                      >
                        <div className="flex justify-between mb-3">
                          <h4 className="font-semibold text-gray-900">
                            {review.username}
                          </h4>
                          <span className="text-gray-500 text-sm">
                            {new Date(review.date).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="flex mb-3">
                          {renderStars(review.rating)}
                        </div>
                        <p className="text-gray-700">{review.comment}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Related Courses - Improved from first design */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-900">
                Similar Courses
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {course.relatedCourses.map((relatedCourse) => (
                  <Link
                    key={relatedCourse.id}
                    to={`/courses/${relatedCourse.id}`}
                    className="group"
                  >
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="bg-white rounded-lg shadow-md overflow-hidden group-hover:shadow-lg transition-all"
                    >
                      <div className="relative h-48">
                        <img
                          src={relatedCourse.image}
                          alt={relatedCourse.title}
                          className="w-full h-full object-cover"
                        />
                        <span className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs">
                          Sale
                        </span>
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-bold text-gray-800 mb-2">
                          {relatedCourse.title}
                        </h3>
                        <div className="flex justify-between items-center">
                          <div>
                            <span className="text-gray-700 font-bold">
                              ${relatedCourse.price}
                            </span>
                            <span className="text-gray-500 line-through ml-2">
                              ${relatedCourse.oldPrice}
                            </span>
                          </div>
                          <div className="flex items-center">
                            <span className="text-yellow-500 mr-1">
                              {relatedCourse.rating}
                            </span>
                            <span className="text-gray-500 text-sm">
                              ({relatedCourse.reviews})
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Course Info (Sticky) */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="sticky top-28 bg-white rounded-lg shadow-lg p-6"
            >
              <div className="relative mb-6">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <span className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs">
                  Sale
                </span>
              </div>

              <div className="flex justify-between items-center mb-6">
                <div>
                  <span className="text-2xl font-bold text-gray-800">
                    ${course.price}
                  </span>
                  <span className="text-gray-500 line-through ml-2">
                    ${course.oldPrice}
                  </span>
                </div>
                <span className="text-sm bg-green-100 text-green-800 rounded-full px-3 py-1">
                  Per class
                </span>
              </div>

              <div className="space-y-4 mb-6 border-b border-gray-200 pb-6">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-gray-500 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Duration</p>
                    <p className="font-medium">{course.duration}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-gray-500 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Class Size</p>
                    <p className="font-medium">Max {course.capacity} people</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Dumbbell className="h-5 w-5 text-gray-500 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Level</p>
                    <p className="font-medium">{course.level}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <button className="w-full rounded-xl px-5 py-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold shadow-md hover:shadow-lg transition-all">
                  Book a Class
                </button>
                <button className="w-full rounded-xl px-5 py-3 text-green-600 bg-green-100 hover:bg-green-200 font-semibold shadow-sm hover:shadow-md transition-all">
                  Add to Favorites
                </button>
              </div>

              <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-700 mb-2">
                  Get More For Less
                </h4>
                <p className="text-sm text-gray-700 mb-3">
                  Purchase a membership and save up to 30% on all classes.
                </p>
                <Link
                  to="/pricing"
                  className="text-blue-700 hover:text-blue-900 font-medium text-sm"
                >
                  View Membership Plans →
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetail;
