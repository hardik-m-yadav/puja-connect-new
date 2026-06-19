

// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import {
//   FiClock,
//   FiDollarSign,
//   FiArrowLeft,
//   FiArrowRight,
//   FiShield,
// } from "react-icons/fi";

// const rituals = [
//   {
//     title: "Griha Pravesh Puja",
//     category: "Home",
//     duration: "45-60 mins",
//     price: "₹2,500",
//     image:
//       "https://images.unsplash.com/photo-1604881991720-f91add269bed",
//     highlight: "New Home Blessing",
//     desc: "Bring prosperity, peace and divine energy into your new home with Vedic rituals.",
//   },
//   {
//     title: "Satyanarayan Katha",
//     category: "Festival",
//     duration: "60-90 mins",
//     price: "₹1,800",
//     image:
//       "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e",
//     highlight: "Most Booked",
//     desc: "A sacred ritual for happiness, family harmony and spiritual upliftment.",
//   },
//   {
//     title: "Vivah Sanskar",
//     category: "Marriage",
//     duration: "2-3 hrs",
//     price: "₹5,500",
//     image:
//       "https://images.unsplash.com/photo-1529634896899-1d4c3a3f7c8c",
//     highlight: "Premium Ritual",
//     desc: "Complete marriage rituals ensuring divine blessings for lifelong union.",
//   },
//   {
//     title: "Maha Rudra Abhishek",
//     category: "Spiritual",
//     duration: "2-4 hrs",
//     price: "₹7,500",
//     image:
//       "https://images.unsplash.com/photo-1609921212029-bb5a28e60960",
//     highlight: "High Energy",
//     desc: "Powerful Shiva ritual to remove negativity and attract strength.",
//   },
//   {
//     title: "Navgraha Shanti",
//     category: "Astrology",
//     duration: "90 mins",
//     price: "₹3,500",
//     image:
//       "https://images.unsplash.com/photo-1594067600156-4f0e4f4d4f2a",
//     highlight: "Balance Life",
//     desc: "Balance planetary effects and remove obstacles from life path.",
//   },
// ];

// export default function RitualShowcase() {
//   const [index, setIndex] = useState(0);

//   // auto slide (slow, premium feel)
//   useEffect(() => {
//     const t = setInterval(() => {
//       setIndex((i) => (i + 1) % rituals.length);
//     }, 6000);
//     return () => clearInterval(t);
//   }, []);

//   const visible = [
//     rituals[index],
//     rituals[(index + 1) % rituals.length],
//     rituals[(index + 2) % rituals.length],
//   ];

//   return (
//     <section className="relative py-20 bg-[#050816] overflow-hidden">

//       {/* BACKGROUND */}
//       <div className="absolute inset-0">
//         <div className="absolute top-10 left-10 w-[300px] h-[300px] bg-amber-500/20 blur-[120px]" />
//         <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-orange-500/20 blur-[140px]" />
//       </div>

//       <div className="relative max-w-7xl mx-auto px-5">

//         {/* HEADER */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-5xl font-bold text-white">
//             Book Sacred Rituals
//           </h2>
//           <p className="text-slate-400 mt-3">
//             Verified Pandits • Instant Booking • Spiritual Guidance
//           </p>
//         </div>

//         {/* CARDS GRID */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

//           {visible.map((r, i) => (
//             <motion.div
//               key={r.title + i}
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.1 }}
//               whileHover={{ y: -10, scale: 1.02 }}
//               className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-xl"
//             >

//               {/* IMAGE */}
//               <div className="relative h-52">
//                 <img
//                   src={r.image}
//                   className="w-full h-full object-cover"
//                 />

//                 {/* overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#050816] to-transparent" />

//                 {/* badge */}
//                 <div className="absolute top-3 left-3 px-3 py-1 text-xs bg-black/40 text-white rounded-full border border-white/10">
//                   {r.highlight}
//                 </div>
//               </div>

//               {/* CONTENT */}
//               <div className="p-5">

//                 <h3 className="text-white text-lg font-semibold">
//                   {r.title}
//                 </h3>

//                 <p className="text-slate-400 text-sm mt-2">
//                   {r.desc}
//                 </p>

//                 {/* INFO */}
//                 <div className="flex justify-between mt-4 text-sm text-slate-300">
//                   <div className="flex items-center gap-1">
//                     <FiClock className="text-amber-400" />
//                     {r.duration}
//                   </div>

//                   <div className="flex items-center gap-1">
//                     <FiDollarSign className="text-amber-400" />
//                     {r.price}
//                   </div>
//                 </div>

//                 {/* CTA */}
//                 <button className="mt-5 w-full py-2.5 rounded-full bg-amber-400 text-black font-semibold hover:scale-[1.02] transition">
//                   Book Now
//                 </button>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* CONTROLS */}
//         <div className="flex justify-center gap-4 mt-10">
//           <button
//             onClick={() =>
//               setIndex((i) => (i - 1 + rituals.length) % rituals.length)
//             }
//             className="p-3 rounded-full bg-white/10 border border-white/10 text-white"
//           >
//             <FiArrowLeft />
//           </button>

//           <button
//             onClick={() => setIndex((i) => (i + 1) % rituals.length)}
//             className="p-3 rounded-full bg-white/10 border border-white/10 text-white"
//           >
//             <FiArrowRight />
//           </button>
//         </div>

//         {/* TRUST BAR */}
//         <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-slate-400 text-sm">
//           <div className="flex items-center justify-center gap-2">
//             <FiShield className="text-amber-400" />
//             Verified Pandits
//           </div>
//           <div>Instant Booking Confirmation</div>
//           <div>AI Ritual Guidance</div>
//         </div>

//       </div>
//     </section>
//   );
// }



import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowLeft,
  FiArrowRight,
  FiClock,
  FiDollarSign,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const rituals = [
  {
    title: "Griha Pravesh",
    category: "Home",
    duration: "45 mins",
    price: "₹2,500+",
    image:
      "https://images.unsplash.com/photo-1604881991720-f91add269bed?auto=format&fit=crop&w=1200&q=80",
    desc: "Sacred house entry ritual for prosperity and positivity.",
    tag: "Most Popular",
  },
  {
    title: "Satyanarayan Katha",
    category: "Festival",
    duration: "60 mins",
    price: "₹1,500+",
    image:
      "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=1200&q=80",
    desc: "Divine storytelling ritual for peace and blessings.",
    tag: "Highly Booked",
  },
  {
    title: "Vivah Puja",
    category: "Marriage",
    duration: "120 mins",
    price: "₹5,000+",
    image:
      "https://images.unsplash.com/photo-1601356616077-695728ae17a4?auto=format&fit=crop&w=1200&q=80",
    desc: "Sacred wedding rituals for divine union.",
    tag: "Premium",
  },
];

const RitualShowcase = () => {
  const [index, setIndex] = useState(0);

  const ritual = rituals[index];

  const next = () => setIndex((i) => (i + 1) % rituals.length);
  const prev = () =>
    setIndex((i) => (i - 1 + rituals.length) % rituals.length);

  return (
    <section className="relative py-24 bg-[#050816] overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0">
        <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-amber-500/10 blur-[140px]" />
        <div className="absolute bottom-[-120px] right-[-120px] w-[500px] h-[500px] bg-orange-500/10 blur-[160px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <div className="text-center mb-10">
          <p className="text-amber-400 tracking-[0.3em] text-xs uppercase">
            Sacred Experiences
          </p>
          <h2
            className="mt-3 text-3xl sm:text-5xl font-bold text-white"
            style={{ fontFamily: "Cinzel" }}
          >
            Popular Rituals
          </h2>
        </div>

        {/* MAIN APP CARD */}
        <div className="relative flex items-center justify-center">

          {/* LEFT BUTTON */}
          <button
            onClick={prev}
            className="absolute left-0 md:-left-10 top-1/3.8 -translate-y-1/2 z-10
            bg-white/10 hover:bg-white/20 border border-white/10 p-3 rounded-full backdrop-blur-xl"
          >
            <FiArrowLeft />
          </button>

          {/* CARD */}
          <AnimatePresence mode="wait">
            <motion.div
              key={ritual.title}
              initial={{ opacity: 0, scale: 0.96, x: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.96, x: -40 }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-5xl rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-2xl"
            >
              <div className="grid md:grid-cols-2">

                {/* IMAGE SIDE */}
                <div className="relative h-[260px] md:h-[420px]">
                  <img
                    src={ritual.image}
                    className="w-full h-full object-cover"
                  />

                  {/* overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent" />

                  {/* floating tag */}
                  <div className="absolute top-4 left-4 px-3 py-1 text-xs bg-black/40 text-white rounded-full backdrop-blur-xl border border-white/10">
                    {ritual.tag}
                  </div>

                  {/* floating CTA */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="absolute bottom-4 left-4 right-4"
                  >
                    <div className="flex items-center justify-between bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-3">
                      <div>
                        <p className="text-white text-sm font-semibold">
                          Book Now
                        </p>
                        <p className="text-xs text-white/60">
                          Instant confirmation
                        </p>
                      </div>
                      <Link to="/rituals">
                        <button className="px-4 py-2 rounded-full bg-amber-400 text-black text-sm font-semibold">
                          Book
                        </button>
                      </Link>
                    </div>
                  </motion.div>
                </div>

                {/* CONTENT SIDE */}
                <div className="p-6 md:p-10">

                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    {ritual.title}
                  </h3>

                  <p className="text-slate-400 mt-3">
                    {ritual.desc}
                  </p>

                  {/* meta */}
                  <div className="flex gap-6 mt-6 text-sm text-slate-300">
                    <div className="flex items-center gap-2">
                      <FiClock className="text-amber-400" />
                      {ritual.duration}
                    </div>

                    <div className="flex items-center gap-2">
                      <FiDollarSign className="text-amber-400" />
                      {ritual.price}
                    </div>
                  </div>

                  {/* CTA */}
                  <Link to="/rituals">
                    <button className="mt-8 w-full md:w-auto px-6 py-3 rounded-full bg-amber-400 text-black font-semibold hover:scale-105 transition">
                      Explore Ritual
                    </button>
                  </Link>

                  {/* MINI CARDS (APP STYLE) */}
                  <div className="mt-8 grid grid-cols-3 gap-3">
                    {rituals.map((r, i) => (
                      <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`rounded-xl overflow-hidden border transition ${
                          i === index
                            ? "border-amber-400"
                            : "border-white/10"
                        }`}
                      >
                        <img
                          src={r.image}
                          className="h-16 w-full object-cover opacity-80"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* RIGHT BUTTON */}
          <button
            onClick={next}
            className="absolute right-0 md:-right-10 top-1/3.8 -translate-y-1/2 z-10
            bg-white/10 hover:bg-white/20 border border-white/10 p-3 rounded-full backdrop-blur-xl"
          >
            <FiArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default RitualShowcase;