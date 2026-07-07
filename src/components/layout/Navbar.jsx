import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
{ name: "Home", path: "/" },
{ name: "Rituals", path: "/rituals" },
{ name: "Pandits", path: "/pandits" },
{ name: "AI Guru", path: "/ai-guru" },
{ name: "Support", path: "/support" },
];

const Navbar = () => {
const [menuOpen, setMenuOpen] = useState(false);

return ( <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-[#050816]/80 backdrop-blur-2xl"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">


    {/* Logo */}
    <Link to="/" className="group">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center">
          <span className="text-amber-400 font-bold">ॐ</span>
        </div>

        <div>
          <h1
            className="text-xl md:text-2xl font-bold text-white group-hover:text-amber-400 transition"
            style={{ fontFamily: "Cinzel" }}
          >
            PujaConnect
          </h1>
        </div>
      </div>
    </Link>

    {/* Desktop Menu */}
    <div className="hidden md:flex items-center gap-8">
      {navLinks.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            `relative transition duration-300 ${
              isActive
                ? "text-amber-400"
                : "text-slate-300 hover:text-white"
            }`
          }
        >
          {({ isActive }) => (
            <>
              {item.name}

              {isActive && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute -bottom-2 left-0 right-0 h-[2px] bg-amber-400 rounded-full"
                />
              )}
            </>
          )}
        </NavLink>
      ))}
    </div>

   

{/* 
<Link to="/login">
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.96 }}
    className="hidden md:block px-6 py-3 rounded-full bg-amber-400 text-black font-semibold shadow-lg shadow-amber-500/20"
  >
    login
  </motion.button>
</Link> */}





    <Link to="/login">
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.96 }}
    className="hidden md:block px-6 py-2 rounded-full bg-amber-400 text-black font-semibold shadow-lg shadow-amber-500/20"
  >
    Get Started
  </motion.button>
</Link>



    {/* Mobile Menu Button */}
    <button
      onClick={() => setMenuOpen(!menuOpen)}
      className="md:hidden text-white text-2xl"
    >
      {menuOpen ? <FiX /> : <FiMenu />}
    </button>
  </div>

  {/* Mobile Menu */}
  <AnimatePresence>
    {menuOpen && (
      <motion.div
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -25 }}
        transition={{ duration: 0.25 }}
        className="md:hidden border-t border-white/10 bg-[#050816]/95 backdrop-blur-2xl"
      >
        <div className="flex flex-col p-6 gap-5">

          {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-amber-400 text-lg"
                  : "text-slate-300 text-lg"
              }
            >
              {item.name}
            </NavLink>
          ))}

          <Link to="/login" onClick={() => setMenuOpen(false)}>
  <button className="mt-3 w-full py-3 rounded-full bg-amber-400 text-black font-semibold">
    Get Started
  </button>
</Link>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
</nav>
);
};

export default Navbar;







// import { useState, useEffect } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { FiMenu, FiX, FiUser } from "react-icons/fi";

// const Navbar = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const location = useLocation();
//   const navigate = useNavigate();

//   const isActive = (path) => location.pathname === path;

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const navItems = [
//     { name: "Home", path: "/" },
//     { name: "Rituals", path: "/rituals" },
//     { name: "Pandits", path: "/pandits" },
//     { name: "AI Guru", path: "/ai-guru" },
//     { name: "Support", path: "/support" },
//   ];

//   return (
//     <header
//       className={`
//         fixed top-0 left-0 w-full z-50 transition-all duration-300
//         ${
//           scrolled
//             ? "bg-[#050816]/70 backdrop-blur-2xl border-b border-white/10 shadow-lg"
//             : "bg-transparent"
//         }
//       `}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6">
//         <div className="h-16 flex items-center justify-between">

//           {/* ================= LOGO ================= */}
//           <Link to="/" className="flex items-center gap-3 group">

//             {/* LOGO ICON */}
//             <motion.div
//               whileHover={{ rotate: 10, scale: 1.1 }}
//               transition={{ type: "spring", stiffness: 300 }}
//               className="
//                 w-10 h-10 rounded-xl
//                 bg-gradient-to-br from-amber-400 to-orange-500
//                 flex items-center justify-center
//                 shadow-lg shadow-amber-500/30
//               "
//             >
//               <span className="text-black font-bold text-lg">
//                 P
//               </span>
//             </motion.div>

//             {/* BRAND NAME */}
//             <div className="leading-tight">
//               <h1 className="text-white font-bold text-lg tracking-wide">
//                 PujaConnect
//               </h1>
//               <p className="text-[10px] text-slate-400 -mt-1">
//                 Divine Booking Platform
//               </p>
//             </div>

//           </Link>

//           {/* ================= DESKTOP MENU ================= */}
//           <nav className="hidden md:flex items-center gap-8">
//             {navItems.map((item) => (
//               <Link
//                 key={item.name}
//                 to={item.path}
//                 className="relative text-sm font-medium text-slate-300 hover:text-white transition"
//               >
//                 {item.name}

//                 {/* active underline */}
//                 {isActive(item.path) && (
//                   <motion.div
//                     layoutId="navUnderline"
//                     className="absolute left-0 -bottom-1 w-full h-[2px] bg-amber-400 rounded-full"
//                   />
//                 )}
//               </Link>
//             ))}
//           </nav>

//           {/* ================= RIGHT SIDE ================= */}
//           <div className="flex items-center gap-3">

//             {/* LOGIN BUTTON */}
//             <Link to="/login" className="hidden sm:inline-flex">
//               <button
//                 className="
//                   relative px-5 py-2 rounded-full
//                   font-semibold text-black text-sm

//                   bg-gradient-to-r from-amber-400 to-orange-400
//                   hover:from-amber-300 hover:to-orange-300

//                   shadow-lg shadow-orange-500/20
//                   hover:shadow-orange-500/40

//                   transition-all duration-300
//                   hover:scale-105 active:scale-95
//                 "
//               >
//                 Get Started
//               </button>
//             </Link>

//             {/* PROFILE */}
//             <button
//               onClick={() => navigate("/user/dashboard")}
//               className="
//                 hidden sm:flex items-center justify-center
//                 w-10 h-10 rounded-full
//                 bg-white/10 hover:bg-white/20
//                 border border-white/10
//                 backdrop-blur-xl
//                 transition
//               "
//             >
//               <FiUser />
//             </button>

//             {/* MOBILE MENU */}
//             <button
//               onClick={() => setMobileOpen(true)}
//               className="md:hidden text-white text-2xl"
//             >
//               <FiMenu />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* ================= MOBILE MENU ================= */}
//       <AnimatePresence>
//         {mobileOpen && (
//           <>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setMobileOpen(false)}
//               className="fixed inset-0 bg-black/70 z-40"
//             />

//             <motion.div
//               initial={{ x: -320 }}
//               animate={{ x: 0 }}
//               exit={{ x: -320 }}
//               className="
//                 fixed left-0 top-0 h-full w-72
//                 bg-[#0B1120]
//                 border-r border-white/10
//                 z-50 p-6
//               "
//             >
//               {/* HEADER */}
//               <div className="flex items-center justify-between mb-8">
//                 <h2 className="text-amber-400 font-bold text-lg">
//                   PujaConnect
//                 </h2>

//                 <button onClick={() => setMobileOpen(false)}>
//                   <FiX className="text-white text-xl" />
//                 </button>
//               </div>

//               {/* LINKS */}
//               <div className="flex flex-col gap-5">
//                 {navItems.map((item) => (
//                   <Link
//                     key={item.name}
//                     to={item.path}
//                     onClick={() => setMobileOpen(false)}
//                     className="text-slate-300 hover:text-white transition"
//                   >
//                     {item.name}
//                   </Link>
//                 ))}

//                 <Link to="/login">
//                   <button className="mt-6 w-full py-3 rounded-xl bg-amber-400 text-black font-semibold">
//                     Get Started
//                   </button>
//                 </Link>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// };

// export default Navbar;





// import { useState, useEffect } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { FiMenu, FiX, FiUser } from "react-icons/fi";

// const Navbar = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const location = useLocation();
//   const navigate = useNavigate();

//   const isActive = (path) => location.pathname === path;

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const navItems = [
//     { name: "Home", path: "/" },
//     { name: "Rituals", path: "/rituals" },
//     { name: "Pandits", path: "/pandits" },
//     { name: "AI Guru", path: "/ai-guru" },
//     { name: "Support", path: "/support" },
//   ];

//   return (
//     <header
//       className={`
//         fixed top-0 left-0 w-full z-50 transition-all duration-300
//         ${
//           scrolled
//             ? "bg-[#050816]/80 backdrop-blur-xl border-b border-white/10 shadow-lg"
//             : "bg-transparent"
//         }
//       `}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6">
//         <div className="h-16 flex items-center justify-between">

//           {/* ================= LOGO (UNCHANGED STYLE) ================= */}
//           <Link to="/" className="flex items-center gap-2">
//             <div className="w-8 h-8 rounded-full bg-amber-400" />
//             <span className="text-white font-bold text-lg">
//               PujaConnect
//             </span>
//           </Link>

//           {/* ================= DESKTOP MENU ================= */}
//           <nav className="hidden md:flex items-center gap-6">
//             {navItems.map((item) => (
//               <Link
//                 key={item.name}
//                 to={item.path}
//                 className={`
//                   relative text-sm font-medium transition
//                   ${
//                     isActive(item.path)
//                       ? "text-amber-400"
//                       : "text-slate-300 hover:text-white"
//                   }
//                 `}
//               >
//                 {item.name}

//                 {/* ACTIVE DOT (NEW PREMIUM TOUCH) */}
//                 {isActive(item.path) && (
//                   <motion.span
//                     layoutId="dot"
//                     className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-amber-400 rounded-full"
//                   />
//                 )}
//               </Link>
//             ))}
//           </nav>

//           {/* ================= RIGHT SIDE ================= */}
//           <div className="flex items-center gap-3">

//             {/* LOGIN BUTTON (UPGRADED BUT SAME FEEL) */}
//             <Link to="/login">
//               <button
//                 className="
//                   px-5 py-2 rounded-full
//                   text-sm font-semibold
//                   text-black
//                   bg-amber-400

//                   hover:bg-amber-300
//                   hover:shadow-lg hover:shadow-amber-500/30
//                   hover:scale-105

//                   transition-all duration-300
//                   active:scale-95
//                 "
//               >
//                 Login
//               </button>
//             </Link>

//             {/* PROFILE ICON */}
//             <button
//               onClick={() => navigate("/user/dashboard")}
//               className="
//                 hidden sm:flex items-center justify-center
//                 w-9 h-9 rounded-full
//                 bg-white/10 hover:bg-white/20
//                 border border-white/10
//                 transition
//               "
//             >
//               <FiUser />
//             </button>

//             {/* MOBILE MENU BUTTON */}
//             <button
//               onClick={() => setMobileOpen(true)}
//               className="md:hidden text-white text-2xl"
//             >
//               <FiMenu />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* ================= MOBILE MENU ================= */}
//       <AnimatePresence>
//         {mobileOpen && (
//           <>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setMobileOpen(false)}
//               className="fixed inset-0 bg-black/60 z-40"
//             />

//             <motion.div
//               initial={{ x: -300 }}
//               animate={{ x: 0 }}
//               exit={{ x: -300 }}
//               className="fixed left-0 top-0 h-full w-72 bg-[#0B1120] z-50 border-r border-white/10 p-6"
//             >
//               <div className="flex items-center justify-between mb-6">
//                 <h2 className="text-amber-400 font-bold text-lg">
//                   Menu
//                 </h2>

//                 <button onClick={() => setMobileOpen(false)}>
//                   <FiX className="text-white text-xl" />
//                 </button>
//               </div>

//               <div className="flex flex-col gap-4">
//                 {navItems.map((item) => (
//                   <Link
//                     key={item.name}
//                     to={item.path}
//                     onClick={() => setMobileOpen(false)}
//                     className="text-slate-300 hover:text-white transition"
//                   >
//                     {item.name}
//                   </Link>
//                 ))}

//                 <Link to="/login">
//                   <button className="mt-6 w-full py-3 rounded-xl bg-amber-400 text-black font-semibold">
//                     Login
//                   </button>
//                 </Link>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// };

// export default Navbar;