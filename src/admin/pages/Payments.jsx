import { useEffect, useState } from "react";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import AdminLayout from "../layout/AdminLayout";
import toast from "react-hot-toast";

const Payments = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("ALL");

  // FETCH BOOKINGS (payments are from bookings)
  const fetchPayments = async () => {
    try {
      setLoading(true);
      const snap = await getDocs(collection(db, "bookings"));

      const data = snap.docs.map((d) => ({
        id: d.id,
        ...d.data(),
      }));

      setBookings(data || []);
    } catch (err) {
      console.error(err);
      toast.error("Failed to load payments");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPayments();
  }, []);

  // UPDATE PAYMENT STATUS
  const markPaid = async (id) => {
    try {
      await updateDoc(doc(db, "bookings", id), {
        paymentStatus: "Paid",
      });

      setBookings((prev) =>
        prev.map((b) =>
          b.id === id ? { ...b, paymentStatus: "Paid" } : b
        )
      );

      toast.success("Marked as Paid");
    } catch (err) {
      console.error(err);
      toast.error("Update failed");
    }
  };

  // FILTER
  const filtered = bookings.filter((b) => {
    if (filter === "ALL") return true;
    return b.paymentStatus === filter;
  });

  return (
    <AdminLayout>
      <div className="space-y-6 text-white">

        {/* HEADER */}
        <div>
          <h1 className="text-2xl font-bold text-amber-400">
            Payments
          </h1>
          <p className="text-slate-400 text-sm">
            Manage all booking payments
          </p>
        </div>

        {/* FILTER */}
        <div className="flex gap-2 flex-wrap">
          {["ALL", "Paid", "Pending Verification"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-xl text-sm border ${
                filter === f
                  ? "bg-amber-400 text-black"
                  : "bg-white/5 text-white"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* LOADING */}
        {loading && (
          <p className="text-slate-400">Loading payments...</p>
        )}

        {/* TABLE */}
        {!loading && filtered.length > 0 && (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px] border border-white/10">

              <thead className="bg-white/5 text-slate-400">
                <tr>
                  <th className="p-3 text-left">Customer</th>
                  <th className="p-3 text-left">Ritual</th>
                  <th className="p-3 text-left">Date</th>
                  <th className="p-3 text-left">Status</th>
                  <th className="p-3 text-left">Action</th>
                </tr>
              </thead>

              <tbody>
                {filtered.map((b) => (
                  <tr key={b.id} className="border-t border-white/5">

                    <td className="p-3">
                      <p>{b?.customer?.name}</p>
                      <p className="text-xs text-slate-400">
                        {b?.customer?.phone}
                      </p>
                    </td>

                    <td className="p-3">{b?.ritual}</td>

                    <td className="p-3">{b?.customer?.date}</td>

                    <td className="p-3">
                      <span className="px-3 py-1 text-xs rounded-full bg-yellow-500/20 text-yellow-400">
                        {b.paymentStatus || "Pending"}
                      </span>
                    </td>

                    <td className="p-3">
                      <button
                        onClick={() => markPaid(b.id)}
                        className="px-3 py-1 text-xs bg-green-500 text-black rounded"
                      >
                        Mark Paid
                      </button>
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        )}

        {!loading && filtered.length === 0 && (
          <p className="text-slate-400 text-center py-10">
            No payments found
          </p>
        )}

      </div>
    </AdminLayout>
  );
};

export default Payments;