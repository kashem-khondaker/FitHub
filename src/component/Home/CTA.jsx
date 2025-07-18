import React from "react";
import { Link } from "react-router-dom";
import Button from "../ui/Button";

const CTA = () => {
  return (
    <section className="py-20 bg-blue-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Start Your Fitness Journey?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join FitHub today and get access to all our facilities, expert
          trainers, and a supportive community.
        </p>
        <Link to="/register">
          <Button size="lg" className="border-1 text-blue-500 hover:bg-blue-400">
            Join Now
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CTA;
