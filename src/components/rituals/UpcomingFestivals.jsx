// import { motion } from "framer-motion";
// import { FiArrowRight, FiClock } from "react-icons/fi";
// import { Link } from "react-router-dom";

// const festivals = [
//   {
//     name: "Ganesh Chaturthi",
//     date: "2026-09-17",
//     image: "ganesh-festival.jpg",
//     ritual: "Ganesh Sthapana Puja",
//   },
//   {
//     name: "Navratri",
//     date: "2026-10-09",
//     image: "navratri.jpg",
//     ritual: "Durga Puja",
//   },
//   {
//     name: "Diwali",
//     date: "2026-11-08",
//     image: "diwali.jpg",
//     ritual: "Lakshmi Puja",
//   },
//     {
//     name: "Janamashtami",
//     date: "2026-09-04",
//     image: "janamashtami.jpg",
//     ritual: "Janamashtami Puja",
//   },
// ];

// const getCountdown = (targetDate) => {
//   const difference = new Date(targetDate) - new Date();

//   const days = Math.max(0, Math.floor(difference / (1000 * 60 * 60 * 24)));

//   return days;
// };

// const UpcomingFestivals = () => {
//   return (
//     <section className="relative py-28 bg-[#050816] overflow-hidden">

//       {/* Background Glow */}
//       <motion.div
//         animate={{
//           x: [0, 80, 0],
//           y: [0, -50, 0],
//         }}
//         transition={{
//           duration: 18,
//           repeat: Infinity,
//         }}
//         className="absolute top-0 left-10 w-96 h-96 bg-amber-500/10 blur-[180px]"
//       />

//       <motion.div
//         animate={{
//           x: [0, -100, 0],
//           y: [0, 80, 0],
//         }}
//         transition={{
//           duration: 20,
//           repeat: Infinity,
//         }}
//         className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-500/10 blur-[200px]"
//       />

//       <div className="relative max-w-7xl mx-auto px-5">

//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-20"
//         >
//           <span className="inline-flex px-5 py-2 rounded-full border border-amber-400/20 bg-amber-400/5 text-amber-400 text-xs tracking-[0.35em] uppercase">
//             Sacred Calendar
//           </span>

//           <h2
//             className="mt-6 text-4xl md:text-6xl font-bold text-white"
//             style={{ fontFamily: "Cinzel" }}
//           >
//             Upcoming Festivals
//           </h2>

//           <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
//             Prepare early and book verified pandits before festival rush begins.
//           </p>
//         </motion.div>

//         {/* Festival Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

//           {festivals.map((festival, index) => (

//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 60 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               whileHover={{
//                 y: -12,
//                 scale: 1.02,
//               }}
//               className="
//               group
//               overflow-hidden
//               rounded-[32px]
//               border
//               border-white/10
//               bg-white/[0.04]
//               backdrop-blur-2xl
//               hover:border-amber-400/30
//               hover:shadow-[0_0_50px_rgba(251,191,36,0.15)]
//               transition-all
//               duration-500
//             "
//             >
//               {/* Image */}
//               <div className="relative h-[260px] overflow-hidden">

//                 <img
//                   src={festival.image}
//                   alt={festival.name}
//                   className="
//                   w-full
//                   h-full
//                   object-cover
//                   group-hover:scale-110
//                   transition
//                   duration-700
//                 "
//                 />

//                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

//                 <div className="absolute top-5 left-5">
//                   <span className="px-3 py-1 rounded-full bg-amber-400 text-black text-xs font-semibold">
//                     Upcoming
//                   </span>
//                 </div>

//               </div>

//               {/* Content */}
//               <div className="p-6">

//                 <h3 className="text-2xl font-semibold text-white">
//                   {festival.name}
//                 </h3>

//                 <p className="text-slate-400 mt-2">
//                   {festival.ritual}
//                 </p>

//                 {/* Countdown */}
//                 <div className="
//                   mt-6
//                   p-4
//                   rounded-2xl
//                   bg-white/5
//                   border
//                   border-white/10
//                   flex
//                   items-center
//                   gap-3
//                 ">
//                   <FiClock className="text-amber-400 text-xl" />

//                   <div>
//                     <p className="text-white font-semibold">
//                       {getCountdown(festival.date)} Days Left
//                     </p>

//                     <p className="text-slate-500 text-sm">
//                       Festival Countdown
//                     </p>
//                   </div>
//                 </div>

//                 {/* CTA */}
//                 <Link to="/pandits">
//                   <button
//                     className="
//                     mt-6
//                     w-full
//                     py-4
//                     rounded-2xl
//                     bg-amber-400
//                     text-black
//                     font-semibold
//                     flex
//                     items-center
//                     justify-center
//                     gap-2
//                     hover:scale-[1.02]
//                     transition
//                   "
//                   >
//                     Book Ritual

//                     <FiArrowRight />
//                   </button>
//                 </Link>

//               </div>

//             </motion.div>

//           ))}

//         </div>

//         {/* Bottom Banner */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="mt-20"
//         >
//           <div className="
//             rounded-[32px]
//             border
//             border-white/10
//             bg-white/[0.04]
//             backdrop-blur-2xl
//             p-8
//             md:p-12
//             text-center
//           ">
//             <h3
//               className="text-3xl md:text-5xl font-bold text-white"
//               style={{ fontFamily: "Cinzel" }}
//             >
//               Don't Miss Sacred Moments
//             </h3>

//             <p className="text-slate-400 mt-5 max-w-2xl mx-auto">
//               Festival dates fill quickly. Reserve your pandit early and celebrate with complete peace of mind.
//             </p>

//             <Link to="/pandits">
//               <button className="mt-8 px-8 py-4 rounded-full bg-amber-400 text-black font-semibold hover:scale-105 transition">
//                 Explore Pandits
//               </button>
//             </Link>
//           </div>
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default UpcomingFestivals;











import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiCalendar,
  FiUsers,
  FiStar,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const festivals = [
  {
    name: "Navratri",
    image: "f2.jpg",
    days: "28",
    bookings: "820+",
    id: "navratri-puja"
  },
  {
    name: "Diwali Lakshmi Puja",
    image: "f3.jpg",
    days: "52",
    bookings: "1.4K+",
    id: "diwali-lakshmi-puja",
  },
  {
    name: "Dusherra",
    image: "f4.jpg",
    days: "88",
    bookings: "630+",
    id: "dussehra-puja",
  },
];

const UpcomingFestivals = () => {
  return (
    <section className="relative py-28 bg-[#050816] overflow-hidden">

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">

        <motion.div
          animate={{
            x: [0, 120, 0],
            y: [0, -80, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
          }}
          className="absolute top-0 left-0 w-[500px] h-[500px] bg-amber-500/10 blur-[180px]"
        />

        <motion.div
          animate={{
            x: [0, -120, 0],
            y: [0, 80, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
          }}
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-500/10 blur-[180px]"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-5">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-flex px-5 py-2 rounded-full border border-amber-400/20 bg-amber-400/5 text-amber-400 text-xs uppercase tracking-[0.35em]">
            Sacred Calendar
          </span>

          <h2
            className="mt-6 text-4xl md:text-6xl lg:text-7xl font-bold text-white"
            style={{ fontFamily: "Cinzel" }}
          >
            Upcoming Festivals
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto mt-6 text-lg">
            Reserve your rituals early and celebrate divine moments
            with verified Vedic pandits.
          </p>
        </motion.div>

        {/* Featured Festival */}
  <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="mb-20"
>
  <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl">

    {/* Image */}
    <div className="relative">

      <img
        src="f1.jpg"
        alt="Ganesh Chaturthi"
        className="w-full h-[260px] sm:h-[350px] md:h-[450px] object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-black/30 to-transparent" />

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="absolute top-4 right-4"
      >
        <div className="px-4 py-2 rounded-full bg-black/40 backdrop-blur-xl border border-white/10">
          <span className="text-emerald-400 text-sm">
            🔥 128 Bookings Today
          </span>
        </div>
      </motion.div>

    </div>

    {/* Content */}
    <div className="p-5 sm:p-8 md:p-10">

      <span className="inline-flex px-4 py-2 rounded-full bg-amber-400 text-black font-semibold text-sm">
        Most Awaited Festival
      </span>

      <h3
        className="mt-5 text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-tight"
        style={{ fontFamily: "Cinzel" }}
      >
        Ganesh
        <span className="block text-amber-400">
          Chaturthi
        </span>
      </h3>

      <p className="mt-5 text-slate-300 max-w-2xl text-sm sm:text-base md:text-lg">
        Invite Lord Ganesha into your home with authentic
        Vedic rituals, expert pandits and complete
        ceremonial guidance.
      </p>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">

        <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
          <p className="text-amber-400">
            <FiCalendar />
          </p>

          <h4 className="text-white mt-2 font-semibold">
            17 Sept 2026
          </h4>

          <p className="text-slate-400 text-sm">
            Festival Date
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
          <p className="text-amber-400">
            <FiUsers />
          </p>

          <h4 className="text-white mt-2 font-semibold">
            1,248+
          </h4>

          <p className="text-slate-400 text-sm">
            Families Booked
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
          <p className="text-amber-400">
            <FiStar />
          </p>

          <h4 className="text-white mt-2 font-semibold">
            4.9 Rating
          </h4>

          <p className="text-slate-400 text-sm">
            Trusted Ritual
          </p>
        </div>

      </div>

      {/* Countdown */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">

        {[
          ["12", "Days"],
          ["08", "Hours"],
          ["42", "Minutes"],
          ["19", "Seconds"],
        ].map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center"
          >
            <h4 className="text-3xl font-bold text-amber-400">
              {item[0]}
            </h4>

            <p className="text-slate-400 text-sm mt-1">
              {item[1]}
            </p>
          </motion.div>
        ))}

      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-8">

        <Link to="/rituals/ganesh" className="w-full sm:w-auto">
          <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-amber-400 text-black font-semibold hover:scale-105 transition">
            Book Festival Ritual
          </button>
        </Link>

        <button className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/10 bg-white/5 text-white">
          View Details
        </button>

      </div>

    </div>

  </div>
</motion.div>
        {/* Mini Festival Cards */}

<div className="flex justify-center my-16">
  <div className="w-40 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
</div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {festivals.map((festival, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -10,
              }}
              className="group"
            >
              <Link to={`/rituals/${festival.id}`}>

              

                <div className="relative rounded-[28px] overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:border-amber-400/30 transition-all duration-500">

                 <div className="h-[280px] sm:h-[320px] lg:h-[380px] overflow-hidden">

                    <img
                      src={festival.image}
                      alt={festival.name}
                      className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                    />

                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                  <div
  className="
    absolute
    inset-0
    opacity-0
    group-hover:opacity-100
    transition-all
    duration-700
    bg-gradient-to-t
    from-amber-500/20
    via-transparent
    to-transparent
  "
/>

                  <div className="absolute bottom-0 left-0 right-0 p-6">

                    <span className="text-amber-400 text-sm">
                      {festival.days} Days Remaining
                    </span>

                    <h3 className="text-2xl font-bold text-white mt-2">
                      {festival.name}
                    </h3>

                    <div className="flex justify-between items-center mt-4">

                      <span className="text-slate-300 text-sm">
                        {festival.bookings} Bookings
                      </span>

                     
                      <span className="text-amber-400 flex items-center gap-2">
                        Explore
                        <FiArrowRight className="group-hover:translate-x-2 transition" />
                      </span>

                    </div>

                  </div>

                </div>

              </Link>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default UpcomingFestivals;