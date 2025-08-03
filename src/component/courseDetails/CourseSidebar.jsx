import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, Users, Dumbbell } from "lucide-react";

const CourseSidebar = ({ course }) => (
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
      <h4 className="font-semibold text-blue-700 mb-2">Get More For Less</h4>
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
);

export default CourseSidebar;
