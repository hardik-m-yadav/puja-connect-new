import { useParams, Link } from "react-router-dom";
import { pandits } from "../../data/pandits";
import {
  FiStar,
  FiMapPin,
  FiClock,
  FiArrowLeft,
  FiCheckCircle,
} from "react-icons/fi";
import { motion } from "framer-motion";

const PanditDetails = () => {
  const { id } = useParams();

  const pandit = pandits.find((p) => p.id === Number(id));

  if (!pandit) {
    return (
      <div className="text-center text-white py-32">
        Pandit Not Found
      </div>
    );
  }

  const similar = pandits
    .filter((p) => p.id !== pandit.id)
    .slice(0, 3);

  return (
    <div className="bg-[#050816] text-white min-h-screen">

      {/* BACK */}
      <div className="max-w-7xl mx-auto px-6 pt-10">
        <Link
          to="/pandits"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-amber-400 transition"
        >
          <FiArrowLeft />
          Back to Pandits
        </Link>
      </div>

      {/* HERO */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid lg:grid-cols-3 gap-10">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-2"
        >

          {/* IMAGE */}
          <div className="relative rounded-3xl overflow-hidden border border-white/10">
            <img
              src={pandit.image}
              alt={pandit.name}
              className="w-full h-[420px] object-cover"
            />

            {/* BADGES */}
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="px-3 py-1 text-xs rounded-full bg-amber-400 text-black font-bold">
                ⭐ {pandit.rating}
              </span>

              <span className="px-3 py-1 text-xs rounded-full bg-emerald-500/20 border border-emerald-400/20 text-emerald-300 flex items-center gap-1">
                <FiCheckCircle /> Verified
              </span>
            </div>
          </div>

          {/* NAME + TAG */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <h1 className="text-4xl font-bold">{pandit.name}</h1>

            <span className="px-3 py-1 text-xs rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/20">
              {pandit.tag}
            </span>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-4 mt-6">

            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <p className="text-amber-400 font-bold">{pandit.experience}</p>
              <p className="text-xs text-slate-400">Experience</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <p className="text-amber-400 font-bold">{pandit.reviews}+</p>
              <p className="text-xs text-slate-400">Reviews</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <p className="text-amber-400 font-bold">{pandit.price}</p>
              <p className="text-xs text-slate-400">Starting</p>
            </div>

          </div>

          {/* META */}
          <div className="flex flex-wrap gap-6 mt-6 text-slate-400 text-sm">

            <span className="flex items-center gap-2">
              <FiClock /> {pandit.experience} Experience
            </span>

            <span className="flex items-center gap-2">
              <FiStar className="text-amber-400" />
              {pandit.rating} Rating
            </span>

            <span className="flex items-center gap-2">
              <FiMapPin /> India
            </span>

          </div>

          {/* LANGUAGES */}
          <div className="flex flex-wrap gap-2 mt-6">
            {pandit.languages.map((lang) => (
              <span
                key={lang}
                className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10"
              >
                {lang}
              </span>
            ))}
          </div>

          {/* SPECIALIZATION */}
          <div className="mt-8">
            <h2 className="text-lg font-semibold mb-3">
              Specializations
            </h2>

            <div className="flex flex-wrap gap-2">
              {pandit.specialization.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 text-sm rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/20"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* ABOUT */}
          <div className="mt-8 bg-white/5 border border-white/10 rounded-2xl p-5">
            <h2 className="text-lg font-semibold mb-2">
              About Pandit
            </h2>

            <p className="text-slate-400 leading-relaxed">
              {pandit.name} is a highly experienced Vedic expert with deep knowledge of rituals and traditions.
              With over {pandit.experience}, he ensures authentic, precise, and spiritually powerful pujas.
            </p>
          </div>

          {/* TRUST */}
          <div className="mt-6 bg-white/5 border border-white/10 rounded-2xl p-5">
            <h2 className="text-lg font-semibold mb-3">
              Why Book This Pandit?
            </h2>

            <div className="space-y-2 text-sm text-slate-300">
              <p>✔ Verified Vedic Expert</p>
              <p>✔ Traditional Ritual Methods</p>
              <p>✔ On-time Arrival Guarantee</p>
              <p>✔ Online + Offline Support</p>
            </div>
          </div>

        </motion.div>

        {/* RIGHT BOOKING */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-1"
        >

          <div className="sticky top-10 bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">

            <p className="text-slate-400 text-sm">Starting From</p>

            <h2 className="text-4xl font-bold text-amber-400 mt-2">
              {pandit.price}
            </h2>

            <p className="text-slate-500 text-sm mt-1">
              Per Puja / Ceremony
            </p>

            {/* INCLUSIONS */}
            <div className="mt-6 space-y-3 text-sm text-slate-300">
              <p>✔ Instant Booking Confirmation</p>
              <p>✔ Verified Pandit Assignment</p>
              <p>✔ Puja Guidance Included</p>
              <p>✔ 24/7 Support</p>
            </div>

            {/* CTA */}
         <Link
  to="/rituals"
  className="w-full mt-8 py-3 rounded-xl bg-amber-400 text-black font-semibold hover:scale-[1.02] transition block text-center"
>
  Book Pandit Now
</Link>

            <button className="w-full mt-3 py-3 rounded-xl border border-white/10 text-white hover:border-amber-400/30 transition">
              Chat with Pandit
            </button>

            <p className="text-center text-xs text-slate-500 mt-4">
              🔥 5000+ successful bookings
            </p>

          </div>
        </motion.div>

      </div>

      {/* SIMILAR */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold mb-6">
          Similar Pandits
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {similar.map((p) => (
            <Link
              key={p.id}
              to={`/pandits/${p.id}`}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-amber-400/30 transition"
            >
              <img
                src={p.image}
                className="w-full h-40 object-cover rounded-xl"
              />

              <h3 className="mt-3 font-semibold">{p.name}</h3>
              <p className="text-sm text-slate-400">
                {p.experience}
              </p>

              <p className="text-amber-400 mt-2 font-semibold">
                {p.price}
              </p>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
};

export default PanditDetails;