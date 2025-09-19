import { Stat } from "@/types/getStartedTypes";
import { motion, Variants } from "framer-motion";

const StatsSection: React.FC = () => {
  const stats: Stat[] = [
    { label: "Healthcare Providers", value: "10,000+" },
    { label: "Patients Served", value: "50,000+" },
    { label: "Appointments Booked", value: "100,000+" },
    { label: "Cities Covered", value: "25+" },
  ];

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section className="py-16 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="text-center group"
            >
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2 transition-transform duration-300 group-hover:scale-110">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
