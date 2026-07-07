// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FiMenu, FiBell, FiSearch, FiUser } from "react-icons/fi";
// import { useNavigate } from "react-router-dom";

// const UserLayout = ({ children }) => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [dropdown, setDropdown] = useState(false);
//   const navigate = useNavigate();

//   const currentHour = new Date().getHours();

//   const getGreeting = () => {
//     if (currentHour < 12) return "Good Morning";
//     if (currentHour < 18) return "Good Afternoon";
//     return "Good Evening";
//   };

//   return (
//     <div className="min-h-screen bg-[#050816] text-white flex overflow-hidden relative">

//       {/* BACKGROUND GLOW */}
//       <div className="absolute w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-[140px] top-[-120px] left-[-120px]" />
//       <div className="absolute w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[140px] bottom-[-150px] right-[-120px]" />

//       {/* SIDEBAR (placeholder - you will add later) */}
//       <div className="hidden md:block w-72 bg-white/5 border-r border-white/10 backdrop-blur-xl">
//         <div className="p-6">
//           <h1 className="text-2xl font-bold text-amber-400">
//             PujaConnect
//           </h1>
//           <p className="text-xs text-slate-400 mt-1">User Portal</p>
//         </div>

//         <div className="px-4 space-y-2">
//           {["Dashboard", "Bookings", "Payments", "Notifications", "Profile"].map((item) => (
//             <div
//               key={item}
//               className="p-3 rounded-xl hover:bg-white/10 cursor-pointer transition"
//               onClick={() => navigate(`/user/${item.toLowerCase()}`)}
//             >
//               {item}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* MOBILE SIDEBAR */}
//       <AnimatePresence>
//         {sidebarOpen && (
//           <>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setSidebarOpen(false)}
//               className="fixed inset-0 bg-black/60 z-40 md:hidden"
//             />

//             <motion.div
//               initial={{ x: -300 }}
//               animate={{ x: 0 }}
//               exit={{ x: -300 }}
//               className="fixed left-0 top-0 h-full w-72 bg-[#0B1120] z-50 md:hidden border-r border-white/10"
//             >
//               <div className="p-6 border-b border-white/10">
//                 <h1 className="text-2xl font-bold text-amber-400">
//                   PujaConnect
//                 </h1>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>

//       {/* MAIN AREA */}
//       <div className="flex-1 flex flex-col min-w-0 z-10">

//         {/* HEADER */}
//         <header className="sticky top-0 z-30 h-20 bg-[#0B1120]/60 backdrop-blur-xl border-b border-white/10 flex items-center justify-between px-4 md:px-8">

//           {/* LEFT */}
//           <div className="flex items-center gap-4">
//             <button
//               onClick={() => setSidebarOpen(true)}
//               className="md:hidden text-2xl"
//             >
//               <FiMenu />
//             </button>

//             <div>
//               <h1 className="text-lg md:text-2xl font-bold text-amber-400">
//                 {getGreeting()}, User 👋
//               </h1>
//               <p className="text-xs md:text-sm text-slate-400">
//                 Welcome back to PujaConnect
//               </p>
//             </div>
//           </div>

//           {/* SEARCH (desktop only) */}
//           <div className="hidden md:flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl border border-white/10">
//             <FiSearch className="text-slate-400" />
//             <input
//               placeholder="Search pujas, pandits..."
//               className="bg-transparent outline-none text-sm text-white w-48"
//             />
//           </div>

//           {/* RIGHT */}
//           <div className="flex items-center gap-4 relative">

//             {/* NOTIFICATION */}
//             <button className="relative p-3 rounded-full bg-white/5 hover:bg-white/10 transition">
//               <FiBell size={18} />
//               <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
//             </button>

//             {/* PROFILE */}
//             <div
//               className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded-xl border border-white/10 cursor-pointer"
//               onClick={() => setDropdown(!dropdown)}
//             >
//               <div className="w-8 h-8 bg-amber-400 text-black flex items-center justify-center rounded-full font-bold">
//                 U
//               </div>
//               <span className="text-sm hidden sm:block">User</span>
//             </div>

//             {/* DROPDOWN */}
//             <AnimatePresence>
//               {dropdown && (
//                 <motion.div
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -10 }}
//                   className="absolute right-0 top-14 w-48 bg-[#0B1120] border border-white/10 rounded-xl overflow-hidden"
//                 >
//                   <div className="p-3 hover:bg-white/10 cursor-pointer">
//                     <FiUser className="inline mr-2" />
//                     Profile
//                   </div>
//                   <div className="p-3 hover:bg-white/10 cursor-pointer text-red-400">
//                     Logout
//                   </div>
//                 </motion.div>
//               )}
//             </AnimatePresence>

//           </div>

//         </header>

//         {/* CONTENT */}
//         <main className="flex-1 p-4 md:p-8 overflow-y-auto">
//           {children}
//         </main>

//       </div>
//     </div>
//   );
// };

// export default UserLayout;





import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiBell, FiSearch, FiUser, FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import UserSidebar from "./UserSidebar";

const UserLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const navigate = useNavigate();

  const getGreeting = () => {
    const h = new Date().getHours();
    if (h < 12) return "Good Morning";
    if (h < 18) return "Good Afternoon";
    return "Good Evening";
  };

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-[#050816] text-white flex">

      {/* 🟣 DESKTOP SIDEBAR (TAKES SPACE PROPERLY) */}
      <div className="hidden md:block w-72 shrink-0">
        <UserSidebar />
      </div>

      {/* 🔵 MOBILE SIDEBAR (DRAWER) */}
      {/* <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
              className="fixed inset-0 bg-black/60 z-40 md:hidden"
            />

            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              className="fixed left-0 top-0 h-full w-72 bg-[#0B1120] z-50 md:hidden border-r border-white/10"
            >
              <UserSidebar onClose={() => setSidebarOpen(false)} />
            </motion.div>
          </>
        )}
      </AnimatePresence> */}


{/* MOBILE SIDEBAR */}
<AnimatePresence>
  {sidebarOpen && (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setSidebarOpen(false)}
        className="fixed inset-0 bg-black/60 z-40 md:hidden"
      />

      <motion.div
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        exit={{ x: -300 }}
        className="fixed left-0 top-0 h-full w-72 z-50 md:hidden"
      >
        <UserSidebar onClose={() => setSidebarOpen(false)} />
      </motion.div>
    </>
  )}
</AnimatePresence>


      {/* 🟢 MAIN AREA (NOW RESPECTS SIDEBAR WIDTH) */}
      <div className="flex-1 flex flex-col min-w-0">

        {/* HEADER */}
        <header className="h-20 flex items-center justify-between px-4 md:px-8 bg-[#0B1120]/70 backdrop-blur-xl border-b border-white/10">

          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="md:hidden text-2xl"
            >
              <FiMenu />
            </button>

            <div>
              <h1 className="text-lg md:text-2xl font-bold text-amber-400">
                {getGreeting()}, User 👋
              </h1>
              <p className="text-xs text-slate-400">
                Welcome to PujaConnect
              </p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl border border-white/10">
            <FiSearch className="text-slate-400" />
            <input
              className="bg-transparent outline-none text-sm w-56"
              placeholder="Search..."
            />
          </div>

          <div className="flex items-center gap-4 relative">

            <button className="relative p-3 rounded-full bg-white/5">
              <FiBell />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full" />
            </button>

            <div
              onClick={() => setDropdown(!dropdown)}
              className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded-xl cursor-pointer"
            >
              <div className="w-8 h-8 bg-amber-400 text-black flex items-center justify-center rounded-full font-bold">
                U
              </div>
              <span className="hidden sm:block">User</span>
            </div>

            <AnimatePresence>
              {dropdown && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 top-14 w-48 bg-[#0B1120] border border-white/10 rounded-xl overflow-hidden"
                >
                  <div
                    onClick={() => navigate("/user/profile")}
                    className="p-3 hover:bg-white/10 cursor-pointer"
                  >
                    <FiUser className="inline mr-2" />
                    Profile
                  </div>

                  <div
                    onClick={handleLogout}
                    className="p-3 hover:bg-red-500/20 text-red-400 cursor-pointer"
                  >
                    <FiLogOut className="inline mr-2" />
                    Logout
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </header>

        {/* CONTENT */}
        <main className="flex-1 p-4 md:p-8 overflow-y-auto">
          {children}
        </main>

      </div>
    </div>
  );
};

export default UserLayout;