import { useState } from "react";
import AdminLayout from "../layout/AdminLayout";
import useBookings from "../hooks/useBookings";
import { motion } from "framer-motion";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import toast from "react-hot-toast";

const getStatusColor = (status) => {
  switch (status) {
    case "Confirmed":
      return "bg-green-500/10 text-green-400 border-green-500/30";
    case "Rejected":
      return "bg-red-500/10 text-red-400 border-red-500/30";
    case "Pending Verification":
      return "bg-yellow-500/10 text-yellow-400 border-yellow-500/30";
    default:
      return "bg-white/10 text-white";
  }
};

const Bookings = () => {
  const { bookings, loading } = useBookings();
  const [search, setSearch] = useState("");
  const [updatingId, setUpdatingId] = useState(null);

  const updateStatus = async (id, status) => {
    try {
      setUpdatingId(id);

      const ref = doc(db, "bookings", id);

    await updateDoc(ref, {
  paymentStatus: status,
  updatedAt: new Date().toISOString(),
});

toast.success(
  status === "Confirmed"
    ? "Booking Approved Successfully"
    : "Booking Rejected Successfully"
);
    } catch (err) {
    //   console.error("Status update failed:", err);
    console.error("Status update failed:", err);

toast.error("Failed to update booking");
    } finally {
      setUpdatingId(null);
    }
  };

  const filtered = bookings.filter((b) =>
    b?.customer?.name?.toLowerCase().includes(search.toLowerCase()) ||
    b?.ritual?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AdminLayout>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-6"
      >
        {/* HEADER */}
        <div className="space-y-1">
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            Bookings
          </h1>
          <p className="text-slate-400 text-sm md:text-base">
            Manage all puja bookings in real time
          </p>
        </div>




        {/* SEARCH */}
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name or ritual..."
          className="
            w-full p-3 md:p-4 rounded-xl
            bg-white/5 border border-white/10
            text-white placeholder:text-slate-500
            focus:outline-none focus:ring-2 focus:ring-amber-400/30
            transition
          "
        />

        {/* LOADING */}
        {loading && (
          <p className="text-slate-400 text-sm">Loading bookings...</p>
        )}

        {/* DESKTOP TABLE */}
        <div className="hidden md:block overflow-x-auto rounded-2xl border border-white/10 bg-white/5">
          <table className="w-full text-left">
            <thead className="text-slate-300 text-sm border-b border-white/10">
              <tr>
                <th className="p-4">Customer</th>
                <th className="p-4">Ritual</th>
                <th className="p-4">Pandit</th>
                <th className="p-4">Payment</th>
                <th className="p-4">Status</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((b, index) => (
                <motion.tr
                  key={b.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.03 }}
                  whileHover={{
                    scale: 1.005,
                    backgroundColor: "rgba(255,255,255,0.03)",
                  }}
                  className="border-t border-white/10 transition"
                >
                  <td className="p-4">{b.customer?.name}</td>

                  <td className="p-4 text-slate-300">{b.ritual}</td>

                  <td className="p-4 text-slate-300">{b.pandit}</td>

                  <td className="p-4 text-amber-400">
                    {b.paymentMethod}
                  </td>

                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs border ${getStatusColor(
                        b.paymentStatus
                      )}`}
                    >
                      {b.paymentStatus}
                    </span>
                  </td>

                  {/* ACTIONS */}
                  <td className="p-4 space-x-2">
                    <button
                      disabled={updatingId === b.id}
                      onClick={() => updateStatus(b.id, "Confirmed")}
                      className="
                        px-3 py-1.5 text-xs font-medium rounded-lg
                        bg-green-500/10 text-green-400
                        border border-green-500/30
                        hover:bg-green-500/20
                        transition active:scale-95
                      "
                    >
                      {updatingId === b.id ? "..." : "Approve"}
                    </button>

                    <button
                      disabled={updatingId === b.id}
                      onClick={() => updateStatus(b.id, "Rejected")}
                      className="
                        px-3 py-1.5 text-xs font-medium rounded-lg
                        bg-red-500/10 text-red-400
                        border border-red-500/30
                        hover:bg-red-500/20
                        transition active:scale-95
                      "
                    >
                      Reject
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* MOBILE CARDS */}
        <div className="md:hidden space-y-4">
          {filtered.map((b, index) => (
            <motion.div
              key={b.id}
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: index * 0.03 }}
              whileHover={{ scale: 1.02 }}
              className="
                p-4 md:p-5 rounded-2xl
                bg-white/5 border border-white/10
                space-y-3 transition
              "
            >
              <p className="font-semibold text-white">
                {b.customer?.name}
              </p>

              <p className="text-sm text-slate-400">
                {b.ritual}
              </p>

              <p className="text-sm text-slate-400">
                {b.pandit}
              </p>

              <div className="flex justify-between items-center mt-2">
                <span className="text-amber-400 text-sm">
                  {b.paymentMethod}
                </span>

                <span
                  className={`px-3 py-1 rounded-full text-xs border ${getStatusColor(
                    b.paymentStatus
                  )}`}
                >
                  {b.paymentStatus}
                </span>
              </div>

              {/* ACTIONS */}
              <div className="flex gap-2 mt-3">
                <button
                  disabled={updatingId === b.id}
                  onClick={() => updateStatus(b.id, "Confirmed")}
                  className="
                    flex-1 py-2 text-xs font-medium rounded-lg
                    bg-green-500/10 text-green-400
                    border border-green-500/30
                    active:scale-95 transition
                  "
                >
                  Approve
                </button>

                <button
                  disabled={updatingId === b.id}
                  onClick={() => updateStatus(b.id, "Rejected")}
                  className="
                    flex-1 py-2 text-xs font-medium rounded-lg
                    bg-red-500/10 text-red-400
                    border border-red-500/30
                    active:scale-95 transition
                  "
                >
                  Reject
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </AdminLayout>
  );
};

export default Bookings;