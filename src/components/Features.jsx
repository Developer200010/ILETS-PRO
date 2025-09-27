import { motion } from "framer-motion";
import { FaComments, FaPenFancy, FaRobot } from "react-icons/fa"; // Import icons

const features = [
  {
    title: "Speaking Practice",
    desc: "Daily speaking sessions with experts.",
    icon: <FaComments className="text-5xl mb-4 text-purple-400" />,
  },
  {
    title: "Mock Tests",
    desc: "Real exam-like mock tests for better prep.",
    icon: <FaPenFancy className="text-5xl mb-4 text-purple-400" />,
  },
  {
    title: "AI Band Score",
    desc: "Instant AI feedback to improve fast.",
    icon: <FaRobot className="text-5xl mb-4 text-purple-400" />,
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className="w-full min-h-screen relative flex flex-col justify-center px-6 py-20 overflow-hidden bg-gradient-to-l from-gray-900 to-black text-white"
    >
      {/* Floating Shapes */}
      <motion.div
        className="absolute w-64 h-64 bg-purple-600 rounded-full top-[-80px] left-[-80px] opacity-20"
        animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        className="absolute w-96 h-96 bg-pink-600 rounded-full bottom-[-120px] right-[-120px] opacity-15"
        animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
      />

      {/* Title */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-12 z-10 relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        Our <span className="text-purple-400">Features</span>
      </motion.h2>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto z-10 relative">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(128, 90, 255, 0.5)" }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="bg-black text-white p-10 rounded-2xl shadow-xl min-h-[280px] flex flex-col items-center justify-center text-center border border-purple-600"
          >
            {f.icon}
            <h3 className="text-2xl font-semibold mb-2">{f.title}</h3>
            <p className="text-lg text-gray-300">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
