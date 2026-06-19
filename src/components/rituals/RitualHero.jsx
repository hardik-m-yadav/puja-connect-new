import { motion } from "framer-motion";
import { FiArrowRight, FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import CountUp from "react-countup";


const particles = [...Array(20)].map(() => ({
  x: Math.random() * 100,
  y: Math.random() * 100,
  duration: 5 + Math.random() * 4,
  delay: Math.random() * 3,
}));

const RitualHero = () => {
  return (
    <section className="relative min-h-screen mt-10 flex items-center justify-center overflow-hidden">


{particles.map((particle, i) => (
  <motion.div
    key={i}
    className="absolute w-1 h-1 bg-amber-400 rounded-full"
    style={{
      left: `${particle.x}%`,
      top: `${particle.y}%`,
    }}
    animate={{
      y: [0, -150],
      opacity: [0, 1, 0],
    }}
    transition={{
      repeat: Infinity,
      duration: particle.duration,
      delay: particle.delay,
    }}
  />
))}

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="8.jpg"
          alt="Ritual"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="absolute inset-0 bg-gradient-to-b from-[#050816]/50 via-[#050816]/30 to-[#050816]" />
      </div>

      {/* Glow */}
      <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-amber-500/10 blur-[160px]" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-orange-500/10 blur-[160px]" />

      {/* Floating Festival Card */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="hidden lg:block absolute left-20 top-40 z-20"
      >
        <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl p-5 w-60">
          <p className="text-amber-400 text-xs uppercase tracking-widest">
            Upcoming Festival
          </p>

          <h3 className="text-white text-xl font-semibold mt-2">
            Ganesh Chaturthi
          </h3>

          <p className="text-slate-400 mt-1">
            17 Sept 2026
          </p>

          <div className="mt-4 text-sm text-amber-300">
            Book Ganesh Sthapana Puja
          </div>
        </div>
      </motion.div>

      {/* Floating Booking Card */}
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="hidden lg:block absolute right-20 bottom-40 z-20"
      >
        <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl p-5 w-64">
          <p className="text-emerald-400 text-sm">
            ● 32 Bookings Today
          </p>

          <h3 className="text-white text-lg font-semibold mt-3">
            Griha Pravesh Puja
          </h3>

          <p className="text-slate-400 text-sm mt-1">
            Most booked ritual this week
          </p>
        </div>
      </motion.div>

      {/* Main Content */}
    <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 md:pt-20">

        <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-amber-400/20 bg-white/5 backdrop-blur-xl text-amber-400 text-xs tracking-[0.35em] uppercase">
          Sacred Rituals
        </span>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
 className="mt-6 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
          style={{ fontFamily: "Cinzel" }}
        >
          Book Sacred Rituals
          <span className="block text-amber-400 mt-3">
            With Verified Pandits
          </span>
          Across India
        </motion.h1>

        <p className="max-w-3xl mx-auto mt-8 text-slate-300 text-lg">
          Explore authentic Vedic rituals, compare verified pandits,
          and book sacred ceremonies with complete confidence.
        </p>

        {/* Search */}

<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4 }}
  className="max-w-xl mx-auto mt-10"
>
  <motion.div
    whileHover={{
      boxShadow: "0 0 40px rgba(251,191,36,0.15)",
    }}
    className="relative"
  >
    {/* Glow */}
    <div className="absolute inset-0 bg-amber-400/5 blur-2xl rounded-full" />

    <div className="relative flex items-center bg-white/10 backdrop-blur-2xl border border-white/10 rounded-full px-4 py-3">
      
      <FiSearch className="text-amber-400 text-lg shrink-0" />

      <input
        type="text"
        placeholder="Search rituals, pujas..."
        className="flex-1 bg-transparent px-3 text-white placeholder:text-slate-400 outline-none text-sm sm:text-base"
      />

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 bg-amber-400 text-black font-semibold px-4 sm:px-5 py-2 rounded-full"
      >
        <span className="hidden sm:block">
          Search
        </span>

        <FiArrowRight />
      </motion.button>
    </div>
  </motion.div>
</motion.div>
        {/* Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">

          <Link to="/pandits">
            <button className="w-full sm:w-auto px-8 py-4 hover:scale-105 transition rounded-full bg-amber-400 text-black font-semibold flex items-center justify-center gap-2">
              Browse Pandits
              <FiArrowRight />
            </button>
          </Link>

          <Link to="/ai-guru">
            <button className="w-full sm:w-auto px-8 hover:scale-105 transition py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-white">
              Talk To AI Guru
            </button>
          </Link>

        </div>

        {/* Stats */}
        {/* <div className="grid grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">

          <div>
            <h3 className="text-3xl font-bold text-amber-400">
              50+
            </h3>
            <p className="text-slate-400 mt-2">
              Rituals
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-amber-400">
              500+
            </h3>
            <p className="text-slate-400 mt-2">
              Verified Pandits
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-amber-400">
              5000+
            </h3>
            <p className="text-slate-400 mt-2">
              Happy Families
            </p>
          </div>

        </div> */}
       <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-14  max-w-4xl mx-auto">
  <motion.div
    whileHover={{ y: -8 }}
   className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 sm:p-6"
  >
  <h3 className="text-4xl font-bold text-amber-400">
  50+
</h3>

    <p className="text-slate-400 mt-2">
      Rituals
    </p>
  </motion.div>

  <motion.div
    whileHover={{ y: -8 }}
   className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 sm:p-6"
  >
   <h3 className="text-4xl font-bold text-amber-400">
  200+
</h3>

    <p className="text-slate-400 mt-2">
      Verified Pandits
    </p>
  </motion.div>

  <motion.div
    whileHover={{ y: -8 }}
   className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 sm:p-6"
  >
   <h3 className="text-4xl font-bold text-amber-400">
  800+
</h3>

    <p className="text-slate-400 mt-2">
      Happy Families
    </p>
  </motion.div>

</div>
      </div>
    </section>
  );
};

export default RitualHero;