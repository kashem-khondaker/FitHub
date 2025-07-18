import React from "react";
import {
  BookOpen,
  Users,
  Award,
  Clock,
  Star,
  ChevronRight,
} from "lucide-react";

const Features = () => {
  return (
    <section id="features" className="py-16 bg-gray-900 text-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12 opacity-100 translate-y-0 transition-all duration-1000">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="text-primary">EduLearn</span>
          </h2>
          <p className="text-gray-300 text-lg">
            We offer the best features to ensure an optimal learning experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-gray-800 p-8 rounded-xl transition-all duration-1000">
            <div className="bg-primary/20 p-3 rounded-lg w-fit mb-4">
              <BookOpen className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Quality Content</h3>
            <p className="text-gray-400">
              All courses are designed by industry experts and undergo rigorous
              quality checks.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-gray-800 p-8 rounded-xl transition-all duration-1000">
            <div className="bg-primary/20 p-3 rounded-lg w-fit mb-4">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Expert Instructors</h3>
            <p className="text-gray-400">
              Learn from professionals with real-world experience in their
              respective fields.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-gray-800 p-8 rounded-xl transition-all duration-1000">
            <div className="bg-primary/20 p-3 rounded-lg w-fit mb-4">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Certificates</h3>
            <p className="text-gray-400">
              Receive a certificate upon course completion to showcase your new
              skills.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-gray-800 p-8 rounded-xl transition-all duration-1000">
            <div className="bg-primary/20 p-3 rounded-lg w-fit mb-4">
              <Clock className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Flexible Learning</h3>
            <p className="text-gray-400">
              Study at your own pace, anytime and anywhere that suits your
              schedule.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-gray-800 p-8 rounded-xl transition-all duration-1000">
            <div className="bg-primary/20 p-3 rounded-lg w-fit mb-4">
              <Star className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Lifetime Access</h3>
            <p className="text-gray-400">
              Purchase once and access your course content for a lifetime.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-gray-800 p-8 rounded-xl transition-all duration-1000">
            <div className="bg-primary/20 p-3 rounded-lg w-fit mb-4">
              <ChevronRight className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Regular Updates</h3>
            <p className="text-gray-400">
              Course content is regularly updated to keep up with industry
              trends.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
