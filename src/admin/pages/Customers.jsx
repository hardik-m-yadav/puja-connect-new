// import { useEffect, useState } from "react";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../../firebase/firebase";
// import AdminLayout from "../layout/AdminLayout";
// import toast from "react-hot-toast";

// const Customers = () => {
//   const [customers, setCustomers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchCustomers = async () => {
//     try {
//       setLoading(true);

//       const snap = await getDocs(collection(db, "bookings"));

//       const bookings = snap.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));

//       // Group customers by phone number
//       const customerMap = {};

//       bookings.forEach((booking) => {
//         const phone = booking.customer?.phone;

//         if (!phone) return;

//         if (!customerMap[phone]) {
//           customerMap[phone] = {
//             name: booking.customer?.name,
//             phone,
//             email: booking.customer?.email || "",
//             city: booking.customer?.city || "",
//             address: booking.customer?.address || "",
//             bookings: [],
//           };
//         }

//         customerMap[phone].bookings.push(booking);
//       });

//       setCustomers(Object.values(customerMap));
//     } catch (err) {
//       console.error(err);
//       toast.error("Failed to load customers");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchCustomers();
//   }, []);

//   return (
//     <AdminLayout>
//       <div className="space-y-6 text-white">

//         <div>
//           <h1 className="text-3xl font-bold text-amber-400">
//             Customer Management
//           </h1>

//           <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mt-5">

//   <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
//     <p className="text-slate-400 text-sm">
//       Total Customers
//     </p>

//     <h2 className="text-3xl font-bold text-amber-400 mt-2">
//       {customers.length}
//     </h2>
//   </div>

//   <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
//     <p className="text-slate-400 text-sm">
//       Total Bookings
//     </p>

//     <h2 className="text-3xl font-bold text-blue-400 mt-2">
//       {customers.reduce(
//         (sum, c) => sum + c.bookings.length,
//         0
//       )}
//     </h2>
//   </div>

//   <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
//     <p className="text-slate-400 text-sm">
//       Repeat Customers
//     </p>

//     <h2 className="text-3xl font-bold text-green-400 mt-2">
//       {
//         customers.filter(
//           (c) => c.bookings.length > 1
//         ).length
//       }
//     </h2>
//   </div>

//   <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
//     <p className="text-slate-400 text-sm">
//       New Customers
//     </p>

//     <h2 className="text-3xl font-bold text-pink-400 mt-2">
//       {
//         customers.filter(
//           (c) => c.bookings.length === 1
//         ).length
//       }
//     </h2>
//   </div>

// </div>
//         </div>

//         {loading ? (
//           <p className="text-slate-400">Loading...</p>
//         ) : (
//           <pre className="bg-white/5 p-4 rounded-xl overflow-auto text-sm">
//             {JSON.stringify(customers, null, 2)}
//           </pre>
//         )}

//       </div>
//     </AdminLayout>
//   );
// };

// export default Customers;




