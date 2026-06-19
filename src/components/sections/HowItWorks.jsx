import { motion } from "framer-motion";
import { FiSearch, FiUserCheck, FiCalendar } from "react-icons/fi";
import { Link } from "react-router-dom";

const steps = [
  {
    number: "01",
    title: "Choose Your Ritual",
    description:
      "Browse sacred rituals including Griha Pravesh, Satyanarayan Katha, Vivah Puja, Havan and more.",
    icon: FiSearch,
  },
  {
    number: "02",
    title: "Select a Verified Pandit",
    description:
      "Choose from experienced Vedic pandits based on city, specialization, ratings and availability.",
    icon: FiUserCheck,
  },
  {
    number: "03",
    title: "Book & Perform Puja",
    description:
      "Confirm your booking and perform the ritual with complete guidance and authentic Vedic procedures.",
    icon: FiCalendar,
  },
];

const HowItWorks = () => {
  return (
    <section className="relative py-10 bg-[#050816] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-0 w-96 h-96 bg-amber-500/10 blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-amber-400 uppercase tracking-[0.35em] text-sm">
            Sacred Journey
          </span>

          <h2
            className="mt-5 text-4xl md:text-5xl font-bold text-white leading-tight"
            style={{ fontFamily: "Cinzel" }}
          >
            Your Sacred Journey
            <span className="block text-amber-400 mt-2">
              Begins Here
            </span>
          </h2>

          <p className="text-slate-400 mt-6 max-w-2xl mx-auto text-lg">
            Book trusted pandits and perform authentic Vedic rituals in just
            three simple steps.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -12,
                  scale: 1.03,
                }}
                className="group relative"
              >
                {/* Connection Line */}
                {index < 2 && (
                  <div className="hidden md:block absolute top-24 left-[88%] w-[55%] h-[2px] bg-gradient-to-r from-amber-400 via-orange-300/60 to-transparent z-0" />
                )}

                <div className="relative z-10 h-full rounded-[32px] bg-white/[0.04] border border-white/10 hover:border-amber-400/30 backdrop-blur-2xl p-8 overflow-hidden transition-all duration-500">

                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-orange-400/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                  {/* Huge Number */}
                  <span className="absolute -top-6 right-3 text-[120px] font-black text-white/[0.03] leading-none select-none">
                    {step.number}
                  </span>

                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      whileHover={{
                        rotate: 10,
                        scale: 1.08,
                      }}
                      className="w-20 h-20 rounded-3xl bg-gradient-to-br from-amber-400/20 to-orange-500/10 border border-amber-400/20 flex items-center justify-center shadow-lg shadow-amber-500/10"
                    >
                      <Icon className="text-amber-300 text-4xl" />
                    </motion.div>

                    {/* Step Number Badge */}
                    <div className="mt-6 inline-flex px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs tracking-wider">
                      STEP {step.number}
                    </div>

                    {/* Title */}
                    <h3 className="text-white text-2xl font-semibold mt-5">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-400 mt-4 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-20"
        >
          <p className="text-slate-400 mb-6 text-lg">
            Ready to begin your spiritual journey?
          </p>
          <Link to="/rituals">
            <button className="px-8 py-4 rounded-full bg-amber-400 text-black font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-amber-500/20">
              Explore Rituals
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;