import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Amit Sharma",
    city: "Pune",
    ritual: "Griha Pravesh Puja",
    review:
      "The entire Griha Pravesh ceremony was handled beautifully. The pandit guided us step by step and made everything very peaceful.",
  },
  {
    name: "Priya Verma",
    city: "Mumbai",
    ritual: "Satyanarayan Katha",
    review:
      "Very smooth booking experience. The pandit explained every mantra clearly and made the ritual easy to follow.",
  },
  {
    name: "Rahul Mishra",
    city: "Nagpur",
    ritual: "Navgraha Shanti",
    review:
      "Authentic Vedic rituals were performed with full devotion. Truly professional service.",
  },
  {
    name: "Sneha Joshi",
    city: "Bengaluru",
    ritual: "Vastu Shanti",
    review:
      "Everything was well organized. The pandit was punctual and very knowledgeable.",
  },
  {
    name: "Vikram Singh",
    city: "Delhi",
    ritual: "Rudra Abhishek",
    review:
      "Very divine experience. The rituals were performed with complete authenticity and clarity.",
  },
  {
    name: "Ananya Patel",
    city: "Ahmedabad",
    ritual: "Vivah Puja",
    review:
      "Our wedding puja was conducted flawlessly. We felt fully guided throughout the process.",
  },
];

const Testimonials = () => {
  return (
    <section className="relative py-24 bg-[#050816] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-10 w-96 h-96 bg-amber-500/10 blur-[140px]" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-orange-500/10 blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="px-5 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm">
            Testimonials
          </span>

          <h2 className="mt-6 text-4xl sm:text-5xl font-bold text-white">
            Trusted by{" "}
            <span className="text-amber-400">Families</span>
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Real experiences from families who booked verified pandits through PujaConnect.
          </p>
        </motion.div>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay, Pagination]}
          loop={true}
          speed={800}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          spaceBetween={24}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-14"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="group relative mt-4  h-full min-h-[320px] bg-white/5 border border-white/10 hover:border-amber-400/30 backdrop-blur-xl rounded-3xl p-6 overflow-hidden transition-all"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent" />
                </div>

                {/* Quote */}
                <div className="absolute top-3 right-4 text-6xl text-white/5 font-bold">
                  "
                </div>

                <div className="relative z-10">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <FiStar key={i} className="fill-amber-400" />
                    ))}
                  </div>

                  {/* Ritual Tag */}
                  <span className="inline-block mb-4 px-3 py-1 rounded-full text-xs bg-amber-500/10 border border-amber-500/20 text-amber-300">
                    {item.ritual}
                  </span>

                  {/* Review */}
                  <p className="text-slate-300 text-sm leading-relaxed min-h-[110px]">
                    "{item.review}"
                  </p>

                  {/* User */}
                  <div className="flex items-center gap-4 mt-6 pt-5 border-t border-white/10">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-amber-400/20 to-orange-500/10 border border-amber-400/20 flex items-center justify-center text-amber-300 font-semibold">
                      {item.name.charAt(0)}
                    </div>

                    <div>
                      <h4 className="text-white font-semibold">
                        {item.name}
                      </h4>
                      <p className="text-slate-400 text-sm">
                        {item.city}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;