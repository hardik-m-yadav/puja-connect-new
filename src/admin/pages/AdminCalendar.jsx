
// export default AdminCalendar;

// import { useEffect, useMemo, useState } from "react";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../../firebase/firebase";
// import AdminLayout from "../layout/AdminLayout";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   startOfMonth,
//   endOfMonth,
//   eachDayOfInterval,
//   format,
// } from "date-fns";

// const statusDot = (status) => {
//   switch (status) {
//     case "Confirmed":
//       return "bg-green-400";
//     case "Pending Verification":
//       return "bg-yellow-400";
//     default:
//       return "bg-red-400";
//   }
// };

// const AdminCalendar = () => {
//   const [bookings, setBookings] = useState([]);
//   const [currentDate, setCurrentDate] = useState(new Date());
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [selectedBookings, setSelectedBookings] = useState([]);

//   useEffect(() => {
//     const fetch = async () => {
//       const snap = await getDocs(collection(db, "bookings"));
//       setBookings(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
//     };
//     fetch();
//   }, []);

//   const monthDays = useMemo(() => {
//     return eachDayOfInterval({
//       start: startOfMonth(currentDate),
//       end: endOfMonth(currentDate),
//     });
//   }, [currentDate]);

//   const getBookings = (day) =>
//     bookings.filter((b) => {
//       const d = new Date(b?.customer?.date);
//       return d.toDateString() === day.toDateString();
//     });

//   const handleSelect = (day) => {
//     setSelectedDate(day);
//     setSelectedBookings(getBookings(day));
//   };

//   return (
//     <AdminLayout>
//       <div className="space-y-6 text-white">

//         {/* HEADER */}
//         <div className="flex justify-between items-center">
//           <div>
//             <h1 className="text-xl sm:text-2xl font-bold text-amber-400">
//               Booking Calendar
//             </h1>
//             <p className="text-xs sm:text-sm text-slate-400">
//               Monthly booking overview
//             </p>
//           </div>

//           <div className="flex gap-2">
//             <button
//               onClick={() =>
//                 setCurrentDate(
//                   new Date(currentDate.setMonth(currentDate.getMonth() - 1))
//                 )
//               }
//               className="px-3 py-1 bg-white/10 rounded-lg text-xs"
//             >
//               Prev
//             </button>

//             <button
//               onClick={() =>
//                 setCurrentDate(
//                   new Date(currentDate.setMonth(currentDate.getMonth() + 1))
//                 )
//               }
//               className="px-3 py-1 bg-white/10 rounded-lg text-xs"
//             >
//               Next
//             </button>
//           </div>
//         </div>

//         {/* MONTH + YEAR */}
//         <div className="flex items-center justify-between mb-2">
//           <h2 className="text-amber-400 font-semibold text-base sm:text-lg">
//             {format(currentDate, "MMMM yyyy")}
//           </h2>

//           <p className="text-xs text-slate-400">
//             Tap a date to view bookings
//           </p>
//         </div>

//         {/* WEEK DAYS */}
//         <div className="grid grid-cols-7 text-center text-xs text-slate-400">
//           {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map((d) => (
//             <div key={d}>{d}</div>
//           ))}
//         </div>

//         {/* CALENDAR GRID */}
//         <div className="w-full grid grid-cols-7 gap-1 sm:gap-2 bg-white/5 border border-white/10 rounded-xl p-2 sm:p-4 overflow-hidden">

//           {monthDays.map((day) => {
//             const dayBookings = getBookings(day);
//             const isSelected =
//               selectedDate &&
//               day.toDateString() === selectedDate.toDateString();

//             return (
//               <motion.div
//                 key={day.toString()}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => handleSelect(day)}
//                 className={`
//                   relative cursor-pointer transition
//                   flex flex-col items-center justify-center

//                   /* MOBILE CIRCLE */
//                   w-10 h-10 sm:w-auto sm:h-20
//                   rounded-full sm:rounded-xl

//                   border
//                   text-xs sm:text-sm

//                   ${
//                     isSelected
//                       ? "bg-amber-400 text-black"
//                       : "bg-white/5 border-white/10"
//                   }
//                 `}
//               >
//                 <span className="font-medium">
//                   {format(day, "d")}
//                 </span>

//                 <span className="hidden sm:block text-[10px] text-slate-400">
//                   {dayBookings.length} bookings
//                 </span>

//                 <div className="absolute -bottom-1 sm:static flex gap-1 mt-1">
//                   {dayBookings.slice(0, 2).map((b) => (
//                     <span
//                       key={b.id}
//                       className={`w-1.5 h-1.5 rounded-full ${statusDot(
//                         b.paymentStatus
//                       )}`}
//                     />
//                   ))}
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>

//         {/* RIGHT DRAWER */}
//         <AnimatePresence>
//           {selectedDate && (
//             <>
//               {/* BACKDROP */}
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 0.4 }}
//                 exit={{ opacity: 0 }}
//                 className="fixed inset-0 bg-black z-40"
//                 onClick={() => setSelectedDate(null)}
//               />

//               {/* PANEL */}
//               <motion.div
//                 initial={{ x: 400 }}
//                 animate={{ x: 0 }}
//                 exit={{ x: 400 }}
//                 transition={{ type: "spring", stiffness: 120 }}
//                 className="fixed right-0 top-0 h-full w-full sm:w-[380px] bg-[#0B1120] border-l border-white/10 z-50 p-4 overflow-y-auto"
//               >
//                 <div className="flex items-center justify-between mb-4">
//                   <h2 className="text-amber-400 font-semibold">
//                     {selectedDate.toDateString()}
//                   </h2>

//                   <button
//                     onClick={() => setSelectedDate(null)}
//                     className="text-slate-400 hover:text-white"
//                   >
//                     ✕
//                   </button>
//                 </div>

//                 {selectedBookings.length === 0 ? (
//                   <p className="text-slate-400 text-sm">No bookings</p>
//                 ) : (
//                   selectedBookings.map((b) => (
//                     <div
//                       key={b.id}
//                       className="p-3 mb-2 rounded-xl bg-white/5 border border-white/10"
//                     >
//                       <p className="font-medium">{b.customer?.name}</p>
//                       <p className="text-xs text-slate-400">
//                         {b.ritual} • {b.pandit}
//                       </p>
//                       <p className="text-xs text-slate-500 mt-1">
//                         {b.paymentStatus}
//                       </p>
//                     </div>
//                   ))
//                 )}
//               </motion.div>
//             </>
//           )}
//         </AnimatePresence>

//       </div>
//     </AdminLayout>
//   );
// };

// export default AdminCalendar;



// import { useEffect, useState, useMemo } from "react";
// import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
// import { db } from "../../firebase/firebase";
// import AdminLayout from "../layout/AdminLayout";
// import { motion, AnimatePresence } from "framer-motion";

// const AdminCalendar = () => {
//   const [bookings, setBookings] = useState([]);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [selectedBookings, setSelectedBookings] = useState([]);
//   const [monthOffset, setMonthOffset] = useState(0);

//   useEffect(() => {
//     const fetch = async () => {
//       const snap = await getDocs(collection(db, "bookings"));
//       setBookings(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
//     };
//     fetch();
//   }, []);

//   const baseDate = useMemo(() => {
//     const d = new Date();
//     d.setMonth(d.getMonth() + monthOffset);
//     return d;
//   }, [monthOffset]);

//   const year = baseDate.getFullYear();
//   const month = baseDate.getMonth();

//   const daysInMonth = new Date(year, month + 1, 0).getDate();
//   const startDay = new Date(year, month, 1).getDay();

//   const formatDate = (day) =>
//     `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

//   const getBookings = (dateStr) =>
//     bookings.filter((b) => b?.customer?.date === dateStr);

//   const handleSelectDay = (day) => {
//     const dateStr = formatDate(day);
//     setSelectedDate(dateStr);
//     setSelectedBookings(getBookings(dateStr));
//   };

//   const updateStatus = async (id, status) => {
//     await updateDoc(doc(db, "bookings", id), { paymentStatus: status });

//     setBookings((prev) =>
//       prev.map((b) =>
//         b.id === id ? { ...b, paymentStatus: status } : b
//       )
//     );

//     if (selectedDate) {
//       setSelectedBookings(getBookings(selectedDate));
//     }
//   };

//   const statusDot = (status) => {
//     switch (status) {
//       case "Confirmed":
//         return "bg-green-400";
//       case "Pending Verification":
//         return "bg-yellow-400";
//       default:
//         return "bg-red-400";
//     }
//   };

//   const isToday = (day) => {
//     const now = new Date();
//     return (
//       monthOffset === 0 &&
//       day === now.getDate() &&
//       month === now.getMonth()
//     );
//   };

//   return (
//     <AdminLayout>
//       <div className="space-y-6 text-white overflow-x-hidden">

//         {/* HEADER */}
//         <div>
//           <h1 className="text-2xl font-bold text-amber-400">
//             Booking Calendar
//           </h1>
//           <p className="text-slate-400 text-sm">
//             Monthly booking overview
//           </p>
//         </div>

//         {/* MONTH NAV */}
//         <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-xl p-3">
//           <button
//             onClick={() => setMonthOffset((p) => p - 1)}
//             className="px-3 py-1 bg-white/10 rounded-lg"
//           >
//             Prev
//           </button>

