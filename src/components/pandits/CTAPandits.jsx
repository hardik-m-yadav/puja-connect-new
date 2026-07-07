import { motion } from "framer-motion";
import { FiArrowRight, FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="relative py-24 bg-[#050816] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0">
        {/* <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-amber-500/10 blur-[160px]" /> */}
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-orange-500/10 blur-[160px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative text-center"
        >
          {/* Badge */}
          <span className="inline-block px-4 py-1 rounded-full text-xs tracking-[0.3em] uppercase bg-white/5 border border-white/10 text-amber-300">
            Divine Guidance Awaits
          </span>

          {/* Heading */}
          <h2
            className="mt-6 text-4xl md:text-6xl font-bold text-white leading-tight"
            style={{ fontFamily: "Cinzel" }}
          >
            Book a Verified Pandit
            <br />
            for Your Sacred Ritual
          </h2>

          {/* Subtext */}
          <p className="mt-6 text-slate-400 max-w-2xl mx-auto text-lg">
            From Griha Pravesh to Vivah Puja, connect with experienced and
            verified pandits who perform authentic Vedic rituals with complete
            guidance.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link to="/rituals">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-black font-semibold flex items-center gap-2 shadow-lg shadow-amber-500/20"
              >
                Book Your Puja Now
                <FiArrowRight />
              </motion.button>
            </Link>

            <a href="https://wa.me/917410194730">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full border border-white/15 text-white hover:border-amber-400/40 hover:text-amber-300 flex items-center gap-2 backdrop-blur-xl"
              >
                <FiPhoneCall />
                Talk to Expert
              </motion.button>
            </a>
          </div>

          {/* Trust Line */}
          <div className="mt-10 text-sm text-slate-500">
            ⚡ Instant booking • Verified Pandits • Live WhatsApp Support
          </div>
        </motion.div>

        {/* Floating decorative elements */}
        <div className="absolute top-10 left-10 w-3 h-3 bg-amber-400 rounded-full blur-sm animate-pulse" />
        <div className="absolute bottom-10 right-10 w-3 h-3 bg-orange-400 rounded-full blur-sm animate-pulse" />
      </div>
    </section>
  );
};

export default CTA;