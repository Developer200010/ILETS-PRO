import { motion } from "framer-motion";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <section className="w-full min-h-screen bg-black flex items-center justify-center px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white text-black rounded-xl shadow-xl w-full max-w-md p-6 sm:p-8"
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-5 text-center">
          Sign Up
        </h2>

        <form className="space-y-4 sm:space-y-6">
          {/* Username */}
          <div className="flex items-center border rounded-lg px-3 sm:px-4 py-2 sm:py-3">
            <FaUser className="text-gray-500 mr-2 sm:mr-3 text-lg sm:text-xl" />
            <input
              type="text"
              placeholder="Username"
              className="w-full outline-none text-sm sm:text-base"
            />
          </div>

          {/* Email */}
          <div className="flex items-center border rounded-lg px-3 sm:px-4 py-2 sm:py-3">
            <FaEnvelope className="text-gray-500 mr-2 sm:mr-3 text-lg sm:text-xl" />
            <input
              type="email"
              placeholder="Email"
              className="w-full outline-none text-sm sm:text-base"
            />
          </div>

          {/* Password */}
          <div className="flex items-center border rounded-lg px-3 sm:px-4 py-2 sm:py-3">
            <FaLock className="text-gray-500 mr-2 sm:mr-3 text-lg sm:text-xl" />
            <input
              type="password"
              placeholder="Password"
              className="w-full outline-none text-sm sm:text-base"
            />
          </div>

          {/* Sign-Up Button */}
          <Link to="/sign-up">
            <motion.button
              whileHover={{ scale: 1.03 }}
              className="w-full bg-indigo-500 text-white py-2.5 sm:py-3 rounded-lg shadow hover:bg-indigo-600 text-sm sm:text-base"
            >
              Sign Up
            </motion.button>
          </Link>
        </form>

        {/* Go to Home Button */}
        <Link to="/">
          <motion.button
            whileHover={{ scale: 1.03 }}
            className="w-full bg-yellow-500 text-white py-2.5 sm:py-3 rounded-lg shadow hover:bg-yellow-600 text-sm sm:text-base mt-3"
          >
            Go to Home
          </motion.button>
        </Link>

        {/* Login Link */}
        <p className="text-center text-gray-600 mt-5 text-xs sm:text-sm">
          Already have an account?{" "}
          <Link to="/login">
            <span className="text-indigo-500 hover:underline">Login</span>
          </Link>
        </p>
      </motion.div>
    </section>
  );
};

export default Register;
