
import { motion } from "framer-motion";

const StatCard = ({ title, value, icon }) => {
  return (
    <motion.div
      whileHover={{ scale: 1, y: -2 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-400/40 shadow-lg"
    >
      <div className="flex justify-between items-center">
        <p className="text-slate-400 text-sm">{title}</p>
        <span className="text-2xl">{icon}</span>
      </div>

      <h3 className="text-2xl font-bold mt-3 text-white">
        {value}
      </h3>
    </motion.div>
  );
};

export default StatCard;