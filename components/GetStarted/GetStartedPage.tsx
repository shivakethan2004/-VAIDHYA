"use client";
import React, { useState } from "react";
import Header from "./Header";
import RoleSelection from "./RoleSelection";
import GetStartedButtons from "./GetStartedButtons";
import FeatureHighlights from "./FeatureHighlights";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import StatsSection from "./StatsSection";
import TestimonialsSection from "./TestimonialsSection";

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 ">
      <Header
        title="VAIDHYA"
        tagline="Start managing your healthcare interactions easily"
        logo="/assets/logo.jpg"
      />

      <HeroSection />
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
