// import { motion } from "framer-motion";
// import { FiStar, FiArrowRight, FiShield } from "react-icons/fi";
// import { Link } from "react-router-dom";
// import { useRef, useState } from "react";
// import { rituals } from "../../data/rituals";

// const tagStyles = {
//   "Most Booked": "bg-amber-500/15 text-amber-300 border-amber-500/30",
//   Recommended: "bg-green-500/15 text-green-300 border-green-500/30",
//   Premium: "bg-purple-500/15 text-purple-300 border-purple-500/30",
// };

// const FeaturedRituals = () => {
//   const scrollRef = useRef(null);
//   const [activeIndex, setActiveIndex] = useState(0);

//   const isDown = useRef(false);
//   const startX = useRef(0);
//   const scrollLeft = useRef(0);

//   // responsive card width
//   const getCardWidth = () => {
//     if (window.innerWidth < 640) return 280; // mobile
//     if (window.innerWidth < 1024) return 340; // tablet
//     return 380; // desktop
//   };

//   const scrollToIndex = (index) => {
//     const el = scrollRef.current;
//     if (!el) return;

//     const maxIndex = rituals.length - 1;
//     const newIndex = Math.max(0, Math.min(index, maxIndex));

//     setActiveIndex(newIndex);

//     el.scrollTo({
//       left: newIndex * getCardWidth(),
//       behavior: "smooth",
//     });
//   };

//   const scroll = (dir) => {
//     scrollToIndex(dir === "left" ? activeIndex - 1 : activeIndex + 1);
//   };

//   const onDragStart = (e) => {
//     isDown.current = true;
//     startX.current = e.pageX || e.touches?.[0].pageX;
//     scrollLeft.current = scrollRef.current.scrollLeft;
//   };

//   const onDragMove = (e) => {
//     if (!isDown.current) return;

//     const x = e.pageX || e.touches?.[0].pageX;
//     const walk = (x - startX.current) * 1.2;

//     scrollRef.current.scrollLeft = scrollLeft.current - walk;
//   };

//   const onDragEnd = () => {
//     isDown.current = false;

//     const el = scrollRef.current;
//     const index = Math.round(el.scrollLeft / getCardWidth());

//     scrollToIndex(index);
//   };

//   return (
//     <section className="py-24 bg-[#050816] relative overflow-hidden">

//       {/* glow */}
//       <div className="absolute inset-0">
//         <div className="absolute top-[-80px] left-[-80px] w-[300px] h-[300px] bg-amber-500/20 blur-[140px]" />
//         <div className="absolute bottom-[-80px] right-[-80px] w-[300px] h-[300px] bg-purple-500/20 blur-[140px]" />
//       </div>

//       <div className="relative max-w-7xl mx-auto px-4">

//         {/* heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           className="text-center mb-14"
//         >
//           <h2 className="text-3xl sm:text-5xl font-bold text-white">
//             Popular <span className="text-amber-400">Rituals</span>
//           </h2>
//           <p className="text-gray-400 mt-3">
//             Trusted rituals performed by verified pandits
//           </p>
//         </motion.div>



//         {/* SWIPE AREA */}
//         <div
//           ref={scrollRef}
//           className="flex gap-6 overflow-x-auto scrollbar-hide px-2"
//           onMouseDown={onDragStart}
//           onMouseMove={onDragMove}
//           onMouseUp={onDragEnd}
//           onMouseLeave={onDragEnd}
//           onTouchStart={onDragStart}
//           onTouchMove={onDragMove}
//           onTouchEnd={onDragEnd}
//         >

//           {rituals.map((r) => (
//             <div
//               key={r.id}
//               className="
//                 min-w-[85%]
//                 sm:min-w-[60%]
//                 lg:min-w-[33%]
//                 group relative
//                 rounded-3xl overflow-hidden
//                 border border-white/10
//                 bg-white/5 backdrop-blur-xl
//               "
//             >

//               {/* image */}
//               <div className="relative h-56 overflow-hidden">
//                 <img
//                   src={r.img}
//                   className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
//                   alt={r.name}
//                 />

//                 <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

//                 <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs border ${tagStyles[r.tag]}`}>
//                   {r.tag}
//                 </div>

//                 <div className="absolute top-4 right-4 flex items-center gap-1 text-xs text-green-400 bg-black/50 px-2 py-1 rounded-full border border-green-400/20">
//                   <FiShield />
//                   Verified
//                 </div>
//               </div>

//               {/* content */}
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold text-white">{r.name}</h3>
//                 <p className="text-sm text-gray-400 mt-1">{r.desc}</p>

//                 <div className="flex items-center justify-between mt-5">
//                   <div className="flex items-center gap-1 text-amber-400 text-sm">
//                     <FiStar />
//                     <span className="text-white font-medium ml-1">
//                       {r.rating}
//                     </span>
//                   </div>

//                   <div className="text-white font-semibold text-lg">
//                     {r.price}
//                   </div>
//                 </div>

//                 <Link to={`/rituals/${r.id}`}>
//                   <button className="mt-6 w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-amber-500 text-black font-semibold hover:bg-amber-400 transition active:scale-95">
//                     Book in 2 mins
//                     <FiArrowRight />
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>

//                 {/* arrows */}
//         <div className="flex justify-center gap-3 mb-8">
//           <button
//             onClick={() => scroll("left")}
//             className="w-11 h-11 rounded-full bg-white/5 border border-white/10 text-white hover:bg-amber-500 hover:text-black transition"
//           >
//             ←
//           </button>

