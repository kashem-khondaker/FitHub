import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const RelatedCourses = ({ courses }) => (
  <div>
    <h2 className="text-2xl font-bold mb-6 text-gray-900">Similar Courses</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {courses.map((course) => (
        <Link key={course.id} to={`/courses/${course.id}`} className="group">
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-lg shadow-md overflow-hidden group-hover:shadow-lg transition-all"
          >
            <div className="relative h-48">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs">
                Sale
              </span>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                {course.title}
              </h3>
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-gray-700 font-bold">
                    ${course.price}
                  </span>
                  <span className="text-gray-500 line-through ml-2">
                    ${course.oldPrice}
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-yellow-500 mr-1">{course.rating}</span>
                  <span className="text-gray-500 text-sm">
                    ({course.reviews})
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </Link>
      ))}
    </div>
  </div>
);

export default RelatedCourses;
