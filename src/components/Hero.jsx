import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full min-h-screen relative flex items-center justify-center px-6 py-20 overflow-hidden bg-gradient-to-r from-gray-900 to-black"
    >
      {/* Floating Background Shapes */}
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

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-7xl flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 w-full"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        {/* Left Text */}
        <motion.div
          className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
            <span className="text-purple-400">Achieve Your</span> Dream IELTS Score
          </h1>
          <p className="text-lg md:text-xl mb-6 text-gray-300">
            Personalized practice, mock tests, and AI-powered feedback to maximize your band.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link to="/sign-up">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(128, 90, 255, 0.6)" }}
                className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-purple-700"
              >
                Get Started
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Right Animated Cards - Only visible on large screens */}
        <motion.div className="hidden lg:flex lg:w-1/2 relative justify-center items-center h-72">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-40 h-56 rounded-2xl shadow-2xl bg-gradient-to-r from-purple-500 to-pink-500"
              style={{ top: `${i * 20}px`, left: `${i * 20}px` }}
              initial={{ y: -50 * i, scale: 0.9, rotate: i * 5 }}
              animate={{ y: [-50 * i, -30 * i, -50 * i], rotate: [i * 5, i * 10, i * 5] }}
              transition={{ duration: 6 + i, repeat: Infinity, repeatType: "mirror" }}
              whileHover={{ scale: 1.05, rotate: i * 5 + 3, boxShadow: "0 0 40px rgba(255, 0, 200, 0.5)" }}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
