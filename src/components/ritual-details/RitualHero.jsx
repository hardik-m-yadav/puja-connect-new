
// import { motion } from "framer-motion";
// import { FiStar, FiClock, FiShield, FiArrowRight } from "react-icons/fi";
// import { Link, useParams } from "react-router-dom";
// import { rituals } from "../../data/rituals";

// const RitualHero = () => {
//   const { id } = useParams();

//   // ✅ single source of truth (same as your page)
//   const ritual = rituals.find((r) => r.id === id);

//   // ✅ safety fallback (prevents crash)
//   const fallback = rituals[0];

//   const data = ritual || fallback;

//   return (
//     <section className="relative min-h-screen overflow-hidden bg-[#050816]">

//       {/* Background Image */}
//       <div className="absolute inset-0">
//         <img
//           src={data.img}
//           alt={data.name}
//           className="w-full h-full object-cover opacity-25"
//         />

//         <div className="absolute inset-0 bg-gradient-to-r from-[#050816] via-[#050816]/90 to-[#050816]/70" />
//         <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent" />
//       </div>

//       {/* Glow */}
//       <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/15 blur-[120px]" />
//       <div className="absolute bottom-10 right-10 w-72 h-72 bg-orange-500/10 blur-[140px]" />

//       <div className="relative z-10 max-w-7xl mx-auto px-5 py-24 lg:py-32">

//         <div className="grid lg:grid-cols-2 gap-12 items-center">

//           {/* LEFT */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >

//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-300 text-sm">
//               🔱 Most Booked Ritual
//             </div>

//             <h1 className="mt-6 text-5xl md:text-6xl xl:text-7xl font-bold text-white leading-tight">
//               {data.name}
//             </h1>

//             <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-xl">
//               {data.description}
//             </p>

//             <div className="mt-8 flex flex-wrap gap-4">

//               <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10">
//                 <FiStar className="text-amber-400" />
//                 <span className="text-white">{data.rating} Rating</span>
//               </div>

//               <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10">
//                 <FiClock className="text-amber-400" />
//                 <span className="text-white">{data.duration}</span>
//               </div>

//               <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10">
//                 <span className="text-amber-400 font-bold">💰</span>
//                 <span className="text-white">{data.price}</span>
//               </div>

//               {/* <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10">
//                 <FiShield className="text-amber-400" />
//                 <span className="text-white">Verified Pandits</span>
//               </div> */}

//             </div>

//             <div className="mt-10 flex flex-col sm:flex-row gap-4">
         
//           <Link to={"/book"}>
//               <button className="group px-8 py-4 rounded-2xl bg-amber-500 text-black font-semibold flex items-center justify-center gap-2 hover:bg-amber-400 transition">
//                 Book Ritual
//                 <FiArrowRight className="group-hover:translate-x-1 transition" />
//               </button>
//               </Link>

//             <Link to={"/pandits"}>
//               <button className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 text-white hover:bg-white/10 transition">
//                 View Pandits
//               </button>
//               </Link>

//             </div>

//             <div className="mt-10 flex flex-wrap gap-8">

//               <div>
//                 <h3 className="text-3xl font-bold text-amber-400">5K+</h3>
//                 <p className="text-gray-400 text-sm">Rituals Completed</p>
//               </div>

//               <div>
//                 <h3 className="text-3xl font-bold text-amber-400">50+</h3>
//                 <p className="text-gray-400 text-sm">Expert Pandits</p>
//               </div>

//               <div>
//                 <h3 className="text-3xl font-bold text-amber-400">4.9★</h3>
//                 <p className="text-gray-400 text-sm">User Rating</p>
//               </div>

//             </div>

//           </motion.div>

//           {/* RIGHT */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.7 }}
//           >
//             <div className="rounded-[32px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl">

//               <img
//                 src={data.img}
//                 alt={data.name}
//                 className="w-full h-[500px] md:h-[650px] object-cover"
//               />

//             </div>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default RitualHero;






// import { motion } from "framer-motion";
// import { FiStar, FiClock, FiArrowRight } from "react-icons/fi";
// import { Link, useParams, useNavigate } from "react-router-dom";
// import { rituals } from "../../data/rituals";

// const RitualHero = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const ritual = rituals.find((r) => r.id === id);
//   const data = ritual || rituals[0];

//   // 🧠 FIXED: send ritual properly to booking page
//   const handleBook = () => {
//     navigate(`/booking/${data.id}`, {
//       state: {
//         ritual: data.name,
//         ritualId: data.id,
//       },
//     });
//   };

