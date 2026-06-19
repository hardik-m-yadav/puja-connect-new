import AboutBenefits from "../components/ritual-details/AboutBenefits";
import RitualCTA from "../components/ritual-details/RitualCTA";
import RitualFAQ from "../components/ritual-details/RitualFAQ";
import RitualProcess from "../components/ritual-details/RitualProcess";
import SuggestedPandits from "../components/ritual-details/SuggestedPandits";
import WhatsIncluded from "../components/ritual-details/WhatsIncluded";

// // const RitualDetails = () => {
// //   return (
// //     <>
// //       <RitualHero />
// //       <AboutBenefits />
// //       <WhatsIncluded/>
// //       <RitualProcess/>
// //       <SuggestedPandits/>
// //       <RitualFAQ/>
// //       <RitualCTA/>
// //     </>
// //   );
// // };

// // export default RitualDetails;



import { useParams } from "react-router-dom";
import { rituals } from "../data/rituals";
import { useEffect, useState } from "react";

import RitualHero from "../components/ritual-details/RitualHero";

const RitualDetails = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);

  // loading simulation (SaaS feel)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, []);

  const ritual = rituals.find((r) => r.id === id);

  // loading UI
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#050816] text-white">
        Loading ritual details...
      </div>
    );
  }

  if (!ritual) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#050816] text-white">
        Ritual not found
      </div>
    );
  }

  return (
    <div className="bg-[#050816] text-white">

      {/* HERO */}
      <RitualHero ritual={ritual} />

      {/* WHATSAPP FLOAT */}
      <a
        href={`https://wa.me/7410194730?text=Hi, I want to book ${ritual.name}`}
        target="_blank"
        className="fixed bottom-24 right-5 z-50 bg-green-500 hover:bg-green-400 text-white p-4 rounded-full shadow-lg transition"
      >
        💬
      </a>

   

  

      <AboutBenefits ritual={ritual} />

      <WhatsIncluded ritual={ritual} />


      <RitualProcess/>
      

      <SuggestedPandits ritual={ritual}/>

      <RitualFAQ/>

      <RitualCTA ritual={ritual} />


      {/* MOBILE STICKY CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#050816]/90 backdrop-blur-xl border-t border-white/10 p-4 flex items-center justify-between md:hidden">

        <div>
          <p className="text-sm text-gray-400">Starting from</p>
          <p className="text-lg font-bold text-white">{ritual.price}</p>
        </div>

        <button className="px-6 py-3 bg-amber-500 text-black font-bold rounded-xl hover:bg-amber-400 transition">
          Book Now
        </button>

      </div>

    </div>
  );
};

export default RitualDetails;