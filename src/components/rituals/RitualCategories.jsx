import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { rituals } from "../../data/rituals";

const categories = [
  {
    title: "Marriage Puja",
    image:  "https://images.unsplash.com/photo-1708963738411-74ab1cd5eafb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdyaWhhJTIwcHJhdmVzaHxlbnwwfHwwfHx8MA%3D%3D",
    rating: "4.9",
    bookings: "2.4K",
    tag: "Popular",
    id: "marriage-puja"
  },
  {
    title: "Ganesh Puja",
    image: "https://images.unsplash.com/photo-1567591414240-e9c1e59f3e06?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z2FuZXNoJTIwcHVqYXxlbnwwfHwwfHx8MA%3D%3D",
    rating: "4.8",
    bookings: "1.8K",
    tag: "Trending",
    id: "ganesh"
  },
  {
    title: "Vehicle Puja",
    image: "https://media.gettyimages.com/id/2235319345/photo/a-hindu-priest-offers-prayers-to-a-truck-to-celebrate-the-festival-of-vishwakarma-puja-the.jpg?s=612x612&w=0&k=20&c=K75vtHu2o2DEJkht07ypHwZtxNVz6n2OoWkSrYBUNek=",
    rating: "4.9",
    bookings: "950",
    tag: "Fast Booking",
    id: "vehicle-puja"
  },
  {
    title: "Navgraha Shanti",
    image: "https://thumbs.dreamstime.com/b/navagraha-puja-worship-nine-planets-navagraha-puja-worship-nine-planets-hindu-rituals-109994976.jpg?w=768",
    rating: "4.8",
    bookings: "1.3K",
    tag: "Recommended",
    id:"navgraha"
  },
  {
    title: "Satyanarayan Katha",
    image:  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM6fYbh3w7tgOV5bJ7fLckYbMTASFhPfq2-UGANJ_Z3A&s=10",
    rating: "5.0",
    bookings: "3.2K",
    tag: "Best Seller",
     id: "satyanarayan-katha"
  },
  {
    title: "Mundan Sanskar",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmAXHil5nYvfbWzQQKvN_WhNPIcmPfDbuMNI8GAEYPHQ&s=10",
    rating: "4.7",
    bookings: "700",
    tag: "New",
    id: "mundan-sanskar"
  },
];

const RitualCategories = () => {
  return (
    <section className="relative py-24 bg-[#050816] overflow-hidden">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-amber-400/60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100],
            opacity: [0, 1, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 5 + Math.random() * 5,
            delay: Math.random() * 3,
          }}
        />
      ))}

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
          }}
          className="absolute top-20 left-10 w-72 h-72 bg-amber-500/10 blur-[140px]"
        />

        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
          }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 blur-[180px]"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-5">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-flex px-5 py-2 rounded-full border border-amber-400/20 bg-amber-400/5 text-amber-400 text-xs uppercase tracking-[0.35em]">
            Sacred Experiences
          </span>

          <h2
            className="mt-6 text-4xl md:text-6xl font-bold text-white"
            style={{ fontFamily: "Cinzel" }}
          >
            Discover Sacred Rituals
          </h2>

          <p className="mt-6 text-slate-400 max-w-2xl mx-auto text-lg">
            Choose from the most trusted Vedic rituals performed by verified
            pandits across India.
          </p>

          <motion.div
            animate={{
              width: ["20%", "100%", "20%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-8"
          />
        </motion.div>

        {/* Featured Card */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="relative mb-12 rounded-[32px] overflow-hidden border border-white/10"
        >
          <img
            src= "https://images.unsplash.com/photo-1680491026421-75b3f2feef56?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JpaGElMjBwcmF2ZXNofGVufDB8fDB8fHww"
            alt="Griha Pravesh"
            className="w-full h-[300px] md:h-[500px] object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

          <div className="absolute inset-0 flex items-center p-6 md:p-16">
            <div className="max-w-xl">
              <span className="px-4 py-2 rounded-full bg-amber-400 text-black text-sm font-semibold">
                Most Booked Ritual
              </span>

              <h3
                className="text-3xl md:text-6xl font-bold text-white mt-6"
                style={{ fontFamily: "Cinzel" }}
              >
                Griha Pravesh Puja
              </h3>

              <p className="text-slate-300 mt-5 text-sm md:text-lg">
                Invite prosperity, peace and divine blessings into your new home
                with authentic Vedic rituals.
              </p>

              <div className="flex flex-wrap gap-4 mt-6">
                <span className="text-amber-400">⭐ 4.9 Rating</span>

                <span className="text-emerald-400">🔥 1.2K Bookings</span>
              </div>

              <Link to={`/rituals/griha-pravesh`}>
                <button className="mt-8 px-8 py-4 rounded-full bg-amber-400 text-black font-semibold hover:scale-105 transition">
                  Explore Ritual
                </button>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{
                y: -12,
                scale: 1.02,
              }}
              className="group"
            >
             <Link to={`/rituals/${item.id}`}>
                <div
                  className="
relative
rounded-[28px]
overflow-hidden
border
border-white/10
bg-white/[0.05]
backdrop-blur-2xl
hover:border-amber-400/40
hover:shadow-[0_0_40px_rgba(251,191,36,0.15)]
transition-all
duration-500
                "
                >
                  <div className="h-[320px] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                  <div
                    className="
                    absolute
                    inset-0
                    opacity-0
                    group-hover:opacity-100
                    transition
                    duration-500
                    bg-gradient-to-t
                    from-amber-500/20
                    to-transparent
                  "
                  />

                  {/* <div className="absolute bottom-0 left-0 right-0 p-6">

                    <h3 className="text-2xl font-semibold text-white">
                      {item.title}
                    </h3>

                    <div className="mt-4 flex items-center justify-between">

                      <span className="text-slate-300 text-sm">
                        ⭐ {item.rating} Rating
                      </span>

                      <span className="text-amber-400 flex items-center gap-2">
                        Explore
                        <FiArrowRight className="group-hover:translate-x-2 transition" />
                      </span>

                    </div>

                  </div> */}

                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-amber-400 text-black text-xs font-semibold">
                      {item.tag}
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-semibold text-white">
                      {item.title}
                    </h3>

                    <div className="mt-2 text-sm text-slate-300">
                      {item.bookings} bookings completed
                    </div>

                    <div className="mt-5 flex items-center justify-between">
                      <span className="text-slate-300 text-sm">
                        ⭐ {item.rating}
                      </span>

                      <span className="flex items-center gap-2 text-amber-400">
                        Explore
                        <FiArrowRight className="group-hover:translate-x-2 transition" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-24"
      >
        <div className="max-w-4xl mx-auto rounded-[32px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-8 md:p-12 text-center">
          <h3
            className="text-3xl md:text-5xl text-white font-bold"
            style={{ fontFamily: "Cinzel" }}
          >
            Not Sure Which Ritual To Choose?
          </h3>

          <p className="text-slate-400 mt-5 max-w-2xl mx-auto">
            Let AI Guru guide you to the perfect ritual based on your occasion,
            family tradition and Vedic requirements.
          </p>

          <Link to="/ai-guru">
            <button className="mt-8 px-8 py-4 rounded-full bg-amber-400 text-black font-semibold hover:scale-105 transition">
              Ask AI Guru
            </button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default RitualCategories;
