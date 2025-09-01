
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

export default StarRating;
