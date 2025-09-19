import { UserRole } from '@/types/getStartedTypes';
import React from 'react';

type ColorTheme = 'emerald' | 'blue' | 'purple';

interface EnhancedUserRole extends UserRole {
  color: ColorTheme;
  gradient: string;
}

const RoleSelection: React.FC<{
  selectedRole: string | null;
  onRoleSelect: (role: string) => void;
}> = ({ selectedRole, onRoleSelect }) => {
  const roles: EnhancedUserRole[] = [
    {
      id: 'hospital',
      name: 'Hospital/Clinic',
      description: 'Manage your healthcare facility efficiently',
      icon: '🏥',
      features: ['Patient Management', 'Staff Coordination', 'Resource Planning'],
      color: 'emerald',
      gradient: 'from-emerald-400 to-teal-500'
    },
    {
      id: 'doctor',
      name: 'Doctor',
      description: 'Access patient records and manage care',
      icon: '👨‍⚕️',
      features: ['Patient Records', 'Appointment Management', 'Prescription Tools'],
      color: 'blue',
      gradient: 'from-blue-400 to-indigo-500'
    },
    {
      id: 'patient',
      name: 'Patient',
      description: 'Take control of your health journey',
      icon: '👤',
      features: ['Book Appointments', 'Health Records', 'Medication Reminders'],
      color: 'purple',
      gradient: 'from-purple-400 to-pink-500'
    }
  ];

  return (
    <section id="roles" className="py-20 bg-transparent relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-emerald-200 to-blue-200 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          {/* <div className="inline-block mb-6">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-lg mb-4 mx-auto">
              <span className="text-2xl">👋</span>
            </div>
          </div> */}
          <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            Welcome! Who are you?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Choose your role to unlock a personalized healthcare experience tailored just for you
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {roles.map((role, index) => (
            <div
              key={role.id}
              className="group relative animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Glow effect for selected card */}
              {selectedRole === role.id && (
                <div className={`absolute -inset-1 bg-gradient-to-r ${role.gradient} rounded-3xl blur-sm opacity-75 group-hover:opacity-100 transition duration-1000`}></div>
              )}
              
              <button
                onClick={() => onRoleSelect(role.id)}
                className={`relative w-full h-full p-8 rounded-3xl transition-all duration-500 transform hover:scale-105 ${
                  selectedRole === role.id
                    ? 'bg-white shadow-2xl -translate-y-2 border-2 border-white'
                    : 'bg-white/80 backdrop-blur-sm hover:bg-white hover:shadow-xl hover:-translate-y-1 border-2 border-gray-100'
                }`}
              >
                {/* Top decoration bar */}
                <div className={`w-full h-1 bg-gradient-to-r ${role.gradient} rounded-full mb-6`}></div>

                {/* Icon with animated background */}
                <div className="relative mb-8">
                  <div className={`w-20 h-20 bg-gradient-to-br ${role.gradient} rounded-2xl shadow-lg mx-auto flex items-center justify-center transform transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110`}>
                    <span className="text-3xl filter drop-shadow-sm">{role.icon}</span>
                  </div>
                  
                  {/* Floating particles effect for selected */}
                  {selectedRole === role.id && (
                    <div className="absolute -top-2 -right-2">
                      <div className={`w-4 h-4 bg-gradient-to-br ${role.gradient} rounded-full animate-ping`}></div>
                      <div className={`w-4 h-4 bg-gradient-to-br ${role.gradient} rounded-full absolute top-0`}></div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                    {role.name}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                    {role.description}
                  </p>
                </div>

                {/* Features with enhanced styling */}
                <div className="space-y-3 mb-6">
                  {role.features.map((feature, featureIndex) => {
                    const colorClasses: Record<ColorTheme, string> = {
                      emerald: 'text-emerald-700 bg-emerald-50 border-emerald-200',
                      blue: 'text-blue-700 bg-blue-50 border-blue-200',
                      purple: 'text-purple-700 bg-purple-50 border-purple-200'
                    };
                    
                    return (
                      <div
                        key={feature}
                        className={`flex items-center justify-center text-sm font-medium ${colorClasses[role.color]} rounded-xl px-4 py-2 transform transition-all duration-300 hover:scale-105`}
                        style={{ 
                          animationDelay: `${(index * 200) + (featureIndex * 100)}ms`,
                          opacity: selectedRole === role.id ? 1 : 0.8
                        }}
                      >
                        <span className="mr-2">✨</span>
                        {feature}
                      </div>
                    );
                  })}
                </div>

                {/* Selection indicator */}
                {selectedRole === role.id && (
                  <div className="flex justify-center items-center space-x-2">
                    <div className={`w-3 h-3 bg-gradient-to-r ${role.gradient} rounded-full animate-pulse`}></div>
                    <span className={`text-sm font-semibold ${
                      role.color === 'emerald' ? 'text-emerald-600' :
                      role.color === 'blue' ? 'text-blue-600' :
                      'text-purple-600'
                    }`}>Selected</span>
                    <div className={`w-3 h-3 bg-gradient-to-r ${role.gradient} rounded-full animate-pulse`} style={{ animationDelay: '0.5s' }}></div>
                  </div>
                )}

                {/* Hover effect indicator */}
                <div className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r ${role.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </button>
            </div>
          ))}
        </div>

        {/* Call to action */}
        {selectedRole && (
          <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '800ms' }}>
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-lg border border-gray-100">
              <span className="text-gray-600">Perfect choice!</span>
              <span className="animate-bounce">🎉</span>
              <span className="text-gray-600">Ready to get started?</span>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
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
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default RoleSelection;