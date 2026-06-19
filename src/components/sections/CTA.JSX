// import { motion } from "framer-motion";
// import { FiArrowRight, FiPhoneCall, FiCalendar } from "react-icons/fi";

// const CTA = () => {
//   return (
//     <section className="relative py-28 bg-[#050816] overflow-hidden">
//       {/* Background Glow */}
//       <div className="absolute inset-0">
//         <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500/10 blur-[140px]" />
//         <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 blur-[140px]" />
//       </div>

//       <div className="relative max-w-5xl mx-auto px-6 text-center">

//         {/* Badge */}
//         <span className="text-amber-400 uppercase tracking-[0.3em] text-sm">
//           Book Your Ritual Today
//         </span>

//         {/* Heading */}
//         <h2
//           className="mt-6 text-4xl md:text-5xl font-bold text-white leading-tight"
//           style={{ fontFamily: "Cinzel" }}
//         >
//           Bring Divine Blessings <br />
//           to Your Home
//         </h2>

//         {/* Subtext */}
//         <p className="text-slate-400 mt-6 max-w-2xl mx-auto text-lg">
//           Book verified Vedic pandits for Griha Pravesh, Vivah Puja, Satyanarayan Katha and more.
//           Experience authentic rituals with complete guidance.
//         </p>

//         {/* Trust line */}
//         <p className="text-amber-300 mt-4 text-sm">
//           🔒 Trusted by 5000+ families across India
//         </p>

//         {/* Buttons */}
//         <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">

//           {/* Primary CTA */}
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.97 }}
//             className="flex items-center gap-2 px-8 py-4 rounded-full bg-amber-400 text-black font-semibold shadow-lg hover:shadow-amber-400/30 transition"
//           >
//             Book a Ritual Now
//             <FiArrowRight />
//           </motion.button>

//           {/* Secondary CTA */}
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.97 }}
//             className="flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white hover:border-amber-400/30 transition"
//           >
//             <FiCalendar />
//             View Pandits
//           </motion.button>
//         </div>

//         {/* Support line */}
//         <div className="mt-10 flex items-center justify-center gap-2 text-slate-400 text-sm">
//           <FiPhoneCall className="text-amber-400" />
//           Need help? Our team will assist you instantly after booking
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CTA;



// import { motion } from "framer-motion";
// import { FiArrowRight, FiPhoneCall, FiCalendar } from "react-icons/fi";

// const floating = {
//   animate: {
//     y: [0, -12, 0],
//     opacity: [0.4, 0.8, 0.4],
//     transition: {
//       duration: 6,
//       repeat: Infinity,
//       ease: "easeInOut",
//     },
//   },
// };

// const CTA = () => {
//   return (
//     <section className="relative py-20 md:py-20 bg-[#050816] overflow-hidden">

//       {/* BACKGROUND GLOW */}
//       <div className="absolute inset-0">
//         <motion.div
//           animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
//           transition={{ duration: 10, repeat: Infinity }}
//           className="absolute top-0 left-0 w-[500px] h-[500px] bg-amber-500/10 blur-[160px]"
//         />
//         <motion.div
//           animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.4, 0.2] }}
//           transition={{ duration: 12, repeat: Infinity }}
//           className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-500/10 blur-[160px]"
//         />
//       </div>

//       {/* FLOATING ELEMENTS */}
//       <motion.div
//         variants={floating}
//         animate="animate"
//         className="absolute top-20 left-10 w-3 h-3 bg-amber-400 rounded-full"
//       />
//       <motion.div
//         variants={floating}
//         animate="animate"
//         className="absolute bottom-24 right-16 w-2 h-2 bg-orange-400 rounded-full"
//       />

//       <div className="relative max-w-4xl mx-auto px-6 text-center">

//         {/* BADGE */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-400/20 bg-white/5 backdrop-blur-xl"
//         >
//           <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
//           <span className="text-amber-300 text-xs tracking-[0.3em] uppercase">
//             Book Your Ritual Today
//           </span>
//         </motion.div>

//         {/* HEADING */}
//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="mt-8 text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
//           style={{ fontFamily: "Cinzel" }}
//         >
//           Bring Divine Blessings
//           <span className="block text-amber-400 mt-2">
//             to Your Home
//           </span>
//         </motion.h2>

