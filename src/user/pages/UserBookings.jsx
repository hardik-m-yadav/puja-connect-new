import { useEffect, useState } from "react";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db, auth } from "../../firebase/firebase";
import UserLayout from "../layout/UserLayout";
import { motion } from "framer-motion";

const UserBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const user = auth.currentUser;
    if (!user) return;

    const q = query(
      collection(db, "bookings"),
      where("userId", "==", user.uid)
    );

    const unsub = onSnapshot(q, (snap) => {
      setBookings(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    });

    return () => unsub();
  }, []);

  return (
    <UserLayout>
      <div className="space-y-6">

        <h1 className="text-2xl font-bold text-white">
          My Bookings
        </h1>

        {bookings.length === 0 ? (
          <p className="text-slate-400">No bookings found</p>
        ) : (
          bookings.map(b => (
            <motion.div
              key={b.id}
              whileHover={{ scale: 1.01 }}
              className="bg-white/5 border border-white/10 p-5 rounded-xl"
            >
              <h2 className="text-white font-semibold">
                {b.ritual}
              </h2>

              <p className="text-amber-400">
                {b.panditName}
              </p>

              <p className="text-slate-400 text-sm mt-1">
                {b.customer?.date} | {b.customer?.city}
              </p>

              <span className="inline-block mt-2 text-xs px-3 py-1 rounded-full bg-green-500/20 text-green-400">
                {b.status || "pending"}
              </span>
            </motion.div>
          ))
        )}
      </div>
    </UserLayout>
  );
};

export default UserBookings;