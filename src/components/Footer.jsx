import { motion } from "framer-motion";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white px-6 py-10">
      {/* Brand Logo */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center md:text-left mb-6 flex flex-col items-center md:items-start"
      >
        <div className="flex items-center gap-2">
          <img src="/logo3.svg" width={100} height={100} alt="logo" />
        </div>
        <p className="text-gray-400 mt-2 text-sm">
          Your trusted partner for IELTS preparation.
        </p>
      </motion.div>

      {/* Links */}
      <motion.ul
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.2, duration: 0.6 },
          },
        }}
        className="flex flex-wrap justify-center md:justify-start gap-6 text-sm mb-6"
      >
        {["Home", "Features", "Testimonials"].map((link, i) => (
          <motion.li
            key={i}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <a href={`#${link.toLowerCase()}`} className="hover:text-gray-400 transition">
              {link}
            </a>
          </motion.li>
        ))}
      </motion.ul>

      {/* Socials */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex justify-center md:justify-start gap-4 mb-6 text-xl"
      >
        <a href="#" className="hover:text-gray-400 transition"><AiOutlineGlobal /></a>
        <a href="#" className="hover:text-gray-400 transition"><FaFacebookF /></a>
        <a href="#" className="hover:text-gray-400 transition"><FaTwitter /></a>
        <a href="#" className="hover:text-gray-400 transition"><FaYoutube /></a>
      </motion.div>

      {/* Bottom note */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="text-center md:text-left text-xs text-gray-500 font-bold"
      >
        © 2025 IELTSPro. All rights reserved.
      </motion.p>
    </footer>
  );
}
