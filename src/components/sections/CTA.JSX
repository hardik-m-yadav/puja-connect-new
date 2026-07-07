
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight, FiPhoneCall, FiCalendar } from "react-icons/fi";

const floating = {
  animate: {
    y: [0, -12, 0],
    opacity: [0.4, 0.8, 0.4],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const CTA = () => {
  return (
    <section className="relative py-20 bg-[#050816] overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-0 left-0 w-[500px] h-[500px] bg-amber-500/10 blur-[160px]"
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-500/10 blur-[160px]"
        />
      </div>

      {/* FLOATING DOTS */}
      <motion.div
        variants={floating}
        animate="animate"
        className="absolute top-20 left-10 w-3 h-3 bg-amber-400 rounded-full"
      />
      <motion.div
        variants={floating}
        animate="animate"
        className="absolute bottom-24 right-16 w-2 h-2 bg-orange-400 rounded-full"
      />

      <div className="relative max-w-4xl mx-auto px-6 text-center">

        {/* BADGE */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-400/20 bg-white/5 backdrop-blur-xl">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-amber-300 text-xs tracking-[0.3em] uppercase">
            Book Your Ritual Today
          </span>
        </div>

        {/* HEADING */}
        <h2
          className="mt-8 text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
          style={{ fontFamily: "Cinzel" }}
        >
          Bring Divine Blessings
          <span className="block text-amber-400 mt-2">
            to Your Home
          </span>
        </h2>

        {/* SUBTEXT */}
        <p className="text-slate-400 mt-6 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
          Book verified Vedic pandits for Griha Pravesh, Vivah Puja, Satyanarayan Katha and more with complete guidance and authenticity.
        </p>

        {/* TRUST */}
        <div className="mt-5 text-amber-300 text-xs sm:text-sm">
          🔒 Trusted by 5000+ families across India
        </div>

        {/* BUTTONS */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

          {/* PRIMARY BUTTON */}
          <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }}>
            <Link
              to="/rituals"
              className="relative group px-8 py-4 rounded-full bg-amber-400 text-black font-semibold overflow-hidden flex items-center justify-center gap-2"
            >
              <span className="absolute inset-0 bg-white/30 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              <span className="relative flex items-center gap-2">
                Book a Ritual Now
                <FiArrowRight />
              </span>
            </Link>
          </motion.div>

          {/* SECONDARY BUTTON */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
            <Link
              to="/pandits"
              className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white backdrop-blur-xl hover:border-amber-400/30 transition flex items-center justify-center gap-2"
            >
              <FiCalendar />
              View Pandits
            </Link>
          </motion.div>
        </div>

        {/* SUPPORT */}
        <div className="mt-10 flex items-center justify-center gap-2 text-slate-400 text-xs sm:text-sm">
          <FiPhoneCall className="text-amber-400" />
          Need help? Instant support after booking
        </div>

      </div>
    </section>
  );
};

export default CTA;