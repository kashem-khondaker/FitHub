import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { RiMore2Line } from "react-icons/ri";
import { FaRegPenToSquare } from "react-icons/fa6";
import { BsTrash } from "react-icons/bs";
import StarRating from "./StarRating";

const ReviewItem = ({
  review,
  index,
  activeMenu,
  setActiveMenu,
  handleEdit,
  handleDelete,
}) => {
  return (
    <motion.div
      key={review.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
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
                setActiveMenu(activeMenu === review.id ? null : review.id)
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
  );
};

const ReviewList = ({
  reviews,
  isLoading,
  pagination,
  activeMenu,
  setActiveMenu,
  handleEdit,
  handleDelete,
  handlePrevious,
  handleNext,
  fetchReviews,
  classesId,
}) => {
  return (
    <>
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
            <ReviewItem
              key={review.id}
              review={review}
              index={i}
              activeMenu={activeMenu}
              setActiveMenu={setActiveMenu}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
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
    </>
  );
};

export default ReviewList;
