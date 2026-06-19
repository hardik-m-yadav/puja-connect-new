import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiHelpCircle } from "react-icons/fi";

const faqs = [
  {
    q: "How does PujaConnect ensure pandit authenticity?",
    a: "Every pandit goes through a strict verification process including identity checks, Vedic knowledge validation, and experience review before joining the platform.",
  },
  {
    q: "Can I book a pandit for my preferred date and time?",
    a: "Yes, you can select your preferred date and time while booking. Availability is shown in real time based on pandit schedules.",
  },
  {
    q: "Do pandits travel outside their city?",
    a: "Yes, many pandits are available for travel depending on distance and ritual requirements. Travel details are shown before booking confirmation.",
  },
  {
    q: "What if I am not sure which ritual I need?",
    a: "You can contact support or browse rituals on the platform. We also guide users based on their occasion like marriage, housewarming, or festivals.",
  },
  {
    q: "Is online payment safe?",
    a: "Yes, all payments are secured using trusted payment gateways with full encryption and confirmation receipts.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState(0);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <section className="py-28 bg-[#050816]">
      <div className="max-w-4xl mx-auto px-4">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <div className="px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm flex items-center gap-2">
              <FiHelpCircle />
              Help Center
            </div>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Questions Families{" "}
            <span className="text-amber-400">Ask Most</span>
          </h2>

          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Clear answers to help you book the right pandit with confidence.
          </p>
        </motion.div>

        {/* FAQ LIST */}
        <div className="space-y-3">

          {faqs.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="
                border border-white/10
                bg-white/5
                rounded-2xl
                overflow-hidden
                backdrop-blur-xl
                hover:border-amber-400/20
                transition
              "
            >
              {/* Question */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-6 py-5 text-left"
              >
                <span className="text-white font-medium text-sm sm:text-base">
                  {item.q}
                </span>

                <span className="text-amber-400 text-xl">
                  {open === index ? "−" : "+"}
                </span>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {open === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="px-6 pb-5 text-slate-400 text-sm leading-relaxed"
                  >
                    {item.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default FAQ;