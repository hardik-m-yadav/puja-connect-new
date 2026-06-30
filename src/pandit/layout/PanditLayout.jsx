import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiBell } from "react-icons/fi";
import PanditSidebar from "./PanditSidebar";

const PanditLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050816] text-white flex overflow-hidden">

      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <PanditSidebar />
      </div>

      {/* Mobile Sidebar */}
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
              initial={{ x: -320 }}
              animate={{ x: 0 }}
              exit={{ x: -320 }}
              transition={{ duration: 0.3 }}
              className="fixed left-0 top-0 h-full z-50 md:hidden"
            >
              <PanditSidebar onClose={() => setSidebarOpen(false)} />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">

        {/* Header */}
        <header className="sticky top-0 z-30 h-20 bg-[#0B1120]/80 backdrop-blur-xl border-b border-white/10 flex items-center justify-between px-4 md:px-8">

          <div className="flex items-center gap-4">

            <button
              onClick={() => setSidebarOpen(true)}
              className="md:hidden text-2xl"
            >
              <FiMenu />
            </button>

            <div>
              <h1 className="text-xl md:text-2xl font-bold text-amber-400">
                Pandit Dashboard
              </h1>

              <p className="text-xs md:text-sm text-slate-400">
                Welcome back 🙏
              </p>
            </div>

          </div>

          <div className="flex items-center gap-4">

            <button className="relative p-3 rounded-full bg-white/5 hover:bg-white/10 transition">
              <FiBell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500"></span>
            </button>

            <div className="hidden sm:flex items-center gap-3 bg-white/5 px-4 py-2 rounded-xl border border-white/10">
              <div className="w-10 h-10 rounded-full bg-amber-400 text-black font-bold flex items-center justify-center">
                P
              </div>

              <div>
                <p className="font-semibold">Pandit</p>
                <p className="text-xs text-slate-400">
                  Verified Partner
                </p>
              </div>
            </div>

          </div>

        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 md:p-8 overflow-y-auto">
          {children}
        </main>

      </div>

    </div>
  );
};

export default PanditLayout;