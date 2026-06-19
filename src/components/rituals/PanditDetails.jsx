import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiStar, FiCheckCircle, FiArrowLeft, FiPhone, FiMessageCircle } from "react-icons/fi";

const pandits = [
  {
    id: "1",
    name: "Pandit Rajesh Ji",
    exp: "18+ Years Experience",
    lang: "Hindi • Sanskrit",
    rating: "4.9",
    specialization: "Ganesh Puja • Griha Shanti • Vastu",
    img: "/pandit1.jpg",
    bio: "Expert in traditional Vedic rituals with deep knowledge of Ganesh puja and home purification ceremonies.",
    phone: "+91 98765 43210",
  },
  {
    id: "2",
    name: "Pandit Sharma Ji",
    exp: "15+ Years Experience",
    lang: "Hindi • Marathi",
    rating: "4.8",
    specialization: "Navratri • Durga Puja",
    img: "/pandit2.jpg",
    bio: "Specialist in Navratri rituals and Devi worship ceremonies across Maharashtra and North India.",
    phone: "+91 98765 11111",
  },
  {
    id: "3",
    name: "Pandit Mishra Ji",
    exp: "20+ Years Experience",
    lang: "Hindi • English • Sanskrit",
    rating: "5.0",
    specialization: "Lakshmi Puja • Diwali • Havan",
    img: "/pandit3.jpg",
    bio: "Highly experienced in wealth rituals, Diwali pujas, and advanced havan ceremonies.",
    phone: "+91 98765 99999",
  },
];

const PanditDetails = () => {
  const { id } = useParams();

  const pandit = pandits.find((p) => p.id === id);

  if (!pandit) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-[#050816]">
        Pandit not found
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#050816] text-white relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/20 blur-[140px]" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/20 blur-[140px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-10">

        {/* Back button */}
        <Link to="/pandits">
          <button className="flex items-center gap-2 text-gray-300 hover:text-white mb-6">
            <FiArrowLeft />
            Back
          </button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative rounded-3xl overflow-hidden border border-white/10"
          >
            <img
              src={pandit.img}
              className="w-full h-[500px] object-cover"
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* verified badge */}
            <div className="absolute top-4 right-4 flex items-center gap-2 bg-black/60 px-3 py-1 rounded-full text-green-400 text-xs border border-green-400/30">
              <FiCheckCircle />
              Verified Pandit
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-5"
          >

            <h1 className="text-4xl font-bold">{pandit.name}</h1>

            <div className="flex items-center gap-3">
              <FiStar className="text-amber-400" />
              <span className="text-lg">{pandit.rating}</span>
              <span className="text-gray-400">Rating</span>
            </div>

            <p className="text-gray-400">{pandit.exp}</p>
            <p className="text-gray-400">{pandit.lang}</p>

            {/* Specialization */}
            <div className="inline-block px-4 py-2 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">
              {pandit.specialization}
            </div>

            {/* Bio */}
            <p className="text-gray-300 leading-relaxed">
              {pandit.bio}
            </p>

            {/* Actions */}
            <div className="space-y-3 pt-4">

              <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-amber-500 text-black font-semibold hover:bg-amber-400 transition">
                Book Ritual Now
              </button>

              <a href={`tel:${pandit.phone}`}>
                <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white/10 border border-white/10 hover:bg-white/20 transition">
                  <FiPhone />
                  Call Pandit
                </button>
              </a>

              <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-green-500/10 border border-green-400/20 text-green-300 hover:bg-green-500/20 transition">
                <FiMessageCircle />
                WhatsApp Chat
              </button>

            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PanditDetails;