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
      "The entire Griha Pravesh ceremony was arranged perfectly. The pandit arrived on time and guided us through every ritual.",
  },
  {
    name: "Priya Verma",
    city: "Mumbai",
    ritual: "Satyanarayan Katha",
    review:
      "Booking was incredibly simple and the pandit was highly knowledgeable. A truly divine experience.",
  },
  {
    name: "Rahul Mishra",
    city: "Nagpur",
    ritual: "Navgraha Shanti",
    review:
      "Very professional service. The ritual was conducted beautifully with complete Vedic procedures.",
  },
  {
    name: "Sneha Joshi",
    city: "Bengaluru",
    ritual: "Vastu Shanti",
    review:
      "Excellent support from booking to completion. Everything was organized perfectly.",
  },
  {
    name: "Vikram Singh",
    city: "Delhi",
    ritual: "Rudra Abhishek",
    review:
      "Authentic rituals, experienced pandits, and transparent pricing. Highly recommended.",
  },
  {
    name: "Ananya Patel",
    city: "Ahmedabad",
    ritual: "Vivah Puja",
    review:
      "The Vivah Puja was performed flawlessly. We are grateful for such a smooth experience.",
  },
];

const Testimonials = () => {
  return (
    <section className="relative py-20 bg-[#050816] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-10 w-96 h-96 bg-amber-500/10 blur-[140px]" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-orange-500/10 blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-amber-400 uppercase tracking-[0.3em] text-sm">
            Testimonials
          </span>

          <h2
            className="mt-4 text-4xl md:text-5xl font-bold text-white"
            style={{ fontFamily: "Cinzel" }}
          >
            Sacred Experiences
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Thousands of families trust Puja Connect for authentic rituals,
            verified pandits, and spiritual guidance.
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          loop={true}
          speed={1000}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
          }}
          spaceBetween={24}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="pb-16 px-1"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group relative min-h-[340px] mt-10 mb-10 bg-white/[0.04] border border-white/10 hover:border-amber-400/30 backdrop-blur-xl rounded-3xl p-7 overflow-hidden"
              >
                {/* Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-transparent" />

                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-amber-400/10 rounded-full blur-3xl" />
                </div>

                {/* Quote Mark */}
                <div className="absolute top-4 right-5 text-7xl text-white/5 font-bold">
                  "
                </div>

                <div className="relative z-10">
                  {/* Stars */}
                  <div className="flex gap-1 mb-5">
                    {[...Array(5)].map((_, i) => (
                      <FiStar
                        key={i}
                        className="text-amber-400 fill-amber-400 text-lg"
                      />
                    ))}
                  </div>

                  {/* Ritual */}
                  <span className="inline-block mb-4 px-3 py-1 rounded-full text-xs bg-amber-400/10 border border-amber-400/20 text-amber-300">
                    {item.ritual}
                  </span>

                  {/* Review */}
                  <p className="text-slate-300 leading-relaxed text-[15px] min-h-[120px]">
                    "{item.review}"
                  </p>

                  {/* User */}
                  <div className="flex items-center gap-4 mt-8 pt-5 border-t border-white/10">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400/20 to-orange-500/10 border border-amber-400/20 flex items-center justify-center text-amber-300 font-bold">
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

