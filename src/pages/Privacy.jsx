import { motion } from "framer-motion";
import {
  FiLock,
  FiDatabase,
  FiUserCheck,
  FiGlobe,
  FiShield,
  FiClock,
} from "react-icons/fi";

const sections = [
  {
    icon: FiDatabase,
    title: "Information We Collect",
    content:
      "We collect basic information such as your name, phone number, email address, location, and booking details when you use PujaConnect. This helps us process your ritual bookings and connect you with verified pandits efficiently.",
  },
  {
    icon: FiUserCheck,
    title: "How We Use Your Information",
    content:
      "Your information is used to facilitate ritual bookings, assign verified pandits, send booking confirmations, provide customer support, and improve platform experience. We do not use your data for unrelated purposes.",
  },
  {
    icon: FiLock,
    title: "Data Protection & Security",
    content:
      "We implement industry-standard security measures including encryption, secure servers, and restricted access controls to protect your personal data from unauthorized access, alteration, or misuse.",
  },
  {
    icon: FiGlobe,
    title: "Third-Party Sharing",
    content:
      "We do not sell or rent your data. Limited information is shared only with verified pandits and service partners strictly for completing your booked rituals.",
  },
  {
    icon: FiClock,
    title: "Data Retention",
    content:
      "We retain your data only as long as necessary to provide services and comply with legal obligations. You may request deletion of your account and associated data at any time.",
  },
  {
    icon: FiShield,
    title: "Cookies & Tracking",
    content:
      "We may use cookies and analytics tools to improve user experience, understand usage patterns, and enhance platform performance. You can disable cookies through your browser settings.",
  },
];

const Privacy = () => {
  return (
    <section className="min-h-screen bg-[#050816] text-white px-4 sm:px-6 lg:px-8 py-28 sm:py-28 relative overflow-hidden">

      {/* Glow Background */}
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
            Privacy <span className="text-amber-400">Policy</span>
          </h1>

          <p className="text-slate-400 mt-4 text-sm sm:text-base max-w-2xl mx-auto">
            We respect your privacy and are committed to protecting your personal information.
            This policy explains how PujaConnect collects, uses, and safeguards your data.
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

                {/* icon */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center flex-shrink-0">
                  <sec.icon className="text-amber-400 text-lg sm:text-xl" />
                </div>

                {/* text */}
                <div>
                  <h2 className="text-base sm:text-lg font-semibold text-white">
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
          Last updated: June 2026 • PujaConnect • All rights reserved
        </div>

      </div>
    </section>
  );
};

export default Privacy;