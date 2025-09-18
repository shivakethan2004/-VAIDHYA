import { ArrowRight } from 'lucide-react';
import React from 'react';

const GetStartedButtons: React.FC<{
  selectedRole: string | null;
  onSignUp: () => void;
  onLogin: () => void;
}> = ({ selectedRole, onSignUp, onLogin }) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          {!selectedRole ? (
            <div className="animate-pulse">
              <p className="text-gray-500 text-lg mb-4">
                👆 Please select your role above to continue
              </p>
            </div>
          ) : (
            <div className="animate-fade-in">
              <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
                ✓ Role selected: {selectedRole}
              </div>
              <p className="text-gray-800 text-lg mb-6">
                Great choice! Lets get you started on your healthcare journey.
              </p>
            </div>
          )}
        </div>
                
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onSignUp}
            disabled={!selectedRole}
            className={`group px-10 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center ${
              selectedRole
                ? 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-xl hover:-translate-y-1'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Create Account
            {selectedRole && (
              <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            )}
          </button>
                    
          <button
            onClick={onLogin}
            disabled={!selectedRole}
            className={`group px-10 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center ${
              selectedRole
                ? 'bg-red-600 text-white hover:bg-red-700 hover:shadow-xl hover:-translate-y-1'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Sign In
            {selectedRole && (
              <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStartedButtons;