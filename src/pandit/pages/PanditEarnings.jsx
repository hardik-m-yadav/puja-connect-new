// import { useEffect, useState } from "react";
// import {
//   collection,
//   query,
//   where,
//   onSnapshot,
// } from "firebase/firestore";
// import { db, auth } from "../../firebase/firebase";
// import PanditLayout from "../../pandit/layout/PanditLayout";
// import { motion } from "framer-motion";
// import { FiDollarSign, FiCheckCircle, FiCalendar } from "react-icons/fi";

// const getPrice = (ritual = "") => {
//   const r = ritual.toLowerCase();

//   if (r.includes("griha")) return 2500;
//   if (r.includes("ganesh")) return 3100;
//   if (r.includes("satyanarayan")) return 5100;

//   return 2100;
// };

// const PanditEarnings = () => {
//   const [user, setUser] = useState(null);
//   const [bookings, setBookings] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // AUTH
//   useEffect(() => {
//     const unsub = auth.onAuthStateChanged((u) => {
//       setUser(u);
//     });
//     return () => unsub();
//   }, []);

//   // BOOKINGS
//   useEffect(() => {
//     if (!user?.uid) return;

//     const q = query(
//       collection(db, "bookings"),
//       where("panditId", "==", user.uid)
//     );

//     const unsub = onSnapshot(q, (snap) => {
//       const data = snap.docs.map((d) => ({
//         id: d.id,
//         ...d.data(),
//       }));

//       setBookings(data);
//       setLoading(false);
//     });

//     return () => unsub();
//   }, [user]);

//   // ONLY COMPLETED BOOKINGS
//   const completed = bookings.filter(
//     (b) => b.status === "completed"
//   );

//   const totalEarnings = completed.reduce(
//     (acc, b) => acc + getPrice(b.ritual),
//     0
//   );

//   return (
//     <PanditLayout>
//       <div className="space-y-8">

//         {/* HEADER */}
//         <div>
//           <h1 className="text-3xl font-bold text-white">
//             Earnings 💰
//           </h1>
//           <p className="text-slate-400 mt-1">
//             Your completed puja income overview
//           </p>
//         </div>

//         {/* STATS */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

//           <motion.div
//             whileHover={{ scale: 1.02 }}
//             className="p-6 rounded-2xl bg-white/5 border border-white/10"
//           >
//             <FiDollarSign className="text-green-400" size={26} />
//             <h2 className="text-2xl font-bold mt-3 text-white">
//               ₹{totalEarnings}
//             </h2>
//             <p className="text-slate-400 text-sm">Total Earnings</p>
//           </motion.div>

//           <motion.div
//             whileHover={{ scale: 1.02 }}
//             className="p-6 rounded-2xl bg-white/5 border border-white/10"
//           >
//             <FiCheckCircle className="text-amber-400" size={26} />
//             <h2 className="text-2xl font-bold mt-3 text-white">
//               {completed.length}
//             </h2>
//             <p className="text-slate-400 text-sm">
//               Completed Pujas
//             </p>
//           </motion.div>

//           <motion.div
//             whileHover={{ scale: 1.02 }}
//             className="p-6 rounded-2xl bg-white/5 border border-white/10"
//           >
//             <FiCalendar className="text-blue-400" size={26} />
//             <h2 className="text-2xl font-bold mt-3 text-white">
//               {new Date().toLocaleString("default", {
//                 month: "long",
//               })}
//             </h2>
//             <p className="text-slate-400 text-sm">Current Month</p>
//           </motion.div>

//         </div>

//         {/* LIST */}
//         <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
//           <h3 className="text-lg font-semibold text-white mb-4">
//             Completed Bookings
//           </h3>

//           {loading ? (
//             <p className="text-slate-400">Loading...</p>
//           ) : completed.length === 0 ? (
//             <p className="text-slate-400">No earnings yet</p>
//           ) : (
//             <div className="space-y-4">
//               {completed.map((b) => (
//                 <div
//                   key={b.id}
//                   className="flex flex-col md:flex-row justify-between p-4 rounded-xl bg-[#111827] border border-white/10"
//                 >
//                   <div>
//                     <h4 className="text-white font-semibold">
//                       {b.customer?.name}
//                     </h4>
//                     <p className="text-amber-400 text-sm">
//                       {b.ritual}
//                     </p>
//                     <p className="text-slate-400 text-xs mt-1">
//                       {b.customer?.date}
//                     </p>
//                   </div>