import { useEffect, useMemo, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import AdminLayout from "../layout/AdminLayout";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

const Customers = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  // FETCH BOOKINGS
  const fetchData = async () => {
    try {
      setLoading(true);
      const snap = await getDocs(collection(db, "bookings"));

      const data = snap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setBookings(data || []);
    } catch (err) {
      console.error(err);
      toast.error("Failed to load customers");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // GROUP CUSTOMERS
  const customers = useMemo(() => {
    const map = {};

    bookings.forEach((b) => {
      const phone = b?.customer?.phone;
      if (!phone) return;

      if (!map[phone]) {
        map[phone] = {
          name: b?.customer?.name,
          phone,
          email: b?.customer?.email || "",
          city: b?.customer?.city || "",
          bookings: [],
          lastBooking: b?.customer?.date || "",
        };
      }

      map[phone].bookings.push(b);

      // update latest booking date
      if (b?.customer?.date > map[phone].lastBooking) {
        map[phone].lastBooking = b?.customer?.date;
      }
    });

    return Object.values(map);
  }, [bookings]);

  // FILTER
  const filtered = customers.filter((c) => {
    const q = search.toLowerCase();
    return (
      c.name?.toLowerCase().includes(q) ||
      c.phone?.toLowerCase().includes(q) ||
      c.city?.toLowerCase().includes(q)
    );
  });

  // STATS
  const totalCustomers = customers.length;
  const totalBookings = customers.reduce(
    (sum, c) => sum + c.bookings.length,
    0
  );
  const repeatCustomers = customers.filter(
    (c) => c.bookings.length > 1
  ).length;

  const newCustomers = customers.filter(
    (c) => c.bookings.length === 1
  ).length;

  const copy = (text) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied");
  };

  const openWhatsApp = (phone) => {
    window.open(`https://wa.me/${phone}`, "_blank");
  };

  return (
    <AdminLayout>
      <div className="space-y-6 text-white">

        {/* HEADER */}
        <div>
          <h1 className="text-2xl font-bold text-amber-400">
            Customer Management
          </h1>
          <p className="text-slate-400 text-sm">
            CRM overview of all your customers
          </p>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">

          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <p className="text-slate-400 text-sm">Customers</p>
            <h2 className="text-2xl font-bold text-amber-400">
              {totalCustomers}
            </h2>
          </div>

          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <p className="text-slate-400 text-sm">Bookings</p>
            <h2 className="text-2xl font-bold text-blue-400">
              {totalBookings}
            </h2>
          </div>

          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <p className="text-slate-400 text-sm">Repeat</p>
            <h2 className="text-2xl font-bold text-green-400">
              {repeatCustomers}
            </h2>
          </div>

          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <p className="text-slate-400 text-sm">New</p>
            <h2 className="text-2xl font-bold text-pink-400">
              {newCustomers}
            </h2>
          </div>

        </div>

        {/* SEARCH */}
        <div className="flex flex-col md:flex-row gap-3">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search customers..."
            className="w-full md:w-1/3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white"
          />
        </div>

        {/* LOADING */}
        {loading && (
          <p className="text-slate-400">Loading customers...</p>
        )}

        {/* EMPTY */}
        {!loading && filtered.length === 0 && (
          <p className="text-slate-400 text-center py-10">
            No customers found
          </p>
        )}

        {/* TABLE (DESKTOP) */}
        {!loading && filtered.length > 0 && (
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full min-w-[900px] border border-white/10">

              <thead className="bg-white/5 text-slate-400">
                <tr>
                  <th className="p-3 text-left">Customer</th>
                  <th className="p-3 text-left">Phone</th>
                  <th className="p-3 text-left">City</th>
                  <th className="p-3 text-left">Bookings</th>
                  <th className="p-3 text-left">Last Visit</th>
                  <th className="p-3 text-left">Actions</th>
                </tr>
              </thead>

              <tbody>
                {filtered.map((c, i) => (
                  <motion.tr
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="border-t border-white/5"
                  >
                    <td className="p-3 font-medium">{c.name}</td>

                    <td className="p-3">{c.phone}</td>

                    <td className="p-3">{c.city || "N/A"}</td>

                    <td className="p-3 text-green-400 font-bold">
                      {c.bookings.length}
                    </td>

                    <td className="p-3 text-slate-300">
                      {c.lastBooking || "N/A"}
                    </td>

                    <td className="p-3 flex gap-2">
                      <button
                        onClick={() => copy(c.phone)}
                        className="px-3 py-1 text-xs bg-white/10 rounded"
                      >
                        Copy
                      </button>

                      <button
                        onClick={() => openWhatsApp(c.phone)}
                        className="px-3 py-1 text-xs bg-green-500 text-black rounded"
                      >
                        WhatsApp
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>

            </table>
          </div>
        )}

        {/* MOBILE CARDS */}
        {!loading && filtered.length > 0 && (
          <div className="md:hidden space-y-3">
            {filtered.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-xl bg-white/5 border border-white/10"
              >
                <div className="flex justify-between">
                  <h3 className="font-semibold">{c.name}</h3>
                  <span className="text-green-400">
                    {c.bookings.length} bookings
                  </span>
                </div>

                <p className="text-slate-400 text-sm">{c.phone}</p>
                <p className="text-slate-400 text-sm">{c.city}</p>

                <p className="text-xs text-slate-500 mt-1">
                  Last: {c.lastBooking || "N/A"}
                </p>

                <div className="flex gap-2 mt-3">
                  <button
                    onClick={() => copy(c.phone)}
                    className="flex-1 py-2 text-xs bg-white/10 rounded"
                  >
                    Copy
                  </button>

                  <button
                    onClick={() => openWhatsApp(c.phone)}
                    className="flex-1 py-2 text-xs bg-green-500 text-black rounded"
                  >
                    WhatsApp
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}

      </div>
    </AdminLayout>
  );
};

export default Customers;
