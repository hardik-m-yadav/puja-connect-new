import { motion } from "framer-motion";
import {
  FiUserCheck,
  FiCalendar,
  FiBookOpen,
  FiClipboard,
  FiHeadphones,
  FiHeart,
} from "react-icons/fi";

const includedItems = [
  {
    icon: <FiUserCheck />,
    title: "Verified Pandit",
    description:
      "Experienced and verified pandits perform the ritual according to Vedic traditions.",
  },
  {
    icon: <FiCalendar />,
    title: "Personalized Muhurat",
    description:
      "Receive auspicious timing recommendations tailored to your requirements.",
  },
  {
    icon: <FiBookOpen />,
    title: "Complete Ritual Guidance",
    description:
      "Step-by-step guidance throughout the ritual process for a smooth experience.",
  },
  {
    icon: <FiClipboard />,
    title: "Samagri Checklist",
    description:
      "Get a detailed list of all required puja materials before the ritual.",
  },
  {
    icon: <FiHeadphones />,
    title: "Online & Offline Support",
    description:
      "Assistance available before, during, and after your booking whenever needed.",
  },
  {
    icon: <FiHeart />,
    title: "Sankalp & Blessings",
    description:
      "Personalized sankalp and sacred blessings offered during the ritual.",
  },
];

const WhatsIncluded = () => {
  return (
    <section className="relative py-24 bg-[#050816] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 blur-[140px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-500/10 blur-[160px]" />

      <div className="relative max-w-7xl mx-auto px-5">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block px-4 py-2 rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-300 text-sm">
            What You Receive
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-white">
            What's Included
          </h2>

          <p className="mt-5 text-gray-400 leading-relaxed">
            Everything you need for a meaningful and spiritually fulfilling
            ritual experience is included in your booking.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {includedItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                p-6
                hover:border-amber-500/30
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition" />

              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 text-2xl">
                  {item.icon}
                </div>

                <h3 className="mt-5 text-xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-400 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatsIncluded;












// import { motion } from "framer-motion";
// import {
//   FiUserCheck,
//   FiCalendar,
//   FiBookOpen,
//   FiClipboard,
//   FiHeadphones,
//   FiHeart,
// } from "react-icons/fi";
// import { useParams } from "react-router-dom";
// import { rituals } from "../../data/rituals";

// const includedItems = [
//   {
//     icon: <FiUserCheck />,
//     title: "Verified Pandit",
//     description:
//       "Experienced and verified pandits perform the ritual according to Vedic traditions.",
//   },
//   {
//     icon: <FiCalendar />,
//     title: "Personalized Muhurat",
//     description:
//       "Receive auspicious timing recommendations tailored to your requirements.",
//   },
//   {
//     icon: <FiBookOpen />,
//     title: "Complete Ritual Guidance",
//     description:
//       "Step-by-step guidance throughout the ritual process for a smooth experience.",
//   },
//   {
//     icon: <FiClipboard />,
//     title: "Samagri Checklist",
//     description:
//       "Get a detailed list of all required puja materials before the ritual.",
//   },
//   {
//     icon: <FiHeadphones />,
//     title: "Online & Offline Support",
//     description:
//       "Assistance available before, during, and after your booking whenever needed.",
//   },
//   {
//     icon: <FiHeart />,
//     title: "Sankalp & Blessings",
//     description:
//       "Personalized sankalp and sacred blessings offered during the ritual.",
//   },
// ];

// const WhatsIncluded = () => {
//   const { id } = useParams();

//   const ritual = rituals.find((r) => r.id === id);

//   if (!ritual) return null;

//   return (
//     <section className="relative py-24 bg-[#050816] overflow-hidden">
//       {/* Background Glow */}
//       <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 blur-[140px]" />
//       <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-500/10 blur-[160px]" />

//       <div className="relative max-w-7xl mx-auto px-5">
//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="text-center max-w-3xl mx-auto"
//         >
//           <span className="inline-block px-4 py-2 rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-300 text-sm">
//             What You Receive
//           </span>

//           <h2 className="mt-5 text-4xl md:text-5xl font-bold text-white">
//             {rituals.includedTitle || "What's Included"}
//           </h2>

//           <p className="mt-5 text-gray-400 leading-relaxed">
//             {rituals.includedDescription ||
//               "Everything you need for a meaningful and spiritually fulfilling ritual experience is included in your booking."}
//           </p>
//         </motion.div>

//         {/* Cards */}
//         <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {includedItems.map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{
//                 duration: 0.5,
//                 delay: index * 0.08,
//               }}
//               className="
//                 group
//                 relative
//                 overflow-hidden
//                 rounded-3xl
//                 border
//                 border-white/10
//                 bg-white/5
//                 backdrop-blur-xl
//                 p-6
//                 hover:border-amber-500/30
//                 hover:-translate-y-3
//                 hover:shadow-[0_20px_50px_rgba(251,191,36,0.08)]
//                 transition-all
//                 duration-300
//               "
//             >
//               <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition" />

//               <div className="relative">
//                 <div
//                   className="
//                     w-14
//                     h-14
//                     rounded-2xl
//                     bg-amber-500/10
//                     border
//                     border-amber-500/20
//                     flex
//                     items-center
//                     justify-center
//                     text-amber-400
//                     text-2xl
//                     group-hover:scale-110
//                     transition
//                     duration-300
//                   "
//                 >
//                   {item.icon}
//                 </div>

//                 <h3 className="mt-5 text-xl font-semibold text-white">
//                   {item.title}
//                 </h3>

//                 <p className="mt-3 text-gray-400 leading-relaxed text-sm">
//                   {item.description}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhatsIncluded;