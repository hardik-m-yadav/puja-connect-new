import { motion } from "framer-motion";
import { FiStar, FiArrowRight, FiShield } from "react-icons/fi";
import { Link } from "react-router-dom";
import { pandits } from "../../data/pandits";

const tagStyles = {
"Most Booked":
"bg-amber-500/15 text-amber-300 border-amber-500/30",
Recommended:
"bg-green-500/15 text-green-300 border-green-500/30",
Premium:
"bg-purple-500/15 text-purple-300 border-purple-500/30",
};

const FeaturedPandits = () => {
return ( <section className="relative py-20 sm:py-24 bg-[#050816] overflow-hidden">
{/* Glow */} <div className="absolute inset-0 pointer-events-none"> <div className="absolute top-0 left-0 w-80 h-80 bg-amber-500/10 blur-[140px]" /> <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/10 blur-[140px]" /> </div>


  <div className="relative max-w-7xl mx-auto px-4">

    {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl sm:text-5xl font-bold text-white">
        Featured <span className="text-amber-400">Pandits</span>
      </h2>

      <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
        Most trusted spiritual experts chosen by thousands of families.
      </p>
    </motion.div>

    {/* Slider */}
    <div
      className="
        flex
        gap-5
        overflow-x-auto
        scrollbar-hide
        snap-x
        snap-mandatory
        scroll-smooth
        pb-4
      "
    >
      {pandits.slice(0, 6).map((pandit) => (
        <motion.div
          key={pandit.id}
          whileHover={{
            y: -8,
            scale: 1.02,
          }}
          transition={{ duration: 0.3 }}
          className="
            w-[75vw]
max-w-[270px]
sm:w-[320px]
lg:w-[360px]
            flex-shrink-0
            snap-center
            rounded-3xl
            overflow-hidden
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            group
            hover:border-amber-400/30
            hover:shadow-[0_0_40px_rgba(251,191,36,0.15)]
            transition-all
            duration-500
            mt-10
            mx-2
          "
        >
          {/* Image */}
          <div className="relative h-56 sm:h-64 lg:h-72 overflow-hidden">

            <img
              src={pandit.image}
              alt={pandit.name}
              className="
                w-full
                h-full
                object-cover
                
                group-hover:scale-110
                transition-transform
                duration-700
              "
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

            <div
              className={`
                absolute top-3 left-3
                px-3 py-1
                rounded-full
                text-[11px]
                border
                ${tagStyles[pandit.tag]}
              `}
            >
              {pandit.tag}
            </div>

            <div
              className="
                absolute top-3 right-3
                flex items-center gap-1
                bg-black/60
                px-3 py-1
                rounded-full
                text-green-400
                text-[11px]
              "
            >
              <FiShield />
              Verified
            </div>
          </div>

          {/* Content */}
          <div className="p-4 sm:p-6">

            <h3 className="text-lg sm:text-xl font-bold text-white line-clamp-1">
              {pandit.name}
            </h3>

            <p className="text-slate-400 text-sm mt-1">
              {pandit.experience} Experience
            </p>

            {/* Rating */}
            <div className="flex items-center justify-between mt-4">

              <div className="flex items-center gap-2 text-amber-400">
                <FiStar />
                <span>{pandit.rating}</span>
              </div>

              <span className="text-xs text-slate-500">
                {pandit.reviews} Reviews
              </span>

            </div>

            {/* Languages */}
            <div className="flex flex-wrap gap-2 mt-4">
              {pandit.languages.map((lang) => (
                <span
                  key={lang}
                  className="
                    px-2.5 py-1
                    rounded-full
                    text-[11px]
                    bg-white/5
                    border
                    border-white/10
                    text-slate-300
                  "
                >
                  {lang}
                </span>
              ))}
            </div>

            {/* Specialization */}
            <div className="flex flex-wrap gap-2 mt-4">
              {pandit.specialization.slice(0, 2).map((item) => (
                <span
                  key={item}
                  className="
                    px-2.5 py-1
                    rounded-full
                    text-[11px]
                    bg-amber-500/10
                    border
                    border-amber-500/20
                    text-amber-300
                  "
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Price */}
            <div className="mt-5">
              <p className="text-slate-500 text-xs">
                Starting From
              </p>

              <h4 className="text-xl sm:text-2xl font-bold text-amber-400">
                {pandit.price}
              </h4>
            </div>

            {/* Button */}
            <Link to={`/pandits/${pandit.id}`}>
              <button
                className="
                  mt-6
                  w-full
                  py-3
                  rounded-xl
                  bg-amber-400
                  text-black
                  font-semibold
                  flex
                  items-center
                  justify-center
                  gap-2
                  hover:scale-[1.02]
                  transition-all
                "
              >
                View Profile
                <FiArrowRight />
              </button>
            </Link>

          </div>
        </motion.div>
      ))}
    </div>

  </div>
</section>


);
};

export default FeaturedPandits;
