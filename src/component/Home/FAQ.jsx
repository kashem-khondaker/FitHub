import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How do I become a member of FitPilotPro?",
    answer:
      "Becoming a member of FitPilotPro is quick and easy. Simply click on the 'Join Now' button on the homepage, fill out your personal details, choose your preferred membership plan (monthly/yearly), and proceed with the payment. After registration, you'll receive access to your personalized dashboard to start your fitness journey right away.",
  },
  {
    question: "Do you offer personal training sessions?",
    answer:
      "Yes, we offer one-on-one personal training sessions with certified fitness experts. You can book a session via your member dashboard by choosing your preferred trainer, schedule, and goal (like weight loss, muscle gain, or cardio improvement). These sessions can be conducted at the gym or virtually, depending on availability.",
  },
  {
    question: "What is the cancellation policy?",
    answer:
      "We believe in flexibility. If you wish to cancel your membership, you can do it anytime from your account settings. There are no cancellation charges if done before the next billing cycle. Any unused personal training sessions will be refunded according to our refund policy.",
  },
  {
    question: "Are the classes suitable for beginners?",
    answer:
      "Absolutely. Our fitness classes are designed to accommodate all skill levels, including beginners. Each class is led by a professional trainer who provides step-by-step instructions, modifications for all exercises, and constant guidance to ensure safety and progress.",
  },
  {
    question: "Do I need to bring any equipment?",
    answer:
      "Not at all. Our gym is fully equipped with modern machines, mats, weights, and accessories. Just bring a clean towel, your water bottle, and wear comfortable workout clothes. If you're attending a virtual session, minimal equipment may be recommended, which will be communicated beforehand.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl bg-white shadow-md overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-5 text-left text-lg font-semibold text-gray-800 hover:bg-gray-100 transition"
              >
                <span className="w-11/12">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-700 text-base leading-relaxed animate-fadeIn">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
