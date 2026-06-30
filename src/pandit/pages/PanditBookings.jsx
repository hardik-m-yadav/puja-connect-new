// import { useEffect, useState } from "react";
// import {
//   collection,
//   query,
//   where,
//   onSnapshot,
//   doc,
//   updateDoc,
// } from "firebase/firestore";
// import { db, auth } from "../../firebase/firebase";
// import { motion } from "framer-motion";
// import toast from "react-hot-toast";
// import PanditLayout from "../../pandit/layout/PanditLayout";

// const PanditBookings = () => {
//   const [bookings, setBookings] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [user, setUser] = useState(null);

//   // 👤 Auth listener
//   useEffect(() => {
//     const unsub = auth.onAuthStateChanged((u) => {
//       setUser(u);
//     });

//     return () => unsub();
//   }, []);

//   // 📡 Real-time bookings (only assigned to this pandit)
//   useEffect(() => {
//     if (!user?.uid) return;

//     const q = query(
//       collection(db, "bookings"),
//       where("panditId", "==", user.uid)
//     );

//     const unsub = onSnapshot(
//       q,
//       (snap) => {
//         const data = snap.docs.map((d) => ({
//           id: d.id,
//           ...d.data(),
//         }));

//         setBookings(data);
//         setLoading(false);
//       },
//       (err) => {
//         console.error(err);
//         toast.error("Failed to load bookings");
//         setLoading(false);
//       }
//     );

//     return () => unsub();
//   }, [user]);

//   // 🔥 UPDATE STATUS FUNCTION
//   const updateStatus = async (id, status) => {
//     try {
//       await updateDoc(doc(db, "bookings", id), {
//         status,
//       });

//       toast.success(`Marked as ${status}`);
//     } catch (err) {
//       toast.error("Update failed");
//     }
//   };

//   // 🎯 STATUS UI COLORS
//   const getStatusColor = (status) => {
//     switch (status) {
//       case "accepted":
//         return "text-blue-400";
//       case "completed":
//         return "text-green-400";
//       case "rejected":
//         return "text-red-400";
//       default:
//         return "text-yellow-400";
//     }
//   };

//   if (loading) {
//     return (
//       <div className="text-white p-6">Loading bookings...</div>
//     );
//   }

//   return (
//     <PanditLayout>
//       <div className="p-6 text-white space-y-6">

//         {/* HEADER */}
//         <div>
//           <h1 className="text-2xl font-bold text-amber-400">
//             My Bookings
//           </h1>
//           <p className="text-slate-400 text-sm">
//             Manage your puja assignments
//           </p>
//         </div>

//         {/* EMPTY */}
//         {bookings.length === 0 ? (
//           <p className="text-slate-400">
//             No bookings assigned yet
//           </p>
//         ) : (
//           <div className="grid gap-4">

//             {bookings.map((b) => (
//               <motion.div
//                 key={b.id}
//                 whileHover={{ scale: 1.01 }}
//                 className="bg-white/5 border border-white/10 p-5 rounded-2xl"
//               >

//                 {/* INFO */}
//                 <h2 className="text-lg font-semibold">
//                   {b.customer?.name}
//                 </h2>

//                 <p className="text-amber-400">{b.ritual}</p>

//                 <p className="text-sm text-slate-400 mt-1">
//                   📅 {b.customer?.date} | 📍 {b.customer?.city}
//                 </p>

//                 {/* STATUS */}
//                 <p className="mt-2 text-sm">
//                   Status:{" "}
//                   <span className={getStatusColor(b.status)}>
//                     {b.status || "pending"}
//                   </span>
//                 </p>

//                 {/* ACTION BUTTONS */}
//                 <div className="flex flex-wrap gap-3 mt-4">

//                   {/* Accept */}
//                   <button
//                     onClick={() => updateStatus(b.id, "accepted")}
//                     className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:scale-105 transition"
//                   >
//                     Accept
//                   </button>

//                   {/* Reject */}
//                   <button
//                     onClick={() => updateStatus(b.id, "rejected")}
//                     className="px-4 py-2 bg-red-500 text-white rounded-lg hover:scale-105 transition"
//                   >
//                     Reject
//                   </button>

