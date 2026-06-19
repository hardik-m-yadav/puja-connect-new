import React from 'react'
import { motion } from 'framer-motion'

const TrustPandits = () => {
  return (
   <section className="relative py-28 overflow-hidden">

{/* Background Glow */}

  <div className="absolute inset-0 overflow-hidden pointer-events-none">


<div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-amber-500/10 blur-[180px]" />

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[350px] h-[350px] bg-orange-500/10 blur-[150px]" />


  </div>

  <div className="relative max-w-7xl mx-auto px-4">


{/* Heading */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="text-center"
>
  <span
    className="
      inline-flex
      px-5
      py-2
      rounded-full
      border
      border-amber-500/20
      bg-amber-500/10
      text-amber-400
      text-sm
    "
  >
    Trusted By Thousands
  </span>

  <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
    Why Families Trust
    <span className="text-amber-400"> PujaConnect</span>
  </h2>

  <p className="text-slate-400 max-w-2xl mx-auto mt-5">
    Connecting devotees with experienced and verified pandits
    for every sacred occasion across India.
  </p>
</motion.div>

{/* Top Stats */}
<div
  className="
    mt-16
    grid
    grid-cols-2
    lg:grid-cols-4
    gap-5
  "
>
  {[
    ["500+", "Rituals Completed"],
    ["4.9★", "Average Rating"],
    ["50+", "Verified Pandits"],
    ["20+", "Cities Covered"],
  ].map(([value, label], index) => (

    <motion.div
      key={label}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
      whileHover={{
        y: -6,
        scale: 1.03,
      }}
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        p-6
        text-center
      "
    >
      <h3 className="text-3xl lg:text-4xl font-bold text-amber-400">
        {value}
      </h3>

      <p className="text-slate-400 mt-2 text-sm">
        {label}
      </p>
    </motion.div>

  ))}
</div>

{/* Centerpiece */}
<div className="relative flex justify-center mt-24 mb-20">

  {/* Floating Badge Left Top */}
  <motion.div
    animate={{
      y: [0, -12, 0],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
    }}
    className="
      hidden md:flex
      absolute
      top-10
      left-10
      px-5
      py-3
      rounded-2xl
      bg-white/5
      border
      border-white/10
      backdrop-blur-xl
      text-white
    "
  >
    🛡️ Verified Experts
  </motion.div>

  {/* Floating Badge Right Top */}
  <motion.div
    animate={{
      y: [0, 12, 0],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
    }}
    className="
      hidden md:flex
      absolute
      top-10
      right-10
      px-5
      py-3
      rounded-2xl
      bg-white/5
      border
      border-white/10
      backdrop-blur-xl
      text-white
    "
  >
    ⭐ Top Rated
  </motion.div>

  {/* Floating Badge Bottom Left */}
  <motion.div
    animate={{
      y: [0, 10, 0],
    }}
    transition={{
      duration: 4.5,
      repeat: Infinity,
    }}
    className="
      hidden md:flex
      absolute
      bottom-10
      left-10
      px-5
      py-3
      rounded-2xl
      bg-white/5
      border
      border-white/10
      backdrop-blur-xl
      text-white
    "
  >
    🙏 Authentic Rituals
  </motion.div>

  {/* Floating Badge Bottom Right */}
  <motion.div
    animate={{
      y: [0, -10, 0],
    }}
    transition={{
      duration: 4.8,
      repeat: Infinity,
    }}
    className="
      hidden md:flex
      absolute
      bottom-10
      right-10
      px-5
      py-3
      rounded-2xl
      bg-white/5
      border
      border-white/10
      backdrop-blur-xl
      text-white
    "
  >
    📍 Nationwide Network
  </motion.div>

  {/* Golden Mandala Core */}
  {/* <motion.div
    animate={{
      scale: [1, 1.05, 1],
      rotate: [0, 5, 0],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
    }}
    className="relative"
  >

    <div
      className="
        w-72
        h-72
        sm:w-96
        sm:h-96
        rounded-full
        bg-gradient-to-br
        from-amber-300
        via-amber-500
        to-orange-500
        opacity-20
        blur-sm
      "
    />

    <div
      className="
        absolute
        inset-10
        rounded-full
        border
        border-amber-400/40
      "
    />

    <div
      className="
        absolute
        inset-20
        rounded-full
        border
        border-amber-400/30
      "
    />

    <div
      className="
        absolute
        inset-0
        flex
        items-center
        justify-center
      "
    >
      <span className="text-7xl sm:text-8xl">
        ☀️
      </span>
    </div>

  </motion.div> */}


  {/* Golden Mandala Core */}

  
<motion.div
whileHover={{
scale: 1.05,
}}
className="relative"

>

{/* Pulsing Outer Ring */}
<motion.div
animate={{
scale: [1, 1.2, 1],
opacity: [0.3, 0.08, 0.3],
}}
transition={{
duration: 5,
repeat: Infinity,
ease: "easeInOut",
}}
className="
absolute
inset-0
rounded-full
border
border-amber-400/30
"
/>

{/* Rotating Ring */}
<motion.div
animate={{
rotate: 360,
}}
transition={{
duration: 40,
repeat: Infinity,
ease: "linear",
}}
className="
absolute
inset-4
rounded-full
border
border-dashed
border-amber-400/20
"
/>

{/* Floating Particles */}
{[...Array(8)].map((_, i) => (
<motion.div
key={i}
animate={{
y: [0, -12, 0],
opacity: [0.4, 1, 0.4],
}}
transition={{
duration: 2 + i * 0.4,
repeat: Infinity,
}}
style={{
position: "absolute",
left: `${50 + 40 * Math.cos((i * Math.PI) / 4)}%`,
top: `${50 + 40 * Math.sin((i * Math.PI) / 4)}%`,
}}
className="
w-2
h-2
rounded-full
bg-amber-400
shadow-[0_0_15px_rgba(251,191,36,0.8)]
"
/>
))}

{/* Main Glow */}
<motion.div
animate={{
scale: [1, 1.05, 1],
}}
transition={{
duration: 4,
repeat: Infinity,
}}
className="
w-72
h-72
sm:w-96
sm:h-96
rounded-full
bg-gradient-to-br
from-amber-300
via-amber-500
to-orange-500
opacity-20
blur-sm
"
/>

{/* Sacred Rings */}

  <div
    className="
      absolute
      inset-10
      rounded-full
      border
      border-amber-400/40
    "
  />

  <div
    className="
      absolute
      inset-20
      rounded-full
      border
      border-amber-400/30
    "
  />

{/* Center Icon */}
<motion.div
whileHover={{
rotate: 15,
scale: 1.1,
}}
className="
absolute
inset-0
flex
items-center
justify-center
"

>

<span
  className="
    text-7xl
    sm:text-8xl
    drop-shadow-[0_0_40px_rgba(251,191,36,0.8)]
  "
>
  ☀️
</span>

</motion.div>

</motion.div>


</div>

{/* Bottom Quote */}
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ delay: 0.3 }}
  className="text-center"
>
  <p className="text-2xl sm:text-3xl font-semibold text-white max-w-4xl mx-auto">
    Trusted for life's most sacred moments.
  </p>

  <p className="text-slate-400 mt-4">
    From Griha Pravesh to Vivah Sanskar,
    families across India choose PujaConnect.
  </p>
</motion.div>


  </div>

</section>
  )
}

export default TrustPandits
