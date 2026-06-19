// import { motion } from "framer-motion";
// import { FiStar, FiCheckCircle, FiArrowRight } from "react-icons/fi";
// import { useNavigate } from "react-router-dom";

// const pandits = [
//   {
//     id: 1,
//     name: "Pandit Rajesh Sharma",
//     image: "/pandits/pandit-1.jpg",
//     experience: "18+ Years Experience",
//     rating: "4.9",
//     languages: "Hindi • Sanskrit • Marathi",
//     rituals: "Ganesh • Griha Pravesh • Satyanarayan",
//   },
//   {
//     id: 2,
//     name: "Pandit Mahesh Mishra",
//     image: "/pandits/pandit-2.jpg",
//     experience: "15+ Years Experience",
//     rating: "4.8",
//     languages: "Hindi • Sanskrit",
//     rituals: "Navagraha • Rudrabhishek",
//   },
//   {
//     id: 3,
//     name: "Pandit Vivek Trivedi",
//     image: "/pandits/pandit-3.jpg",
//     experience: "20+ Years Experience",
//     rating: "5.0",
//     languages: "Hindi • Sanskrit • English",
//     rituals: "Lakshmi Puja • Maha Mrityunjaya",
//   },
// ];

// const SuggestedPandits = () => {
//   const navigate = useNavigate();

//   const featured = pandits[0];
//   const others = pandits.slice(1);

//   return (
//     <section className="relative py-24 bg-[#050816] overflow-hidden">
//       {/* glow */}
//       <div className="absolute top-10 left-10 w-72 h-72 bg-amber-500/10 blur-[140px]" />
//       <div className="absolute bottom-10 right-10 w-72 h-72 bg-orange-500/10 blur-[140px]" />

//       <div className="relative max-w-7xl mx-auto px-5">

//         {/* Heading */}
//         <div className="text-center mb-14">
//           <h2 className="text-4xl md:text-5xl font-bold text-white">
//             Recommended Pandits
//           </h2>
//           <p className="text-gray-400 mt-4">
//             Verified Vedic experts for your selected ritual
//           </p>
//         </div>

//         {/* FEATURED CARD */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           className="grid md:grid-cols-2 gap-8 items-center 
//                      bg-white/5 border border-white/10 
//                      rounded-3xl overflow-hidden backdrop-blur-xl"
//         >
//           {/* image */}
//           <div className="h-[320px] md:h-full">
//             <img
//               src={featured.image}
//               className="w-full h-full object-cover"
//               alt="pandit"
//             />
//           </div>

//           {/* content */}
//           <div className="p-6 md:p-10">
//             <div className="flex items-center gap-2 text-green-400 text-sm">
//               <FiCheckCircle />
//               Verified Expert
//             </div>

//             <h3 className="text-3xl font-bold text-white mt-2">
//               {featured.name}
//             </h3>

//             <p className="text-amber-400 mt-2">
//               {featured.experience}
//             </p>

//             <div className="flex items-center gap-2 mt-3 text-yellow-400">
//               <FiStar />
//               {featured.rating} Rating
//             </div>

//             <p className="text-gray-400 mt-3 text-sm">
//               {featured.languages}
//             </p>

//             <p className="text-gray-400 mt-2 text-sm">
//               {featured.rituals}
//             </p>

//             <button className="mt-6 w-full md:w-auto px-6 py-3 rounded-xl 
//                                bg-gradient-to-r from-amber-500 to-orange-500 
//                                text-black font-semibold hover:scale-105 transition">
//               Book This Pandit
//             </button>
//           </div>
//         </motion.div>

//         {/* OTHER PANDITS */}
//         <div className="grid sm:grid-cols-2 gap-6 mt-10">
//           {others.map((p) => (
//             <div
//               key={p.id}
//               className="bg-white/5 border border-white/10 
//                          rounded-2xl p-5 backdrop-blur-xl"
//             >
//               <h3 className="text-white font-semibold">{p.name}</h3>
//               <p className="text-gray-400 text-sm mt-1">{p.experience}</p>

//               <div className="flex items-center gap-2 text-yellow-400 mt-2 text-sm">
//                 <FiStar />
//                 {p.rating}
//               </div>

//               <p className="text-gray-400 text-xs mt-2">{p.languages}</p>

//               <button className="mt-4 text-amber-400 text-sm">
//                 View Profile →
//               </button>
//             </div>
//           ))}
//         </div>

