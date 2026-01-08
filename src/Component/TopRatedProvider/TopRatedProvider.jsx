import { motion } from "framer-motion";

const providers = [
  {
    id: 1,
    name: "Alex Martin",
    skill: "Guitar Instructor",
    rating: 4.9,
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 2,
    name: "Sara Hossain",
    skill: "English Tutor",
    rating: 4.8,
    image: "https://i.pravatar.cc/150?img=32",
  },
  {
    id: 3,
    name: "Rahim Uddin",
    skill: "Web Developer",
    rating: 4.9,
    image: "https://i.pravatar.cc/150?img=56",
  },
];

const TopRatedProviders = () => {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Top Rated Providers
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {providers.map((provider) => (
            <motion.div
              key={provider.id}
              whileHover={{ scale: 1.05 }}
              className="card bg-base-100 shadow-md p-6 text-center"
            >
              <img
                src={provider.image}
                alt={provider.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">{provider.name}</h3>
              <p className="text-sm text-gray-500">{provider.skill}</p>
              <p className="mt-2 text-primary font-medium">
                ⭐ {provider.rating}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopRatedProviders;
