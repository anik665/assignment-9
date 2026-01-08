import { motion } from "framer-motion";
import { FaSearch, FaUserCheck, FaCalendarCheck } from "react-icons/fa";

const steps = [
  {
    id: 1,
    icon: <FaSearch className="text-3xl text-primary" />,
    title: "Find a Skill",
    description:
      "Browse local skills like guitar, coding, yoga, or language exchange.",
  },
  {
    id: 2,
    icon: <FaUserCheck className="text-3xl text-primary" />,
    title: "Connect with Provider",
    description: "View provider details, ratings, and choose the best match.",
  },
  {
    id: 3,
    icon: <FaCalendarCheck className="text-3xl text-primary" />,
    title: "Book & Learn",
    description: "Book a session and start learning or sharing skills locally.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-base-200">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          How It Works
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <motion.div
              key={step.id}
              whileHover={{ scale: 1.05 }}
              className="card bg-base-100 shadow-md text-center p-6"
            >
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
