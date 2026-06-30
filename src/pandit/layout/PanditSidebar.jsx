import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiHome,
  FiCalendar,
  FiBookOpen,
  FiDollarSign,
  FiUser,
  FiLogOut,
} from "react-icons/fi";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const links = [
  {
    name: "Dashboard",
    icon: <FiHome size={20} />,
    path: "/pandit/dashboard",
  },
  {
    name: "My Bookings",
    icon: <FiBookOpen size={20} />,
    path: "/pandit/bookings",
  },
  {
    name: "Calendar",
    icon: <FiCalendar size={20} />,
    path: "/pandit/calendar",
  },
  {
    name: "Earnings",
    icon: <FiDollarSign size={20} />,
    path: "/pandit/earnings",
  },
  {
    name: "Profile",
    icon: <FiUser size={20} />,
    path: "/pandit/profile",
  },
];

const PanditSidebar = ({ onClose }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await signOut(auth);
      toast.success("Logged out successfully");
      navigate("/pandit/login");
    } catch (err) {
      toast.error("Logout failed");
    }
  };

  return (
    <aside className="w-72 h-full bg-[#0B1120]/90 backdrop-blur-xl border-r border-white/10 flex flex-col">

      {/* Logo */}
      <div className="p-6 border-b border-white/10 flex justify-between items-center">

        <div>
          <h1 className="text-2xl font-bold text-amber-400">
            PujaConnect
          </h1>

          <p className="text-xs text-slate-400 mt-1">
            Pandit Portal
          </p>
        </div>

        <button
          onClick={onClose}
          className="md:hidden text-white text-xl"
        >
          ✕
        </button>

      </div>

      {/* Navigation */}
      <div className="flex-1 p-4 space-y-2">

        {links.map((item) => (
          <motion.div
            key={item.path}
            whileHover={{ x: 6 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              to={item.path}
              className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300
              ${
                location.pathname === item.path
                  ? "bg-amber-400 text-black font-semibold shadow-lg"
                  : "text-slate-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              {item.icon}
              {item.name}
            </Link>
          </motion.div>
        ))}

      </div>

      {/* Logout */}
      <div className="p-4 border-t border-white/10">

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={logout}
          className="w-full flex items-center justify-center gap-3 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-xl transition"
        >
          <FiLogOut />
          Logout
        </motion.button>

      </div>

    </aside>
  );
};

export default PanditSidebar;