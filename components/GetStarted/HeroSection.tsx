'use client';
import { ArrowRight, Heart, Play, Activity } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, easeInOut } from "framer-motion";

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const heroSlides = [
    "Transform your healthcare experience",
    "Connect with trusted professionals",
    "Manage your health records securely",
  ];

  // Typewriter effect
  useEffect(() => {
    const currentText = heroSlides[currentSlide];
    let currentIndex = 0;
    setDisplayText("");
    setIsTyping(true);

    const typeInterval = setInterval(() => {
      if (currentIndex < currentText.length) {
        setDisplayText(currentText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typeInterval);
      }
    }, 50);

    return () => clearInterval(typeInterval);
  }, [currentSlide]);

  // Slide change effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000); // 4s per slide

    return () => clearInterval(interval);
  }, []);

  const heartbeatVariants = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.3, 1],
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: easeInOut,
      },
    },
  };

  const pulseVariants = {
    initial: { scale: 1, opacity: 0.8 },
    animate: {
      scale: [1, 1.5, 1],
      opacity: [0.8, 0.3, 0.8],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: easeInOut,
      },
    },
  };

  const figure8Variants = (delay: number, reverse: boolean = false) => ({
    animate: {
      x: reverse
        ? [-100, -70, 0, 70, 100, 70, 0, -70, -100]
        : [100, 70, 0, -70, -100, -70, 0, 70, 100],
      y: reverse
        ? [-50, -80, -40, 0, 50, 80, 40, 0, -50]
        : [50, 80, 40, 0, -50, -80, -40, 0, 50],
      scale: [0.5, 1, 0.8, 1.2, 0.6, 1, 0.9, 0.7, 0.5],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: easeInOut,
        delay,
      },
    },
  });

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden relative">
      {/* Animated Background Balls */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          variants={figure8Variants(0)}
          animate="animate"
          className="absolute top-20 left-1/4 w-6 h-6 bg-blue-500 rounded-full opacity-20"
        />
        <motion.div
          variants={figure8Variants(1, true)}
          animate="animate"
          className="absolute top-32 right-1/4 w-8 h-8 bg-blue-600 rounded-full opacity-25"
        />
        <motion.div
          variants={figure8Variants(2)}
          animate="animate"
          className="absolute bottom-40 left-1/3 w-4 h-4 bg-blue-400 rounded-full opacity-30"
        />
        <motion.div
          variants={figure8Variants(3, true)}
          animate="animate"
          className="absolute bottom-20 right-1/3 w-10 h-10 bg-blue-700 rounded-full opacity-15"
        />
        <motion.div
          variants={figure8Variants(4)}
          animate="animate"
          className="absolute top-40 left-1/5 w-5 h-5 bg-blue-500 rounded-full opacity-20"
        />

        <motion.div
          variants={figure8Variants(1.5, true)}
          animate="animate"
          className="absolute top-28 right-1/5 w-7 h-7 bg-red-500 rounded-full opacity-25"
        />
        <motion.div
          variants={figure8Variants(0.5)}
          animate="animate"
          className="absolute bottom-32 left-1/4 w-6 h-6 bg-red-400 rounded-full opacity-20"
        />
        <motion.div
          variants={figure8Variants(3.5, true)}
          animate="animate"
          className="absolute top-60 right-1/6 w-4 h-4 bg-red-600 rounded-full opacity-30"
        />
        <motion.div
          variants={figure8Variants(2.5)}
          animate="animate"
          className="absolute bottom-60 left-1/6 w-8 h-8 bg-red-500 rounded-full opacity-15"
        />
        <motion.div
          variants={figure8Variants(4.5, true)}
          animate="animate"
          className="absolute top-80 right-1/3 w-5 h-5 bg-red-400 rounded-full opacity-25"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6 animate-bounce-subtle">
            <Heart className="w-4 h-4 mr-2" />
            Trusted by 10,000+ healthcare providers
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="text-blue-600">VAIDHYA:</span>
            <br />
            <div className="h-20 flex items-center justify-center gap-4">
              {/* Heartbeat Icon Animation */}
              <div className="relative flex items-center">
                <motion.div
                  variants={pulseVariants}
                  initial="initial"
                  animate="animate"
                  className="absolute inset-0 bg-red-400 rounded-full"
                />
                <motion.div
                  variants={heartbeatVariants}
                  initial="initial"
                  animate="animate"
                  className="relative z-10"
                >
                  <Activity className="w-8 h-8 md:w-12 md:h-12 text-red-500" />
                </motion.div>
              </div>

              {/* Typewriter Text */}
              <div className="flex-1 text-left">
                <span className="inline-block min-h-[1em]">
                  {displayText}
                  {isTyping && (
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                      className="text-blue-600"
                    >
                      |
                    </motion.span>
                  )}
                </span>
              </div>
            </div>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience the future of healthcare management with our comprehensive platform 
            designed to connect patients, doctors, and healthcare facilities seamlessly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="group px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold transition-all duration-300 hover:bg-blue-700 hover:shadow-xl hover:-translate-y-1 flex items-center">
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button className="group px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold transition-all duration-300 hover:border-blue-600 hover:text-blue-600 flex items-center">
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
