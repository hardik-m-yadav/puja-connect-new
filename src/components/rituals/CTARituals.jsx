import { motion } from "framer-motion";
import { FiArrowRight, FiMessageCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-[#050816]">

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-amber-500/10 blur-[180px]" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-purple-500/10 blur-[140px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-5">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 sm:p-12 lg:p-16 text-center"
        >
          {/* subtle overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-purple-500/5" />

          <div className="relative z-10">

            {/* badge */}
            <div className="inline-flex items-center rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-2 text-sm text-amber-300 backdrop-blur-md">
              ✨ Trusted by Thousands of Devotees
            </div>

            {/* heading */}
            <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Begin Your
              <span className="block text-amber-400">
                Spiritual Journey
              </span>
            </h2>

            {/* description */}
            <p className="mt-6 max-w-2xl mx-auto text-gray-400 text-base md:text-lg leading-relaxed">
              Discover sacred rituals, connect with experienced pandits,
              and receive divine blessings from the comfort of your home.
            </p>

            {/* buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">

              <Link to="/pandits">
                <button className="group w-full sm:w-auto px-8 py-4 rounded-2xl bg-amber-500 text-black font-semibold flex items-center justify-center gap-2 hover:bg-amber-400 transition active:scale-95">
                  Explore Pandits
                  <FiArrowRight className="group-hover:translate-x-1 transition" />
                </button>
              </Link>

              <Link to="/ai-guru">
                <button className="group w-full sm:w-auto px-8 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-white font-semibold flex items-center justify-center gap-2 hover:bg-white/10 transition active:scale-95">
                  <FiMessageCircle />
                  Ask AI Guide
                </button>
              </Link>

            </div>

            {/* stats */}
            <div className="mt-12 grid grid-cols-3 gap-4 max-w-2xl mx-auto">

              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-amber-400">
                  5K+
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  Rituals Completed
                </p>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-amber-400">
                  50+
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  Verified Pandits
                </p>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-amber-400">
                  4.9★
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  Average Rating
                </p>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default CTASection;