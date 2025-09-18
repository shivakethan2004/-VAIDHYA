import { Stat } from "@/types/getStartedTypes";

const StatsSection: React.FC = () => {
  const stats: Stat[] = [
    { label: 'Healthcare Providers', value: '10,000+' },
    { label: 'Patients Served', value: '50,000+' },
    { label: 'Appointments Booked', value: '100,000+' },
    { label: 'Cities Covered', value: '25+' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.label} 
              className="text-center group animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2 transition-transform duration-300 group-hover:scale-110">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default StatsSection;