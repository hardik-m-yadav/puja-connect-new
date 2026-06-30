
import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../firebase/firebase";
import AdminLayout from "../layout/AdminLayout";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";



const AdminBookings = () => {
  const navigate = useNavigate();

  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("ALL");

  const [pandits, setPandits] = useState([]);
const [selectedPandit, setSelectedPandit] = useState({});

  // FETCH
  const fetchBookings = async () => {
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
      toast.error("Failed to load bookings");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);



  const fetchPandits = async () => {
  const snap = await getDocs(collection(db, "pandits"));
  const list = snap.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
  setPandits(list);
};

useEffect(() => {
  fetchPandits();
}, []);




const assignPandit = async (bookingId, pandit) => {
  const ref = doc(db, "bookings", bookingId);

  await updateDoc(ref, {
    panditId: pandit.id,
    panditName: pandit.name,
    status: "confirmed"
  });

  alert("Pandit Assigned Successfully!");
};

  // UPDATE STATUS
  const updateStatus = async (id, status) => {
    try {
      await updateDoc(doc(db, "bookings", id), {
        paymentStatus: status,
      });

      setBookings((prev) =>
        prev.map((b) =>
          b.id === id ? { ...b, paymentStatus: status } : b
        )
      );

      toast.success(`Marked as ${status}`);
    } catch (err) {
      console.error(err);
      toast.error("Update failed");
    }
  };

  // DELETE
  const deleteBooking = async (id) => {
    const ok = window.confirm("Delete this booking?");
    if (!ok) return;

    try {
      await deleteDoc(doc(db, "bookings", id));

      setBookings((prev) => prev.filter((b) => b.id !== id));

      toast.success("Deleted successfully");
    } catch (err) {
      console.error(err);
      toast.error("Delete failed");
    }
  };

  // FILTER
  const filteredBookings = bookings.filter((b) => {
    const matchSearch =
      b?.customer?.name?.toLowerCase().includes(search.toLowerCase()) ||
      b?.ritual?.toLowerCase().includes(search.toLowerCase()) ||
      b?.pandit?.toLowerCase().includes(search.toLowerCase());

    const matchFilter =
      filter === "ALL" || b.paymentStatus === filter;

    return matchSearch && matchFilter;
  });

  const statusColor = (status) => {
    switch (status) {
      case "Confirmed":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Pending Verification":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      default:
        return "bg-red-500/20 text-red-400 border-red-500/30";
    }
  };

  return (
//     <AdminLayout>
//       <div className="w-full space-y-6">

//         {/* HEADER */}
//         <div>
//           <h1 className="text-2xl font-bold text-amber-400">
//             Bookings Management
//           </h1>
//           <p className="text-slate-400 text-sm">
//             Manage all bookings
//           </p>
//         </div>

//         {/* SEARCH + FILTER */}
//         <div className="flex flex-col md:flex-row gap-3 justify-between">

//           <input
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             placeholder="Search bookings..."
//             className="w-full md:w-1/3 p-3 rounded-xl bg-white/5 border border-white/10 text-white"
//           />

//           <div className="flex gap-2 flex-wrap">
//             {["ALL", "Pending Verification", "Confirmed"].map((f) => (
//               <button
//                 key={f}
//                 onClick={() => setFilter(f)}
//                 className={`px-4 py-2 rounded-xl text-sm border ${
//                   filter === f
//                     ? "bg-amber-400 text-black"
//                     : "bg-white/5 text-white"
//                 }`}
//               >
//                 {f}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* LOADING */}
//         {loading && (
//           <p className="text-slate-400">Loading...</p>
//         )}

//         {/* EMPTY */}
//         {!loading && filteredBookings.length === 0 && (
//           <p className="text-center text-slate-400 py-10">
//             No bookings found
//           </p>
//         )}

//         {/* TABLE */}
//         {!loading && filteredBookings.length > 0 && (
//           <div className="overflow-x-auto">

//             <table className="w-full min-w-[900px] border border-white/10">

//               <thead className="bg-white/5 text-slate-400">
//                 <tr>
//                   <th className="p-3 text-left">Customer</th>
//                   <th className="p-3 text-left">Ritual</th>
//                   <th className="p-3 text-left">Pandit</th>
//                   <th className="p-3 text-left">Date</th>
//                   <th className="p-3 text-left">Status</th>
//                   <th className="p-3 text-left">Actions</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {filteredBookings.map((b) => (
//                   <tr
//                     key={b.id}
//                     className="border-t border-white/5 hover:bg-white/5 transition cursor-pointer"
//                     onClick={() =>
//                       navigate(`/admin/bookings/${b.id}`)
//                     }
//                   >

//                     <td className="p-3">
//                       <p>{b?.customer?.name}</p>
//                       <p className="text-xs text-slate-400">
//                         {b?.customer?.phone}
//                       </p>
//                     </td>

//                     <td className="p-3">{b?.ritual}</td>
//                     <td className="p-3">{b?.pandit}</td>
//                     <td className="p-3">{b?.customer?.date}</td>

//                     <td className="p-3">
//                       <span className={`px-3 py-1 text-xs rounded-full ${statusColor(b.paymentStatus)}`}>
//                         {b.paymentStatus}
//                       </span>
//                     </td>

//                     <td className="p-3 flex gap-2">

//                       <button
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           updateStatus(b.id, "Confirmed");
//                         }}
//                         className="px-3 py-1 text-xs bg-green-500 text-black rounded"
//                       >
//                         Confirm
//                       </button>

//                       <button
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           updateStatus(b.id, "Pending Verification");
//                         }}
//                         className="px-3 py-1 text-xs bg-yellow-400 text-black rounded"
//                       >
//                         Pending
//                       </button>

//                       <button
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           deleteBooking(b.id);
//                         }}
//                         className="px-3 py-1 text-xs bg-red-500 text-white rounded"
//                       >
//                         Delete
//                       </button>

//                       <button
//   onClick={() => navigate(`/admin/bookings/${booking.id}`)}
//   className="px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded text-sm"
// >
//   View Details
// </button>


// <div className="mt-3">
//   <select
//     className="w-full p-2 bg-black border border-white/10 rounded"
//     onChange={(e) =>
//       setSelectedPandit({
//         ...selectedPandit,
//         [booking.id]: pandits.find(p => p.id === e.target.value)
//       })
//     }
//   >
//     <option>Select Pandit</option>
//     {pandits.map(p => (
//       <option key={p.id} value={p.id}>
//         {p.name}
//       </option>
//     ))}
//   </select>

//   <button
//     onClick={() =>
//       assignPandit(
//         booking.id,
//         selectedPandit[booking.id]
//       )
//     }
//     className="mt-2 w-full bg-orange-500 p-2 rounded"
//   >
//     Assign Pandit
//   </button>
// </div>

//                     </td>

//                   </tr>
//                 ))}
//               </tbody>

//             </table>

//           </div>
//         )}

//       </div>
//     </AdminLayout>




<AdminLayout>
  <div className="w-full space-y-6">

    {/* HEADER */}
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
      <div>
        <h1 className="text-3xl font-bold text-amber-400">
          Bookings Management
        </h1>
        <p className="text-slate-400 text-sm mt-1">
          Manage all bookings, assign pandits & track status
        </p>
      </div>
    </div>

    {/* SEARCH + FILTER */}
    <div className="flex flex-col md:flex-row gap-3 justify-between items-stretch md:items-center">

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search by customer, ritual or pandit..."
        className="w-full md:w-1/3 p-3 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-amber-400"
      />

      <div className="flex gap-2 flex-wrap">
        {["ALL", "Pending Verification", "Confirmed"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-xl text-sm border transition ${
              filter === f
                ? "bg-amber-400 text-black"
                : "bg-white/5 text-white border-white/10 hover:bg-white/10"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

    </div>

    {/* LOADING */}
    {loading && (
      <p className="text-slate-400">Loading bookings...</p>
    )}

    {/* EMPTY */}
    {!loading && filteredBookings.length === 0 && (
      <div className="text-center py-16 text-slate-400">
        No bookings found
      </div>
    )}

    {/* TABLE WRAPPER */}
    {!loading && filteredBookings.length > 0 && (
      <div className="overflow-x-auto rounded-2xl border border-white/10">

        <table className="w-full min-w-[1000px]">

          {/* HEAD */}
          <thead className="bg-white/5 text-slate-400 text-sm">
            <tr>
              <th className="p-4 text-left">Customer</th>
              <th className="p-4 text-left">Ritual</th>
              <th className="p-4 text-left">Assigned Pandit</th>
              <th className="p-4 text-left">Date</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody>

            {filteredBookings.map((b) => (
              <tr
                key={b.id}
                className="border-t border-white/5 hover:bg-white/5 transition"
                onClick={() => navigate(`/admin/bookings/${b.id}`)}
              >

                {/* CUSTOMER */}
                <td className="p-4">
                  <p className="font-medium">{b?.customer?.name}</p>
                  <p className="text-xs text-slate-400">
                    {b?.customer?.phone}
                  </p>
                </td>

                {/* RITUAL */}
                <td className="p-4 text-slate-200">
                  {b?.ritual}
                </td>

                {/* PANDIT */}
                <td className="p-4 text-slate-300">
                  {b?.panditName || b?.pandit || "Not Assigned"}
                </td>

                {/* DATE */}
                <td className="p-4 text-slate-300">
                  {b?.date || b?.customer?.date}
                </td>

                {/* STATUS */}
                <td className="p-4">
                  <span className={`px-3 py-1 text-xs rounded-full border ${statusColor(b.paymentStatus)}`}>
                    {b.paymentStatus}
                  </span>
                </td>

                {/* ACTIONS */}
                <td className="p-4 space-y-2">

                  <div className="flex flex-wrap gap-2">

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        updateStatus(b.id, "Confirmed");
                      }}
                      className="px-3 py-1 text-xs bg-green-500 text-black rounded-lg"
                    >
                      Confirm
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        updateStatus(b.id, "Pending Verification");
                      }}
                      className="px-3 py-1 text-xs bg-yellow-400 text-black rounded-lg"
                    >
                      Pending
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteBooking(b.id);
                      }}
                      className="px-3 py-1 text-xs bg-red-500 text-white rounded-lg"
                    >
                      Delete
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/admin/bookings/${b.id}`);
                      }}
                      className="px-3 py-1 text-xs bg-orange-500 hover:bg-orange-600 rounded-lg"
                    >
                      View
                    </button>

                  </div>

                  {/* 👳 PANDIT ASSIGN SECTION (CLEAN UI FIXED) */}
                  <div className="mt-3 flex gap-2">

                    <select
                      className="flex-1 p-2 bg-black border border-white/10 rounded-lg text-sm"
                      onChange={(e) =>
                        setSelectedPandit({
                          ...selectedPandit,
                          [b.id]: pandits.find(
                            (p) => p.id === e.target.value
                          ),
                        })
                      }
                    >
                      <option value="">Select Pandit</option>
                      {pandits.map((p) => (
                        <option key={p.id} value={p.id}>
                          {p.name}
                        </option>
                      ))}
                    </select>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        assignPandit(
                          b.id,
                          selectedPandit[b.id]
                        );
                      }}
                      className="px-3 py-2 bg-amber-500 hover:bg-amber-600 text-black rounded-lg text-xs font-semibold"
                    >
                      Assign
                    </button>

                  </div>

                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>
    )}

  </div>
</AdminLayout>

  );
};

export default AdminBookings;