//   return (
//     <section className="relative min-h-screen overflow-hidden bg-[#050816]">

//       {/* Background */}
//       <div className="absolute inset-0">
//         <img
//           src={data.img}
//           className="w-full h-full object-cover opacity-25"
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-[#050816] via-[#050816]/90 to-[#050816]/70" />
//         <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent" />
//       </div>

//       {/* Glow */}
//       <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/15 blur-[120px]" />
//       <div className="absolute bottom-10 right-10 w-72 h-72 bg-orange-500/10 blur-[140px]" />

//       <div className="relative z-10 max-w-7xl mx-auto px-5 py-24 lg:py-32">

//         <div className="grid lg:grid-cols-2 gap-12 items-center">

//           {/* LEFT */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//           >

//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-300 text-sm">
//               🔱 Most Booked Ritual
//             </div>

//             <h1 className="mt-6 text-5xl md:text-6xl font-bold text-white leading-tight">
//               {data.name}
//             </h1>

//             <p className="mt-6 text-lg text-gray-300 max-w-xl">
//               {data.description}
//             </p>

//             {/* Stats */}
//             <div className="mt-8 flex flex-wrap gap-4">

//               <div className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
//                 <FiStar className="text-amber-400" />
//                 <span>{data.rating} Rating</span>
//               </div>

//               <div className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
//                 <FiClock className="text-amber-400" />
//                 <span>{data.duration}</span>
//               </div>

//               <div className="px-4 py-3 rounded-xl bg-white/5 border border-white/10">
//                 💰 {data.price}
//               </div>

//             </div>

//             {/* CTA BUTTONS */}
//             <div className="mt-10 flex flex-col sm:flex-row gap-4">

          
//               <button
//                 onClick={handleBook}
//                 className="group px-8 py-4 rounded-2xl bg-amber-500 text-black font-semibold flex items-center justify-center gap-2 hover:bg-amber-400 transition"
//               >
//                 Book Ritual
//                 <FiArrowRight className="group-hover:translate-x-1 transition" />
//               </button>

//               <Link to="/pandits">
//                 <button className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 text-white hover:bg-white/10 transition">
//                   View Pandits
//                 </button>
//               </Link>

//             </div>

//           </motion.div>

//           {/* RIGHT IMAGE */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//           >
//             <div className="rounded-[32px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl">
//               <img
//                 src={data.img}
//                 className="w-full h-[500px] md:h-[650px] object-cover"
//               />
//             </div>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default RitualHero;




import { motion } from "framer-motion";
import { FiStar, FiClock, FiArrowRight } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import { rituals } from "../../data/rituals";

const RitualHero = () => {
  const { id } = useParams();

  const ritual = rituals.find((r) => r.id === id);
  const data = ritual || rituals[0];

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050816]">

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={data.img}
          alt=""
          className="w-full h-full object-cover opacity-25"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050816] via-[#050816]/90 to-[#050816]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent" />
      </div>

      {/* Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/15 blur-[120px]" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-orange-500/10 blur-[140px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 py-24 lg:py-32">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
          >

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-300 text-sm">
              🔱 Most Booked Ritual
            </div>

            <h1 className="mt-6 text-5xl md:text-6xl font-bold text-white leading-tight">
              {data.name}
            </h1>

            <p className="mt-6 text-lg text-gray-300 max-w-xl">
              {data.description}
            </p>

            {/* Stats */}
            <div className="mt-8 flex flex-wrap gap-4">

              <div className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
                <FiStar className="text-amber-400" />
                <span>{data.rating} Rating</span>
              </div>

              <div className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
                <FiClock className="text-amber-400" />
                <span>{data.duration}</span>
              </div>

              <div className="px-4 py-3 rounded-xl bg-white/5 border border-white/10">
                💰 {data.price}
              </div>

            </div>

            {/* CTA BUTTONS */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">

              {/* Updated Link to pass data.id via URL query parameters */}
              <Link
                to={`/pandits?ritual=${data.id}`}
                className="group px-8 py-4 rounded-2xl bg-amber-500 text-black font-semibold flex items-center justify-center gap-2 hover:bg-amber-400 transition"
              >
                Book Ritual
                <FiArrowRight className="group-hover:translate-x-1 transition" />
              </Link>

              <Link to="/pandits">
                <button className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 text-white hover:bg-white/10 transition">
                  View Pandits
                </button>
              </Link>

            </div>

          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="rounded-[32px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl">
              <img
                src={data.img}
                alt={data.name}
                className="w-full h-[500px] md:h-[650px] object-cover"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default RitualHero;











