// import { motion } from "framer-motion";
// import { FiArrowRight, FiCheck } from "react-icons/fi";
// import { useNavigate } from "react-router-dom";
// import { rituals } from "../../data/rituals";


// const RitualCTA = () => {
//   const navigate = useNavigate();

//   return (
//     <section className="relative py-24 bg-[#050816] overflow-hidden">

//       {/* glow */}
//       <div className="absolute top-10 left-10 w-96 h-96 bg-amber-500/10 blur-[160px]" />
//       <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-500/10 blur-[160px]" />

//       <div className="relative max-w-4xl mx-auto px-5 text-center">

//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           className="text-4xl md:text-5xl font-bold text-white"
//         >
//            Ready to book {rituals.name}?
//         </motion.h2>

//         <p className="text-gray-400 mt-5">
//           Book your personalized Vedic ritual with verified pandits and
//           get divine guidance from the comfort of your home.
//         </p>

//         {/* benefits */}
//         <div className="mt-10 grid sm:grid-cols-3 gap-4 text-left">
//           {[
//             "Verified Pandits",
//             "Personalized Muhurat",
//             "Complete Guidance",
//           ].map((item) => (
//             <div
//               key={item}
//               className="flex items-center gap-2 text-gray-300"
//             >
//               <FiCheck className="text-amber-400" />
//               {item}
//             </div>
//           ))}
//         </div>

//         {/* button */}
//         <button
//           onClick={() => navigate("/book")}
//           className="
//             mt-10
//             px-10
//             py-4
//             rounded-2xl
//             bg-gradient-to-r
//             from-amber-500
//             to-orange-500
//             text-black
//             font-semibold
//             text-lg
//             hover:scale-105
//             transition
//             flex
//             items-center
//             justify-center
//             gap-2
//             mx-auto
//           "
//         >
//           Book Now {rituals.price}
//           <FiArrowRight />
//         </button>

//         <p className="text-gray-500 text-sm mt-6">
//           No hidden charges • Instant confirmation • Trusted service
//         </p>
//       </div>
//     </section>
//   );
// };

// export default RitualCTA;





      {/* CTA */}
      // <section className="max-w-6xl mx-auto px-5 py-20 text-center border-t border-white/10">
      //   <h2 className="text-4xl font-bold mb-4">
         
      //   </h2>

      //   <p className="text-gray-400 mb-8">
      //     Get guidance from verified pandits in minutes
      //   </p>

      //   <button className="px-10 py-4 rounded-2xl bg-amber-500 text-black font-bold hover:bg-amber-400 transition">
      //     Book Now - {ritual.price}
      //   </button>
      // </section>




//       import { motion } from "framer-motion";
// import { FiArrowRight, FiCheck } from "react-icons/fi";
// import { useNavigate, useParams } from "react-router-dom";
// import { rituals } from "../../data/rituals";

// const RitualCTA = () => {
//   const navigate = useNavigate();
//   const { id } = useParams();

//   const ritual = rituals.find((r) => r.id === id);

//   if (!ritual) return null;

//   return (
//     <section className="relative py-24 bg-[#050816] overflow-hidden">
//       {/* Glow */}
//       <div className="absolute top-10 left-10 w-96 h-96 bg-amber-500/10 blur-[160px]" />
//       <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-500/10 blur-[160px]" />

//       <div className="relative max-w-4xl mx-auto px-5 text-center">
//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="text-4xl md:text-5xl font-bold text-white"
//         >
//           Ready to book {ritual.name}?
//         </motion.h2>

//         <p className="text-gray-400 mt-5">
//           Book your personalized Vedic ritual with verified pandits and
//           receive divine blessings from the comfort of your home.
//         </p>

//         {/* Benefits */}
//         <div className="mt-10 grid sm:grid-cols-3 gap-4 text-left">
//           {[
//             "Verified Pandits",
//             "Personalized Muhurat",
//             "Complete Guidance",
//           ].map((item) => (
//             <div
//               key={item}
//               className="flex items-center gap-2 text-gray-300"
//             >
//               <FiCheck className="text-amber-400" />
//               {item}
//             </div>
//           ))}
//         </div>

//         {/* CTA Button */}
//         <button
//           onClick={() => navigate("/book")}
//           className="
//             mt-10
//             px-10
//             py-4
//             rounded-2xl
//             bg-gradient-to-r
//             from-amber-500
//             to-orange-500
//             text-black
//             font-semibold
//             text-lg
//             hover:scale-105
//             transition
//             flex
//             items-center
//             justify-center
//             gap-2
//             mx-auto
//           "
//         >
//           Book Now • {ritual.price}
//           <FiArrowRight />
//         </button>

//         <p className="text-gray-500 text-sm mt-6">
//           No hidden charges • Instant confirmation • Trusted service
//         </p>
//       </div>
//     </section>
//   );
// };

// export default RitualCTA;




import { motion } from "framer-motion";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import { rituals } from "../../data/rituals";

const RitualCTA = () => {
  const { id } = useParams();

  const ritual = rituals.find((r) => r.id === id);

  if (!ritual) return null;

  return (
    <section className="relative py-24 bg-[#050816] overflow-hidden">
      {/* Glow */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-amber-500/10 blur-[160px]" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-500/10 blur-[160px]" />

      <div className="relative max-w-4xl mx-auto px-5 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-white"
        >
          Ready to book {ritual.name}?
        </motion.h2>

        <p className="text-gray-400 mt-5">
          Book your personalized Vedic ritual with verified pandits and
          receive divine blessings from the comfort of your home.
        </p>

        {/* Benefits */}
        <div className="mt-10 grid sm:grid-cols-3 gap-4 text-left">
          {[
            "Verified Pandits",
            "Personalized Muhurat",
            "Complete Guidance",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 text-gray-300"
            >
              <FiCheck className="text-amber-400" />
              {item}
            </div>
          ))}
        </div>

        {/* Updated CTA Link to match query parameters */}
        <Link
          to={`/pandits?ritual=${ritual.id}`}
          className="
            mt-10
            px-10
            py-4
            rounded-2xl
            bg-gradient-to-r
            from-amber-500
            to-orange-500
            text-black
            font-semibold
            text-lg
            hover:scale-105
            transition
            flex
            items-center
            justify-center
            gap-2
            mx-auto
            w-fit
          "
        >
          Book Now • {ritual.price}
          <FiArrowRight />
        </Link>

        <p className="text-gray-500 text-sm mt-6">
          No hidden charges • Instant confirmation • Trusted service
        </p>
      </div>
    </section>
  );
};

export default RitualCTA;