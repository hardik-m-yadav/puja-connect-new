// import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
// import { db } from "../../firebase/firebase";
// import AdminLayout from "../layout/AdminLayout";
// import toast from "react-hot-toast";

// const BookingDetails = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [booking, setBooking] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const fetchBooking = async () => {
//     try {
//       const snap = await getDoc(doc(db, "bookings", id));

//       if (snap.exists()) {
//         setBooking({ id: snap.id, ...snap.data() });
//       } else {
//         toast.error("Booking not found");
//       }
//     } catch (err) {
//       console.error(err);
//       toast.error("Failed to load booking");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchBooking();
//   }, [id]);

//   const updateStatus = async (status) => {
//     try {
//       await updateDoc(doc(db, "bookings", id), {
//         paymentStatus: status,
//       });

//       setBooking((prev) => ({ ...prev, paymentStatus: status }));
//       toast.success(`Marked as ${status}`);
//     } catch (err) {
//       toast.error("Update failed");
//     }
//   };



  

//   const deleteBooking = async () => {
//     const ok = window.confirm("Delete this booking?");
//     if (!ok) return;

//     try {
//       await deleteDoc(doc(db, "bookings", id));
//       toast.success("Booking deleted");
//       navigate("/admin/bookings");
//     } catch (err) {
//       toast.error("Delete failed");
//     }
//   };

//   const copy = (text) => {
//     navigator.clipboard.writeText(text);
//     toast.success("Copied");
//   };

//   if (loading) {
//     return (
//       <AdminLayout>
//         <div className="text-white">Loading booking...</div>
//       </AdminLayout>
//     );
//   }

//   if (!booking) {
//     return (
//       <AdminLayout>
//         <div className="text-red-400">Booking not found</div>
//       </AdminLayout>
//     );
//   }

//   const badgeColor = {
//     Confirmed: "bg-green-500/20 text-green-400 border-green-500/30",
//     "Pending Verification": "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
//     Rejected: "bg-red-500/20 text-red-400 border-red-500/30",
//   };

//   return (
//     <AdminLayout>
//       <div className="space-y-6 text-white">

//         {/* HEADER */}
//         <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
//           <div>
//             <h1 className="text-2xl font-bold text-amber-400">
//               Booking Details
//             </h1>
//             <p className="text-slate-400 text-sm">
//               ID: {booking.id}
//             </p>
//           </div>

//           <span
//             className={`px-4 py-2 rounded-full text-xs border w-fit ${
//               badgeColor[booking.paymentStatus]
//             }`}
//           >
//             {booking.paymentStatus}
//           </span>
//         </div>

//         {/* GRID */}
//         <div className="grid md:grid-cols-3 gap-5">

//           {/* LEFT - INFO */}
//           <div className="md:col-span-2 space-y-4">

//             {/* CUSTOMER */}
//             <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
//               <h2 className="text-amber-400 font-semibold">Customer Info</h2>

//               <p>
//                 <b>Name:</b> {booking.customer?.name}
//               </p>

//               <p>
//                 <b>Phone:</b> {booking.customer?.phone}
//                 <button
//                   onClick={() => copy(booking.customer?.phone)}
//                   className="ml-2 text-xs text-amber-400"
//                 >
//                   Copy
//                 </button>
//               </p>

//               <p>
//                 <b>Email:</b> {booking.customer?.email || "N/A"}
//               </p>

//               <p>
//                 <b>Address:</b> {booking.customer?.address}
//               </p>

//               <p>
//                 <b>City:</b> {booking.customer?.city}
//               </p>
//             </div>

//             {/* BOOKING */}
//             <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
//               <h2 className="text-amber-400 font-semibold">Booking Info</h2>

//               <p><b>Ritual:</b> {booking.ritual}</p>
//               <p><b>Pandit:</b> {booking.pandit}</p>
//               <p><b>Date:</b> {booking.customer?.date}</p>
//               <p><b>Payment:</b> {booking.paymentMethod}</p>
//               <p><b>Notes:</b> {booking.customer?.notes || "None"}</p>
//             </div>
//           </div>

//           {/* RIGHT - ACTION PANEL */}
//           <div className="space-y-4">

//             <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
//               <h2 className="text-amber-400 font-semibold">
//                 Actions
//               </h2>

