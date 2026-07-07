import { motion } from "framer-motion";
import { FiSearch, FiShield, FiStar, FiUsers } from "react-icons/fi";

const PanditsHero = () => {
return ( <section className="relative overflow-hidden bg-[#050816] pt-28 pb-20 lg:pt-36 lg:pb-28">


  {/* Background Glow */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-[-120px] left-[-120px] w-[450px] h-[450px] bg-amber-500/10 blur-[180px]" />
    <div className="absolute bottom-[-120px] right-[-120px] w-[450px] h-[450px] bg-orange-500/10 blur-[180px]" />
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

      {/* LEFT SIDE */}
      <div>

        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-amber-400 text-sm"
        >
          <FiShield />
          Verified Spiritual Experts
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-6 text-3xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight"
        >
          Find Trusted
          <span className="block text-amber-400">
            Pandits Across India
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
         className="mt-5 text-slate-400 text-base sm:text-lg max-w-xl"
        >
          Book experienced and verified pandits for
          Griha Pravesh, Vivah Sanskar, Satyanarayan Katha,
          Rudrabhishek, and other sacred rituals.
        </motion.p>

        {/* Search */}
     <motion.div
initial={{ opacity: 0, y: 25 }}
animate={{ opacity: 1, y: 0 }}
transition={{ delay: 0.3 }}
className="mt-8 w-full"

>

  <div className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-full p-3 hover:border-amber-400/30 transition-all duration-300">


<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">

  <div className="flex items-center flex-1 min-w-0">
    <FiSearch className="text-amber-400 text-lg flex-shrink-0" />

    <input
      type="text"
      placeholder="Search pandits, rituals..."
      className="w-full min-w-0 bg-transparent px-3 text-white outline-none placeholder:text-slate-500 text-sm sm:text-base"
    />
  </div>

  <button
    className="
      w-full
      sm:w-auto
      px-6
      py-3
      rounded-xl
      sm:rounded-full
      bg-amber-400
      text-black
      font-semibold
      hover:scale-105
      transition-all
      duration-300
      flex-shrink-0
    "
  >
    Search
  </button>

</div>


  </div>
</motion.div>


        {/* Popular Ritual Tags */}
        <div className="flex flex-wrap gap-3 mt-6">
          {[
            "Griha Pravesh",
            "Marriage Puja",
            "Satyanarayan",
            "Rudrabhishek",
          ].map((item) => (
            <span
              key={item}
              className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm hover:border-amber-400/30 hover:text-amber-300 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Stats */}
       <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">

          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center hover:border-amber-400/30 hover:bg-white/10 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
            <h3 className="text-2xl font-bold text-amber-400">
              50+
            </h3>
            <p className="text-slate-400 text-sm mt-1">
              Pandits
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center hover:border-amber-400/30 hover:bg-white/10 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
            <h3 className="text-2xl font-bold text-amber-400">
              100+
            </h3>
            <p className="text-slate-400 text-sm mt-1">
              Rituals
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center hover:border-amber-400/30 hover:bg-white/10 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
            <h3 className="text-2xl font-bold text-amber-400">
              4.9★
            </h3>
            <p className="text-slate-400 text-sm mt-1">
              Rating
            </p>
          </div>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="relative flex justify-center order-first lg:order-last">

        {/* Main Card */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
          className="relative w-full max-w-sm sm:max-w-md hover:scale-[1.02] transition-all duration-500"
        >

          <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl">

            <img
              src="https://images.pexels.com/photos/35089271/pexels-photo-35089271.png"
              alt="Pandit"
             className="h-[320px] sm:h-[400px] lg:h-[450px] w-full object-cover"
            />

            <div className="p-6">

              <div className="flex items-center justify-between">

                <h3 className="text-2xl font-semibold text-white">
                  Pandit Rajesh Sharma
                </h3>

                <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs">
                  Verified
                </span>

              </div>

              <p className="text-slate-400 mt-2">
                15 Years Experience
              </p>

              <div className="flex items-center gap-2 mt-4 text-amber-400">
                <FiStar />
                <span>4.9 (320 Reviews)</span>
              </div>

            </div>

          </div>

        </motion.div>

        {/* Floating Review Card */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
          className="hidden md:block absolute top-12 -left-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4"
        >
          <div className="flex items-center gap-2 text-amber-400">
            <FiStar />
            <span>4.9 Rating</span>
          </div>
          <p className="text-slate-400 text-sm mt-2">
            Trusted by 10,000+ families
          </p>
        </motion.div>

        {/* Floating Verification Card */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
          className="hidden md:block absolute bottom-12 -right-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4"
        >
          <div className="flex items-center gap-2 text-green-400">
            <FiUsers />
            <span>500+ Verified</span>
          </div>

          <p className="text-slate-400 text-sm mt-2">
            Spiritual experts across India
          </p>
        </motion.div>

      </div>

    </div>

  </div>

</section>

);
};

export default PanditsHero;