//         {/* SUBTEXT */}
//         <motion.p
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           className="text-slate-400 mt-6 text-sm sm:text-base md:text-lg max-w-2xl mx-auto"
//         >
//           Book verified Vedic pandits for Griha Pravesh, Vivah Puja, Satyanarayan Katha and more with complete guidance and authenticity.
//         </motion.p>

//         {/* TRUST STRIP */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           className="mt-5 text-amber-300 text-xs sm:text-sm"
//         >
//           🔒 Trusted by 5000+ families across India
//         </motion.div>

//         {/* BUTTONS */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
//         >

//           {/* PRIMARY */}
//           <motion.button
//             whileHover={{ scale: 1.06 }}
//             whileTap={{ scale: 0.96 }}
//             className="relative group px-8 py-4 rounded-full bg-amber-400 text-black font-semibold overflow-hidden"
//           >
//             <span className="absolute inset-0 bg-white/30 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
//             <span className="relative flex items-center justify-center gap-2">
//               Book a Ritual Now
//               <FiArrowRight />
//             </span>
//           </motion.button>

//           {/* SECONDARY */}
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white backdrop-blur-xl hover:border-amber-400/30 transition flex items-center justify-center gap-2"
//           >
//             <FiCalendar />
//             View Pandits
//           </motion.button>
//         </motion.div>

//         {/* SUPPORT */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           className="mt-10 flex items-center justify-center gap-2 text-slate-400 text-xs sm:text-sm"
//         >
//           <FiPhoneCall className="text-amber-400" />
//           Need help? Instant support after booking
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default CTA;




// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import {
//   FiArrowRight,
//   FiPhoneCall,
//   FiCalendar,
//   FiShield,
//   FiUsers,
//   FiStar,
// } from "react-icons/fi";

// const float = {
//   animate: {
//     y: [0, -10, 0],
//     opacity: [0.35, 0.7, 0.35],
//     transition: {
//       duration: 7,
//       repeat: Infinity,
//       ease: "easeInOut",
//     },
//   },
// };

// const CTA = () => {
//   return (
//     <section className="relative py-24 md:py-28 bg-[#050816] overflow-hidden">

//       {/* BACKGROUND */}
//       <div className="absolute inset-0">
//         <motion.div
//           animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.4, 0.25] }}
//           transition={{ duration: 12, repeat: Infinity }}
//           className="absolute top-[-120px] left-[-120px] w-[500px] h-[500px] bg-amber-500/10 blur-[180px]"
//         />
//         <motion.div
//           animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.35, 0.2] }}
//           transition={{ duration: 14, repeat: Infinity }}
//           className="absolute bottom-[-120px] right-[-120px] w-[520px] h-[520px] bg-orange-500/10 blur-[200px]"
//         />
//       </div>

//       {/* FLOATING DOTS */}
//       <motion.div variants={float} animate="animate" className="absolute top-24 left-10 w-2 h-2 rounded-full bg-amber-400" />
//       <motion.div variants={float} animate="animate" className="absolute bottom-24 right-16 w-2 h-2 rounded-full bg-orange-400" />

//       <div className="relative max-w-5xl mx-auto px-6 text-center">

//         {/* BADGE */}
//         <motion.div
//           initial={{ opacity: 0, y: 10 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl"
//         >
//           <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
//           <span className="text-amber-300 text-xs tracking-[0.35em] uppercase">
//             Sacred Booking Platform
//           </span>
//         </motion.div>

//         {/* HEADING */}
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           className="mt-8 text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight"
//           style={{ fontFamily: "Cinzel" }}
//         >
//           Bring Divine Energy
//           <span className="block text-amber-400 mt-2">
//             Into Your Home
//           </span>
//         </motion.h2>

//         {/* SUBTEXT */}
//         <motion.p
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           className="mt-6 text-slate-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto"
//         >
//           Book verified Vedic pandits for rituals like Griha Pravesh, Vivah Puja, Satyanarayan Katha with authentic guidance and real-time support.
//         </motion.p>

//         {/* TRUST STRIP */}
//         <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto">
//           {[
//             { icon: FiUsers, text: "5000+ Families" },
//             { icon: FiShield, text: "Verified Pandits" },
//             { icon: FiStar, text: "4.9 Avg Rating" },
//           ].map((item, i) => {
//             const Icon = item.icon;
//             return (
//               <div
//                 key={i}
//                 className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 text-sm backdrop-blur-xl"
//               >
//                 <Icon className="text-amber-400" />
//                 {item.text}
//               </div>
//             );
//           })}
//         </div>

