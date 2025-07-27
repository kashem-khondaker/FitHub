import { useState } from "react";
import Button from "../ui/Button";

const PricingSection = () => {
  const [activeTab, setActiveTab] = useState("monthly");

  const plans = {
    monthly: [
      {
        title: "Basic",
        price: 29,
        features: [
          "Access to gym area",
          "1 Training program",
          "Free fitness consultation",
          "24/7 access",
        ],
        isPopular: false,
      },
      {
        title: "Standard",
        price: 49,
        features: [
          "Access to gym area",
          "3 Training programs",
          "Free fitness consultation",
          "Personal trainer (1 session)",
          "24/7 access",
        ],
        isPopular: true,
      },
      {
        title: "Premium",
        price: 79,
        features: [
          "Access to gym area",
          "All Training programs",
          "Free fitness consultation",
          "Personal trainer (3 sessions)",
          "Nutrition planning",
          "24/7 access",
        ],
        isPopular: false,
      },
    ],
    yearly: [
      {
        title: "Basic",
        price: 299,
        features: [
          "Access to gym area",
          "1 Training program",
          "Free fitness consultation",
          "24/7 access",
        ],
        isPopular: false,
      },
      {
        title: "Standard",
        price: 499,
        features: [
          "Access to gym area",
          "3 Training programs",
          "Free fitness consultation",
          "Personal trainer (1 session/month)",
          "24/7 access",
        ],
        isPopular: true,
      },
      {
        title: "Premium",
        price: 799,
        features: [
          "Access to gym area",
          "All Training programs",
          "Free fitness consultation",
          "Personal trainer (3 sessions/month)",
          "Nutrition planning",
          "24/7 access",
        ],
        isPopular: false,
      },
    ],
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Membership Plans</h2>
          <p className="text-gray-600">
            Choose the perfect membership plan for your fitness journey
          </p>

          {/* Toggle Buttons */}
          <div className="flex items-center justify-center mt-8 space-x-3">
            <button
              className={`px-4 py-2 rounded-md ${
                activeTab === "monthly" ? "bg-blue-700 text-white" : "bg-gray-100"
              }`}
              onClick={() => setActiveTab("monthly")}
            >
              Monthly
            </button>
            <button
              className={`px-4 py-2 rounded-md ${
                activeTab === "yearly" ? "bg-blue-700 text-white" : "bg-gray-100"
              }`}
              onClick={() => setActiveTab("yearly")}
            >
              Yearly <span className="text-xs">(Save 15%)</span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans[activeTab].map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 h-full flex flex-col justify-between ${
                plan.isPopular ? "transform hover:-translate-y-2" : "hover:-translate-y-1"
              } animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "both" }}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0 bg-secondary text-white px-4 py-1 text-sm font-medium">
                  Most Popular
                </div>
              )}
              <div className="p-8 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
                  <div className="flex items-baseline mb-6">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-gray-600 ml-2">
                      /{activeTab === "monthly" ? "month" : "year"}
                    </span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <svg
                          className="w-5 h-5 text-green-500 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Fixed-position button at bottom of card */}
                <Button
                  className={`w-full mt-auto ${
                    plan.isPopular ? "bg-secondary hover:bg-secondary/90" : ""
                  }`}
                >
                  Choose Plan
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
