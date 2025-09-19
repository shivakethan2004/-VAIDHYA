"use client";
import { ArrowRight, Heart, Play, Activity } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const HeroSection: React.FC = () => {
  const heroSlides = [
    "Transform your healthcare experience",
    "Connect with trusted professionals",
    "Manage your health records securely",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Cycle through slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);



  const slideVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <section className="pt-24 pb-16 bg-transparent overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6"
          >
            <Heart className="w-4 h-4 mr-2" />
            Trusted by 10,000+ healthcare providers
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            <span className="text-blue-600">VAIDHYA:</span>
            <br />
            <div className="flex items-center justify-center gap-4 relative">
              {/* Sliding Text */}
              <div className="overflow-hidden h-10">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentSlide}
                    variants={slideVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="text-left text-gray-900 text-xl md:text-2xl font-medium"
                  >
                    {heroSlides[currentSlide]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Experience the future of healthcare management with our
            comprehensive platform designed to connect patients, doctors, and
            healthcare facilities seamlessly.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <button className="group px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold transition-all duration-300 hover:bg-blue-700 hover:shadow-xl hover:-translate-y-1 flex items-center">
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button className="group px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold transition-all duration-300 hover:border-blue-600 hover:text-blue-600 flex items-center">
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
