import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

const StarRating = ({ rating, onChange, readonly = false }) => {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((value) => (
        <Star
          key={value}
          size={28}
          onClick={() => !readonly && onChange(value)}
          className={`transition-colors ${
            value <= rating
              ? "text-yellow-400 fill-yellow-400"
              : "text-gray-300"
          } ${!readonly ? "cursor-pointer" : "cursor-default"}`}
        />
      ))}
    </div>
  );
};

const ReviewForm = ({
  showForm,
  setShowForm,
  formData,
  setFormData,
  handleSubmit,
  handleInputChange,
  isMutating,
  editingReview,
}) => {
  return (
    <AnimatePresence>
      {showForm && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/35 backdrop-blur-sm flex items-center justify-center z-50 p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white p-6 rounded-lg w-full max-w-md mx-auto shadow-xl"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">
                {editingReview ? "Edit Your Review" : "Write Your Review"}
              </h2>
              <button
                onClick={() => setShowForm(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Star Rating */}
              <div className="mb-4">
                <label className="block text-gray-700 mb-2 font-medium">
                  Rating
                </label>
                <StarRating
                  rating={formData.rating}
                  onChange={(value) =>
                    setFormData((prev) => ({ ...prev, rating: value }))
                  }
                />
              </div>

              {/* Review Text */}
              <div className="mb-6">
                <label className="block text-gray-700 mb-2 font-medium">
                  Review
                </label>
                <textarea
                  name="text"
                  value={formData.text}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg min-h-[120px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Share your experience with this course..."
                  required
                />
              </div>

              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-5 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                  disabled={isMutating}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isMutating || formData.rating === 0}
                  className="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:bg-blue-400 disabled:cursor-not-allowed"
                >
                  {isMutating ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      {editingReview ? "Updating..." : "Submitting..."}
                    </div>
                  ) : editingReview ? (
                    "Update Review"
                  ) : (
                    "Submit Review"
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ReviewForm;