//           <h2 className="text-amber-400 font-semibold">
//             {baseDate.toLocaleString("default", {
//               month: "long",
//               year: "numeric",
//             })}
//           </h2>

//           <button
//             onClick={() => setMonthOffset((p) => p + 1)}
//             className="px-3 py-1 bg-white/10 rounded-lg"
//           >
//             Next
//           </button>
//         </div>

//         {/* CALENDAR */}
//         <div className="p-3 rounded-xl bg-white/5 border border-white/10 overflow-x-hidden">

//           {/* WEEK DAYS */}
//           <div className="grid grid-cols-7 text-center text-xs text-slate-400 mb-2">
//             {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map((d) => (
//               <div key={d}>{d}</div>
//             ))}
//           </div>

//           {/* GRID */}
//           <div className="grid grid-cols-7 gap-1 sm:gap-2">

//             {Array.from({ length: startDay }).map((_, i) => (
//               <div key={i} />
//             ))}

//             {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => {
//               const dateStr = formatDate(day);
//               const dayBookings = getBookings(dateStr);

//               return (
//                 <motion.div
//                   key={day}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => handleSelectDay(day)}
//                   className={`
//                     cursor-pointer transition text-xs
//                     w-9 h-9 sm:w-10 sm:h-10 md:w-auto md:h-20
//                     flex items-center justify-center
//                     rounded-full md:rounded-xl
//                     ${isToday(day) ? "ring-2 ring-amber-400" : ""}
//                     bg-white/5 border border-white/10
//                   `}
//                 >
//                   <div className="text-center">
//                     <p className="font-semibold">{day}</p>

//                     <div className="flex gap-1 justify-center mt-1">
//                       {dayBookings.slice(0, 3).map((b) => (
//                         <span
//                           key={b.id}
//                           className={`w-1.5 h-1.5 rounded-full ${statusDot(
//                             b.paymentStatus
//                           )}`}
//                         />
//                       ))}
//                     </div>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>

//         {/* DETAILS */}
//         <AnimatePresence>
//           {selectedDate && (
//             <motion.div
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: 10 }}
//               className="p-4 rounded-xl bg-white/5 border border-white/10"
//             >
//               <h2 className="text-amber-400 mb-3">
//                 Bookings on {selectedDate}
//               </h2>

//               {selectedBookings.length === 0 ? (
//                 <p className="text-slate-400">No bookings</p>
//               ) : (
//                 selectedBookings.map((b) => (
//                   <div
//                     key={b.id}
//                     className="p-3 mb-2 rounded-xl bg-white/5 border border-white/10"
//                   >
//                     <p className="font-medium">{b.customer?.name}</p>
//                     <p className="text-xs text-slate-400">
//                       {b.ritual} • {b.pandit}
//                     </p>

//                     <div className="flex gap-2 mt-2 flex-wrap">
//                       <button
//                         onClick={() => updateStatus(b.id, "Confirmed")}
//                         className="px-2 py-1 text-xs bg-green-500 text-black rounded"
//                       >
//                         Confirm
//                       </button>

//                       <button
//                         onClick={() =>
//                           updateStatus(b.id, "Pending Verification")
//                         }
//                         className="px-2 py-1 text-xs bg-yellow-400 text-black rounded"
//                       >
//                         Pending
//                       </button>

//                       <button
//                         onClick={() => updateStatus(b.id, "Rejected")}
//                         className="px-2 py-1 text-xs bg-red-500 text-white rounded"
//                       >
//                         Reject
//                       </button>
//                     </div>
//                   </div>
//                 ))
//               )}
//             </motion.div>
//           )}
//         </AnimatePresence>

//       </div>
//     </AdminLayout>
//   );
// };

// export default AdminCalendar;


import { useEffect, useState, useMemo } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import AdminLayout from "../layout/AdminLayout";
import { motion, AnimatePresence } from "framer-motion";

