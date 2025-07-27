import React from "react";
import { Link } from "react-router-dom"; 
import Button from "../ui/Button";

const CTA = () => {
  return (
    <section className="relative py-20 text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] 
        bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-blue-700 opacity-80"></div> {/* Blue overlay with opacity */}
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Start Your Fitness Journey?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join FitHub today and get access to all our facilities, expert
          trainers, and a supportive community.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/register">
            <Button
              size="lg"
              variant="default"
              className=" text-blue-700 hover:bg-blue-100 border-white"
            >
              Join Now
            </Button>
          </Link>
          <Link to="/contact">
            <Button
              size="lg"
              variant="outline"
              className=" border-white hover:bg-white hover:text-blue-700"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;