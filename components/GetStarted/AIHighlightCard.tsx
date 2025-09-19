import React, { useState, useEffect } from "react";
import {
  Brain,
  CalendarCheck,
  MessageCircle,
  Pill,
  Sparkles,
  Zap,
  Shield,
} from "lucide-react";
import Image from "next/image";

export interface Feature {
  icon: React.ReactNode;
  label: string;
  description?: string;
}

export interface AIHighlightCardProps {
  headline?: string;
  subheadline?: string;
  features: Feature[];
  ctaLabel?: string;
  onCtaClick?: () => void;
  showAvatar?: boolean;
}

const AIHighlightCard: React.FC<AIHighlightCardProps> = ({
  headline = "Powered by AI — Smarter Care at Your Fingertips",
  subheadline = "Personalized insights, smart scheduling, and AI-guided support all in one place",
  features = [
    {
      icon: <Brain className="w-6 h-6" />,
      label: "AI-Powered Insights",
      description: "Advanced analytics for better decisions",
    },
    {
      icon: <CalendarCheck className="w-6 h-6" />,
      label: "Smart Scheduling",
      description: "Intelligent appointment management",
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      label: "AI Support Chat",
      description: "24/7 intelligent assistance",
    },
    {
      icon: <Pill className="w-6 h-6" />,
      label: "Medication Tracking",
      description: "Smart reminders and monitoring",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      label: "Personalized Care",
      description: "Tailored health recommendations",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      label: "Instant Responses",
      description: "Lightning-fast AI processing",
    },
  ],
  ctaLabel = "Explore AI Features",
  onCtaClick,
  showAvatar = true,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen w-full bg-transparent relative overflow-hidden flex items-center justify-center ">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>

        {/* Animated Grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            animation: "gridMove 20s linear infinite",
          }}
        ></div>
      </div>

      {/* Main Content Container */}
      <div
        className={`relative z-10 w-full max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transform transition-all duration-1000 ${
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }`}
      >
        {/* Left Column - Image */}
        <div
          className={`relative transform transition-all duration-1000 delay-300 ${
            isLoaded ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/assets/doctorPatient.png"
              alt="Doctor and patient discussing AI healthcare solutions"
              width={600}
              height={400}
              className="object-cover rounded-3xl transform transition-transform duration-700 hover:scale-105"
            />
            {/* Image overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>

            {/* Floating badges on image */}
            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center shadow-lg animate-float">
              <Sparkles className="w-5 h-5 text-blue-600 mr-2" />
              <span className="text-blue-800 font-semibold">
                AI-Assisted Diagnosis
              </span>
            </div>

            <div
              className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center shadow-lg animate-float"
              style={{ animationDelay: "2s" }}
            >
              <Shield className="w-5 h-5 text-green-600 mr-2" />
              <span className="text-green-800 font-semibold">
                98% Patient Satisfaction
              </span>
            </div>
          </div>

          {/* Decorative elements around image */}
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-200/30 rounded-full blur-xl z-[-1]"></div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-indigo-200/30 rounded-full blur-xl z-[-1]"></div>
        </div>

        {/* Right Column - Content */}
        <div className="flex flex-col">
          {/* Header Section */}
          <div className="text-left mb-12">
            {showAvatar && (
              <div
                className={`inline-flex items-center justify-center mb-8 transform transition-all duration-1000 delay-500 ${
                  isLoaded ? "scale-100 rotate-0" : "scale-0 rotate-180"
                }`}
              >
                <div className="relative">
                  {/* <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-2xl transform hover:scale-110 transition-all duration-500 hover:rotate-3">
                    <Brain className="w-10 h-10 text-white animate-pulse" />
                  </div> */}
                  {/* Floating particles around avatar */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-400 rounded-full animate-bounce delay-100"></div>
                  <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-indigo-400 rounded-full animate-bounce delay-300"></div>
                  <div className="absolute top-1/2 -right-4 w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-500"></div>
                </div>
              </div>
            )}

            <h1
              className={`text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight transform transition-all duration-1000 delay-700 ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent">
                {headline}
              </span>
            </h1>

            <p
              className={`text-xl text-gray-700 leading-relaxed transform transition-all duration-1000 delay-900 ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              {subheadline}
            </p>
          </div>

          {/* Features Grid */}
          <div
            className={`grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 transform transition-all duration-1000 delay-1000 ${
              isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            {features.map(({ icon, label, description }, index) => (
              <div
                key={index}
                className={`group relative bg-white/80 backdrop-blur-sm border border-white rounded-2xl p-6 hover:bg-white transition-all duration-500 cursor-pointer transform hover:scale-[1.02] hover:-translate-y-1 shadow-md hover:shadow-xl ${
                  isLoaded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-20 opacity-0"
                }`}
                style={{
                  transitionDelay: `${1000 + index * 100}ms`,
                  animationDelay: `${index * 0.1}s`,
                }}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                {/* Glow effect on hover */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>

                <div className="relative z-10 flex items-start">
                  <div
                    className={`flex items-center justify-center w-12 h-12 rounded-xl mr-4 transition-all duration-500 ${
                      hoveredFeature === index
                        ? "bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg shadow-blue-500/25 scale-110 rotate-6"
                        : "bg-blue-50 group-hover:bg-blue-100"
                    }`}
                  >
                    <div
                      className={`transition-all duration-500 ${
                        hoveredFeature === index
                          ? "text-white scale-110"
                          : "text-blue-600"
                      }`}
                    >
                      {icon}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {label}
                    </h3>

                    {description && (
                      <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300 text-sm">
                        {description}
                      </p>
                    )}
                  </div>
                </div>

                {/* Animated corner accents */}
                <div className="absolute top-3 right-3 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-ping"></div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div
            className={`transform transition-all duration-1000 delay-1200 ${
              isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <button
              onClick={onCtaClick}
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl hover:from-blue-500 hover:to-indigo-500 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
            >
              <span className="relative z-10 flex items-center">
                {ctaLabel}
                <Shield className="ml-3 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              </span>

              {/* Button glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400 to-indigo-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl"></div>

              {/* Ripple effect */}
              <div className="absolute inset-0 rounded-xl border-2 border-white/20 animate-ping opacity-0 group-hover:opacity-100"></div>
            </button>

            <p className="mt-6 text-gray-600 text-sm">
              Join thousands of healthcare providers already transforming
              patient care with AI
            </p>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
};

export default AIHighlightCard;