const AdminCalendar = () => {
  const [bookings, setBookings] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedBookings, setSelectedBookings] = useState([]);
  const [monthOffset, setMonthOffset] = useState(0);

  // 🆕 NEW: STATUS FILTER
  const [statusFilter, setStatusFilter] = useState("ALL");

  useEffect(() => {
    const fetch = async () => {
      const snap = await getDocs(collection(db, "bookings"));
      setBookings(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    };
    fetch();
  }, []);

  const baseDate = useMemo(() => {
    const d = new Date();
    d.setMonth(d.getMonth() + monthOffset);
    return d;
  }, [monthOffset]);

  const year = baseDate.getFullYear();
  const month = baseDate.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startDay = new Date(year, month, 1).getDay();

  const formatDate = (day) =>
    `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(
      2,
      "0"
    )}`;

  // 🆕 FILTERED BOOKINGS LOGIC
  const getBookings = (dateStr) =>
    bookings.filter((b) => {
      const matchDate = b?.customer?.date === dateStr;

      const matchStatus =
        statusFilter === "ALL" ||
        b.paymentStatus === statusFilter;

      return matchDate && matchStatus;
    });

  const handleSelectDay = (day) => {
    const dateStr = formatDate(day);
    setSelectedDate(dateStr);
    setSelectedBookings(getBookings(dateStr));
  };

  const statusDot = (status) => {
    switch (status) {
      case "Confirmed":
        return "bg-green-400";
      case "Pending Verification":
        return "bg-yellow-400";
      default:
        return "bg-red-400";
    }
  };

  const isToday = (day) => {
    const now = new Date();
    return (
      monthOffset === 0 &&
      day === now.getDate() &&
      month === now.getMonth()
    );
  };

  return (
    <AdminLayout>
      <div className="space-y-6 text-white overflow-x-hidden">

        {/* HEADER */}
        <div>
          <h1 className="text-2xl font-bold text-amber-400">
            Booking Calendar
          </h1>
          <p className="text-slate-400 text-sm">
            Monthly booking overview
          </p>
        </div>

        {/* 🆕 STATUS FILTER UI (ADDED ONLY) */}
        <div className="flex gap-2 flex-wrap">
          {["ALL", "Confirmed", "Pending Verification", "Rejected"].map(
            (s) => (
              <button
                key={s}
                onClick={() => setStatusFilter(s)}
                className={`px-3 py-1 text-xs rounded-full border transition ${
                  statusFilter === s
                    ? "bg-amber-400 text-black"
                    : "bg-white/5 text-white border-white/10"
                }`}
              >
                {s}
              </button>
            )
          )}
        </div>

        {/* MONTH NAV */}
        <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-xl p-3">
          <button
            onClick={() => setMonthOffset((p) => p - 1)}
            className="px-3 py-1 bg-white/10 rounded-lg"
          >
            Prev
          </button>

          <h2 className="text-amber-400 font-semibold">
            {baseDate.toLocaleString("default", {
              month: "long",
              year: "numeric",
            })}
          </h2>

          <button
            onClick={() => setMonthOffset((p) => p + 1)}
            className="px-3 py-1 bg-white/10 rounded-lg"
          >
            Next
          </button>
        </div>

        {/* CALENDAR */}
        <div className="p-3 rounded-xl bg-white/5 border border-white/10 overflow-x-hidden">

          {/* WEEK DAYS */}
          <div className="grid grid-cols-7 text-center text-xs text-slate-400 mb-2">
            {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map((d) => (
              <div key={d}>{d}</div>
            ))}
          </div>

          {/* GRID */}
          <div className="grid grid-cols-7 gap-1 sm:gap-2">

            {Array.from({ length: startDay }).map((_, i) => (
              <div key={i} />
            ))}

            {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => {
              const dateStr = formatDate(day);
              const dayBookings = getBookings(dateStr);

              return (
                <motion.div
                  key={day}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleSelectDay(day)}
                  className={`
                    cursor-pointer transition text-xs
                    w-9 h-9 sm:w-10 sm:h-10 md:w-auto md:h-20
                    flex items-center justify-center
                    rounded-full md:rounded-xl
                    bg-white/5 border border-white/10
                    ${isToday(day) ? "ring-2 ring-amber-400" : ""}
                  `}
                >
                  <div className="text-center">
                    <p className="font-semibold">{day}</p>

                    <div className="flex gap-1 justify-center mt-1">
                      {dayBookings.slice(0, 3).map((b) => (
                        <span
                          key={b.id}
                          className={`w-1.5 h-1.5 rounded-full ${statusDot(
                            b.paymentStatus
                          )}`}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* DETAILS */}
        <AnimatePresence>
          {selectedDate && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="p-4 rounded-xl bg-white/5 border border-white/10"
            >
              <h2 className="text-amber-400 mb-3">
                Bookings on {selectedDate}
              </h2>

              {selectedBookings.length === 0 ? (
                <p className="text-slate-400">No bookings</p>
              ) : (
                selectedBookings.map((b) => (
                  <div
                    key={b.id}
                    className="p-3 mb-2 rounded-xl bg-white/5 border border-white/10"
                  >
                    <p className="font-medium">{b.customer?.name}</p>
                    <p className="text-xs text-slate-400">
                      {b.ritual} • {b.pandit}
                    </p>
                    <p className="text-xs text-slate-400">
                      {b.paymentStatus}
                    </p>
                  </div>
                ))
              )}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </AdminLayout>
  );
};

export default AdminCalendar;