//         {/* VIEW ALL BUTTON */}
//         <div className="text-center mt-12">
//           <button
//             onClick={() => navigate("/pandits")}
//             className="px-8 py-3 rounded-xl border border-amber-500/30 
//                        text-amber-300 hover:bg-amber-500/10 transition"
//           >
//             View All Pandits <FiArrowRight className="inline ml-2" />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SuggestedPandits;
























import { motion } from "framer-motion";
import { FiStar, FiCheckCircle, FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const pandits = [
  {
    id: 1,
    name: "Pandit Rajesh Sharma",
    image: "/p15.jpeg",
    experience: "18+ Years Experience",
    rating: "4.9",
    languages: "Hindi • Sanskrit • Marathi",
    rituals: "Ganesh • Griha Pravesh • Satyanarayan",
  },
  {
    id: 2,
    name: "Pandit Mahesh Mishra",
    image: "/p12.jpeg",
    experience: "15+ Years Experience",
    rating: "4.8",
    languages: "Hindi • Sanskrit",
    rituals: "Navagraha • Rudrabhishek",
  },
  {
    id: 3,
    name: "Pandit Vivek Trivedi",
    image: "/pandits/pandit-3.jpg",
    experience: "20+ Years Experience",
    rating: "5.0",
    languages: "Hindi • Sanskrit • English",
    rituals: "Lakshmi Puja • Maha Mrityunjaya",
  },
];

const SuggestedPandits = ({ ritual }) => {
  const navigate = useNavigate();

  const featured = pandits[0];
  const others = pandits.slice(1);

  return (
    <section className="relative py-24 bg-[#050816] overflow-hidden">
      {/* glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-amber-500/10 blur-[140px]" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-orange-500/10 blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-5">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Pandits for {ritual?.name}
          </h2>

          <p className="text-gray-400 mt-4">
            Verified Vedic experts recommended for {ritual?.name}
          </p>
        </div>


        

        {/* FEATURED CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="grid md:grid-cols-2 gap-8 items-center 
                     bg-white/5 border border-white/10 
                     rounded-3xl overflow-hidden backdrop-blur-xl"
        >
          {/* image */}
          <div className="h-[260px] md:h-[380]">
            <img
              src={featured.image}
              className="w-full h-full object-cover"
              alt="pandit"
            />
          </div>

          {/* content */}
          <div className="p-6 md:p-10">
            <div className="flex items-center gap-2 text-green-400 text-sm">
              <FiCheckCircle />
              Verified Expert
            </div>

            <h3 className="text-3xl font-bold text-white mt-2">
              {featured.name}
            </h3>

            <p className="text-amber-400 mt-2">
              {featured.experience}
            </p>

            <div className="flex items-center gap-2 mt-3 text-yellow-400">
              <FiStar />
              {featured.rating} Rating
            </div>

            <p className="text-gray-400 mt-3 text-sm">
              {featured.languages}
            </p>

            <p className="text-gray-400 mt-2 text-sm">
              {featured.rituals}
            </p>

            <button
              className="mt-6 w-full md:w-auto px-6 py-3 rounded-xl 
                         bg-gradient-to-r from-amber-500 to-orange-500 
                         text-black font-semibold hover:scale-105 transition"
            >
              Book This Pandit
            </button>
          </div>
        </motion.div>

        {/* OTHER PANDITS */}
        <div className="grid sm:grid-cols-2 gap-6 mt-10">
          {others.map((p) => (
            <div
              key={p.id}
              className="bg-white/5 border border-white/10 
                         rounded-2xl p-5 backdrop-blur-xl"
            >
              <h3 className="text-white font-semibold">{p.name}</h3>

              <p className="text-gray-400 text-sm mt-1">
                {p.experience}
              </p>

              <div className="flex items-center gap-2 text-yellow-400 mt-2 text-sm">
                <FiStar />
                {p.rating}
              </div>

              <p className="text-gray-400 text-xs mt-2">
                {p.languages}
              </p>

              <button className="mt-4 text-amber-400 text-sm">
                View Profile →
              </button>
            </div>
          ))}
        </div>

        {/* VIEW ALL BUTTON */}
        <div className="text-center mt-12">
          <button
            onClick={() => navigate("/pandits")}
            className="px-8 py-3 rounded-xl border border-amber-500/30 
                       text-amber-300 hover:bg-amber-500/10 transition"
          >
            View All Pandits
            <FiArrowRight className="inline ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SuggestedPandits;