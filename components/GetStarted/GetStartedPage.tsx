"use client";
import React, { useState } from "react";
import { motion, easeInOut } from "framer-motion";
import Header from "./Header";
import RoleSelection from "./RoleSelection";
import GetStartedButtons from "./GetStartedButtons";
import FeatureHighlights from "./FeatureHighlights";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import StatsSection from "./StatsSection";
import TestimonialsSection from "./TestimonialsSection";
import { Brain, CalendarCheck, MessageCircle, Pill } from "lucide-react";
import AIHighlightCard from "./AIHighlightCard";

const GetStartedPage: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const handleRoleSelect = (role: string) => {
    setSelectedRole(role);
    // Smooth scroll to buttons
    setTimeout(() => {
      const buttonsSection = document.querySelector("#get-started-buttons");
      if (buttonsSection) {
        buttonsSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const handleSignUp = () => {
    if (selectedRole) {
      console.log(`Navigating to signup for role: ${selectedRole}`);
      window.location.href = `/signup?role=${selectedRole}`;
    }
  };

  const handleLogin = () => {
    if (selectedRole) {
      console.log(`Navigating to login for role: ${selectedRole}`);
      window.location.href = `/login?role=${selectedRole}`;
    }
  };

  // Figure-8 animation variants for background elements
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
  const features = [
    { icon: <Brain />, label: "AI Symptom Checker" },
    { icon: <CalendarCheck />, label: "Smart Appointment Reminders" },
    { icon: <MessageCircle />, label: "AI-Powered Support" },
    { icon: <Pill />, label: "Prescription Assistance" },
  ];
  return (
    <div className="min-h-screen relative">
      {/* Fixed Background with Gradient and Animated Elements */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 pointer-events-none z-0">
        <div className="fixed inset-0 z-0">
          {/* Background Video */}
          <video
            src="/assets/dna.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: 0.3,
            }}
          />
        </div>
        {/* Animated Background Balls - Blue */}
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

        {/* Animated Background Balls - Red */}
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

      {/* Main Content with relative positioning */}
      <div className="relative z-10">
        <Header
          title="VAIDHYA"
          tagline="Start managing your healthcare interactions easily"
          logo="/assets/logo.jpg"
        />
        <HeroSection />
        <AIHighlightCard
          features={features}
          onCtaClick={() => alert("Explore AI features clicked!")}
        />
        ;
        <StatsSection />
        <RoleSelection
          selectedRole={selectedRole}
          onRoleSelect={handleRoleSelect}
        />
        <div id="get-started-buttons">
          <GetStartedButtons
            selectedRole={selectedRole}
            onSignUp={handleSignUp}
            onLogin={handleLogin}
          />
        </div>
        <FeatureHighlights />
        <TestimonialsSection />
        <Footer />
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce-subtle {
          0%,
          20%,
          50%,
          80%,
          100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-5px);
          }
          60% {
            transform: translateY(-3px);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 2s infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }

        .animate-pulse {
          animation: pulse 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default GetStartedPage;
