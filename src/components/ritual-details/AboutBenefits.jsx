// import { motion } from "framer-motion";
// import {
//   FiCheckCircle,
//   FiShield,
//   FiStar,
//   FiTrendingUp,
// } from "react-icons/fi";







// const benefits = [
//   {
//     icon: <FiShield />,
//     title: "Removes Obstacles",
//     desc: "Seek Lord Ganesha's blessings to overcome challenges and difficulties.",
//   },
//   {
//     icon: <FiTrendingUp />,
//     title: "Attracts Prosperity",
//     desc: "Invite success, abundance, and positive opportunities into your life.",
//   },
//   {
//     icon: <FiStar />,
//     title: "Enhances Wisdom",
//     desc: "Gain clarity, focus, and better decision-making in important matters.",
//   },
//   {
//     icon: <FiCheckCircle />,
//     title: "Positive Energy",
//     desc: "Create harmony, peace, and spiritual balance in your surroundings.",
//   },
// ];

// const AboutBenefits = () => {
//   return (
//     <section className="relative py-24 bg-[#050816] overflow-hidden">
//       {/* Glow Effects */}
//       <div className="absolute top-0 left-0 w-72 h-72 bg-amber-500/10 blur-[120px]" />
//       <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-500/10 blur-[140px]" />

//       <div className="relative max-w-7xl mx-auto px-5">
//         <div className="grid lg:grid-cols-2 gap-14 items-center">
//           {/* About */}
//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <span className="inline-block px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-sm">
//               About The Ritual
//             </span>

//             <h2 className="mt-5 text-4xl md:text-5xl font-bold text-white leading-tight">
//               Why Perform
//               <span className="block text-amber-400">
//                 Ganesh Puja?
//               </span>
//             </h2>

//             <p className="mt-6 text-gray-300 leading-relaxed text-lg">
//               Ganesh Puja is one of the most auspicious Vedic rituals,
//               performed to invoke the blessings of Lord Ganesha, the
//               remover of obstacles and the deity of wisdom, prosperity,
//               and success.
//             </p>

//             <p className="mt-4 text-gray-400 leading-relaxed">
//               This sacred ritual is commonly performed before starting a
//               new business, entering a new home, beginning studies,
//               marriage ceremonies, or any major life event. Devotees
//               believe that Lord Ganesha clears obstacles and brings
//               harmony, growth, and positive energy.
//             </p>

//             <div className="mt-8 flex flex-wrap gap-3">
//               <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm">
//                 Prosperity
//               </span>

//               <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm">
//                 Wisdom
//               </span>

//               <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm">
//                 Success
//               </span>

//               <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm">
//                 Positive Energy
//               </span>
//             </div>
//           </motion.div>

//           {/* Benefits */}
//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="grid sm:grid-cols-2 gap-5"
//           >
//             {benefits.map((item, index) => (
//               <div
//                 key={index}
//                 className="
//                   group
//                   relative
//                   overflow-hidden
//                   rounded-3xl
//                   border
//                   border-white/10
//                   bg-white/5
//                   backdrop-blur-xl
//                   p-6
//                   hover:border-amber-500/30
//                   hover:-translate-y-2
//                   transition-all
//                   duration-300
//                 "
//               >
//                 <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition" />

//                 <div className="relative">
//                   <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 text-2xl">
//                     {item.icon}
//                   </div>

//                   <h3 className="mt-5 text-xl font-semibold text-white">
//                     {item.title}
//                   </h3>

//                   <p className="mt-3 text-gray-400 leading-relaxed text-sm">
//                     {item.desc}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutBenefits;




import { motion } from "framer-motion";
import {
  FiCheckCircle,
  FiShield,
  FiStar,
  FiTrendingUp,
} from "react-icons/fi";
import { useParams } from "react-router-dom";
import { rituals } from "../../data/rituals";

const benefits = [
  {
    icon: <FiShield />,
    title: "Removes Obstacles",
    desc: "Seek Lord Ganesha's blessings to overcome challenges and difficulties.",
  },
  {
    icon: <FiTrendingUp />,
    title: "Attracts Prosperity",
    desc: "Invite success, abundance, and positive opportunities into your life.",
  },
  {
    icon: <FiStar />,
    title: "Enhances Wisdom",
    desc: "Gain clarity, focus, and better decision-making in important matters.",
  },
  {
    icon: <FiCheckCircle />,
    title: "Positive Energy",
    desc: "Create harmony, peace, and spiritual balance in your surroundings.",
  },
];

const AboutBenefits = () => {
  const { id } = useParams();

  const ritual = rituals.find((r) => r.id === id);

  if (!ritual) return null;

  return (
    <section className="relative py-24 bg-[#050816] overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-amber-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-500/10 blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* About */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-sm">
              About The Ritual
            </span>

            <h2 className="mt-5 text-4xl md:text-5xl font-bold text-white leading-tight">
              Why Perform
              <span className="block text-amber-400">
                {ritual.name}?
              </span>
            </h2>

            <p className="mt-6 text-gray-300 leading-relaxed text-lg">
              {ritual.description}
            </p>

            <p className="mt-4 text-gray-400 leading-relaxed">
              This sacred ritual is commonly performed before starting a
              new business, entering a new home, beginning studies,
              marriage ceremonies, or any major life event. Devotees
              believe that this ritual brings harmony, growth, prosperity,
              and positive energy into life.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm">
                Prosperity
              </span>

              <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm">
                Wisdom
              </span>

              <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm">
                Success
              </span>

              <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm">
                Positive Energy
              </span>
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid sm:grid-cols-2 gap-5"
          >
            {benefits.map((item, index) => (
              <div
                key={index}
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
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutBenefits;