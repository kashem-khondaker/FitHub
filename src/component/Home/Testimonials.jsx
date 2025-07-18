import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Emily Stone",
    image: "https://c.stocksy.com/a/lj2M00/z9/5253741.jpg",
    achievement: "Lost 45 lbs in 6 months",
    text: "FitHub transformed my approach to fitness. The trainers are knowledgeable and supportive, and the community keeps me motivated. I've lost 30 pounds and gained confidence!",
    rating: 5,
  },
  {
    name: "James Lee",
    image:
      "https://t4.ftcdn.net/jpg/00/99/82/15/360_F_99821575_nVEHTBXzUnTcLIKN6yOymAWAnFwEybGb.jpg",
    achievement: "Gained muscle & confidence",
    text: "The structured strength program helped me bulk up the right way. I feel healthier and more confident now.",
    rating: 5,
  },
  {
    name: "Priya Kumar",
    image: "/images/success3.jpg",
    achievement: "Balanced fitness and family",
    text: "Being a mom, I needed flexibility. FitHub’s virtual options let me stay fit from home without sacrificing time with family.",
    rating: 5,
  },
];

const StarRating = ({ count }) => {
  return (
    <div className="flex mt-4 text-yellow-400">
      {Array.from({ length: count }).map((_, idx) => (
        <Star key={idx} className="w-5 h-5 fill-yellow-400" />
      ))}
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          
          <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-6">
            Real Transformations. Real Results.
          </h2>
          <p className="text-gray-700">
            See how our members have changed their lives with FitHub.
          </p>
          <p className="text-primary font-semibold mt-4">SUCCESS STORIES</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover bg-gray-200"
                />
                <div>
                  <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.achievement}</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm">{testimonial.text}</p>
              <StarRating count={testimonial.rating} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
