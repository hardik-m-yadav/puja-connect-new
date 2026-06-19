

// import { motion } from "framer-motion";

// const Stats = () => {
//   const stats = [
//     {
//       number: "500+",
//       label: "Verified Pandits",
//     },
//     {
//       number: "5000+",
//       label: "Rituals Done",
//     },
//     {
//       number: "20+",
//       label: "Cities Covered",
//     },
//     {
//       number: "4.9★",
//       label: "Average Rating",
//     },
//   ];

//   return (
//     <section className="py-20 px-4 sm:px-6 bg-[#050816]">
//       <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">

//         {stats.map((item, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 20, scale: 0.95 }}
//             whileInView={{ opacity: 1, y: 0, scale: 1 }}
//             viewport={{ once: true, amount: 0.4 }}
//             transition={{
//               duration: 0.5,
//               delay: index * 0.08,
//               ease: "easeOut",
//             }}
//             whileHover={{
//               y: -8,
//               scale: 1.04,
//             }}
//             className="group relative bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-6 md:p-8 text-center overflow-hidden transform-gpu will-change-transform"
//           >
//             {/* glow effect */}
//             <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

//             <div className="relative z-10">

//               <h3 className="text-2xl md:text-3xl font-bold text-amber-400 transition-transform duration-300 group-hover:scale-110">
//                 {item.number}
//               </h3>

//               <p className="mt-3 text-gray-400 text-sm md:text-base">
//                 {item.label}
//               </p>

//             </div>
//           </motion.div>
//         ))}

//       </div>
//     </section>
//   );
// };

// export default Stats;



import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiActivity, FiUsers, FiClock, FiShield } from "react-icons/fi";

const statsData = [
  {
    icon: FiActivity,
    label: "Live Pandits Online",
    value: 12,
    suffix: "",
    color: "text-amber-400",
    desc: "Available right now",
  },
  {
    icon: FiUsers,
    label: "Bookings Today",
    value: 143,
    suffix: "+",
    color: "text-green-400",
    desc: "Growing fast",
  },
  {
    icon: FiClock,
    label: "Avg Booking Time",
    value: 38,
    suffix: " sec",
    color: "text-blue-400",
    desc: "Ultra fast system",
  },
  {
    icon: FiShield,
    label: "Verification Rate",
    value: 100,
    suffix: "%",
    color: "text-purple-400",
    desc: "Fully trusted network",
  },
];

// animated counter hook
function useCounter(end, duration = 1200) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const step = end / (duration / 16);

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return count;
}

export default function Stats() {
  return (
    <section className="relative py-20 ">

      {/* background glow */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-1/2 w-[500px] h-[500px] bg-amber-500/10 blur-[160px] -translate-x-1/2" />
      </div> */}

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-white">
            Live Platform Activity
          </h2>
          <p className="text-slate-400 mt-2">
            Real-time system status of bookings and spiritual services
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {statsData.map((item, i) => {
            const Icon = item.icon;
            const value = useCounter(item.value, 1400 + i * 200);

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.5 }}
                className="relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl overflow-hidden"
              >

                {/* glow hover effect */}
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition bg-gradient-to-r from-amber-500/10 to-orange-500/10" />

                {/* ICON */}
                <Icon className={`text-2xl ${item.color}`} />

                {/* VALUE */}
                <div className="mt-4 text-3xl font-bold text-white">
                  {value}{item.suffix}
                </div>

                {/* LABEL */}
                <div className="text-sm text-slate-300 mt-1">
                  {item.label}
                </div>

                {/* DESC */}
                <div className="text-xs text-slate-500 mt-2">
                  {item.desc}
                </div>

                {/* LIVE DOT */}
                <div className="absolute top-4 right-4 flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-xs text-slate-400">Live</span>
                </div>

              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}