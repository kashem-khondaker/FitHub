import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Calendar, Clock, Dumbbell, Star, Users } from "lucide-react";
import axios from "axios";
import { motion } from "framer-motion";
import CourseHero from "../../component/courseDetails/CourseHero";
import CourseTabs from "../../component/courseDetails/CourseTabs";
import CourseDescription from "../../component/courseDetails/CourseDescription";
import CourseSchedule from "../../component/courseDetails/CourseSchedule";
import CourseReviews from "../../component/courseDetails/CourseReviews";
import RelatedCourses from "../../component/courseDetails/RelatedCourses";
import CourseSidebar from "../../component/courseDetails/CourseSidebar";
import ApiClient from "../../services/ApiClient";

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
      <CourseHero course={course} renderStars={renderStars} />

      <div className="container mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <CourseTabs
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              reviewsCount={course.reviews.length}
            />

            <div className="mb-12">
              {activeTab === "description" && (
                <CourseDescription course={course} />
              )}
              {activeTab === "schedule" && (
                <CourseSchedule schedules={course.schedules} />
              )}
              {activeTab === "reviews" && (
                <CourseReviews
                  renderStars={renderStars}
                />
              )}
            </div>

            <RelatedCourses courses={course.relatedCourses} />
          </div>

          <div>
            <CourseSidebar course={course} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetail;
