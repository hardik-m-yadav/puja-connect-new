import { motion } from "framer-motion";
import { FiCheckCircle, FiStar, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const pandits = [
  {
    id: 1,
    name: "Pandit Rajesh Ji",
    exp: "18+ Years Experience",
    lang: "Hindi • Sanskrit",
    rating: "4.9",
    specialization: "Ganesh • Griha Shanti",
    img: "p6.jpg",
  },
  {
    id: 2,
    name: "Pandit Sharma Ji",
    exp: "15+ Years Experience",
    lang: "Hindi • Marathi",
    rating: "4.8",
    specialization: "Navratri • Durga Puja",
    img: "p9.jpg",
  },
  {
    id: 3,
    name: "Pandit Mishra Ji",
    exp: "20+ Years Experience",
    lang: "Hindi • English • Sanskrit",
    rating: "5.0",
    specialization: "Lakshmi Puja • Diwali",
    img: "p1.jpg",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

const PanditSection = () => {
  return (
    <section className="relative py-24 bg-[#050816] overflow-hidden">

      {/* Premium background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-[-100px] left-[-80px] w-[300px] h-[300px] bg-amber-500/20 blur-[140px]" />
        <div className="absolute bottom-[-100px] right-[-80px] w-[300px] h-[300px] bg-purple-500/20 blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-5xl font-bold text-white">
            Meet Our{" "}
            <span className="text-amber-400">Verified Pandits</span>
          </h2>
          <p className="text-gray-400 mt-3 text-sm sm:text-base max-w-2xl mx-auto">
            Experienced Vedic experts trusted by thousands for sacred rituals across India.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {pandits.map((p, i) => (
            <motion.div
              key={p.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl"
            >

              {/* Image Section */}
              <div className="relative h-60 overflow-hidden">

                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                {/* Gradient overlay (IMPORTANT for premium feel) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Verified badge */}
                <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 rounded-full bg-black/60 border border-green-400/30 text-green-400 text-xs backdrop-blur-md">
                  <FiCheckCircle />
                  Verified
                </div>

              </div>

              {/* Content */}
              <div className="p-5">

                {/* Name */}
                <h3 className="text-xl font-semibold text-white">
                  {p.name}
                </h3>

                {/* Experience */}
                <p className="text-sm text-gray-400 mt-1">{p.exp}</p>

                {/* Languages */}
                <p className="text-xs text-gray-500 mt-1">{p.lang}</p>

                {/* Specialization chip */}
                <div className="mt-3 inline-block px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 text-xs border border-amber-500/20">
                  {p.specialization}
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mt-4">
                  <FiStar className="text-amber-400" />
                  <span className="text-white font-medium">{p.rating}</span>
                  <span className="text-gray-500 text-xs">Rating</span>
                </div>

                {/* CTA */}
                <Link to={`/pandits/${p.id}`}>
                  <button className="mt-5 w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-amber-500 text-black font-semibold hover:bg-amber-400 transition-all duration-300 hover:shadow-[0_0_25px_rgba(251,191,36,0.4)]">
                    Book Now
                    <FiArrowRight />
                  </button>
                </Link>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default PanditSection;