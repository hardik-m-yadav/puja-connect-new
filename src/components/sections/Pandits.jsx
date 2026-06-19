// import { motion } from "framer-motion";
// import {
//   FiStar,
//   FiMapPin,
//   FiCheckCircle,
//   FiArrowRight,
//   FiVideo,
// } from "react-icons/fi";

// const pandits = [
//   {
//     name: "Pandit Rajesh Sharma",
//     location: "Nagpur",
//     rating: "4.9",
//     experience: "15+ yrs",
//     speciality: "Griha Pravesh, Havan",
//     image:
//       "p5.jpg",
//     live: true,
//   },
//   {
//     name: "Pandit Anil Joshi",
//     location: "Pune",
//     rating: "4.8",
//     experience: "12+ yrs",
//     speciality: "Vivah Puja",
//     image:
//       "p8.jpg",
//     live: false,
//   },
//   {
//     name: "Pandit Suresh Mishra",
//     location: "Mumbai",
//     rating: "5.0",
//     experience: "20+ yrs",
//     speciality: "Satyanarayan Katha",
//     image:
//       "p2.jpg",
//     live: true,
//   },
// ];

// const Pandits = () => {
//   return (
//     <section className="relative py-24 bg-[#050816] overflow-hidden">

//       {/* BACKGROUND GLOW */}
//       <div className="absolute inset-0">
//         <div className="absolute top-0 left-10 w-80 h-80 bg-amber-500/10 blur-[140px]" />
//         <div className="absolute bottom-0 right-10 w-[500px] h-[500px] bg-orange-500/10 blur-[160px]" />
//       </div>

//       <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

//         {/* HEADER */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <span className="text-amber-400 tracking-[0.35em] text-xs uppercase">
//             Verified Spiritual Experts
//           </span>

//           <h2
//             className="mt-4 text-4xl md:text-5xl font-bold text-white"
//             style={{ fontFamily: "Cinzel" }}
//           >
//             Meet Your Pandits
//           </h2>

//           <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
//             Book live, verified Vedic pandits for your rituals with instant confirmation
//           </p>
//         </motion.div>

//         {/* CARDS */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

//           {pandits.map((p, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               whileHover={{ y: -10, scale: 1.02 }}
//               transition={{ duration: 0.4 }}
//               className="relative group rounded-3xl overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-2xl"
//             >

//               {/* IMAGE */}
//               <div className="relative h-60 overflow-hidden">
//                 <img
//                   src={p.image}
//                   alt={p.name}
//                   className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
//                 />

//                 {/* DARK OVERLAY */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent" />

//                 {/* LIVE BADGE */}
//                 {p.live && (
//                   <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-red-300 text-xs backdrop-blur-xl border border-red-400/20">
//                     <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
//                     Live Now
//                   </div>
//                 )}

//                 {/* RATING */}
//                 <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-amber-400 text-black text-xs font-semibold">
//                   ⭐ {p.rating}
//                 </div>
//               </div>

//               {/* CONTENT */}
//               <div className="p-6">

//                 {/* NAME */}
//                 <h3 className="text-xl font-semibold text-white">
//                   {p.name}
//                 </h3>

//                 {/* LOCATION */}
//                 <div className="flex items-center gap-2 text-slate-400 mt-2 text-sm">
//                   <FiMapPin className="text-amber-400" />
//                   {p.location}
//                 </div>

//                 {/* EXPERIENCE */}
//                 <div className="flex items-center justify-between mt-4 text-sm text-slate-400">
//                   <span>{p.experience}</span>
//                   <span className="text-amber-300">{p.speciality}</span>
//                 </div>

//                 {/* VERIFIED */}
//                 <div className="flex items-center gap-2 mt-4 text-emerald-400 text-sm">
//                   <FiCheckCircle />
//                   Verified Pandit
//                 </div>

//                 {/* ACTIONS */}
//                 <div className="mt-6 flex gap-3">
//                   <button className="flex-1 py-3 rounded-xl border border-white/10 text-white hover:border-amber-400/40 transition">
//                     View Profile
//                   </button>

