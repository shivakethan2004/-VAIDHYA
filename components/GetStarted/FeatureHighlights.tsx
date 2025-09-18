import { Feature } from '@/types/getStartedTypes';
import { Calendar, Globe, MessageCircle, Shield } from 'lucide-react';
import React from 'react';

const FeatureHighlights: React.FC = () => {
  const features: Feature[] = [
    {
      id: '1',
      title: 'Secure Health Records',
      description: 'Military-grade encryption protects your sensitive medical data with advanced security protocols',
      icon: <Shield className="w-8 h-8" />
    },
    {
      id: '2',
      title: 'Smart Scheduling',
      description: 'AI-powered appointment booking that learns your preferences and suggests optimal times',
      icon: <Calendar className="w-8 h-8" />
    },
    {
      id: '3',
      title: '24/7 Global Access',
      description: 'Access your healthcare information from anywhere in the world, anytime you need it',
      icon: <Globe className="w-8 h-8" />
    },
    {
      id: '4',
      title: 'Secure Messaging',
      description: 'HIPAA-compliant communication platform for seamless provider-patient interaction',
      icon: <MessageCircle className="w-8 h-8" />
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose VAIDHYA?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience healthcare technology that puts you first with cutting-edge features designed for modern healthcare
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="group text-center p-8 bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-6 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;