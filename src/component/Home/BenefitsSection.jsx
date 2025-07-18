import React from "react";
import { Dumbbell, UserCheck, HeartPulse, Users } from "lucide-react";

const benefits = [
  {
    icon: <Dumbbell className="w-8 h-8 text-blue-700" />,
    title: "Modern Equipment",
    description: "Top-quality machines and tools to maximize your performance.",
  },
  {
    icon: <UserCheck className="w-8 h-8 text-blue-700" />,
    title: "Expert Trainers",
    description: "Certified and experienced trainers to guide you every step.",
  },
  {
    icon: <HeartPulse className="w-8 h-8 text-blue-700" />,
    title: "Personalized Plans",
    description: "Custom workout and diet plans tailored to your goals.",
  },
  {
    icon: <Users className="w-8 h-8 text-blue-700" />,
    title: "Supportive Community",
    description: "Join a group of like-minded people and stay motivated.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center text-gray-900 max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Why Choose FitHub
          </h2>
          <p className="text-gray-600 ">
            We provide everything you need to achieve your fitness goals in one place
          </p>
        </div>

        {/* Benefit Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl hover:border-blue-100 transition duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-50 p-4 rounded-full shadow-sm mb-4 transition group-hover:scale-105">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
