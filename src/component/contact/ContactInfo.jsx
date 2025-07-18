import React from "react";

const ContactInfo = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Location */}
          <div className="bg-white p-6 rounded-lg shadow-sm animate-fade-in">
            <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Our Location</h3>
            <p className="text-gray-600">
              123 Fitness Street
              <br />
              Gym City, GC 12345
              <br />
              United States
            </p>
          </div>

          {/* Contact Information */}
          <div
            className="bg-white p-6 rounded-lg shadow-sm animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Contact Info</h3>
            <p className="text-gray-600 mb-2">Email: info@fithub.com</p>
            <p className="text-gray-600">Phone: (123) 456-7890</p>
          </div>

          {/* Business Hours */}
          <div
            className="bg-white p-6 rounded-lg shadow-sm animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Business Hours</h3>
            <p className="text-gray-600 mb-1">
              Monday - Friday: 5:00 AM - 11:00 PM
            </p>
            <p className="text-gray-600 mb-1">Saturday: 7:00 AM - 10:00 PM</p>
            <p className="text-gray-600">Sunday: 8:00 AM - 8:00 PM</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