//                   <button className="flex-1 py-3 rounded-xl bg-amber-400 text-black font-semibold hover:scale-[1.03] transition">
//                     Book
//                   </button>
//                 </div>
//               </div>

//             </motion.div>
//           ))}
//         </div>

//         {/* CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mt-16"
//         >
//           <button className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white backdrop-blur-xl hover:border-amber-400/40 transition flex items-center gap-2 mx-auto">
//             Explore All Pandits
//             <FiArrowRight />
//           </button>
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default Pandits;


import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiStar,
  FiMapPin,
  FiCheckCircle,
  FiArrowRight,
} from "react-icons/fi";

import { pandits } from "../../data/pandits";

// const pandits = [
//   {
//     name: "Pandit Rajesh Sharma",
//     location: "Nagpur",
//     rating: "4.9",
//     experience: "15+ yrs",
//     speciality: "Griha Pravesh, Havan",
//     image: "p5.jpg",
//     live: true,
//   },
//   {
//     name: "Pandit Anil Joshi",
//     location: "Pune",
//     rating: "4.8",
//     experience: "12+ yrs",
//     speciality: "Vivah Puja",
//     image: "p8.jpg",
//     live: false,
//   },
//   {
//     name: "Pandit Suresh Mishra",
//     location: "Mumbai",
//     rating: "5.0",
//     experience: "20+ yrs",
//     speciality: "Satyanarayan Katha",
//     image: "p2.jpg",
//     live: true,
//   },
// ];

const Pandits = () => {
  return (
    <section className="relative py-24 bg-[#050816] overflow-hidden">

      {/* GLOW */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-10 w-80 h-80 bg-amber-500/10 blur-[140px]" />
        <div className="absolute bottom-0 right-10 w-[500px] h-[500px] bg-orange-500/10 blur-[160px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-amber-400 tracking-[0.35em] text-xs uppercase">
            Verified Experts
          </span>

          <h2
            className="mt-4 text-4xl md:text-5xl font-bold text-white"
            style={{ fontFamily: "Cinzel" }}
          >
            Meet Your Pandits
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Book verified Vedic pandits for authentic rituals with instant confirmation
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {pandits.slice(0, 3).map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="group relative rounded-3xl overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-2xl flex flex-col"
            >

              {/* IMAGE */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent" />

                {/* LIVE */}
                {p.live && (
                  <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-red-300 text-xs border border-red-400/20">
                    <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
                    Live Now
                  </div>
                )}

                {/* RATING */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-amber-400 text-black text-xs font-semibold">
                  ⭐ {p.rating}
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6 flex flex-col flex-1">

                <h3 className="text-xl font-semibold text-white">
                  {p.name}
                </h3>

                <div className="flex items-center gap-2 text-slate-400 mt-2 text-sm">
                  <FiMapPin className="text-amber-400" />
                  {p.location}
                </div>

                <div className="flex items-center justify-between mt-4 text-sm text-slate-400">
                  <span>{p.experience}</span>
                  <span className="text-amber-300 text-right">
                    {p.speciality}
                  </span>
                </div>

                <div className="flex items-center gap-2 mt-4 text-emerald-400 text-sm">
                  <FiCheckCircle />
                  Verified Pandit
                </div>

                {/* BUTTONS */}
                <div className="mt-auto pt-6 flex gap-3">

                  <Link
                    to={`/pandits/${p.id}`}
                    className="flex-1 py-3 rounded-xl border border-white/10 text-white text-center hover:border-amber-400/40 transition"
                  >
                    View Profile
                  </Link>

                  <Link
                    to="/book"
                    className="flex-1 py-3 rounded-xl bg-amber-400 text-black font-semibold text-center hover:scale-[1.03] transition"
                  >
                    Book
                  </Link>

                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            to="/pandits"
            className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white backdrop-blur-xl hover:border-amber-400/40 transition flex items-center gap-2 mx-auto w-fit"
          >
            Explore All Pandits
            <FiArrowRight />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Pandits;