// src/components/course/CourseReviews.jsx
import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams } from "react-router";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useReviews } from "../../hooks/useReviews";
import { RiMore2Line } from "react-icons/ri";
import { div } from "framer-motion/client";
import { FaRegPenToSquare } from "react-icons/fa6";
import { BsTrash } from "react-icons/bs";

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

const CourseReviews = () => {
  const { classesId } = useParams();
  const [activeMenu, setActiveMenu] = useState(null);
  const [editingReview, setEditingReview] = useState(null);
  const {
    reviews,
    isLoading,
    isMutating,
    error,
    pagination,
    fetchReviews,
    handleNext,
    handlePrevious,
    createReview,
    updateReview,
    deleteReview,
  } = useReviews(classesId);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ text: "", rating: 0 });

  useEffect(() => {
    fetchReviews();
  }, [fetchReviews]);

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.rating < 1) return;
    await createReview(formData);
    setFormData({ text: "", rating: 0 });
    setShowForm(false);
    // Refresh reviews after submission
    fetchReviews();
  };

  // Handle Edit functionality
  const handleEdit = (review) => {
    try {
      setEditingReview(review);
      updateReview(review);
      setFormData({
        text: review.comment || review.text,
        rating: review.rating,
      });
      setShowForm(true);
      setActiveMenu(null);
    } catch (error) {
      console.log("Update review error: ", error);
    }
  };

  // Handle delete Functionality
  const handleDelete = async (reviewId) => {
    if (window.confirm("Are you sure you want to delete this review?")) {
      try {
        await deleteReview(reviewId);
        fetchReviews();
      } catch (error) {
        console.error("Delete error:", error);
      }
    }
    setActiveMenu(null);
  };

  // Calculate average rating
  const averageRating =
    reviews.length > 0
      ? (
          reviews.reduce((sum, review) => sum + review.rating, 0) /
          reviews.length
        ).toFixed(1)
      : 0;
  const totalReviews = reviews.length;
  // Count ratings
  const ratingCounts = {
    5: reviews.filter((r) => r.rating === 5).length,
    4: reviews.filter((r) => r.rating === 4).length,
    3: reviews.filter((r) => r.rating === 3).length,
    2: reviews.filter((r) => r.rating === 2).length,
    1: reviews.filter((r) => r.rating === 1).length,
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header with Rating Summary */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Student Reviews
          </h2>
          <div className="flex items-center gap-4">
            <div className="text-4xl font-bold text-gray-900">
              {averageRating}
            </div>
            <div>
              <StarRating rating={Math.round(averageRating)} readonly />
              <p className="text-gray-600 text-sm mt-1">
                {totalReviews} review{reviews.length !== 1 ? "s" : ""}
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={() => setShowForm(true)}
          className="rounded-full px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold shadow-md hover:shadow-lg transition-all"
        >
          Write a Review
        </button>
      </div>

      {/*Rating Distribution Section */}
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 className="text-lg font-semibold mb-4">Rating Distribution</h3>
        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((rating) => {
            const percentage =
              totalReviews > 0
                ? ((ratingCounts[rating] / totalReviews) * 100).toFixed(0)
                : 0;

            return (
              <div key={rating} className="flex items-center gap-3">
                <span className="text-sm font-medium w-4">{rating}</span>
                <Star size={16} className="text-yellow-400 fill-yellow-400" />
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-yellow-400 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <span className="text-sm text-gray-600 w-12 text-right">
                  {ratingCounts[rating]} ({percentage}%)
                </span>
              </div>
            );
          })}
        </div>
      </div>
      {/* Loader */}
      {isLoading && (
        <div className="flex justify-center items-center py-12">
          <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      {/* Review Form Modal */}
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
                <h2 className="text-xl font-bold">Write Your Review</h2>
                <button
                  onClick={() => setShowForm(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>

              {error && (
                <div className="mb-4 p-3 bg-red-100 text-red-700 rounded text-sm">
                  {typeof error === "object" ? JSON.stringify(error) : error}
                </div>
              )}

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
                        Submitting...
                      </div>
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

      {/* Reviews Count and Pagination Info */}
      {reviews.length > 0 && (
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">
            Showing {reviews.length} review{reviews.length !== 1 ? "s" : ""}
          </p>

          {/* Pagination Controls */}
          <div className="flex items-center gap-4">
            <button
              onClick={handlePrevious}
              disabled={!pagination.previous}
              className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft size={20} />
            </button>

            <span className="text-sm font-medium text-gray-700">
              Page {pagination.current} of {pagination.totalPages}
            </span>

            <button
              onClick={handleNext}
              disabled={!pagination.next}
              className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      )}
      {/* Review List */}
      <div className="space-y-6">
        {reviews.length === 0 && !isLoading ? (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🌟</div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No reviews yet
            </h3>
            <p className="text-gray-500">
              Be the first to share your experience!
            </p>
          </div>
        ) : (
          reviews.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="border border-gray-200 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow relative"
            >
              {/* 3-dot Menu and Actions */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg">
                    {review.user?.name || review.name || "Anonymous"}
                  </h4>
                  <div className="flex items-center gap-2 mt-1">
                    <StarRating rating={review.rating} readonly />
                    <span className="text-yellow-400 font-medium">
                      {review.rating}.0
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {/* Date Display - Always visible */}
                  <span className="text-gray-500 text-sm">
                    {new Date(review.created_at).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>

                  {/* 3-dot Menu Button */}
                  <div className="relative">
                    <button
                      onClick={() =>
                        setActiveMenu(
                          activeMenu === review.id ? null : review.id
                        )
                      }
                      className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <RiMore2Line size={18} className="text-gray-500" />
                    </button>

                    {/* Edit/Delete Icons - Show when active */}
                    {activeMenu === review.id && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="absolute right-0 top-8 bg-white border border-gray-200 rounded-lg shadow-lg p-2 flex gap-2 z-10"
                      >
                        {/* Edit Button */}
                        <button
                          onClick={() => handleEdit(review)}
                          className="p-2 rounded-lg hover:bg-blue-50 transition-colors text-blue-600"
                          title="Edit review"
                        >
                          <FaRegPenToSquare size={16} />
                        </button>

                        {/* Delete Button */}
                        <button
                          onClick={() => handleDelete(review.id)}
                          className="p-2 rounded-lg hover:bg-red-50 transition-colors text-red-600"
                          title="Delete review"
                        >
                          <BsTrash size={16} />
                        </button>
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                {review.comment || review.text}
              </p>
            </motion.div>
          ))
        )}
      </div>
      {/* Bottom Pagination */}
      {reviews.length > 0 && (
        <div className="flex justify-center mt-8 pt-6 border-t border-gray-200">
          <div className="flex items-center gap-4">
            <button
              onClick={handlePrevious}
              disabled={!pagination.previous}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft size={18} />
              Previous
            </button>

            <div className="flex items-center gap-2">
              {Array.from(
                { length: Math.min(5, pagination.totalPages) },
                (_, i) => {
                  const page = i + 1;
                  return (
                    <button
                      key={page}
                      onClick={() =>
                        fetchReviews(
                          `/fitness_classes/${classesId}/feedbacks/?page=${page}`
                        )
                      }
                      className={`w-10 h-10 rounded-lg border transition-colors ${
                        pagination.current === page
                          ? "bg-blue-600 text-white border-blue-600"
                          : "border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      {page}
                    </button>
                  );
                }
              )}

              {pagination.totalPages > 5 && <span className="px-2">...</span>}
            </div>

            <button
              onClick={handleNext}
              disabled={!pagination.next}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Next
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseReviews;
