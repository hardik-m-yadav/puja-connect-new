import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import AdminSidebar from "../components/AdminSidebar";
import AdminHeader from "../components/AdminHeader";

const AdminLayout = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050816] text-white flex overflow-hidden">

      {/* DESKTOP SIDEBAR */}
      <div className="hidden md:block">
        <AdminSidebar />
      </div>

      {/* MOBILE SIDEBAR */}
      <AnimatePresence>
        {open && (
          <>

            {/* BACKDROP */}
            <motion.div
              className="fixed inset-0 bg-black/60 z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* SIDEBAR */}
            <motion.div
              className="fixed left-0 top-0 h-full z-50 md:hidden"
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <AdminSidebar onClose={() => setOpen(false)} />
            </motion.div>

          </>
        )}
      </AnimatePresence>

      {/* MAIN */}
      <div className="flex-1 flex flex-col w-full">

        <AdminHeader onMenuClick={() => setOpen(true)} />

        <motion.div
          className="p-4 md:p-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {children}
        </motion.div>

      </div>
    </div>
  );
};

export default AdminLayout;