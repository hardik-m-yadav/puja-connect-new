import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
{ name: "Home", path: "/" },
{ name: "Rituals", path: "/rituals" },
{ name: "Pandits", path: "/pandits" },
{ name: "AI Guru", path: "/ai-guru" },
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

    {/* Desktop Button */}
    {/* <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      className="hidden md:block px-6 py-3 rounded-full bg-amber-400 text-black font-semibold shadow-lg shadow-amber-500/20"
    >
      Book Puja
    </motion.button> */}


   


<Link to="/login">
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.96 }}
    className="hidden md:block px-6 py-3 rounded-full bg-amber-400 text-black font-semibold shadow-lg shadow-amber-500/20"
  >
    Login
  </motion.button>
</Link>


    <Link to="/rituals">
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.96 }}
    className="hidden md:block px-6 py-3 rounded-full bg-amber-400 text-black font-semibold shadow-lg shadow-amber-500/20"
  >
    Book Puja
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

          <Link to="/rituals" onClick={() => setMenuOpen(false)}>
  <button className="mt-3 w-full py-3 rounded-full bg-amber-400 text-black font-semibold">
    Book Puja
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
