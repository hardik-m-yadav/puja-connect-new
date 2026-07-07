import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import UserLayout from "../layout/UserLayout";
import {
  FiClock,
  FiCheckCircle,
  FiLoader,
  FiXCircle,
} from "react-icons/fi";

const UserBookingDetails = () => {
  const { id } = useParams();
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    const ref = doc(db, "bookings", id);

    const unsub = onSnapshot(ref, (snap) => {
      if (snap.exists()) {
        setBooking({ id: snap.id, ...snap.data() });
      }
    });

    return () => unsub();
  }, [id]);

  const steps = [
    { key: "pending", label: "Booking Received", icon: <FiClock /> },
    { key: "accepted", label: "Pandit Assigned", icon: <FiLoader /> },
    { key: "in_progress", label: "Puja In Progress", icon: <FiLoader /> },
    { key: "completed", label: "Completed", icon: <FiCheckCircle /> },
  ];

  const currentIndex = steps.findIndex(
    (s) => s.key === booking?.status
  );

  return (
    <UserLayout>
      <div className="max-w-3xl mx-auto space-y-8">

        {/* HEADER */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h1 className="text-2xl font-bold text-amber-400">
            Booking Details
          </h1>
          <p className="text-slate-400">
            Track your puja progress live
          </p>
        </motion.div>

        {/* INFO CARD */}
        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
          <h2 className="text-xl font-semibold text-white">
            {booking?.ritual}
          </h2>

          <p className="text-slate-400 mt-2">
            Pandit: {booking?.panditName || "Not assigned"}
          </p>

          <p className="text-slate-400">
            Date:{" "}
            {booking?.createdAt?.seconds
              ? new Date(
                  booking.createdAt.seconds * 1000
                ).toLocaleString()
              : "Pending"}
          </p>
        </div>

        {/* TIMELINE */}
        <div className="space-y-6">
          {steps.map((step, index) => {
            const active = index <= currentIndex;

            return (
              <div key={step.key} className="flex items-center gap-4">
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-full 
                  ${
                    active
                      ? "bg-green-500 text-white"
                      : "bg-white/10 text-slate-400"
                  }`}
                >
                  {step.icon}
                </div>

                <div>
                  <h3
                    className={`font-semibold ${
                      active ? "text-white" : "text-slate-500"
                    }`}
                  >
                    {step.label}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </UserLayout>
  );
};

export default UserBookingDetails;