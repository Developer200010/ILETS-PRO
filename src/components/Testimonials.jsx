import { motion } from "framer-motion";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const testimonials = [
  { 
    name: "Amit", 
    review: "Amazing institute! I improved my band score from 6 to 8.", 
    rating: 5, 
    img: "https://randomuser.me/api/portraits/men/32.jpg" 
  },
  { 
    name: "Sophia", 
    review: "Great teachers and fantastic mock tests. Highly recommend!", 
    rating: 4.5, 
    img: "https://randomuser.me/api/portraits/women/44.jpg" 
  },
  { 
    name: "Rahul", 
    review: "The AI feedback is super helpful. Best IELTS prep ever.", 
    rating: 5, 
    img: "https://randomuser.me/api/portraits/men/56.jpg" 
  },
];

const Testimonials = () => {

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(<FaStar key={i} className="text-yellow-400 inline" />);
      } else if (i - rating === 0.5) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400 inline" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400 inline" />);
      }
    }
    return stars;
  };

  return (
    <section
      id="testimonials"
      className="w-full min-h-screen relative flex flex-col justify-center px-6 py-20 overflow-hidden bg-gradient-to-r from-gray-900 to-black text-white"
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

      {/* Title */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-12 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        What Our <span className="text-purple-400">Students Say</span>
      </motion.h2>

      {/* Testimonial Cards */}
      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto relative z-10">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(128, 90, 255, 0.5)" }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.3 }}
            className={`bg-white text-black p-8 rounded-2xl shadow-xl min-h-[280px] flex flex-col items-center justify-between text-center`}
            style={{ transform: `translateY(${i * 10}px)` }} // staggered vertical effect
          >
            {/* Profile Image */}
            <img
              src={t.img}
              alt={t.name}
              className="w-20 h-20 rounded-full mb-4 shadow-lg"
            />
            {/* Review */}
            <p className="mb-4 text-lg leading-relaxed">“{t.review}”</p>
            {/* Stars */}
            <div className="mb-4">{renderStars(t.rating)}</div>
            {/* Name */}
            <h4 className="font-semibold text-xl">{t.name}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
