import { useState, useCallback } from "react";
import authApiClient from "../services/AuthApiClient"; // শুধু authApiClient import করুন

export const useReviews = (classesId) => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isMutating, setIsMutating] = useState(false);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({
    next: null,
    previous: null,
    current: 1,
    totalPages: 1,
  });

  // Fetch reviews from backend
  const fetchReviews = useCallback(
    async (url = `/fitness_classes/${classesId}/feedbacks/`) => {
      setIsLoading(true);
      setError(null);
      try {
        const res = await authApiClient.get(url);
        console.log(res.data);

        const pageParam = new URL(url, window.location.origin).searchParams.get(
          "page"
        );
        const currentPage = pageParam ? Number(pageParam) : 1;

        setPagination({
          next: res.data.next,
          previous: res.data.previous,
          current: currentPage,
          totalPages:
            res.data.results && res.data.results.length > 0
              ? Math.ceil(res.data.count / res.data.results.length)
              : 1,
        });

        setReviews(res.data?.results || []);
      } catch (err) {
        setError(
          err.response?.data || err.message || "Failed to fetch reviews"
        );
        console.error("Fetch reviews error:", err);
      } finally {
        setIsLoading(false);
      }
    },
    [classesId]
  );

  const handleNext = () => {
    if (pagination.next) {
      fetchReviews(pagination.next);
    }
  };

  const handlePrevious = () => {
    if (pagination.previous) {
      fetchReviews(pagination.previous);
    }
  };

  // Format data for backend
  const formatReviewData = (data) => ({
    fitness_class: classesId,
    comment: data.text,
    rating: Number(data.rating),
  });

  // Create new review
  const createReview = useCallback(
    async (reviewData) => {
      setIsMutating(true);
      setError(null);
      try {
        const formattedData = formatReviewData(reviewData);
        const res = await authApiClient.post(
          `/fitness_classes/${classesId}/feedbacks/`,
          formattedData
        );

        console.log(res.data);
        setReviews((prev) => [res.data, ...prev]);
        return res.data;
      } catch (err) {
        const errorMsg =
          err.response?.data || err.message || "Failed to create review";
        setError(errorMsg);
        console.error("Create review error:", err);
        throw errorMsg;
      } finally {
        setIsMutating(false);
      }
    },
    [classesId]
  );

  // Update existing review
  const updateReview = useCallback(
    async (reviewId, updatedData) => {
      setIsMutating(true);
      setError(null);
      try {
        const formattedData = formatReviewData(updatedData);
        const res = await authApiClient.patch(
          `/fitness_classes/${classesId}/feedbacks/${reviewId}/`,
          formattedData
        );
        setReviews((prev) =>
          prev.map((review) => (review.id === reviewId ? res.data : review))
        );
        return res.data;
      } catch (err) {
        const errorMsg =
          err.response?.data || err.message || "Failed to update review";
        setError(errorMsg);
        console.error("Update review error:", err);
        throw errorMsg;
      } finally {
        setIsMutating(false);
      }
    },
    [classesId]
  );

  // Delete review
  const deleteReview = useCallback(
    async (reviewId) => {
      setIsMutating(true);
      setError(null);
      try {
        await authApiClient.delete(
          `/fitness_classes/${classesId}/feedbacks/${reviewId}/`
        );
        setReviews((prev) => prev.filter((review) => review.id !== reviewId));
      } catch (err) {
        const errorMsg =
          err.response?.data || err.message || "Failed to delete review";
        setError(errorMsg);
        console.error("Delete review error:", err);
        throw errorMsg;
      } finally {
        setIsMutating(false);
      }
    },
    [classesId]
  );

  return {
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
  };
};
