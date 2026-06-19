import { motion } from "framer-motion";
import {
  FiFileText,
  FiShield,
  FiAlertTriangle,
  FiCheckCircle,
  FiCreditCard,
  FiUser,
} from "react-icons/fi";

const sections = [
  {
    icon: FiCheckCircle,
    title: "Acceptance of Terms",
    content:
      "By accessing and using PujaConnect, you agree to be bound by these Terms & Conditions. If you do not agree, please do not use our services.",
  },
  {
    icon: FiFileText,
    title: "Platform Usage",
    content:
      "PujaConnect provides a platform to book verified pandits for rituals and ceremonies. We act only as an intermediary between users and service providers.",
  },
  {
    icon: FiUser,
    title: "User Responsibilities",
    content:
      "Users must provide accurate personal and booking details. Any misuse, false bookings, or fraudulent activity may lead to account suspension.",
  },
  {
    icon: FiCreditCard,
    title: "Payments & Pricing",
    content:
      "All payments must be completed through approved methods. Prices may vary depending on ritual type, location, and pandit availability.",
  },
  {
    icon: FiAlertTriangle,
    title: "Cancellations & Refunds",
    content:
      "Cancellations made at least 24 hours before the booking may be eligible for partial refunds. Last-minute cancellations may not be refunded.",
  },
  {
    icon: FiShield,
    title: "Limitation of Liability",
    content:
      "PujaConnect is not responsible for any delays, service issues, or disputes arising between users and pandits during the ritual process.",
  },
];

const Terms = () => {
  return (
    <section className="min-h-screen bg-[#050816] text-white px-4 sm:px-6 lg:px-8 py-28 sm:py-28 relative overflow-hidden">

      {/* background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-amber-500/10 blur-[150px]" />
        <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-orange-500/10 blur-[150px]" />
      </div>

      <div className="max-w-5xl mx-auto relative">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10 sm:mb-14"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Terms & <span className="text-amber-400">Conditions</span>
          </h1>

          <p className="text-slate-400 mt-4 text-sm sm:text-base max-w-2xl mx-auto">
            Please read these Terms carefully before using PujaConnect services.
            These govern your use of our platform.
          </p>
        </motion.div>

        {/* CONTENT */}
        <div className="space-y-5 sm:space-y-6">

          {sections.map((sec, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl p-5 sm:p-6 backdrop-blur-xl hover:border-amber-400/30 transition"
            >

              {/* hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-amber-400/5 rounded-xl sm:rounded-2xl transition" />

              <div className="relative flex gap-4 sm:gap-5">

                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center flex-shrink-0">
                  <sec.icon className="text-amber-400 text-lg sm:text-xl" />
                </div>

                <div>
                  <h2 className="text-base sm:text-lg font-semibold">
                    {sec.title}
                  </h2>
                  <p className="text-slate-400 mt-2 text-sm sm:text-base leading-relaxed">
                    {sec.content}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* FOOTER NOTE */}
        <div className="mt-10 sm:mt-14 text-center text-xs sm:text-sm text-slate-500">
          Effective from June 2026 • PujaConnect
        </div>

      </div>
    </section>
  );
};

export default Terms;