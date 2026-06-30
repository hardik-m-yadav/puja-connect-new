import { useEffect, useState } from "react";
import {
  collection,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
import { db, auth } from "../../firebase/firebase";
import { motion } from "framer-motion";
import {
  FiCalendar,
  FiBookOpen,
  FiDollarSign,
  FiStar,
  FiClock,
} from "react-icons/fi";
import PanditLayout from "../../pandit/layout/PanditLayout";

const getPrice = (ritual = "") => {
  const r = ritual.toLowerCase();

  if (r.includes("griha")) return 2500;
  if (r.includes("ganesh")) return 3100;
  if (r.includes("satyanarayan")) return 5100;
  if (r.includes("puja")) return 2100;

  return 2100; // default
};

const PanditDashboard = () => {
  const [user, setUser] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  // AUTH
  useEffect(() => {
    const unsub = auth.onAuthStateChanged((u) => {
      setUser(u);
    });
    return () => unsub();
  }, []);

  // REALTIME BOOKINGS
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

  const today = new Date().toISOString().split("T")[0];

  const todayBookings = bookings.filter(
    (b) => b?.customer?.date === today
  ).length;

  const pendingBookings = bookings.filter(
    (b) => b.status === "pending" || !b.status
  ).length;

  const completedBookings = bookings.filter(
    (b) => b.status === "completed"
  ).length;

  // 💰 FIXED EARNINGS (AUTO PRICE SYSTEM)
  const totalEarnings = bookings.reduce((acc, b) => {
    return acc + getPrice(b.ritual);
  }, 0);

  const stats = [
    {
      title: "Today's Bookings",
      value: todayBookings,
      icon: <FiCalendar size={22} />,
      color: "from-orange-500 to-amber-400",
    },
    {
      title: "Pending Bookings",
      value: pendingBookings,
      icon: <FiClock size={22} />,
      color: "from-yellow-500 to-orange-400",
    },
    {
      title: "Completed",
      value: completedBookings,
      icon: <FiBookOpen size={22} />,
      color: "from-green-500 to-emerald-400",
    },
    {
      title: "Total Earnings",
      value: `₹${totalEarnings}`,
      icon: <FiDollarSign size={22} />,
      color: "from-emerald-500 to-green-400",
    },
  ];

  const latestBookings = bookings
    .slice()
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 3);

  return (
    <PanditLayout>
      <div className="space-y-8">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-3xl font-bold text-white">
            Namaste 🙏
          </h2>
          <p className="text-slate-400 mt-2">
            Your live bookings dashboard
          </p>
        </motion.div>

        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {stats.map((item, index) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -6, scale: 1.02 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 blur-3xl opacity-30 bg-gradient-to-br ${item.color}" />

              <div className="relative flex justify-between items-center">
                <div>
                  <p className="text-slate-400 text-sm">
                    {item.title}
                  </p>
                  <h3 className="text-3xl font-bold mt-2 text-white">
                    {item.value}
                  </h3>
                </div>

                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center`}
                >
                  {item.icon}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOOKINGS */}
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5">
          <div className="flex items-center gap-2 mb-5">
            <FiBookOpen className="text-amber-400" />
            <h3 className="text-xl font-bold text-white">
              Latest Bookings
            </h3>
          </div>

          {loading ? (
            <p className="text-slate-400">Loading...</p>
          ) : latestBookings.length === 0 ? (
            <p className="text-slate-400">No bookings assigned yet</p>
          ) : (
            <div className="space-y-4">
              {latestBookings.map((b) => (
                <div
                  key={b.id}
                  className="bg-[#111827] border border-white/10 p-4 rounded-xl flex flex-col md:flex-row md:justify-between gap-2"
                >
                  <div>
                    <h4 className="font-semibold text-white">
                      {b?.customer?.name}
                    </h4>
                    <p className="text-amber-400 text-sm">
                      {b.ritual}
                    </p>
                    <p className="text-slate-400 text-xs mt-1">
                      {b?.customer?.city}
                    </p>
                    <p className="text-green-400 text-xs mt-1">
                      💰 ₹{getPrice(b.ritual)}
                    </p>
                  </div>

                  <div className="text-slate-400 text-sm">
                    📅 {b?.customer?.date}
                  </div>

                  <div
                    className={`text-xs px-3 py-4 rounded-full ${
                      b.status === "completed"
                        ? "bg-green-500/20 text-green-400"
                        : b.status === "accepted"
                        ? "bg-blue-500/20 text-blue-400"
                        : "bg-yellow-500/20 text-yellow-400"
                    }`}
                  >
                    {b.status || "pending"}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </PanditLayout>
  );
};

export default PanditDashboard;