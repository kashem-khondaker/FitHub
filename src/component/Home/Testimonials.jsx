import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import ApiClient from "../../services/ApiClient";

const StarRating = ({ count }) => (
  <div className="flex mt-4 text-yellow-400">
    {Array.from({ length: count }).map((_, idx) => (
      <Star key={idx} className="w-5 h-5 fill-yellow-400" />
    ))}
  </div>
);

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonial = async () => {
      try {
        const response = await ApiClient.get(`/feedbacks/`);
        setTestimonials(response.data.results || []); 
      } catch (error) {
        console.error("Failed to fetch testimonials:", error);
      }
    };

    fetchTestimonial();
  }, []);

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

        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-white h-full border border-blue-200 rounded-2xl shadow drop-shadow-gray-600  hover:shadow-lg transition-all p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full  border-1 border-cyan-400 object-cover bg-gray-200"
                    />
                    <div>
                      <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.achievement}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm line-clamp-5">{testimonial.text}</p>
                </div>
                <StarRating count={testimonial.rating} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
