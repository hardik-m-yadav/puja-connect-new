import { motion } from "framer-motion";
import {
  FiStar,
  FiCalendar,
  FiClock,
  FiUsers,
} from "react-icons/fi";

const cardHover = {
  y: -8,
  scale: 1.02,
};

const HeroDashboard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.8,
      }}
      className="relative w-full max-w-2xl mx-auto"
    >
      {/* Glow */}
      <div className="absolute -top-10 -left-10 w-32 h-32 bg-amber-500/20 rounded-full blur-[80px]" />

      <div className="absolute -bottom-10 right-0 w-40 h-40 bg-yellow-500/10 rounded-full blur-[100px]" />

      {/* Main Dashboard */}
      <motion.div
        animate={{
          y: [-6, 6, -6],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-[32px] p-5 md:p-7 shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-white text-xl font-semibold">
              Spiritual Dashboard
            </h3>

            <p className="text-slate-400 text-sm mt-1">
              Personalized religious assistance
            </p>
          </div>

          <div className="flex items-center gap-2 text-emerald-400 text-sm">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            Live
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="bg-white/[0.03] rounded-2xl p-4 border border-white/5">
            <p className="text-slate-400 text-sm">
              Verified Pandits
            </p>

            <h4 className="text-2xl font-bold text-white mt-1">
              500+
            </h4>
          </div>

          <div className="bg-white/[0.03] rounded-2xl p-4 border border-white/5">
            <p className="text-slate-400 text-sm">
              Rituals Booked
            </p>

            <h4 className="text-2xl font-bold text-white mt-1">
              25K+
            </h4>
          </div>
        </div>

        {/* AI CARD */}
        <motion.div
          whileHover={cardHover}
          transition={{
            type: "spring",
            stiffness: 250,
            damping: 20,
          }}
          className="mt-5 rounded-3xl border border-amber-400/15 bg-gradient-to-r from-amber-500/10 to-transparent p-5 cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <FiStar className="text-amber-400 text-xl" />

            <div>
              <h4 className="text-white font-semibold">
                AI Guru Recommendation
              </h4>

              <p className="text-slate-400 text-sm">
                Based on your new house
              </p>
            </div>
          </div>

          <div className="mt-4 text-slate-300">
            Griha Pravesh Puja is recommended along with
            Vastu Shanti Havan.
          </div>
        </motion.div>

        {/* Bottom Cards */}
        <div className="grid md:grid-cols-2 gap-4 mt-5">

          <motion.div
            whileHover={cardHover}
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 20,
            }}
            className="rounded-3xl bg-white/[0.03] border border-white/5 p-5 cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <FiCalendar className="text-amber-400" />

              <h4 className="text-white font-medium">
                Festival Countdown
              </h4>
            </div>

            <div className="mt-4">
              <h3 className="text-white text-xl font-bold">
                Ganesh Chaturthi
              </h3>

              <p className="text-amber-400 mt-1">
                12 Days Left
              </p>
            </div>
          </motion.div>

          <motion.div
            whileHover={cardHover}
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 20,
            }}
            className="rounded-3xl bg-white/[0.03] border border-white/5 p-5 cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <FiClock className="text-amber-400" />

              <h4 className="text-white font-medium">
                Upcoming Booking
              </h4>
            </div>

            <div className="mt-4">
              <h3 className="text-white font-bold">
                Satyanarayan Katha
              </h3>

              <p className="text-slate-400 text-sm mt-1">
                15 June • 10:00 AM
              </p>
            </div>
          </motion.div>

        </div>

        {/* Footer */}
        <div className="mt-5 flex items-center justify-between border-t border-white/5 pt-4">
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <FiUsers />
            Trusted by thousands of families
          </div>

          <div className="text-amber-400 text-sm">
            Active
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroDashboard;