import React from "react";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Smooth animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.25, 0.46, 0.45, 0.94] // Custom cubic bezier for smoothness
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 1.2, 
      ease: [0.25, 0.46, 0.45, 0.94] 
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.7, 
      ease: [0.25, 0.46, 0.45, 0.94] 
    }
  }
};

const gentleFloat = {
  hidden: { y: 0 },
  visible: {
    y: [-6, 6, -6],
    transition: { 
      duration: 6, 
      repeat: Infinity, 
      ease: "easeInOut" 
    }
  }
};

const gentlePulse = {
  hidden: { scale: 1 },
  visible: {
    scale: [1, 1.03, 1],
    transition: { 
      duration: 4, 
      repeat: Infinity, 
      ease: "easeInOut" 
    }
  }
};

const smoothBackgroundZoom = {
  hidden: { scale: 1.15 },
  visible: {
    scale: 1,
    transition: {
      duration: 1.8,
      ease: [0.43, 0.13, 0.23, 0.96]
    }
  }
};

const HomeHeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <motion.img
          src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg"
          alt="Modern Gym Interior"
          className="w-full h-full object-cover"
          variants={smoothBackgroundZoom}
          initial="hidden"
          animate="visible"
        />
        {/* Semi-transparent Black Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10 container mx-auto px-4 text-center"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm text-white"
            variants={fadeInUp}
            whileHover={{ 
              scale: 1.03, 
              transition: { duration: 0.3 } 
            }}
            whileTap={{ scale: 0.98 }}
          >
            <Star className="h-4 w-4 text-orange-400 fill-orange-400" />
            <span>Rated #1 Gym in the City</span>
          </motion.div>

          {/* Main Headline */}
          <motion.div className="space-y-4" variants={staggerContainer}>
            <motion.h1 
              className="text-5xl md:text-7xl font-bold leading-tight"
              variants={fadeInUp}
            >
              Transform Your
              <motion.span 
                className="block bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
                initial={{ backgroundPosition: "0% 50%" }}
                animate={{ backgroundPosition: "100% 50%" }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              >
                Body & Mind
              </motion.span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"
              variants={fadeInUp}
              transition={{ delay: 0.3 }}
            >
              Join thousands of members who've achieved their fitness goals with
              our world-class equipment, expert trainers, and supportive
              community.
            </motion.p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={fadeInUp}
            transition={{ delay: 0.4 }}
          >
            <motion.div 
              whileHover={{ 
                scale: 1.03, 
                transition: { duration: 0.3 } 
              }} 
              whileTap={{ scale: 0.98 }}
            >
              <Link
                to="/register"
                className="group inline-flex items-center gap-2 bg-blue-500 text-white px-8 py-4 text-lg font-semibold rounded-full hover:bg-blue-600 transition-all"
              >
                Start Your Journey
                <svg
                  className="h-6 w-6 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14m-7-7l7 7-7 7"
                  />
                </svg>
              </Link>
            </motion.div>

            <motion.div 
              whileHover={{ 
                scale: 1.03, 
                transition: { duration: 0.3 } 
              }} 
              whileTap={{ scale: 0.98 }}
            >
              <a
                href="https://www.youtube.com/@KangkanDB/shorts" 
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 border-2 border-orange-400 text-orange-400 px-8 py-4 text-lg font-semibold rounded-full hover:bg-orange-500/10 transition-all"
              >
                <svg
                  className="h-6 w-6 transition-transform group-hover:scale-110"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 3v18l15-9L5 3z" />
                </svg>
                Watch Our Story
              </a>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-4 gap-8 max-w-2xl mx-auto pt-12 text-white"
            variants={staggerContainer}
            transition={{ delay: 0.5 }}
          >
            {[
              { value: "2500+", label: "Active Members" },
              { value: "50+", label: "Expert Trainers" },
              { value: "50+", label: "Fitness Classes" },
              { value: "98%", label: "Success Rate" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center"
                variants={fadeIn}
                whileHover={{ 
                  scale: 1.05, 
                  transition: { duration: 0.3 } 
                }}
              >
                <motion.div 
                  className="text-3xl md:text-4xl font-bold text-orange-400"
                  variants={scaleIn}
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-300 mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Floating Effects with Smooth Animation */}
      <motion.div 
        className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"
        variants={gentleFloat}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.8 }}
      ></motion.div>
      
      <motion.div 
        className="absolute bottom-20 right-10 w-32 h-32 bg-blue-600/20 rounded-full blur-xl"
        variants={gentleFloat}
        initial="hidden"
        animate="visible"
        transition={{ 
          delay: 1.2,
          duration: 7 
        }}
      ></motion.div>
      
      {/* Additional floating elements */}
      <motion.div 
        className="absolute top-1/3 right-1/4 w-16 h-16 bg-orange-400/10 rounded-full blur-lg"
        variants={gentlePulse}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1.5 }}
      ></motion.div>
      
      <motion.div 
        className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-white/5 rounded-full blur-md"
        variants={gentleFloat}
        initial="hidden"
        animate="visible"
        transition={{ 
          delay: 1.8, 
          duration: 8 
        }}
      ></motion.div>
      
      {/* Subtle gradient orb */}
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-gradient-to-r from-blue-500/5 to-orange-400/5 blur-3xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: 1, 
          scale: 1, 
          rotate: 360 
        }}
        transition={{ 
          duration: 25, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      ></motion.div>
    </section>
  );
};

export default HomeHeroSection;