import AdminLayout from "./layout/AdminLayout";
import StatCard from "./components/StatCard";
import Charts from "./components/Charts";
import useBookings from "./hooks/useBookings";
import { motion } from "framer-motion";



const LiveIndicator = () => {
  return (
    <div className="flex items-center gap-2 text-green-400 text-sm">
      <motion.div
        className="w-2 h-2 bg-green-400 rounded-full"
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ repeat: Infinity, duration: 1 }}
      />
      Live updates active
    </div>
  );
};

const AdminDashboard = () => {
  const { bookings } = useBookings();

  return (
    <AdminLayout>
      <div className="space-y-8">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-3xl border border-white/10 bg-gradient-to-r from-amber-400/10 to-orange-500/10 p-8"
        >
          <h1 className="text-4xl font-bold">Welcome Back 👋</h1>
          <p className="text-slate-300 mt-3">
            Manage bookings, payments, pandits and rituals from one place.
          </p>
        </motion.div>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          <StatCard title="Total Bookings" value={bookings.length} icon="📅" />
          <StatCard title="Pending" value={bookings.filter(b => b.paymentStatus === "Pending Verification").length} icon="💳" />
          <StatCard title="Confirmed" value={bookings.filter(b => b.paymentStatus === "Confirmed").length} icon="✅" />
          <StatCard title="Rejected" value={bookings.filter(b => b.paymentStatus === "Rejected").length} icon="❌" />
        </div>

        {/* CHARTS */}
        <Charts bookings={bookings} />

      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;