//                   <div className="text-green-400 font-semibold">
//                     ₹{getPrice(b.ritual)}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//       </div>
//     </PanditLayout>
//   );
// };

// export default PanditEarnings;


import { useEffect, useState } from "react";
import {
  collection,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
import { db, auth } from "../../firebase/firebase";
import PanditLayout from "../../pandit/layout/PanditLayout";
import { motion } from "framer-motion";
import {
  FiDollarSign,
  FiCheckCircle,
  FiCalendar,
  FiTrendingUp,
} from "react-icons/fi";

const getPrice = (ritual = "") => {
  const r = ritual.toLowerCase();

  if (r.includes("griha")) return 2500;
  if (r.includes("ganesh")) return 3100;
  if (r.includes("satyanarayan")) return 5100;

  return 2100;
};

const PanditEarnings = () => {
  const [user, setUser] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  // AUTH
  useEffect(() => {
    const unsub = auth.onAuthStateChanged((u) => setUser(u));
    return () => unsub();
  }, []);

  // BOOKINGS
  useEffect(() => {
    if (!user?.uid) return;

    const q = query(
      collection(db, "bookings"),
      where("panditId", "==", user.uid)
    );

    const unsub = onSnapshot(q, (snap) => {
      const data = snap.docs.map((d) => ({
        id: d.id,
        ...d.data(),
      }));

      setBookings(data);
      setLoading(false);
    });

    return () => unsub();
  }, [user]);

  const completed = bookings.filter((b) => b.status === "completed");

  const totalEarnings = completed.reduce(
    (acc, b) => acc + getPrice(b.ritual),
    0
  );

  const avgEarnings =
    completed.length > 0
      ? Math.round(totalEarnings / completed.length)
      : 0;

  const thisMonth = new Date().toLocaleString("default", {
    month: "long",
  });

  return (
    <PanditLayout>
      <div className="space-y-8">

        {/* HEADER */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Earnings Dashboard 💰
          </h1>
          <p className="text-slate-400 mt-1">
            Track your income, pujas & performance
          </p>
        </div>

        {/* STATS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          {/* Total Earnings */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative overflow-hidden p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-500/20 blur-3xl rounded-full" />
            <FiDollarSign className="text-green-400" size={28} />
            <h2 className="text-3xl font-bold mt-3 text-white">
              ₹{totalEarnings}
            </h2>
            <p className="text-slate-400 text-sm">Total Earnings</p>
          </motion.div>

          {/* Completed */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative overflow-hidden p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-500/20 blur-3xl rounded-full" />
            <FiCheckCircle className="text-amber-400" size={28} />
            <h2 className="text-3xl font-bold mt-3 text-white">
              {completed.length}
            </h2>
            <p className="text-slate-400 text-sm">Completed Pujas</p>
          </motion.div>

          {/* Avg */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative overflow-hidden p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/20 blur-3xl rounded-full" />
            <FiTrendingUp className="text-blue-400" size={28} />
            <h2 className="text-3xl font-bold mt-3 text-white">
              ₹{avgEarnings}
            </h2>
            <p className="text-slate-400 text-sm">
              Avg per Puja
            </p>
          </motion.div>

        </div>

        {/* MONTH LABEL */}
        <div className="text-slate-400 text-sm">
          📅 {thisMonth} Earnings Overview
        </div>

        {/* LIST */}
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5">

          <h3 className="text-lg font-semibold text-white mb-5">
            Completed Pujas
          </h3>

          {loading ? (
            <p className="text-slate-400">Loading...</p>
          ) : completed.length === 0 ? (
            <div className="text-center py-10 text-slate-400">
              No earnings yet. Complete your first puja 🙏
            </div>
          ) : (
            <div className="space-y-3">

              {completed.map((b, i) => (
                <motion.div
                  key={b.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 p-4 rounded-xl bg-[#0B1120] border border-white/10 hover:bg-white/5 transition"
                >

                  <div>
                    <h4 className="text-white font-semibold">
                      {b.customer?.name}
                    </h4>

                    <p className="text-amber-400 text-sm">
                      {b.ritual}
                    </p>

                    <p className="text-slate-400 text-xs mt-1">
                      {b.customer?.date}
                    </p>
                  </div>

                  <div className="text-green-400 font-bold text-lg">
                    ₹{getPrice(b.ritual)}
                  </div>

                </motion.div>
              ))}

            </div>
          )}

        </div>

      </div>
    </PanditLayout>
  );
};

export default PanditEarnings;