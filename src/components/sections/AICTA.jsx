// import { motion } from "framer-motion";
// import { FiArrowRight } from "react-icons/fi";
// import { useNavigate } from "react-router-dom";

// export default function AIGuruCTA() {
//   const navigate = useNavigate();

//   return (
//     <section className="relative w-full py-28 flex items-center justify-center overflow-hidden bg-[#050816]">

//       {/* 🔥 Temple Glow Background */}
//       <div className="absolute w-[600px] h-[600px] bg-amber-500/10 blur-[180px] top-10 left-1/2 -translate-x-1/2" />
//       <div className="absolute w-[500px] h-[500px] bg-orange-500/10 blur-[160px] bottom-0 right-10" />

//       {/* 🛕 Temple Arch Layers (Entrance Effect) */}
//       <div className="absolute inset-0 flex items-center justify-center">
        
//         {/* Outer arch */}
//         <motion.div
//           initial={{ scaleY: 0, opacity: 0 }}
//           whileInView={{ scaleY: 1, opacity: 1 }}
//           transition={{ duration: 1.2, ease: "easeOut" }}
//           className="w-[90%] max-w-4xl h-[420px] border-[2px] border-amber-500/20 rounded-[60px] relative"
//         />

//         {/* Inner arch */}
//         <motion.div
//           initial={{ scaleY: 0, opacity: 0 }}
//           whileInView={{ scaleY: 1, opacity: 1 }}
//           transition={{ duration: 1.5, delay: 0.2 }}
//           className="absolute w-[75%] max-w-3xl h-[360px] border border-orange-400/20 rounded-[50px]"
//         />

//         {/* Gate glow center */}
//         <motion.div
//           initial={{ scale: 0.6, opacity: 0 }}
//           whileInView={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 1.2, delay: 0.3 }}
//           className="absolute w-[260px] h-[260px] bg-amber-400/10 blur-2xl rounded-full"
//         />
//       </div>

//       {/* Content */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="relative z-10 text-center max-w-2xl px-6"
//       >
//         {/* Badge */}
//         <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-amber-400/20 bg-amber-400/10 text-amber-300 text-xs">
//           🕉️ Divine AI Guidance
//         </div>

//         {/* Title */}
//         <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white leading-tight">
//           Enter the Temple of
//           <span className="block bg-gradient-to-r from-amber-300 to-orange-500 text-transparent bg-clip-text">
//             AI Spiritual Wisdom
//           </span>
//         </h2>

//         {/* Subtitle */}
//         <p className="mt-4 text-slate-400 text-sm md:text-base">
//           Ask anything about puja, rituals, astrology, muhurat & spiritual life.
//           Get instant divine-like guidance powered by AI.
//         </p>

//         {/* CTA Button */}
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           onClick={() => navigate("/ai-guru")}
//           className="mt-8 px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 text-black font-semibold flex items-center gap-2 mx-auto shadow-lg shadow-amber-500/20"
//         >
//           Enter AI Guru
//           <FiArrowRight />
//         </motion.button>

//         {/* Small hint */}
//         <p className="mt-3 text-xs text-slate-500">
//           Takes you inside the full AI chat experience
//         </p>
//       </motion.div>
//     </section>
//   );
// }


import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function AIGuruCTA() {
  const navigate = useNavigate();

  return (
    <section className="relative w-full  py-28   flex items-center justify-center overflow-hidden bg-[#050816]">

      {/* Glow Background */}
      {/* <div className="absolute w-[600px] h-[600px] bg-amber-500/10 blur-[180px] top-10 left-1/2 -translate-x-1/2" /> */}
      <div className="absolute w-[500px] h-[500px] bg-orange-500/10 blur-[160px] bottom-0 right-10" />

      {/* ================= TEMPLE STRUCTURE ================= */}
      <div className="relative w-full max-w-4xl py-14 flex items-center justify-center">

        {/* Outer Temple Frame */}
        <div className="absolute w-full h-[420px] border border-amber-500/20 rounded-[60px]" />

        {/* Inner Temple Frame */}
        <div className="absolute w-[85%] h-[360px] border border-orange-400/20 rounded-[50px]" />

        {/* CENTER LIGHT */}
        <div className="absolute w-[250px] h-[250px] bg-amber-400/10 blur-3xl rounded-full" />

        {/* ================= LEFT DOOR ================= */}
        <motion.div
          initial={{ x: 0 }}
          whileInView={{ x: "-120%" }}
          transition={{
            duration: 1.4,
            ease: [0.77, 0, 0.175, 1],
          }}
          className="absolute left-0 w-1/2 h-[420px] bg-gradient-to-r from-[#0b1024] to-[#050816] border-r border-amber-500/20 rounded-l-[60px]"
        >
          {/* Door pattern */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,#f59e0b_1px,transparent_1px)] bg-[length:20px_20px]" />
        </motion.div>

        {/* ================= RIGHT DOOR ================= */}
        <motion.div
          initial={{ x: 0 }}
          whileInView={{ x: "120%" }}
          transition={{
            duration: 1.4,
            ease: [0.77, 0, 0.175, 1],
          }}
          className="absolute right-0 w-1/2 h-[420px] bg-gradient-to-l from-[#0b1024] to-[#050816] border-l border-orange-500/20 rounded-r-[60px]"
        >
          {/* Door pattern */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,#f97316_1px,transparent_1px)] bg-[length:20px_20px]" />
        </motion.div>

        {/* ================= CONTENT INSIDE TEMPLE ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="relative z-10 text-center px-6"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-amber-400/20 bg-amber-400/10 text-amber-300 text-xs">
            🕉️ Enter Sacred AI Temple
          </div>

          {/* Title */}
          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white leading-tight">
            AI Guru
            <span className="block bg-gradient-to-r from-amber-300 to-orange-500 text-transparent bg-clip-text">
              Spiritual Wisdom Awaits
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-4 text-slate-400 text-sm md:text-base max-w-xl mx-auto">
            Step inside to get divine-like guidance on puja, astrology, rituals & muhurat.
          </p>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/ai-guru")}
            className="mt-8 px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 text-black font-semibold flex items-center gap-2 mx-auto shadow-lg shadow-amber-500/20"
          >
            Enter Temple
            <FiArrowRight />
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}