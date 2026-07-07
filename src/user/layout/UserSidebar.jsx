// import { Link, useLocation } from "react-router-dom";
// import { motion } from "framer-motion";
// import {
//   FiHome,
//   FiCalendar,
//   FiCreditCard,
//   FiBell,
//   FiUser,
//   FiSettings,
//   FiLogOut,
// } from "react-icons/fi";

// const menu = [
//   { name: "Dashboard", path: "/user/dashboard", icon: <FiHome /> },
//   { name: "My Bookings", path: "/user/bookings", icon: <FiCalendar /> },
//   { name: "Notifications", path: "/user/notifications", icon: <FiBell /> },
//   { name: "Profile", path: "/user/profile", icon: <FiUser /> },
//   { name: "Settings", path: "/user/settings", icon: <FiSettings /> },
// ];

// const UserSidebar = ({ onClose }) => {
//   const location = useLocation();

//   return (
//     <aside className="w-72 h-full bg-white/5 backdrop-blur-xl border-r border-white/10 flex flex-col">

//       {/* HEADER */}
//       <div className="p-6 border-b border-white/10">
//         <h1 className="text-2xl font-bold text-amber-400">
//           PujaConnect
//         </h1>
//         <p className="text-xs text-slate-400 mt-1">
//           User Portal
//         </p>
//       </div>

//       {/* MENU */}
//       <div className="flex-1 p-4 space-y-2 overflow-y-auto">
//         {menu.map((item) => {
//           const active = location.pathname === item.path;

//           return (
//             <motion.div
//               key={item.name}
//               whileHover={{ x: 5 }}
//               whileTap={{ scale: 0.98 }}
//             >
//               <Link
//                 to={item.path}
//                 onClick={onClose}
//                 className={`flex items-center gap-3 p-3 rounded-xl transition
//                   ${
//                     active
//                       ? "bg-amber-400 text-black font-semibold"
//                       : "text-slate-300 hover:bg-white/10 hover:text-white"
//                   }`}
//               >
//                 <span className="text-lg">{item.icon}</span>
//                 {item.name}
//               </Link>
//             </motion.div>
//           );
//         })}
//       </div>

//       {/* FOOTER */}
//       <div className="p-4 border-t border-white/10">
//         <button
//           onClick={() => {
//             // later firebase logout
//             window.location.href = "/login";
//           }}
//           className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-semibold"
//         >
//           <FiLogOut />
//           Logout
//         </button>
//       </div>
//     </aside>
//   );
// };

// export default UserSidebar;




import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiHome,
  FiCalendar,
  FiBell,
  FiUser,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";

const menu = [
  { name: "Dashboard", path: "/user/dashboard", icon: <FiHome /> },
  { name: "My Bookings", path: "/user/bookings", icon: <FiCalendar /> },
  { name: "Notifications", path: "/user/notifications", icon: <FiBell /> },
  { name: "Profile", path: "/user/profile", icon: <FiUser /> },
  { name: "Settings", path: "/user/settings", icon: <FiSettings /> },
];

const UserSidebar = ({ onClose, isOpen }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {/* BACKDROP (mobile) */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/60 z-40 md:hidden"
        />
      )}

      {/* SIDEBAR */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.25 }}
        className={`
          fixed md:static z-50
          w-72 h-full
          bg-white/5 backdrop-blur-xl
          border-r border-white/10
          flex flex-col
        `}
      >
        {/* HEADER */}
        <div className="p-6 border-b border-white/10">
          <h1 className="text-2xl font-bold text-amber-400">
            PujaConnect
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            User Portal
          </p>
        </div>

        {/* MENU */}
        <div className="flex-1 p-4 space-y-2 overflow-y-auto">
          {menu.map((item) => {
            const active =
              location.pathname === item.path;

            return (
              <motion.div
                key={item.name}
                whileHover={{ x: 6 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to={item.path}
                  onClick={onClose}
                  className={`flex items-center gap-3 p-3 rounded-xl transition
                    ${
                      active
                        ? "bg-amber-400 text-black font-semibold"
                        : "text-slate-300 hover:bg-white/10 hover:text-white"
                    }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  {item.name}
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* FOOTER */}
        <div className="p-4 border-t border-white/10">
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-semibold"
          >
            <FiLogOut />
            Logout
          </motion.button>
        </div>
      </motion.aside>
    </>
  );
};

export default UserSidebar;