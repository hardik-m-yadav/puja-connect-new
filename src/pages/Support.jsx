import { motion } from "framer-motion";
import {
  FiHelpCircle,
  FiMessageCircle,
  FiPhone,
  FiMail,
  FiClock,
  FiCheckCircle,
} from "react-icons/fi";

const faqs = [
  {
    q: "How do I book a ritual?",
    a: "Go to the Rituals page, select a ritual, and click 'Book in 2 mins'. Fill in details and confirm your booking.",
  },
  {
    q: "Can I cancel a booking?",
    a: "Yes, cancellations are allowed before 24 hours of the scheduled ritual. Refund eligibility depends on timing.",
  },
  {
    q: "Are pandits verified?",
    a: "Yes, all pandits on PujaConnect go through a verification process before being listed on the platform.",
  },
  {
    q: "How do I contact support?",
    a: "You can reach us via WhatsApp, email, or phone support listed below.",
  },
];

const Support = () => {
  return (
    <section className="min-h-screen bg-[#050816] text-white px-4 sm:px-6 lg:px-8 py-28 sm:py-28 relative overflow-hidden">

      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-amber-500/10 blur-[150px]" />
        <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-orange-500/10 blur-[150px]" />
      </div>

      <div className="max-w-6xl mx-auto relative">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Support <span className="text-amber-400">Center</span>
          </h1>

          <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            We are here to help you with bookings, payments, rituals, and pandit-related queries.
          </p>
        </motion.div>

        {/* CONTACT CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">

          {/* WhatsApp */}
          <motion.a
            whileHover={{ y: -5 }}
            href="https://wa.me/917410194730"
            className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl hover:border-amber-400/30 transition"
          >
            <FiMessageCircle className="text-amber-400 text-2xl" />
            <h3 className="text-lg font-semibold mt-4">WhatsApp Support</h3>
            <p className="text-slate-400 text-sm mt-2">
              Get instant help from our support team.
            </p>
          </motion.a>

          {/* Phone */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl"
          >
            <FiPhone className="text-amber-400 text-2xl" />
            <h3 className="text-lg font-semibold mt-4">Call Us</h3>
            <p className="text-slate-400 text-sm mt-2">
              +91 93701 98135
            </p>
          </motion.div>

          {/* Email */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl"
          >
            <FiMail className="text-amber-400 text-2xl" />
            <h3 className="text-lg font-semibold mt-4">Email Support</h3>
            <p className="text-slate-400 text-sm mt-2">
              support@pujaconnect.com
            </p>
          </motion.div>
        </div>

        {/* FAQ SECTION */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <FiHelpCircle className="text-amber-400" />
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-xl"
              >
                <h3 className="font-semibold text-white flex items-center gap-2">
                  <FiCheckCircle className="text-amber-400" />
                  {item.q}
                </h3>
                <p className="text-slate-400 mt-2 text-sm">
                  {item.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FOOTER NOTE */}
        <div className="text-center text-sm text-slate-500">
          Support available 24/7 • PujaConnect Help Center
        </div>

      </div>
    </section>
  );
};

export default Support;