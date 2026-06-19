import { motion } from "framer-motion";
import {
  FiSearch,
  FiCalendar,
  FiUser,
  FiAward,
  FiHeart,
} from "react-icons/fi";

const steps = [
  {
    icon: <FiSearch />,
    title: "Select Ritual",
    description:
      "Choose the ritual that best matches your spiritual needs and goals.",
  },
  {
    icon: <FiCalendar />,
    title: "Choose Date & Muhurat",
    description:
      "Select your preferred date or receive guidance on the most auspicious timing.",
  },
  {
    icon: <FiUser />,
    title: "Connect with Pandit",
    description:
      "Get matched with an experienced and verified pandit for your ritual.",
  },
  {
    icon: <FiAward />,
    title: "Perform the Ritual",
    description:
      "Complete the puja with proper Vedic guidance and sacred procedures.",
  },
  {
    icon: <FiHeart />,
    title: "Receive Blessings",
    description:
      "Receive blessings, spiritual guidance, and ritual completion details.",
  },
];

const RitualProcess = () => {
  return (
    <section className="relative py-24 bg-[#050816] overflow-hidden">
      {/* Glow */}
      <div className="absolute top-20 left-0 w-80 h-80 bg-amber-500/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-500/10 blur-[160px]" />

      <div className="relative max-w-6xl mx-auto px-5">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block px-4 py-2 rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-300 text-sm">
            Simple & Transparent
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-white">
            How It Works
          </h2>

          <p className="mt-5 text-gray-400 leading-relaxed">
            From booking your ritual to receiving blessings, we make the
            entire process smooth, guided, and spiritually fulfilling.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="mt-20 relative">
          {/* Vertical Line */}
          <div className="absolute left-7 top-0 bottom-0 w-px bg-gradient-to-b from-amber-500/50 via-white/10 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className={`
                  relative flex items-start
                  ${
                    index % 2 === 0
                      ? "md:flex-row"
                      : "md:flex-row-reverse"
                  }
                `}
              >
                {/* Content */}
                <div className="ml-20 md:ml-0 md:w-1/2 md:px-10">
                  <div
                    className="
                      rounded-3xl
                      border
                      border-white/10
                      bg-white/5
                      backdrop-blur-xl
                      p-6
                      hover:border-amber-500/30
                      transition-all
                      duration-300
                    "
                  >
                    <span className="text-amber-400 text-sm font-medium">
                      Step {index + 1}
                    </span>

                    <h3 className="mt-2 text-2xl font-semibold text-white">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Icon */}
                <div
                  className="
                    absolute
                    left-0
                    md:left-1/2
                    md:-translate-x-1/2
                    flex
                    items-center
                    justify-center
                    w-14
                    h-14
                    rounded-full
                    border
                    border-amber-500/30
                    bg-[#0B1226]
                    text-amber-400
                    text-xl
                    z-10
                  "
                >
                  {step.icon}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RitualProcess;