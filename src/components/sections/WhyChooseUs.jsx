import { motion } from "framer-motion";
import {
  FiShield,
  FiMapPin,
  FiZap,
  FiCheckCircle,
} from "react-icons/fi";

const features = [
  {
    title: "Verified Pandits",
    description:
      "Experienced and verified Vedic pandits carefully selected for authenticity, professionalism, and deep ritual knowledge.",
    icon: FiCheckCircle,
  },
  {
    title: "Pan-India Coverage",
    description:
      "Book trusted pandits across major cities and perform sacred rituals wherever your family resides.",
    icon: FiMapPin,
  },
  {
    title: "Quick Booking",
    description:
      "Simple online booking process with fast confirmations, flexible scheduling, and dedicated support.",
    icon: FiZap,
  },
  {
    title: "Trusted & Transparent",
    description:
      "Clear pricing, authentic Vedic procedures, and reliable service without hidden charges.",
    icon: FiShield,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative py-20 bg-[#050816] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500/10 blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-amber-400 uppercase tracking-[0.3em] text-sm">
            Why Choose Us
          </span>

          <h2
            className="mt-4 text-4xl md:text-5xl font-bold text-white"
            style={{ fontFamily: "Cinzel" }}
          >
            Why Families Trust Puja Connect
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Experience authentic Vedic rituals with verified pandits,
            transparent pricing, and seamless booking.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group relative bg-white/[0.04] border border-white/10 hover:border-amber-400/30 backdrop-blur-xl rounded-3xl p-7 overflow-hidden"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent" />
                </div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center mb-6">
                    <Icon className="text-amber-400 text-3xl" />
                  </div>

                  {/* Title */}
                  <h3 className="text-white text-xl font-semibold">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 mt-4 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;



