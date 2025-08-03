import React from "react";

import { motion } from "framer-motion";
import { Dumbbell } from "lucide-react";

const CourseDescription = ({ course }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.3 }}
  >
    <h2 className="text-3xl font-bold mb-6 text-gray-900">About This Course</h2>
    <div
      className="prose max-w-none text-gray-700 mb-8"
      dangerouslySetInnerHTML={{ __html: course.longDescription }}
    />

    <h3 className="text-2xl font-bold mb-4 text-gray-900">Equipment Needed</h3>
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
        <p className="text-gray-600 leading-relaxed">{course.instructorBio}</p>
      </div>
    </motion.div>
  </motion.div>
);

export default CourseDescription;
