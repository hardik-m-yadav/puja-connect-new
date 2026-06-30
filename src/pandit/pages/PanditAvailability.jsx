import { useEffect, useState } from "react";
import {
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";
import { db, auth } from "../../firebase/firebase";
import { motion } from "framer-motion";
import PanditLayout from "../layout/PanditLayout";
import toast from "react-hot-toast";

const getNext30Days = () => {
  const days = [];
  const today = new Date();

  for (let i = 0; i < 30; i++) {
    const d = new Date();
    d.setDate(today.getDate() + i);

    const dateStr = d.toISOString().split("T")[0];

    days.push(dateStr);
  }

  return days;
};

const PanditAvailability = () => {
  const user = auth.currentUser;

  const [loading, setLoading] = useState(true);
  const [availability, setAvailability] = useState({});

  const dates = getNext30Days();

  // FETCH
  useEffect(() => {
    const fetchData = async () => {
      if (!user?.uid) return;

      try {
        const ref = doc(db, "panditAvailability", user.uid);
        const snap = await getDoc(ref);

        if (snap.exists()) {
          setAvailability(snap.data().dates || {});
        }

        setLoading(false);
      } catch (err) {
        console.log(err);
        toast.error("Failed to load availability");
      }
    };

    fetchData();
  }, [user]);

  // TOGGLE DATE
  const toggleDate = async (date) => {
    const updated = {
      ...availability,
      [date]: !availability[date],
    };

    setAvailability(updated);

    try {
      await setDoc(doc(db, "panditAvailability", user.uid), {
        uid: user.uid,
        dates: updated,
      });

      toast.success("Availability updated");
    } catch (err) {
      toast.error("Update failed");
    }
  };

  if (loading) {
    return (
      <PanditLayout>
        <p className="text-white p-6">Loading calendar...</p>
      </PanditLayout>
    );
  }

  return (
    <PanditLayout>
      <div className="space-y-6">

        {/* HEADER */}
        <div>
          <h1 className="text-3xl font-bold text-amber-400">
            Availability Calendar
          </h1>
          <p className="text-slate-400 text-sm mt-2">
            Select dates when you are available for pujas
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">

          {dates.map((date) => {
            const isAvailable = availability[date];

            return (
              <motion.div
                key={date}
                whileHover={{ scale: 1.03 }}
                onClick={() => toggleDate(date)}
                className={`cursor-pointer p-4 rounded-xl border text-center transition
                  ${
                    isAvailable
                      ? "bg-green-500/20 border-green-500 text-green-300"
                      : "bg-white/5 border-white/10 text-slate-400"
                  }`}
              >
                <p className="text-sm font-semibold">{date}</p>

                <p className="text-xs mt-2">
                  {isAvailable ? "Available" : "Unavailable"}
                </p>
              </motion.div>
            );
          })}

        </div>
      </div>
    </PanditLayout>
  );
};

export default PanditAvailability;