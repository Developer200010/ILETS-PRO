import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", to: "/", id: "home" },
    { label: "Features", to: "/", id: "features" },
    { label: "Testimonials", to: "/", id: "testimonials" },
  ];

  const handleScrollTo = (id) => {
    setMobileOpen(false);
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Navbar */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled ? "bg-black shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl font-bold text-white"
          >
            <img src="/logo3.svg" width={100} height={100} alt="logo" />
          </motion.h1>

          {/* Desktop Links */}
          <ul className="hidden md:flex gap-6 font-medium text-white text-sm sm:text-base cursor-pointer">
            {navLinks.map((link, i) => (
              <li key={i}>
                {location.pathname === "/" ? (
                  <button
                    onClick={() => handleScrollTo(link.id)}
                    className="hover:text-gray-300 transition"
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link to="/" className="hover:text-gray-300 transition">
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Sign Up Button */}
          <Link to="/sign-up">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(128, 90, 255, 0.6)" }}
              className="hidden md:inline-block bg-purple-600 text-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg shadow hover:bg-purple-700 text-sm sm:text-base"
            >
              Sign Up
            </motion.button>
          </Link>

          {/* Hamburger Icon */}
          <div
            className="md:hidden text-white text-2xl cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </motion.nav>

      {/* Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Slide-in Menu */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: mobileOpen ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 120 }}
        className="fixed top-0 right-0 h-full w-3/4 bg-black text-white z-40 shadow-lg md:hidden"
      >
        <ul className="flex flex-col gap-6 px-6 sm:px-8 pt-24 text-base sm:text-lg">
          {navLinks.map((link, i) => (
            <li key={i} onClick={() => handleScrollTo(link.id)}>
              {location.pathname === "/" ? (
                <button className="hover:text-gray-300 block w-full text-left">
                  {link.label}
                </button>
              ) : (
                <Link to="/" className="hover:text-gray-300 block w-full text-left">
                  {link.label}
                </Link>
              )}
            </li>
          ))}
          <li>
            <Link to="/sign-up" onClick={() => setMobileOpen(false)}>
              <motion.button
                whileHover={{ scale: 1.03 }}
                className="w-full bg-purple-600 text-white py-3 rounded-lg shadow hover:bg-purple-700 text-sm sm:text-base"
              >
                Sign Up
              </motion.button>
            </Link>
          </li>
        </ul>
      </motion.div>
    </>
  );
};

export default Navbar;