//         {/* BUTTONS (LINKED) */}
//         <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">

//           {/* PRIMARY → Rituals */}
//           <Link to="/rituals">
//             <motion.button
//               whileHover={{ scale: 1.06 }}
//               whileTap={{ scale: 0.96 }}
//               className="relative group px-8 py-4 rounded-full bg-amber-400 text-black font-semibold overflow-hidden"
//             >
//               <span className="absolute inset-0 bg-white/30 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
//               <span className="relative flex items-center gap-2">
//                 Book Ritual Now <FiArrowRight />
//               </span>
//             </motion.button>
//           </Link>

//           {/* SECONDARY → Pandits */}
//           <Link to="/pandits">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.97 }}
//               className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white backdrop-blur-xl hover:border-amber-400/30 transition flex items-center justify-center gap-2"
//             >
//               <FiCalendar />
//               View Pandits
//             </motion.button>
//           </Link>

//         </div>

//         {/* SUPPORT */}
//         <div className="mt-10 flex items-center justify-center gap-2 text-slate-400 text-sm">
//           <FiPhoneCall className="text-amber-400" />
//           Instant support available after booking
//         </div>

//       </div>
//     </section>
//   );
// };

// export default CTA;






import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight, FiPhoneCall, FiCalendar } from "react-icons/fi";

const floating = {
  animate: {
    y: [0, -12, 0],
    opacity: [0.4, 0.8, 0.4],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const CTA = () => {
  return (
    <section className="relative py-20 bg-[#050816] overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-0 left-0 w-[500px] h-[500px] bg-amber-500/10 blur-[160px]"
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-500/10 blur-[160px]"
        />
      </div>

      {/* FLOATING DOTS */}
      <motion.div
        variants={floating}
        animate="animate"
        className="absolute top-20 left-10 w-3 h-3 bg-amber-400 rounded-full"
      />
      <motion.div
        variants={floating}
        animate="animate"
        className="absolute bottom-24 right-16 w-2 h-2 bg-orange-400 rounded-full"
      />

      <div className="relative max-w-4xl mx-auto px-6 text-center">

        {/* BADGE */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-400/20 bg-white/5 backdrop-blur-xl">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-amber-300 text-xs tracking-[0.3em] uppercase">
            Book Your Ritual Today
          </span>
        </div>

        {/* HEADING */}
        <h2
          className="mt-8 text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
          style={{ fontFamily: "Cinzel" }}
        >
          Bring Divine Blessings
          <span className="block text-amber-400 mt-2">
            to Your Home
          </span>
        </h2>

        {/* SUBTEXT */}
        <p className="text-slate-400 mt-6 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
          Book verified Vedic pandits for Griha Pravesh, Vivah Puja, Satyanarayan Katha and more with complete guidance and authenticity.
        </p>

        {/* TRUST */}
        <div className="mt-5 text-amber-300 text-xs sm:text-sm">
          🔒 Trusted by 5000+ families across India
        </div>

        {/* BUTTONS */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

          {/* PRIMARY BUTTON */}
          <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }}>
            <Link
              to="/rituals"
              className="relative group px-8 py-4 rounded-full bg-amber-400 text-black font-semibold overflow-hidden flex items-center justify-center gap-2"
            >
              <span className="absolute inset-0 bg-white/30 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              <span className="relative flex items-center gap-2">
                Book a Ritual Now
                <FiArrowRight />
              </span>
            </Link>
          </motion.div>

          {/* SECONDARY BUTTON */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
            <Link
              to="/pandits"
              className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white backdrop-blur-xl hover:border-amber-400/30 transition flex items-center justify-center gap-2"
            >
              <FiCalendar />
              View Pandits
            </Link>
          </motion.div>
        </div>

        {/* SUPPORT */}
        <div className="mt-10 flex items-center justify-center gap-2 text-slate-400 text-xs sm:text-sm">
          <FiPhoneCall className="text-amber-400" />
          Need help? Instant support after booking
        </div>

      </div>
    </section>
  );
};

export default CTA;