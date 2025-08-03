import { motion } from "framer-motion";

const CourseHero = ({ course, renderStars }) => (
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
);

export default CourseHero;
