import { UserRole } from '@/types/getStartedTypes';
import React from 'react';

const RoleSelection: React.FC<{
  selectedRole: string | null;
  onRoleSelect: (role: string) => void;
}> = ({ selectedRole, onRoleSelect }) => {
  const roles: UserRole[] = [
    {
      id: 'hospital',
      name: 'Hospital/Clinic',
      description: 'Manage your healthcare facility efficiently',
      icon: '🏥',
      features: ['Patient Management', 'Staff Coordination', 'Resource Planning']
    },
    {
      id: 'doctor',
      name: 'Doctor',
      description: 'Access patient records and manage care',
      icon: '👨‍⚕️',
      features: ['Patient Records', 'Appointment Management', 'Prescription Tools']
    },
    {
      id: 'patient',
      name: 'Patient',
      description: 'Take control of your health journey',
      icon: '👤',
      features: ['Book Appointments', 'Health Records', 'Medication Reminders']
    }
  ];

  return (
    <section id="roles" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Who are you?</h2>
          <p className="text-xl text-gray-600">Choose your role to get personalized features</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {roles.map((role, index) => (
            <div
              key={role.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <button
                onClick={() => onRoleSelect(role.id)}
                className={`w-full p-8 rounded-xl border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group ${
                  selectedRole === role.id
                    ? 'border-blue-600 bg-blue-50 shadow-xl transform -translate-y-2'
                    : 'border-gray-200 bg-white hover:border-blue-300'
                }`}
              >
                <div className="text-center">
                  <div className="text-5xl mb-6 transition-transform duration-300 group-hover:scale-110">
                    {role.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {role.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {role.description}
                  </p>
                  <div className="space-y-1">
                    {role.features.map((feature) => (
                      <div
                        key={feature}
                        className="text-xs text-blue-600 bg-blue-100 rounded-full px-3 py-1 inline-block mr-1 mb-1"
                      >
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {selectedRole === role.id && (
                  <div className="mt-4 flex justify-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                  </div>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoleSelection;
