<header className="sticky top-0 z-30 h-20 bg-[#0B1120]/80 backdrop-blur-xl border-b border-white/10 flex items-center justify-between px-4 md:px-8">

  {/* LEFT */}
  <div className="flex items-center gap-4">

    <button
      onClick={() => setSidebarOpen(true)}
      className="md:hidden text-2xl text-white"
    >
      ☰
    </button>

    <div>
      <h1 className="text-xl md:text-2xl font-bold text-amber-400">
        Pandit Dashboard
      </h1>
      <p className="text-xs md:text-sm text-slate-400">
        Manage bookings & pujas 🙏
      </p>
    </div>

  </div>

  {/* RIGHT */}
  <div className="flex items-center gap-3">

    {/* Notification */}
    <button className="relative p-3 rounded-full bg-white/5 hover:bg-white/10 transition">
      🔔
      <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
    </button>

    {/* Profile */}
    <div className="hidden sm:flex items-center gap-3 bg-white/5 px-4 py-2 rounded-xl border border-white/10">
      <div className="w-9 h-9 rounded-full bg-amber-400 text-black font-bold flex items-center justify-center">
        P
      </div>
      <div>
        <p className="text-sm font-semibold">Pandit</p>
        <p className="text-xs text-slate-400">Verified</p>
      </div>
    </div>

  </div>

</header>