//           <button
//             onClick={() => scroll("right")}
//             className="w-11 h-11 rounded-full bg-white/5 border border-white/10 text-white hover:bg-amber-500 hover:text-black transition"
//           >
//             →
//           </button>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default FeaturedRituals;



import { motion } from "framer-motion";
import { FiStar, FiArrowRight, FiShield, FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { rituals } from "../../data/rituals";

const tagStyles = {
  "Most Booked": "bg-amber-500/15 text-amber-300 border-amber-500/30",
  Recommended: "bg-green-500/15 text-green-300 border-green-500/30",
  Premium: "bg-purple-500/15 text-purple-300 border-purple-500/30",
};

const FeaturedRituals = () => {


  
  const scrollRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const getCardWidth = () => {
    if (window.innerWidth < 640) return 280;
    if (window.innerWidth < 1024) return 340;
    return 380;
  };

  // ✅ FILTER + SEARCH LOGIC (NO UI CHANGE)
  const filteredRituals = rituals.filter((r) => {
    const matchSearch =
      r.name.toLowerCase().includes(search.toLowerCase()) ||
      r.desc.toLowerCase().includes(search.toLowerCase());

    const matchFilter =
      filter === "All" || r.tag === filter;

    return matchSearch && matchFilter;
  });

  const scrollToIndex = (index) => {
    const el = scrollRef.current;
    if (!el) return;

    const maxIndex = filteredRituals.length - 1;
    const newIndex = Math.max(0, Math.min(index, maxIndex));

    setActiveIndex(newIndex);

    el.scrollTo({
      left: newIndex * getCardWidth(),
      behavior: "smooth",
    });
  };

  const scroll = (dir) => {
    scrollToIndex(dir === "left" ? activeIndex - 1 : activeIndex + 1);
  };

  const onDragStart = (e) => {
    isDown.current = true;
    startX.current = e.pageX || e.touches?.[0].pageX;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const onDragMove = (e) => {
    if (!isDown.current) return;

    const x = e.pageX || e.touches?.[0].pageX;
    const walk = (x - startX.current) * 1.2;

    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const onDragEnd = () => {
    isDown.current = false;

    const el = scrollRef.current;
    if (!el) return;

    const index = Math.round(el.scrollLeft / getCardWidth());
    setActiveIndex(index);

    scrollToIndex(index);
  };

  return (
    <section className="py-24 bg-[#050816] relative overflow-hidden">

      {/* glow */}
      <div className="absolute inset-0">
        <div className="absolute top-[-80px] left-[-80px] w-[300px] h-[300px] bg-amber-500/20 blur-[140px]" />
        <div className="absolute bottom-[-80px] right-[-80px] w-[300px] h-[300px] bg-purple-500/20 blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">

        {/* heading */}
        <motion.div className="text-center mb-8">
          <h2 className="text-3xl sm:text-5xl font-bold text-white">
            Popular <span className="text-amber-400">Rituals</span>
          </h2>
        </motion.div>

        {/* ================= SEARCH + FILTER (NO UI CHANGE) ================= */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">

          {/* SEARCH */}
          <div className="flex items-center bg-white/5 border border-white/10 rounded-full px-4 py-2 w-full sm:w-[300px]">
            <FiSearch className="text-amber-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search rituals..."
              className="bg-transparent outline-none text-white px-3 w-full text-sm"
            />
          </div>

          {/* FILTER */}
          <div className="flex gap-2 flex-wrap justify-center">
            {["All", "Most Booked", "Recommended", "Premium"].map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`px-4 py-2 rounded-full text-xs border transition ${
                  filter === t
                    ? "bg-amber-400 text-black border-amber-400"
                    : "bg-white/5 text-white border-white/10"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

        </div>

        {/* SWIPE AREA */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide px-2"
          onMouseDown={onDragStart}
          onMouseMove={onDragMove}
          onMouseUp={onDragEnd}
          onMouseLeave={onDragEnd}
          onTouchStart={onDragStart}
          onTouchMove={onDragMove}
          onTouchEnd={onDragEnd}
        >

          {filteredRituals.map((r) => (
            <div
              key={r.id}
     className="
  w-[85%]
  sm:w-[60%]
  lg:w-[33%]
  flex-shrink-0
  group relative
  rounded-3xl overflow-hidden
  border border-white/10
  bg-white/5 backdrop-blur-xl
"
            >

              {/* image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={r.img}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs border ${tagStyles[r.tag]}`}>
                  {r.tag}
                </div>

                <div className="absolute top-4 right-4 flex items-center gap-1 text-xs text-green-400 bg-black/50 px-2 py-1 rounded-full">
                  <FiShield />
                  Verified
                </div>
              </div>

              {/* content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">{r.name}</h3>
                <p className="text-sm text-gray-400 mt-1">{r.desc}</p>

                <div className="flex justify-between mt-5">
                  <span className="text-amber-400 text-sm flex items-center gap-1">
                    <FiStar /> {r.rating}
                  </span>
                  <span className="text-white font-semibold">
                    {r.price}
                  </span>
                </div>

                <Link to={`/rituals/${r.id}`}>
                  <button className="mt-6 w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-amber-500 text-black font-semibold">
                    Book in 2 mins <FiArrowRight />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedRituals;