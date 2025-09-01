// src/components/course/CourseReviews.jsx
import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams } from "react-router";
import { useReviews } from "../../hooks/useReviews";
import RatingSummary from "./RatingSummary";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";

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
    
    if (editingReview) {
      // If we're editing an existing review
      await updateReview(editingReview.id, formData);
    } else {
      // If we're creating a new review
      await createReview(formData);
    }
    
    setFormData({ text: "", rating: 0 });
    setShowForm(false);
    setEditingReview(null);
    // Refresh reviews after submission
    fetchReviews();
  };

  // Handle Edit functionality
  const handleEdit = (review) => {
    try {
      setEditingReview(review);
      setFormData({
        text: review.comment || review.text,
        rating: review.rating,
      });
      setShowForm(true);
      setActiveMenu(null);
    } catch (error) {
      console.log("Edit review error: ", error);
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

  // Reset form when closing
  const handleCloseForm = () => {
    setShowForm(false);
    setEditingReview(null);
    setFormData({ text: "", rating: 0 });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <RatingSummary 
        reviews={reviews} 
        onWriteReview={() => setShowForm(true)} 
      />

      <ReviewForm
        showForm={showForm}
        setShowForm={handleCloseForm}
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        isMutating={isMutating}
        editingReview={editingReview}
      />

      {isLoading && (
        <div className="flex justify-center items-center py-12">
          <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      <ReviewList
        reviews={reviews}
        isLoading={isLoading}
        pagination={pagination}
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        handlePrevious={handlePrevious}
        handleNext={handleNext}
        fetchReviews={fetchReviews}
        classesId={classesId}
      />
    </div>
  );
};

export default CourseReviews;