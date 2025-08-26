import React, { useState } from "react";
import { useParams } from "react-router";
import { useReviews } from "../../hooks/useReviews";
import { motion } from "framer-motion";

const CourseReviewWrite = () => {
  const { classesId } = useParams();
  const {
    reviews,
    isLoading,
    isMutating,
    error,
    fetchReviews,
    createReview,
    updateReview,
    deleteReview,
  } = useReviews(classesId);
  // const { createReview, isMutating, error } = useReviews(classesId);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    rating: 0,
    text: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "rating" ? parseInt(value) || 0 : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createReview(formData);
      setShowForm(false);
      setFormData({ rating: 0, text: "" }); // Reset form
      // You can add a success notification here
    } catch {
      // Error is already handled in the hook
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShowForm(true)}
        disabled={isMutating}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        {isMutating ? "Submitting..." : "Write a Review"}
      </button>

      {showForm && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="bg-white p-6 rounded-lg w-full max-w-md mx-4"
          >
            <h2 className="text-xl font-bold mb-4">Write Your Review</h2>

            {error && (
              <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">
                {typeof error === "object"
                  ? error.non_field_errors
                    ? error.non_field_errors[0]
                    : Object.values(error)[0]
                  : error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Rating (1-5)</label>
                <input
                  type="number"
                  name="rating"
                  min="1"
                  max="5"
                  value={formData.rating}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Review</label>
                <textarea
                  name="text"
                  value={formData.text}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded min-h-[100px]"
                  required
                />
              </div>

              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 border rounded-md hover:bg-gray-100 transition-colors"
                  disabled={isMutating}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isMutating}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:bg-blue-400"
                >
                  {isMutating ? "Submitting..." : "Submit Review"}
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default CourseReviewWrite;
