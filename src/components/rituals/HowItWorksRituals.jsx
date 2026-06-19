import { motion } from "framer-motion";
import {
  FiSearch,
  FiUserCheck,
  FiCalendar,
  FiHeart,
} from "react-icons/fi";

const steps = [
  {
    icon: FiSearch,
    title: "Discover Ritual",
    description:
      "Browse sacred rituals curated for prosperity, peace, health, and spiritual growth.",
  },
  {
    icon: FiUserCheck,
    title: "Match with Pandit",
    description:
      "Get connected with verified and experienced pandits specialized in your selected ritual.",
  },
  {
    icon: FiCalendar,
    title: "Choose Muhurat",
    description:
      "Select a convenient date and auspicious time for a seamless spiritual experience.",
  },
  {
    icon: FiHeart,
    title: "Receive Blessings",
    description:
      "Participate online or at home and receive divine blessings with complete guidance.",
  },
];

const HowItWorks = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-[#050816]">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-0 w-72 h-72 bg-amber-500/10 blur-[140px]" />
        <div className="absolute bottom-20 right-0 w-72 h-72 bg-purple-500/10 blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-2 text-sm text-amber-300 backdrop-blur-md">
            Sacred Journey
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-white">
            How It Works
          </h2>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            A simple and guided process to connect you with the right ritual,
            the right pandit, and the right blessings.
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Center Line */}
          <div className="absolute top-16 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

          <div className="grid grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.15,
                    duration: 0.5,
                  }}
                  className="relative text-center"
                >
                  {/* Circle */}
                  <div className="relative mx-auto w-20 h-20 rounded-full border border-amber-500/20 bg-white/5 backdrop-blur-xl flex items-center justify-center">
                    <Icon className="text-3xl text-amber-400" />

                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-amber-500 text-black text-sm font-bold flex items-center justify-center">
                      {index + 1}
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-white">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-gray-400 leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden relative">
          <div className="absolute left-[31px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-amber-500/50 to-purple-500/30" />

          <div className="space-y-10">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  className="relative flex gap-5"
                >
                  {/* Circle */}
                  <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full border border-amber-500/20 bg-white/5 backdrop-blur-xl flex items-center justify-center">
                    <Icon className="text-2xl text-amber-400" />

                    <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-amber-500 text-black text-xs font-bold flex items-center justify-center">
                      {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pb-6">
                    <h3 className="text-lg font-semibold text-white">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-gray-400">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;