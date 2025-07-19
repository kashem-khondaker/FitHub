import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Calendar, Clock, Dumbbell, Star, Users } from "lucide-react";

const CourseDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('description');
  
  // In a real app, you would fetch course data based on the ID
  const course = {
    id: Number(id),
    title: "HIIT Burn",
    description: "High-intensity interval training designed to maximize calorie burn and improve cardiovascular fitness. This challenging workout alternates between intense bursts of exercise and short recovery periods, keeping your heart rate up and burning more fat in less time. Perfect for those looking to improve endurance, strength, and lose weight.",
    longDescription: `
      <p>High-Intensity Interval Training (HIIT) is a form of cardiovascular exercise that alternates short periods of intense exercise with less intense recovery periods. Our HIIT Burn class is designed to maximize calorie burn while improving your overall fitness level.</p>
      
      <p>During this 45-minute class, you'll experience:</p>
      <ul>
        <li>Dynamic warm-up to prepare your body</li>
        <li>Multiple intervals of high-intensity exercises</li>
        <li>Strength and cardio combinations</li>
        <li>Core stabilization work</li>
        <li>Flexibility and mobility cool down</li>
      </ul>
      
      <p>HIIT workouts provide the following benefits:</p>
      <ul>
        <li>Burn more calories in less time</li>
        <li>Increase metabolic rate for hours after exercise</li>
        <li>Improve oxygen consumption</li>
        <li>Reduce heart rate and blood pressure</li>
        <li>Improve insulin sensitivity</li>
      </ul>
      
      <p>This class is suitable for intermediate fitness levels. Modifications can be provided for those newer to HIIT. Come prepared with water and a towel, as you'll definitely be sweating!</p>
    `,
    instructor: "John Smith",
    instructorBio: "John is a certified personal trainer with 10+ years of experience specializing in HIIT and strength training. He's passionate about helping clients achieve their fitness goals through efficient, effective workouts.",
    image: "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "HIIT",
    level: "Intermediate",
    duration: "45 min",
    capacity: 20,
    equipment: ["Exercise mat", "Dumbbells", "Kettlebells", "Jump rope"],
    avgRating: 4.7,
    totalReviews: 24,
    price: 15,
    oldPrice: 25,
    schedules: [
      { day: "Monday", time: "6:00 PM - 6:45 PM", instructor: "John Smith" },
      { day: "Wednesday", time: "6:00 PM - 6:45 PM", instructor: "John Smith" },
      { day: "Friday", time: "6:00 PM - 6:45 PM", instructor: "John Smith" },
      { day: "Saturday", time: "10:00 AM - 10:45 AM", instructor: "Sarah Johnson" },
    ],
    reviews: [
      {
        id: 1,
        username: "FitnessFanatic",
        rating: 5,
        date: "2023-04-15",
        comment: "Incredible workout! John really pushes you to your limit but in a motivating way. I've seen great results after just a few weeks of attending this class."
      },
      {
        id: 2,
        username: "GymNewbie",
        rating: 4,
        date: "2023-03-22",
        comment: "As someone new to HIIT, I was intimidated at first but John offers great modifications. Very challenging but rewarding!"
      },
      {
        id: 3,
        username: "HealthyLifestyle",
        rating: 5,
        date: "2023-02-10",
        comment: "This class is exactly what I needed to break through my fitness plateau. High energy, great music, and effective workouts."
      },
    ],
    relatedCourses: [
      {
        id: 2,
        title: "Strength Fundamentals",
        image: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        category: "Strength",
        price: 20,
        oldPrice: 30,
        rating: 4.5,
        reviews: 18
      },
      {
        id: 3,
        title: "Cardio Kickboxing",
        image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        category: "Cardio",
        price: 18,
        oldPrice: 28,
        rating: 4.8,
        reviews: 32
      },
      {
        id: 4,
        title: "Tabata Training",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        category: "HIIT",
        price: 22,
        oldPrice: 32,
        rating: 4.6,
        reviews: 25
      },
    ],
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(
          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        );
      } else if (i - rating < 1) {
        // For half stars, not implemented here but could be added
        stars.push(
          <Star key={i} className="h-4 w-4 text-gray-300" />
        );
      } else {
        stars.push(
          <Star key={i} className="h-4 w-4 text-gray-300" />
        );
      }
    }
    return stars;
  };

  return (
    <>
      <section className="bg-gray-100 py-12">
        {/* Hero Section */}
        <div className="bg-blue-700 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center text-white">
              <span className="inline-block bg-white/20 text-white text-sm font-medium px-3 py-1 rounded-full mb-4">
                {course.category}
              </span>
              <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
              <div className="flex items-center justify-center space-x-1 text-yellow-400 mb-4">
                {renderStars(course.avgRating)}
                <span className="ml-2 text-white">
                  ({course.avgRating}) • {course.totalReviews} reviews
                </span>
              </div>
              <p className="text-lg max-w-2xl mx-auto">
                Instructor: {course.instructor} • Level: {course.level}
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 mt-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Course Image and Info Section */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-lg shadow p-4">
                <div className="relative mb-4">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <span className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs">
                    Sale
                  </span>
                </div>

                {/* Pricing */}
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <span className="text-2xl font-bold text-gray-800">
                      ${course.price}
                    </span>
                    <span className="text-gray-500 line-through ml-2">
                      ${course.oldPrice}
                    </span>
                  </div>
                  <span className="text-sm bg-green-100 text-green-800 rounded-full px-3 py-1">Per class</span>
                </div>

                {/* Course Info */}
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

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button className="w-full bg-blue-700 hover:bg-blue-800">
                    Book a Class
                  </button>
                  <button variant="outline" className="w-full">
                    Add to Favorites
                  </button>
                </div>

                {/* Promotional Box */}
                <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-700 mb-2">Get More For Less</h4>
                  <p className="text-sm text-gray-700 mb-3">
                    Purchase a membership and save up to 30% on all classes.
                  </p>
                  <Link to="/pricing">
                    <button variant="link" className="p-0 h-auto text-blue-700">
                      View Membership Plans →
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Main Content Section */}
            <div className="md:col-span-3">
              {/* Tabs */}
              <div className="mb-6 border-b border-gray-200">
                <div className="flex space-x-8">
                  <button
                    onClick={() => setActiveTab('description')}
                    className={`pb-4 text-sm font-medium ${
                      activeTab === 'description'
                        ? 'border-b-2 border-blue-700 text-blue-700'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Description
                  </button>
                  <button
                    onClick={() => setActiveTab('schedule')}
                    className={`pb-4 text-sm font-medium ${
                      activeTab === 'schedule'
                        ? 'border-b-2 border-blue-700 text-blue-700'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Schedule
                  </button>
                  <button
                    onClick={() => setActiveTab('reviews')}
                    className={`pb-4 text-sm font-medium ${
                      activeTab === 'reviews'
                        ? 'border-b-2 border-blue-700 text-blue-700'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Reviews ({course.reviews.length})
                  </button>
                </div>
              </div>

              {/* Tab Content */}
              <div className="mb-10">
                {/* Description Tab */}
                {activeTab === 'description' && (
                  <div className="animate-fade-in">
                    <h2 className="text-2xl font-bold mb-4">About This Course</h2>
                    <div 
                      className="prose max-w-none text-gray-700 mb-8"
                      dangerouslySetInnerHTML={{ __html: course.longDescription }}
                    />
                    
                    {/* Equipment Needed */}
                    <h3 className="text-xl font-bold mb-3">Equipment Needed</h3>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {course.equipment.map((item, index) => (
                        <span 
                          key={index} 
                          className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full"
                        >
                          <Dumbbell className="h-4 w-4 mr-1 text-gray-500" />
                          {item}
                        </span>
                      ))}
                    </div>
                    
                    {/* Instructor Bio */}
                    <h3 className="text-xl font-bold mb-3">About the Instructor</h3>
                    <div className="flex items-start space-x-4 mb-8">
                      <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold">
                        {course.instructor.split(' ').map(name => name[0]).join('')}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold">{course.instructor}</h4>
                        <p className="text-gray-700">{course.instructorBio}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Schedule Tab */}
                {activeTab === 'schedule' && (
                  <div className="animate-fade-in">
                    <h2 className="text-2xl font-bold mb-6">Class Schedule</h2>
                    <div className="grid gap-4">
                      {course.schedules.map((schedule, index) => (
                        <div 
                          key={index} 
                          className="flex flex-col md:flex-row md:items-center justify-between p-4 border border-gray-200 rounded-lg hover:shadow-sm transition-shadow bg-white"
                        >
                          <div className="flex items-center mb-3 md:mb-0">
                            <Calendar className="h-5 w-5 text-blue-700 mr-2" />
                            <span className="font-medium">{schedule.day}</span>
                          </div>
                          <div className="flex items-center mb-3 md:mb-0">
                            <Clock className="h-5 w-5 text-gray-500 mr-2" />
                            <span>{schedule.time}</span>
                          </div>
                          <div className="flex items-center mb-3 md:mb-0">
                            <Users className="h-5 w-5 text-gray-500 mr-2" />
                            <span>With {schedule.instructor}</span>
                          </div>
                          <button className="bg-blue-700 hover:bg-blue-800">Book Now</button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Reviews Tab */}
                {activeTab === 'reviews' && (
                  <div className="animate-fade-in">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-2xl font-bold">Student Reviews</h2>
                      <button className="bg-blue-700 hover:bg-blue-800">Write a Review</button>
                    </div>
                    
                    <div className="space-y-6 mb-8">
                      {course.reviews.map((review) => (
                        <div key={review.id} className="border-b border-gray-200 pb-6 bg-white p-4 rounded-lg">
                          <div className="flex justify-between mb-2">
                            <h4 className="font-semibold">{review.username}</h4>
                            <span className="text-gray-500 text-sm">
                              {new Date(review.date).toLocaleDateString()}
                            </span>
                          </div>
                          <div className="flex mb-2">
                            {renderStars(review.rating)}
                          </div>
                          <p className="text-gray-700">{review.comment}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Related Courses */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Similar Courses</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {course.relatedCourses.map((relatedCourse) => (
                    <Link
                      key={relatedCourse.id}
                      to={`/courses/${relatedCourse.id}`}
                      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                    >
                      <div className="relative">
                        <img 
                          src={relatedCourse.image} 
                          alt={relatedCourse.title} 
                          className="w-full h-48 object-cover" 
                        />
                        <span className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs">
                          Sale
                        </span>
                        <div className="absolute top-2 left-2 bg-white py-1 px-2 rounded-full text-xs">
                          {relatedCourse.category}
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-bold text-gray-800 line-clamp-2 mb-2">
                          {relatedCourse.title}
                        </h3>
                        <div className="flex items-center justify-between">
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
                            <span className="text-gray-500">
                              ({relatedCourse.reviews})
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseDetail;