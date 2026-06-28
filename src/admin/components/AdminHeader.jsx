const AdminHeader = ({ onMenuClick }) => {
  return (
    <div className="h-20 border-b border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-between px-4 md:px-6 shadow-lg">

      <div className="flex items-center gap-3">

        {/* Mobile menu */}
        <button
          onClick={onMenuClick}
          className="md:hidden w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 transition"
        >
          ☰
        </button>

        <div>
          <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
            Dashboard
          </h2>

          <p className="text-xs md:text-sm text-slate-400">
            Welcome back, Admin
          </p>
        </div>
      </div>

      {/* Avatar */}
      <div className="relative">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-black font-bold shadow-lg">
          A
        </div>

        {/* glow */}
        <div className="absolute inset-0 rounded-full bg-amber-400 blur-xl opacity-20"></div>
      </div>
      

    </div>

  
  );
};

export default AdminHeader;