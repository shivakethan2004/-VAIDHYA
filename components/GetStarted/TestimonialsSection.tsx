import { Testimonial } from "@/types/getStartedTypes";
import { Star } from "lucide-react";

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Dr. Sarah Johnson',
      role: 'Cardiologist',
      content: 'VAIDHYA has transformed how I manage my practice. The intuitive interface and comprehensive features save me hours every day.',
      rating: 5
    },
    {
      id: '2',
      name: 'Michael Chen',
      role: 'Patient',
      content: 'Finally, a healthcare platform that actually works! Booking appointments and tracking my health has never been easier.',
      rating: 5
    },
    {
      id: '3',
      name: 'Mumbai General Hospital',
      role: 'Healthcare Facility',
      content: 'Our patient satisfaction scores increased by 40% after implementing VAIDHYA. The staff loves the streamlined workflow.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by Healthcare Professionals
          </h2>
          <p className="text-xl text-gray-600">See what our users are saying about VAIDHYA</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">{testimonial.content}</p>
              <div>
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-blue-600">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default TestimonialsSection;