// import { motion } from "framer-motion";

// const faqs = [
//   {
//     q: "How does the online ritual work?",
//     a: "The pandit performs the ritual on your behalf while you join virtually and follow the process step-by-step.",
//   },
//   {
//     q: "Can I choose my own muhurat?",
//     a: "Yes, you can select a preferred time or get an astrologically suggested auspicious muhurat.",
//   },
//   {
//     q: "Are the pandits verified?",
//     a: "Yes, all pandits are verified Vedic scholars with experience in authentic ritual practices.",
//   },
//   {
//     q: "Do I need to arrange puja samagri?",
//     a: "No, a complete checklist is provided and optional arrangements can be handled by us.",
//   },
//   {
//     q: "Can I cancel or reschedule?",
//     a: "Yes, bookings can be rescheduled based on availability of pandits.",
//   },
// ];

// const RitualFAQ = () => {
//   return (
//     <section className="relative py-24 bg-[#050816] overflow-hidden">
//       <div className="absolute top-0 left-0 w-80 h-80 bg-amber-500/10 blur-[140px]" />
//       <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-500/10 blur-[140px]" />

//       <div className="relative max-w-5xl mx-auto px-5">

//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           className="text-center mb-14"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-white">
//             Frequently Asked Questions
//           </h2>
//           <p className="text-gray-400 mt-4">
//             Everything you need to know before booking your ritual
//           </p>
//         </motion.div>

//         {/* FAQ Items */}
//         <div className="space-y-4">
//           {faqs.map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               className="border border-white/10 bg-white/5 backdrop-blur-xl rounded-2xl p-5"
//             >
//               <h3 className="text-white font-semibold">
//                 {item.q}
//               </h3>
//               <p className="text-gray-400 mt-2 text-sm leading-relaxed">
//                 {item.a}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default RitualFAQ;





import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";
import { useParams } from "react-router-dom";
import { rituals } from "../../data/rituals";

const faqs = [
  {
    q: "How does the online ritual work?",
    a: "The pandit performs the ritual on your behalf while you join virtually and receive complete guidance throughout the ceremony.",
  },
  {
    q: "Can I choose my own muhurat?",
    a: "Yes. You may choose your preferred time or receive an astrologically recommended auspicious muhurat.",
  },
  {
    q: "Are the pandits verified?",
    a: "Absolutely. All pandits are carefully verified and experienced in authentic Vedic traditions.",
  },
  {
    q: "Do I need to arrange puja samagri?",
    a: "A complete samagri checklist is provided. Depending on availability, arrangements can also be facilitated.",
  },
  {
    q: "Can I reschedule my booking?",
    a: "Yes. Rescheduling is available based on pandit availability and booking conditions.",
  },
];

const RitualFAQ = () => {
  const [active, setActive] = useState(0);

  const { id } = useParams();
  const ritual = rituals.find((r) => r.id === id);

  if (!ritual) return null;

  return (
    <section className="relative py-24 bg-[#050816] overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500/10 blur-[180px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 blur-[180px]" />

      <div className="relative max-w-5xl mx-auto px-5">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center px-4 py-2 rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-300 text-sm">
            Common Questions
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Questions About
            <span className="block text-amber-400">
              {ritual.name}
            </span>
          </h2>

          <p className="mt-5 text-gray-400 max-w-2xl mx-auto">
            Everything you need to know before booking your ritual.
          </p>
        </motion.div>

        {/* FAQ */}
        <div className="space-y-5">
          {faqs.map((item, index) => {
            const isOpen = active === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  overflow-hidden
                  hover:border-amber-500/20
                  transition-all
                "
              >
                <button
                  onClick={() =>
                    setActive(isOpen ? null : index)
                  }
                  className="
                    w-full
                    flex
                    items-center
                    justify-between
                    text-left
                    px-6
                    py-6
                  "
                >
                  <span className="text-white font-semibold text-lg pr-4">
                    {item.q}
                  </span>

                  <div className="text-amber-400 text-xl flex-shrink-0">
                    {isOpen ? <FiMinus /> : <FiPlus />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                    >
                      <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Trust Line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500">
            Still have questions? Contact our support team anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default RitualFAQ;