//               <button
//                 onClick={() => updateStatus("Confirmed")}
//                 className="w-full py-2 bg-green-500 text-black rounded-xl"
//               >
//                 Confirm Booking
//               </button>

//               <button
//                 onClick={() => updateStatus("Pending Verification")}
//                 className="w-full py-2 bg-yellow-400 text-black rounded-xl"
//               >
//                 Mark Pending
//               </button>

//               <button
//                 onClick={() => updateStatus("Rejected")}
//                 className="w-full py-2 bg-red-500 text-white rounded-xl"
//               >
//                 Reject
//               </button>

//               <hr className="border-white/10 my-2" />

//               <button
//                 onClick={deleteBooking}
//                 className="w-full py-2 bg-red-600 text-white rounded-xl"
//               >
//                 Delete Booking
//               </button>
//             </div>

//             {/* META CARD */}
//             <div className="p-5 rounded-2xl bg-white/5 border border-white/10 text-sm text-slate-300">
//               <p>
//                 Created:{" "}
//                 {booking.createdAt
//                   ? new Date(booking.createdAt).toLocaleString()
//                   : "N/A"}
//               </p>
//             </div>

//           </div>
//         </div>
//       </div>
//     </AdminLayout>
//   );
// };

// export default BookingDetails;

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import AdminLayout from "../layout/AdminLayout";
import toast from "react-hot-toast";
import jsPDF from "jspdf";

const BookingDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [booking, setBooking] = useState(null);
  const [loading, setLoading] = useState(true);

  // STATUS FLOW (NEW FEATURE)
  const STATUS_FLOW = [
    "Pending Verification",
    "Confirmed",
    "Completed",
  ];

  const fetchBooking = async () => {
    try {
      const snap = await getDoc(doc(db, "bookings", id));

      if (snap.exists()) {
        setBooking({ id: snap.id, ...snap.data() });
      } else {
        toast.error("Booking not found");
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to load booking");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooking();
  }, [id]);

  // UPDATE STATUS
  const updateStatus = async (status) => {
    try {
      await updateDoc(doc(db, "bookings", id), {
        paymentStatus: status,
      });

      setBooking((prev) => ({
        ...prev,
        paymentStatus: status,
      }));

      toast.success(`Marked as ${status}`);
    } catch (err) {
      toast.error("Update failed");
    }
  };

  // ASSIGN PANDIT (NEW FEATURE)
  const assignPandit = async (pandit) => {
    try {
      await updateDoc(doc(db, "bookings", id), {
        pandit,
      });

      setBooking((prev) => ({
        ...prev,
        pandit,
      }));

      toast.success("Pandit assigned");
    } catch (err) {
      toast.error("Failed to assign pandit");
    }
  };

  const sendWhatsApp = () => {
    const phone = booking.customer?.phone;

    const message = `
🪔 Puja Booking Update

Name: ${booking.customer?.name}
Ritual: ${booking.ritual}
Pandit: ${booking.pandit}
Date: ${booking.customer?.date}
Status: ${booking.paymentStatus}
`;

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const deleteBooking = async () => {
    const ok = window.confirm("Delete this booking?");
    if (!ok) return;

    try {
      await deleteDoc(doc(db, "bookings", id));
      toast.success("Booking deleted");
      navigate("/admin/bookings");
    } catch (err) {
      toast.error("Delete failed");
    }
  };

  const copy = (text) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied");
  };

  const generateInvoice = () => {
    const pdf = new jsPDF();

    pdf.text("PUJA BOOKING INVOICE", 20, 20);
    pdf.text(`Name: ${booking.customer?.name}`, 20, 40);
    pdf.text(`Ritual: ${booking.ritual}`, 20, 50);
    pdf.text(`Pandit: ${booking.pandit}`, 20, 60);
    pdf.text(`Date: ${booking.customer?.date}`, 20, 70);
    pdf.text(`Payment: ${booking.paymentMethod}`, 20, 80);

    pdf.save(`invoice-${booking.id}.pdf`);
  };

  if (loading) {
    return (
      <AdminLayout>
        <div className="text-white">Loading booking...</div>
      </AdminLayout>
    );
  }

  if (!booking) {
    return (
      <AdminLayout>
        <div className="text-red-400">Booking not found</div>
      </AdminLayout>
    );
  }

  const currentIndex = STATUS_FLOW.indexOf(booking.paymentStatus);

  const badgeColor = {
    Confirmed: "bg-green-500/20 text-green-400 border-green-500/30",
    "Pending Verification": "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    Rejected: "bg-red-500/20 text-red-400 border-red-500/30",
  };

  return (
    <AdminLayout>
      <div className="space-y-6 text-white">

        {/* HEADER (UNCHANGED) */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div>
            <h1 className="text-2xl font-bold text-amber-400">
              Booking Details
            </h1>
            <p className="text-slate-400 text-sm">
              ID: {booking.id}
            </p>
          </div>

          <span
            className={`px-4 py-2 rounded-full text-xs border w-fit ${
              badgeColor[booking.paymentStatus]
            }`}
          >
            {booking.paymentStatus}
          </span>
        </div>

        {/* STATUS TIMELINE (NEW BUT MINIMAL) */}
        <div className="flex gap-2 flex-wrap">
          {STATUS_FLOW.map((status, i) => (
            <span
              key={status}
              className={`text-xs px-3 py-1 rounded-full border ${
                i <= currentIndex
                  ? "bg-green-500/20 text-green-400 border-green-500/30"
                  : "bg-white/5 text-slate-400 border-white/10"
              }`}
            >
              {status}
            </span>
          ))}
        </div>

        {/* MAIN GRID (UNCHANGED STRUCTURE) */}
        <div className="grid md:grid-cols-3 gap-5">

          {/* LEFT */}
          <div className="md:col-span-2 space-y-4">

            {/* CUSTOMER */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <h2 className="text-amber-400 font-semibold">Customer Info</h2>

              <p>
                <b>Name:</b> {booking.customer?.name}
              </p>

              <p>
                <b>Phone:</b> {booking.customer?.phone}
                <button
                  onClick={() => copy(booking.customer?.phone)}
                  className="ml-2 text-xs text-amber-400"
                >
                  Copy
                </button>
              </p>

              <p><b>City:</b> {booking.customer?.city}</p>
              <p><b>Address:</b> {booking.customer?.address}</p>
            </div>

            {/* BOOKING */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <h2 className="text-amber-400 font-semibold">Booking Info</h2>

              <p><b>Ritual:</b> {booking.ritual}</p>
              <p><b>Date:</b> {booking.customer?.date}</p>
              <p><b>Payment:</b> {booking.paymentMethod}</p>

              {/* ASSIGN PANDIT (NEW) */}
              <div className="mt-3">
                <p className="text-xs text-slate-400">Assign Pandit</p>

                <select
                  value={booking.pandit || ""}
                  onChange={(e) => assignPandit(e.target.value)}
                  className="w-full mt-1 p-2 rounded-lg bg-white/5 border border-white/10 text-white"
                >
                  <option value="">Select Pandit</option>
                  <option value="Pandit Anil Mishra">Pandit Anil Mishra</option>
                  <option value="Pandit Sharma">Pandit Sharma</option>
                  <option value="Pandit Joshi">Pandit Joshi</option>
                </select>
              </div>
            </div>
          </div>

          {/* RIGHT ACTIONS (UNCHANGED STYLE) */}
          <div className="space-y-3">

            <button
              onClick={() => updateStatus("Confirmed")}
              className="w-full bg-green-500 text-black py-2 rounded-xl"
            >
              Confirm
            </button>

            <button
              onClick={() => updateStatus("Pending Verification")}
              className="w-full bg-yellow-400 text-black py-2 rounded-xl"
            >
              Pending
            </button>

            <button
              onClick={() => updateStatus("Rejected")}
              className="w-full bg-red-500 text-white py-2 rounded-xl"
            >
              Reject
            </button>

            <button
              onClick={sendWhatsApp}
              className="w-full bg-green-600 py-2 rounded-xl"
            >
              WhatsApp
            </button>

            <button
              onClick={generateInvoice}
              className="w-full bg-blue-500 py-2 rounded-xl"
            >
              Invoice
            </button>

            <button
              onClick={deleteBooking}
              className="w-full bg-red-600 py-2 rounded-xl"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default BookingDetails;