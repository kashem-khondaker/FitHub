import React from "react";

const FacilitiesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold">OUR FACILITIES</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
            State-of-the-Art Equipment
          </h2>
          <p className="text-gray-700">
            Our gym is equipped with the latest fitness technology and
            specialized areas for every type of workout.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="relative h-80 rounded-lg overflow-hidden group animate-fade-in">
            <img
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Cardio Area"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Cardio Zone
                </h3>
                <p className="text-gray-200">
                  Latest treadmills, ellipticals, and stationary bikes with
                  integrated entertainment systems.
                </p>
              </div>
            </div>
          </div>

          <div
            className="relative h-80 rounded-lg overflow-hidden group animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <img
              src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Strength Area"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Strength Training
                </h3>
                <p className="text-gray-200">
                  Free weights, machines, and functional training equipment for
                  all strength levels.
                </p>
              </div>
            </div>
          </div>

          <div
            className="relative h-80 rounded-lg overflow-hidden group animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <img
              src="https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Yoga Studio"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Group Fitness Studios
                </h3>
                <p className="text-gray-200">
                  Dedicated spaces for yoga, pilates, and other group fitness
                  classes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
