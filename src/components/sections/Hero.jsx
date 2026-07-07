
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useEffect, useState } from "react";
import Stats from "./Stats";
import { FiShield, FiVideo, FiStar } from "react-icons/fi";
import { Link } from "react-router-dom";

const images = [
 "https://images.unsplash.com/photo-1566915682737-3e97a7eed93b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5kaWFuJTIwdGVtcGxlfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1616074385287-67f6fb9e9eb8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHVqYXxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1656830738920-7e0090536552?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHB1amF8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1700975161101-9dec59d4dcaf?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHB1amF8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1646208505943-1a7ed7a62c1b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFuZGl0fGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1627419375575-6cb2faa849b3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHVqYSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1764304589223-30bfbfdaa9ef?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHB1amElMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1730312390229-8f8e1589e362?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHB1amElMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1573352763925-82bd5dfc31d1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVtcGxlfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1616377009507-c8111f07aced?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRlbXBsZXxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1585607344893-43a4bd91169a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhZGl0aW9ufGVufDB8fDB8fHww"
  


];

const quotes = [
  "“Spirituality becomes powerful when it is accessible.”",
  "“Faith is the strongest technology humanity has.”",
  "“A perfect ritual creates a perfect life rhythm.”",
];

const features = [
  { icon: FiShield, title: "Verified Pandits", desc: "Background checked experts" },
  { icon: FiVideo, title: "Live Guidance", desc: "Real-time assistance" },
  { icon: FiStar, title: "Top Rated", desc: "Loved by 10,000+ users" },
];

// floating particles
const particles = Array.from({ length: 18 });

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [quoteIndex, setQuoteIndex] = useState(0);

  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 600], [0, 150]);

  // 🎯 Cursor tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 80, damping: 20 });

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  // carousel
  useEffect(() => {
    const t = setInterval(() => {
      setIndex((p) => (p + 1) % images.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  // quotes
  useEffect(() => {
    const q = setInterval(() => {
      setQuoteIndex((p) => (p + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(q);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050816] pt-28">

      {/* 🌌 CURSOR LIGHT SPOT */}
      <motion.div
        style={{
          translateX: smoothX,
          translateY: smoothY,
        }}
        className="pointer-events-none absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-amber-400/10 blur-[120px] rounded-full"
      />

      {/* 🌫 PARALLAX BACKGROUND */}
      <motion.div style={{ y: yBg }} className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-500/20 blur-[140px]" />
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-yellow-500/10 blur-[180px] -translate-x-1/2 -translate-y-1/2" />
      </motion.div>

      {/* ✨ FLOATING PARTICLES */}
      <div className="absolute inset-0">
        {particles.map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            animate={{
              y: [0, -100, 0],
              x: [0, 30, -20],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              delay: i * 0.3,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[85vh]">

          {/* LEFT */}
          <div className="text-center lg:text-left">

            <div className="inline-flex px-4 py-2 rounded-full bg-white/5 border border-white/10 text-amber-300 text-sm backdrop-blur-xl">
              ✨ Next Gen Spiritual Experience
            </div>

            <h1 className="mt-6 text-5xl md:text-6xl xl:text-7xl font-bold text-white leading-tight">
              Book Verified <br />
              <span className="text-amber-400">Pandits</span> Instantly
            </h1>

            <p className="mt-6 text-slate-300 text-lg max-w-xl">
              Premium puja booking, AI guidance, and verified spiritual experts — redesigned for modern India.
            </p>

            <div className="mt-8 flex gap-4 flex-wrap justify-center lg:justify-start">
              <Link  to="/rituals">
                <button className="px-8 py-4 rounded-full bg-amber-400 text-black font-semibold hover:scale-105 transition">
                🪔 Book Puja Now
              </button>
              </Link>

              <Link to="/ai-guru">
                <button className="px-8 py-4 rounded-full border border-white/15 text-white backdrop-blur-xl hover:border-amber-400/40 transition">
                  🤖 Try AI Guru
                </button>
              </Link>
            </div>

            {/* FEATURES */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05, rotateX: 6 }}
                    className="relative p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl group"
                  >
                    <Icon className="text-amber-400 text-xl mx-auto" />
                    <p className="text-white text-sm mt-2 text-center">{f.title}</p>

                    <div className="absolute opacity-0 group-hover:opacity-100 transition text-xs bg-black/80 px-3 py-2 rounded-xl -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap">
                      {f.desc}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* QUOTES */}
            <div className="mt-10 h-12 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={quoteIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-slate-400 italic"
                >
                  {quotes[quoteIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          {/* RIGHT - 3D CARD */}
          <motion.div
            style={{
              rotateY: useTransform(smoothX, [-300, 300], [12, -12]),
              rotateX: useTransform(smoothY, [-300, 300], [-10, 10]),
            }}
            className="relative h-[520px] perspective-1000"
          >

            <AnimatePresence mode="wait">
              <motion.img
                key={index}
                src={images[index]}
                className="absolute w-full h-full object-cover rounded-3xl border border-white/10"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
              />
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent rounded-3xl" />

            {/* FLOATING BADGES */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-5 left-5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl text-white text-xs"
            >
              🔥 Live Pandits
            </motion.div>

            <div className="absolute top-5 right-5 px-3 py-2 rounded-full bg-amber-400 text-black text-xs font-bold">
              ⭐ 4.9
            </div>

            {/* BOOK CARD */}
            <div className="absolute bottom-5 left-5 right-5">
              <div className="bg-black/40 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 flex justify-between items-center">
                <div>
                  <p className="text-white text-sm font-semibold">
                    Instant Booking
                  </p>
                  <p className="text-slate-400 text-xs">
                    Verified Pandits • No Delay
                  </p>
                </div>

                <Link to="/rituals">
                  <button className="px-5 py-2  rounded-full bg-amber-400 text-black font-semibold hover:scale-105 transition">
                    Book
                  </button>
                </Link>
              </div>
            </div>

          </motion.div>
        </div>
          <Stats />
      </div>

    
    </section>
  );
}