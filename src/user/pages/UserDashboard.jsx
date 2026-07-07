// import { useEffect, useState } from "react";
// import {
//   collection,
//   query,
//   where,
//   onSnapshot,
// } from "firebase/firestore";
// import { db, auth } from "../../firebase/firebase";
// import { motion } from "framer-motion";
// import {
//   FiCalendar,
//   FiClock,
//   FiCheckCircle,
//   FiActivity,
// } from "react-icons/fi";
// import UserLayout from "../layout/UserLayout";

// const UserDashboard = () => {
//   const [bookings, setBookings] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const user = auth.currentUser;

//   // 🔥 REAL-TIME BOOKINGS (NO INDEX REQUIRED)
//   useEffect(() => {
//     if (!user?.uid) return;

//     const q = query(
//       collection(db, "bookings"),
//       where("userId", "==", user.uid)
//     );

//     const unsub = onSnapshot(q, (snap) => {
//       let data = snap.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));

//       // 🔥 SORT IN FRONTEND (LATEST FIRST)
//       data = data.sort((a, b) => {
//         const aTime = a.createdAt?.seconds || 0;
//         const bTime = b.createdAt?.seconds || 0;
//         return bTime - aTime;
//       });

//       setBookings(data);
//       setLoading(false);
//     });

//     return () => unsub();
//   }, [user]);

//   // 📊 STATS
//   const total = bookings.length;
//   const pending = bookings.filter((b) => b.status === "pending").length;
//   const accepted = bookings.filter((b) => b.status === "accepted").length;
//   const completed = bookings.filter((b) => b.status === "completed").length;

//   const stats = [
//     {
//       title: "Total Bookings",
//       value: total,
//       icon: <FiCalendar />,
//       color: "from-orange-500 to-amber-400",
//     },
//     {
//       title: "Pending",
//       value: pending,
//       icon: <FiClock />,
//       color: "from-yellow-500 to-orange-400",
//     },
//     {
//       title: "Accepted",
//       value: accepted,
//       icon: <FiActivity />,
//       color: "from-blue-500 to-indigo-400",
//     },
//     {
//       title: "Completed",
//       value: completed,
//       icon: <FiCheckCircle />,
//       color: "from-green-500 to-emerald-400",
//     },
//   ];

//   return (
//     <UserLayout>
//       <div className="space-y-8">

//         {/* HEADER */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//         >
//           <h1 className="text-3xl font-bold text-amber-400">
//             My Dashboard
//           </h1>
//           <p className="text-slate-400">
//             Live booking status overview
//           </p>
//         </motion.div>

//         {/* STATS */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
//           {stats.map((s, i) => (
//             <motion.div
//               key={s.title}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.1 }}
//               className="relative overflow-hidden rounded-2xl p-5 bg-white/5 border border-white/10 backdrop-blur-xl"
//             >
//               <div
//                 className={`absolute -top-10 -right-10 w-32 h-32 blur-3xl opacity-30 bg-gradient-to-br ${s.color}`}
//               />

//               <div className="flex justify-between items-center">
//                 <div>
//                   <p className="text-slate-400 text-sm">{s.title}</p>
//                   <h2 className="text-3xl font-bold mt-2">{s.value}</h2>
//                 </div>

//                 <div
//                   className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${s.color}`}
//                 >
//                   {s.icon}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* BOOKINGS */}
//         <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
//           <h2 className="text-xl font-bold mb-5">Recent Bookings</h2>

//           {loading ? (
//             <p className="text-slate-400">Loading...</p>
//           ) : bookings.length === 0 ? (
//             <div className="text-center py-10 text-slate-400">
//               No bookings yet 🙏
//             </div>
//           ) : (
//             <div className="space-y-4">
//               {bookings.map((b) => (
//                 <motion.div
//                   key={b.id}
//                   whileHover={{ scale: 1.01 }}
//                   className="p-4 rounded-xl border border-white/10 bg-[#0B1120] flex flex-col md:flex-row md:justify-between md:items-center gap-3"
//                 >
//                   {/* LEFT */}
//                   <div>
//                     <h3 className="font-semibold text-white">
//                       {b.ritual}
//                     </h3>
//                     <p className="text-slate-400 text-sm">
//                       Pandit: {b.panditName || "Not assigned"}
//                     </p>
//                   </div>

//                   {/* DATE */}
//                   <div className="text-sm text-slate-400">
//                     📅{" "}
//                     {b.createdAt?.seconds
//                       ? new Date(
//                           b.createdAt.seconds * 1000
//                         ).toLocaleDateString()
//                       : "Pending"}
//                   </div>

//                   {/* STATUS */}
//                   <div
//                     className={`px-3 py-1 rounded-full text-xs font-semibold w-fit
//                     ${
//                       b.status === "completed"
//                         ? "bg-green-500/20 text-green-400"
//                         : b.status === "accepted"
//                         ? "bg-blue-500/20 text-blue-400"
//                         : b.status === "cancelled"
//                         ? "bg-red-500/20 text-red-400"
//                         : "bg-yellow-500/20 text-yellow-400"
//                     }`}
//                   >
//                     {b.status || "pending"}
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           )}
//         </div>