//                   {/* ✅ COMPLETE PUJA (NEW) */}
//                   <button
//                     onClick={() => updateStatus(b.id, "completed")}
//                     className="px-4 py-2 bg-green-500 text-black rounded-lg hover:scale-105 transition"
//                   >
//                     Puja Completed
//                   </button>

//                 </div>

//               </motion.div>
//             ))}

//           </div>
//         )}
//       </div>
//     </PanditLayout>
//   );
// };

// export default PanditBookings;


import { useEffect, useState } from "react";
import {
  collection,
  query,
  where,
  onSnapshot,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db, auth } from "../../firebase/firebase";
import { motion } from "framer-motion";
import { FiCheck, FiX, FiPlay, FiCheckCircle } from "react-icons/fi";
import PanditLayout from "../layout/PanditLayout";

const PanditBookings = () => {
  const [user, setUser] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  // AUTH
  useEffect(() => {
    const unsub = auth.onAuthStateChanged((u) => setUser(u));
    return () => unsub();
  }, []);

  // FETCH ONLY THIS PANDIT BOOKINGS
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

  // UPDATE STATUS
  const updateStatus = async (id, status) => {
    const ref = doc(db, "bookings", id);

    await updateDoc(ref, {
      status,
    });
  };

  return (
    <PanditLayout>
      <div className="space-y-6">

        {/* HEADER */}
        <div>
          <h1 className="text-2xl font-bold text-amber-400">
            My Bookings
          </h1>
          <p className="text-slate-400 text-sm">
            Manage puja lifecycle
          </p>
        </div>

        {/* LOADING */}
        {loading && (
          <p className="text-slate-400">Loading...</p>
        )}

        {/* EMPTY */}
        {!loading && bookings.length === 0 && (
          <p className="text-slate-400">
            No bookings assigned yet
          </p>
        )}

        {/* LIST */}
        <div className="grid gap-4">
          {bookings.map((b) => (
            <motion.div
              key={b.id}
              whileHover={{ scale: 1.01 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-5"
            >

              {/* INFO */}
              <div className="flex flex-col md:flex-row md:justify-between gap-3">
                <div>
                  <h2 className="text-lg font-semibold text-white">
                    {b.customer?.name}
                  </h2>

                  <p className="text-amber-400">
                    {b.ritual}
                  </p>

                  <p className="text-slate-400 text-sm">
                    📍 {b.customer?.city} | 📅 {b.customer?.date}
                  </p>
                </div>

                {/* STATUS */}
                <div className="text-sm">
                  <span
                    className={`px-3 py-1 rounded-full ${
                      b.status === "completed"
                        ? "bg-green-500/20 text-green-400"
                        : b.status === "in-progress"
                        ? "bg-blue-500/20 text-blue-400"
                        : "bg-yellow-500/20 text-yellow-400"
                    }`}
                  >
                    {b.status || "pending"}
                  </span>
                </div>
              </div>

              {/* ACTIONS */}
              <div className="flex flex-wrap gap-2 mt-4">

                {/* ACCEPT */}
                <button
                  onClick={() => updateStatus(b.id, "accepted")}
                  className="flex items-center gap-1 px-3 py-2 bg-green-500 text-black rounded-lg text-sm"
                >
                  <FiCheck /> Accept
                </button>

                {/* START */}
                <button
                  onClick={() => updateStatus(b.id, "in-progress")}
                  className="flex items-center gap-1 px-3 py-2 bg-blue-500 text-white rounded-lg text-sm"
                >
                  <FiPlay /> Start Puja
                </button>

                {/* COMPLETE */}
                <button
                  onClick={() => updateStatus(b.id, "completed")}
                  className="flex items-center gap-1 px-3 py-2 bg-purple-500 text-white rounded-lg text-sm"
                >
                  <FiCheckCircle /> Completed
                </button>

                {/* REJECT */}
                <button
                  onClick={() => updateStatus(b.id, "rejected")}
                  className="flex items-center gap-1 px-3 py-2 bg-red-500 text-white rounded-lg text-sm"
                >
                  <FiX /> Reject
                </button>

              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </PanditLayout>
  );
};

export default PanditBookings;