import { Star } from "lucide-react";

const StarRating = ({ rating, readonly = false }) => {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((value) => (
        <Star
          key={value}
          size={28}
          className={`transition-colors ${
            value <= rating
              ? "text-yellow-400 fill-yellow-400"
              : "text-gray-300"
          } cursor-default`}
        />
      ))}
    </div>
  );
};

const RatingSummary = ({ reviews, onWriteReview }) => {
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
    <>
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
          onClick={onWriteReview}
          className="rounded-full px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold shadow-md hover:shadow-lg transition-all"
        >
          Write a Review
        </button>
      </div>

      {/* Rating Distribution Section */}
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
    </>
  );
};

export default RatingSummary;
