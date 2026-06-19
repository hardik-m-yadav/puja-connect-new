import { motion } from "framer-motion";
import {
FiFacebook,
FiInstagram,
FiTwitter,
} from "react-icons/fi";

import {
FaOm,
FaYoutube,
} from "react-icons/fa";

import { Link } from "react-router-dom";

const Footer = () => {
return ( <footer className="relative overflow-hidden bg-[#050816] border-t border-white/10">

  {/* Background Glow */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute left-0 top-0 w-96 h-96 bg-amber-500/10 blur-[140px]" />
    <div className="absolute right-0 bottom-0 w-96 h-96 bg-orange-500/10 blur-[140px]" />
  </div>

  <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

    {/* TOP SECTION */}
    <div className="py-20 grid md:grid-cols-2 lg:grid-cols-4 gap-12">

      {/* Brand */}
      <div>
        <div className="flex items-center gap-3">

          <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center">
            <FaOm className="text-amber-400 text-xl" />
          </div>

          <div>
            <h3
              className="text-2xl font-bold text-white"
              style={{ fontFamily: "Cinzel" }}
            >
              PujaConnect
            </h3>

            <p className="text-xs text-slate-500">
              Sacred Rituals Simplified
            </p>
          </div>
        </div>

        <p className="text-slate-400 mt-6 leading-relaxed">
          Connecting devotees with verified pandits across India
          for authentic rituals, spiritual guidance, and sacred
          ceremonies.
        </p>

        <div className="flex gap-4 mt-6">

          {[
            FiFacebook,
            FiInstagram,
            FiTwitter,
            FaYoutube,
          ].map((Icon, i) => (
            <motion.a
              key={i}
              href="#"
              whileHover={{ y: -4 }}
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-amber-400 hover:border-amber-400/30 transition"
            >
              <Icon />
            </motion.a>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="text-white font-semibold mb-5">
          Quick Links
        </h4>

        <div className="flex flex-col gap-3">
          <Link
            to="/"
            className="text-slate-400 hover:text-amber-400 transition"
          >
            Home
          </Link>

          <Link
            to="/rituals"
            className="text-slate-400 hover:text-amber-400 transition"
          >
            Rituals
          </Link>

          <Link
            to="/pandits"
            className="text-slate-400 hover:text-amber-400 transition"
          >
            Pandits
          </Link>

          <Link
            to="/ai-guru"
            className="text-slate-400 hover:text-amber-400 transition"
          >
            AI Guru
          </Link>
        </div>
      </div>

      {/* Services */}
      <div>
        <h4 className="text-white font-semibold mb-5">
          Popular Services
        </h4>

        <div className="flex flex-col gap-3 text-slate-400">
          <span>Griha Pravesh</span>
          <span>Satyanarayan Katha</span>
          <span>Vivah Puja</span>
          <span>Navgraha Shanti</span>
          <span>Rudra Abhishek</span>
        </div>
      </div>

      {/* Newsletter */}
      <div>
        <h4 className="text-white font-semibold mb-5">
          Stay Connected
        </h4>

        <p className="text-slate-400 text-sm mb-4">
          Receive festival updates and spiritual guidance.
        </p>

        <div className="space-y-3">
          <input
            type="email"
            placeholder="Enter email"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-amber-400/40"
          />

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="w-full py-3 rounded-xl bg-amber-400 text-black font-semibold"
          >
            Subscribe
          </motion.button>
        </div>
      </div>

    </div>

    {/* Middle Quote */}
    <div className="border-t border-white/10 py-10 text-center">

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-slate-400 italic"
      >
        "May every home be blessed with peace,
        prosperity, and divine grace."
      </motion.p>

    </div>

    {/* Bottom */}
    <div className="border-t border-white/10 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

      <p className="text-slate-500 text-sm text-center md:text-left">
        © {new Date().getFullYear()} PujaConnect.
        All rights reserved.
      </p>

      <div className="flex gap-6 text-sm">
       <Link
  to="/privacy"
  className="text-slate-500 hover:text-amber-400 transition"
>
  Privacy Policy
</Link>

<Link
  to="/terms"
  className="text-slate-500 hover:text-amber-400 transition"
>
  Terms & Conditions
</Link>

<Link
  to="/support"
  className="text-slate-500 hover:text-amber-400 transition"
>
  Support
</Link>
      </div>

    </div>
  </div>
</footer>

);
};

export default Footer;
