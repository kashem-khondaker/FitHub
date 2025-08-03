import { motion } from "framer-motion";
import { Star } from "lucide-react";

const CourseReviews = ({ reviews, renderStars }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.3 }}
  >
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-3xl font-bold text-gray-900">Student Reviews</h2>
      <button className="rounded-full px-5 py-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold shadow-md hover:shadow-lg transition-all">
        Write a Review
      </button>
    </div>

    <div className="space-y-6">
      {reviews.map((review, i) => (
        <motion.div
          key={review.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="border border-gray-200 p-6 bg-white rounded-xl shadow-sm"
        >
          <div className="flex justify-between mb-3">
            <h4 className="font-semibold text-gray-900">{review.username}</h4>
            <span className="text-gray-500 text-sm">
              {new Date(review.date).toLocaleDateString()}
            </span>
          </div>
          <div className="flex mb-3">{renderStars(review.rating)}</div>
          <p className="text-gray-700">{review.comment}</p>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default CourseReviews;
