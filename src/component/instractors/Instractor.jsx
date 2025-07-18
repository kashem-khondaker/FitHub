import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Instructors = () => {
  const instructors = [
    {
      id: 1,
      name: "John Smith",
      role: "HIIT Specialist",
      bio: "John is a certified personal trainer with over 10 years of experience in HIIT and strength training. His passion is helping clients achieve their fitness goals through efficient, effective workouts.",
      experience: "10+ years",
      certifications: [
        "NASM Certified Personal Trainer",
        "ACE Group Fitness Instructor",
        "CrossFit Level 2 Trainer",
      ],
      specialties: ["HIIT", "Strength Training", "Weight Loss"],
      image:
        "https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      social: {
        Twitter: "https://twitter.com/johnsmith",
        Instagram: "https://instagram.com/johnsmith",
        Linkedin: "https://linkedin.com/in/johnsmith",
      },
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Yoga Instructor",
      bio: "Sarah has been practicing yoga for 15 years and teaching for 8. Her classes focus on mindful movement, proper alignment, and accessible practice for all body types and experience levels.",
      experience: "8 years",
      certifications: [
        "200hr Yoga Alliance Certification",
        "Yin Yoga Specialist",
        "Prenatal Yoga Certification",
      ],
      specialties: ["Vinyasa Flow", "Yin Yoga", "Meditation"],
      image:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      social: {
        Instagram: "https://instagram.com/sarahjohnson",
        Linkedin: "https://linkedin.com/in/sarahjohnson",
      },
    },
    {
      id: 3,
      name: "Mike Wilson",
      role: "Strength Coach",
      bio: "Mike specializes in strength and conditioning with a background in competitive powerlifting. He focuses on proper technique and progressive overload to help members build strength safely.",
      experience: "12 years",
      certifications: [
        "NSCA Certified Strength & Conditioning Specialist",
        "USA Weightlifting Level 2 Coach",
        "Precision Nutrition Level 1",
      ],
      specialties: [
        "Powerlifting",
        "Olympic Weightlifting",
        "Strength Programming",
      ],
      image:
        "https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      social: {
        Twitter: "https://twitter.com/mikewilson",
        Instagram: "https://instagram.com/mikewilson",
      },
    },
    {
      id: 4,
      name: "Emma Davis",
      role: "Nutrition Coach",
      bio: "Emma holds a degree in Nutritional Science and specializes in creating sustainable eating plans that complement fitness goals. She believes in balance rather than restriction.",
      experience: "6 years",
      certifications: [
        "Precision Nutrition Level 2",
        "ACE Fitness Nutrition Specialist",
        "Integrative Nutrition Health Coach",
      ],
      specialties: ["Weight Management", "Sports Nutrition", "Meal Planning"],
      image:
        "https://images.unsplash.com/photo-1519311965067-36d3e5f33d39?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      social: {
        Twitter: "https://twitter.com/emmadavis",
        Linkedin: "https://linkedin.com/in/emmadavis",
      },
    },
    {
      id: 5,
      name: "David Martinez",
      role: "Cardio Specialist",
      bio: "David's energetic classes combine high-energy cardio with functional movements. With a background in competitive running, he knows how to motivate clients to push past their comfort zones.",
      experience: "9 years",
      certifications: [
        "AFAA Group Fitness Certification",
        "TRX Suspension Training",
        "Spinning Instructor",
      ],
      specialties: ["HIIT", "Circuit Training", "Indoor Cycling"],
      image:
        "https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      social: {
        Instagram: "https://instagram.com/davidmartinez",
      },
    },
    {
      id: 6,
      name: "Jennifer Lee",
      role: "Pilates Instructor",
      bio: "Jennifer has been teaching Pilates for over 7 years. She focuses on core strength, posture improvement, and rehabilitation through controlled, precise movements in her classes.",
      experience: "7 years",
      certifications: [
        "Balanced Body Comprehensive Pilates",
        "STOTT PILATES Level 2",
        "Pilates for Rehabilitation",
      ],
      specialties: ["Mat Pilates", "Reformer", "Post-Injury Rehabilitation"],
      image:
        "https://images.unsplash.com/photo-1593164842264-854604db2260?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      social: {
        Instagram: "https://instagram.com/jenniferlee",
        Linkedin: "https://linkedin.com/in/jenniferlee",
      },
    },
    {
      id: 7,
      name: "Robert Chen",
      role: "Meditation Coach",
      bio: "Robert brings mindfulness and meditation practices to our members. His sessions focus on stress reduction, mental clarity, and emotional balance to complement physical training.",
      experience: "15 years",
      certifications: [
        "Mindfulness-Based Stress Reduction Teacher",
        "Meditation Teacher Training, Insight Meditation Society",
        "Yoga Nidra Certification",
      ],
      specialties: ["Mindfulness", "Guided Meditation", "Breathwork"],
      image:
        "https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      social: {
        Twitter: "https://twitter.com/robertchen",
        Instagram: "https://instagram.com/robertchen",
      },
    },
    {
      id: 8,
      name: "Tanya Williams",
      role: "Dance Fitness Instructor",
      bio: "Tanya brings her professional dance background to create fun, high-energy dance fitness classes. Her sessions make you forget you're working out while burning serious calories.",
      experience: "11 years",
      certifications: [
        "Zumba Fitness",
        "AFAA Group Fitness",
        "BollyX Certification",
      ],
      specialties: ["Zumba", "Hip Hop Fitness", "Dance Cardio"],
      image:
        "https://images.unsplash.com/photo-1530645298377-82c8416d3f90?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      social: {
        Instagram: "https://instagram.com/tanyawilliams",
      },
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-blue-600 text-white pt-32 pb-20">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Our Expert Trainers
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Our certified professionals are here to guide you through your
            fitness journey with expertise and personalized attention.
          </p>
        </div>
      </div>

      {/* Instructors Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {instructors.map((instructor) => (
              <div
                key={instructor.id}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-64 relative">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent text-white p-4">
                    <h3 className="text-xl font-bold">{instructor.name}</h3>
                    <p>{instructor.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {instructor.bio}
                  </p>
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-500 mb-1">
                      Specialties
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {instructor.specialties.map((specialty) => (
                        <span
                          key={specialty}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      {instructor.social.Instagram && (
                        <a
                          href={instructor.social.Instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-500 hover:text-blue-600 transition-colors"
                        >
                          <FaInstagram size={18} />
                        </a>
                      )}
                      {instructor.social.Twitter && (
                        <a
                          href={instructor.social.Twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-500 hover:text-blue-600 transition-colors"
                        >
                          <FaTwitter size={18} />
                        </a>
                      )}
                      {instructor.social.Linkedin && (
                        <a
                          href={instructor.social.Linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-500 hover:text-blue-600 transition-colors"
                        >
                          <FaLinkedin size={18} />
                        </a>
                      )}
                    </div>
                    <button className="px-3 py-1 text-sm rounded-md bg-white text-gray-700 border border-gray-300 hover:bg-gray-50">
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Join Our Team"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
                  <p className="text-gray-600 mb-6">
                    We're always looking for passionate fitness professionals to
                    join our growing team. If you're certified, experienced, and
                    love helping others achieve their fitness goals, we want to
                    hear from you!
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <svg
                        className="h-5 w-5 text-blue-600 mt-1 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <p className="text-gray-700">Competitive compensation</p>
                    </div>
                    <div className="flex items-start">
                      <svg
                        className="h-5 w-5 text-blue-600 mt-1 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <p className="text-gray-700">Flexible scheduling</p>
                    </div>
                    <div className="flex items-start">
                      <svg
                        className="h-5 w-5 text-blue-600 mt-1 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <p className="text-gray-700">
                        Professional development opportunities
                      </p>
                    </div>
                    <div className="flex items-start">
                      <svg
                        className="h-5 w-5 text-blue-600 mt-1 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <p className="text-gray-700">
                        Supportive team environment
                      </p>
                    </div>
                  </div>
                  <div className="mt-8">
                    <button className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              What Members Say About Our Trainers
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our Instructors make a real difference in our members' fitness
              journeys. Here's what some of them have to say.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                  <span className="text-gray-700 font-semibold">AM</span>
                </div>
                <div>
                  <h4 className="font-semibold">Alex Martinez</h4>
                  <p className="text-sm text-gray-500">About John Smith</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "John's HIIT classes pushed me beyond what I thought I was
                capable of. His motivating approach and attention to form helped
                me lose 20 pounds in just 3 months!"
              </p>
              <div className="flex mt-4 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                  <span className="text-gray-700 font-semibold">LT</span>
                </div>
                <div>
                  <h4 className="font-semibold">Lisa Thompson</h4>
                  <p className="text-sm text-gray-500">About Sarah Johnson</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Sarah's yoga classes have transformed not just my physical
                health but my mental wellbeing too. She creates a welcoming
                environment where I've grown stronger and more flexible."
              </p>
              <div className="flex mt-4 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                  <span className="text-gray-700 font-semibold">RW</span>
                </div>
                <div>
                  <h4 className="font-semibold">Ryan Wilson</h4>
                  <p className="text-sm text-gray-500">About Mike Wilson</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Mike's strength coaching completely changed my approach to
                lifting. His focus on proper form prevented injuries while
                helping me gain muscle. I've never been stronger!"
              </p>
              <div className="flex mt-4 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Book a Session with One of Our Trainers
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start your fitness journey with personalized guidance from our
            expert Instructors.
          </p>
          <button className="px-6 py-3 bg-white text-blue-600 rounded-md hover:bg-gray-100 font-medium">
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default Instructors;