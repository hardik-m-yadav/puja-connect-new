import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";

const linkStyle =
  "block p-3 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition";

const AdminSidebar = ({ onClose }) => {



  const navigate = useNavigate();

const handleLogout = async () => {
  try {
    await signOut(auth);
    navigate("/admin/login", { replace: true });
  } catch (error) {
    console.error(error);
    alert("Failed to logout");
  }
};

  return (
    <div className="w-64 bg-[#0B1120]/80 backdrop-blur-xl border-r border-white/10 h-full p-5">

      {/* Mobile close */}
      <div className="md:hidden flex justify-end mb-4">
        <button
          onClick={onClose}
          className="text-white text-xl hover:rotate-90 transition"
        >
          ✕
        </button>
      </div>

      {/* Brand */}
      <h1 className="text-2xl font-bold text-amber-400 mb-10 tracking-wide">
        PujaConnect
      </h1>

      {/* Links */}
      <div className="space-y-3">

        <motion.div whileHover={{ x: 5 }}>
          <Link to="/admin" className={linkStyle}>
            📊 Dashboard
          </Link>
        </motion.div>

        <motion.div whileHover={{ x: 5 }}>
          <Link to="/admin/bookings" className={linkStyle}>
            📅 Bookings
          </Link>
        </motion.div>




        

        <motion.div whileHover={{ x: 5 }}>
          <Link to="/admin/payments" className={linkStyle}>
            💳 Payments
          </Link>
        </motion.div>



        <motion.div whileHover={{ x: 5 }}>
          <Link to="/admin/customers" className={linkStyle}>
            🧑🏻‍💼 Customers
          </Link>
        </motion.div>




          <motion.div whileHover={{ x: 5 }}>
          <Link to="/admin/pandits" className={linkStyle}>
            🧘🏻‍♂️ Pandits
          </Link>
        </motion.div>




          <motion.div whileHover={{ x: 5 }}>
          <Link to="/admin/pandits/add" className={linkStyle}>
            ➕ Add Pandits
          </Link>
        </motion.div>




        <motion.div whileHover={{ x: 5 }}>
          <Link to="/admin/calendar" className={linkStyle}>
            📅 Calendar
          </Link>
        </motion.div>



        <motion.div whileHover={{ x: 5 }}>
          <Link to="/admin/settings" className={linkStyle}>
            ⚙️ Settings
          </Link>
        </motion.div>

        <div className="mt-10 pt-6 border-t border-white/10">
  <motion.button
    whileHover={{ x: 5 }}
    whileTap={{ scale: 0.98 }}
    onClick={handleLogout}
    className="w-full text-left p-3 rounded-xl text-red-400 hover:text-white hover:bg-red-500/20 transition"
  >
    🚪 Logout
  </motion.button>
</div>

      </div>
    </div>
  );
};

export default AdminSidebar;




