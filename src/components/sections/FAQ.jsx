import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiChevronDown,
  FiHelpCircle,
  FiShield,
  FiUserCheck,
  FiPackage,
  FiMapPin,
} from "react-icons/fi";

const faqs = [
  {
    icon: FiHelpCircle,
    question: "How do I book a pandit on Puja Connect?",
    answer:
      "Select your desired ritual, choose a verified pandit, and confirm your booking. You will receive instant confirmation along with all ritual details and guidance.",
  },
  {
    icon: FiUserCheck,
    question: "Are all pandits verified?",
    answer:
      "Yes. Every pandit goes through a strict verification process based on Vedic knowledge, experience, and past performance before being listed.",
  },
  {
    icon: FiPackage,
    question: "Do I need to arrange puja samagri?",
    answer:
      "You can either arrange it yourself or choose a complete package where all required samagri is provided.",
  },
  {
    icon: FiMapPin,
    question: "Can I book rituals in any city?",
    answer:
      "Yes, we provide Pan-India services across major cities. You can easily book pandits based on your location.",
  },
  {
    icon: FiShield,
    question: "What if my pandit is unavailable?",
    answer:
      "If a pandit is unavailable, we immediately assign another verified and equally experienced pandit.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-10 md:py-22 bg-[#050816] overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-amber-500/10 blur-[180px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-500/10 blur-[180px]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14 md:mb-20"
        >
          <span className="text-amber-400 uppercase tracking-[0.35em] text-xs sm:text-sm">
            FAQ
          </span>

          <h2
            className="mt-4 text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-white"
            style={{ fontFamily: "Cinzel" }}
          >
            Frequently Asked
            <span className="block text-amber-400 mt-2">
              Questions
            </span>
          </h2>

          <p className="text-slate-400 mt-5 max-w-2xl mx-auto text-sm sm:text-base">
            Everything you need to know before booking your sacred ritual.
          </p>
        </motion.div>

        {/* FAQ LIST */}
        <div className="space-y-5">
          {faqs.map((faq, index) => {
            const Icon = faq.icon;
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group relative overflow-hidden rounded-3xl border backdrop-blur-2xl transition-all duration-500 ${
                  isOpen
                    ? "border-amber-400/30 bg-white/[0.07]"
                    : "border-white/10 bg-white/[0.03]"
                }`}
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-transparent to-orange-500/10 opacity-0 group-hover:opacity-100 transition duration-500" />

                {/* Active Glow */}
                {isOpen && (
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-transparent" />
                )}

                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between gap-3 md:gap-5 p-4 sm:p-5 md:p-6 text-left relative z-10"
                >
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-11 h-11 md:w-14 md:h-14 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center shrink-0">
                      <Icon className="text-amber-400 text-lg md:text-xl" />
                    </div>

                    <span className="text-white text-sm sm:text-base md:text-lg font-medium">
                      {faq.question}
                    </span>
                  </div>

                  <motion.div
                    animate={{
                      rotate: isOpen ? 180 : 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="shrink-0"
                  >
                    <FiChevronDown className="text-xl md:text-2xl text-amber-400" />
                  </motion.div>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                      }}
                    >
                      <div className="px-5 md:px-6 pb-5 md:pb-6 text-slate-300 text-sm md:text-base leading-relaxed relative z-10">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex justify-center mt-12 md:mt-16"
        >
          <div className="px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-slate-300 text-sm">
            🙏 Trusted by thousands of devotees across India
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;