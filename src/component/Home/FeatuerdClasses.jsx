import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Button from "../ui/Button";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useRef, useState } from "react";
import ApiClient from "../../services/ApiClient";

// const classes = [
//   {
//     title: "HIIT Training",
//     description:
//       "High-intensity interval training designed to burn fat and improve fitness quickly.",
//     days: "Mon, Wed, Fri",
//     image:
//       "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
//     link: "/courses/hiit",
//   },
//   {
//     title: "HIIT Training",
//     description:
//       "High-intensity interval training designed to burn fat and improve fitness quickly.",
//     days: "Mon, Wed, Fri",
//     image:
//       "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
//     link: "/courses/hiit",
//   },
//   {
//     title: "HIIT Training",
//     description:
//       "High-intensity interval training designed to burn fat and improve fitness quickly.",
//     days: "Mon, Wed, Fri",
//     image:
//       "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
//     link: "/courses/hiit",
//   },
//   {
//     title: "Yoga Flow",
//     description:
//       "Improve flexibility, build strength, and find inner peace with our yoga classes.",
//     days: "Tue, Thu, Sat",
//     image:
//       "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
//     link: "/courses/yoga",
//   },
//   {
//     title: "Strength Training",
//     description:
//       "Build muscle, increase strength, and improve overall body composition.",
//     days: "Mon, Wed, Sat",
//     image:
//       "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
//     link: "/courses/strength",
//   },
// ];

export default function FeaturedClassesSwiper() {
  const [classes, setClasses] = useState([]);
  const hasFetched = useRef(false);
  const loadClasses = async() => {
    try {
      const response = await ApiClient.get(`/fitness_classes/`)
      console.log(response.data?.results);
      setClasses(response.data?.results);
      hasFetched.current = true;
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (!hasFetched.current) {
      hasFetched.current = true;
      loadClasses()
    }
  } ,[])

  
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 ">
        <div className="text-center max-w-2xl mx-auto mb-12 ">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Featured Classes
          </h2>
          <p className="text-gray-600">
            Join our most popular fitness classes led by expert instructors
          </p>
        </div>

        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {classes.map((cls, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full">
                <div className="h-48 bg-gray-200">
                  <img
                    src={cls.image}
                    alt={cls.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{cls.title}</h3>
                  <p className="text-gray-600 mb-4">{cls.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                      {cls.days}
                    </span>
                    <Link to={cls.link}>
                      <button className="text-primary hover:underline">
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center mt-10">
          <Link to="/courses">
            <Button variant="outline">View All Classes</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