//       </div>
//     </UserLayout>
//   );
// };

// export default UserDashboard;


import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { doc, getDoc, collection, query, where, getDocs } from "firebase/firestore";
import { db, auth } from "../../firebase/firebase";
import UserLayout from "../layout/UserLayout";
import {
  FiCalendar,
  FiClock,
  FiCheckCircle,
  FiActivity,
  FiPlus,
} from "react-icons/fi";

const UserDashboard = () => {
  const user = auth.currentUser;

  const [profile, setProfile] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!user?.uid) return;

      // USER PROFILE
      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        setProfile(userSnap.data());
      }

      // BOOKINGS
      const q = query(
        collection(db, "bookings"),
        where("userId", "==", user.uid)
      );

      const snap = await getDocs(q);

      const data = snap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setBookings(data);
      setLoading(false);
    };

    fetchData();
  }, [user]);

  const activeBooking = bookings.find(
    (b) => b.status !== "completed"
  );

  if (loading) {
    return (
      <UserLayout>
        <p className="text-white">Loading dashboard...</p>
      </UserLayout>
    );
  }

  return (
    <UserLayout>
      <div className="max-w-6xl mx-auto space-y-8">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl font-bold text-amber-400">
            Welcome back, {profile?.name || "User"} 🙏
          </h1>
          <p className="text-slate-400">
            Here is your spiritual activity overview
          </p>
        </motion.div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          <StatCard
            title="Total Bookings"
            value={bookings.length}
            icon={<FiCalendar />}
          />

          <StatCard
            title="Active"
            value={
              activeBooking ? "1 Running" : "None"
            }
            icon={<FiActivity />}
          />

          <StatCard
            title="Completed"
            value={
              bookings.filter((b) => b.status === "completed").length
            }
            icon={<FiCheckCircle />}
          />

          <StatCard
            title="Upcoming"
            value={
              bookings.filter((b) => b.status === "pending").length
            }
            icon={<FiClock />}
          />
        </div>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* ACTIVE BOOKING */}
          <div className="md:col-span-2 bg-white/5 border border-white/10 rounded-2xl p-6">

            <h2 className="text-xl font-semibold text-white mb-4">
              Active Booking
            </h2>

            {activeBooking ? (
              <div className="space-y-3">
                <p className="text-amber-400 font-semibold">
                  {activeBooking.ritualName || "Puja Booking"}
                </p>

                <p className="text-slate-300 text-sm">
                  Status:{" "}
                  <span className="text-green-400">
                    {activeBooking.status}
                  </span>
                </p>

                <p className="text-slate-400 text-sm">
                  Date: {activeBooking.date || "Not scheduled"}
                </p>

                <div className="w-full bg-white/10 h-2 rounded-full mt-4">
                  <div className="w-1/2 h-2 bg-amber-400 rounded-full" />
                </div>
              </div>
            ) : (
              <p className="text-slate-400">
                No active booking right now
              </p>
            )}
          </div>

          {/* QUICK ACTIONS */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">

            <h2 className="text-xl font-semibold text-white">
              Quick Actions
            </h2>

            <button
              onClick={() => (window.location.href = "/rituals")}
              className="w-full bg-amber-400 text-black font-semibold py-3 rounded-xl flex items-center justify-center gap-2"
            >
              <FiPlus /> Book New Puja
            </button>

            <button
              onClick={() =>
                (window.location.href = "/user/bookings")
              }
              className="w-full bg-white/10 text-white py-3 rounded-xl"
            >
              View All Bookings
            </button>
          </div>
        </div>

        {/* RECENT BOOKINGS */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">

          <h2 className="text-xl font-semibold text-white mb-4">
            Recent Bookings
          </h2>

          <div className="space-y-3">
            {bookings.slice(0, 5).map((b) => (
              <div
                key={b.id}
                className="flex justify-between items-center p-3 bg-black/30 rounded-xl"
              >
                <div>
                  <p className="text-white font-medium">
                    {b.ritualName || "Puja"}
                  </p>
                  <p className="text-xs text-slate-400">
                    {b.date || "No date"}
                  </p>
                </div>

                <span
                  className={`text-xs px-3 py-1 rounded-full ${
                    b.status === "completed"
                      ? "bg-green-500/20 text-green-400"
                      : b.status === "pending"
                      ? "bg-yellow-500/20 text-yellow-400"
                      : "bg-blue-500/20 text-blue-400"
                  }`}
                >
                  {b.status}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </UserLayout>
  );
};

export default UserDashboard;

/* COMPONENT */
const StatCard = ({ title, value, icon }) => (
  <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-between">
    <div>
      <p className="text-slate-400 text-xs">{title}</p>
      <h3 className="text-xl font-bold text-white">{value}</h3>
    </div>
    <div className="text-amber-400 text-xl">{icon}</div>
  </div>
);