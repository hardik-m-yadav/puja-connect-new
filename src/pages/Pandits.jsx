import { motion } from "framer-motion";
import PanditsHero from "../components/pandits/PanditsHero";
import FeaturedPandits from "../components/pandits/FeaturedPandits";
import AllPandits from "../components/pandits/ALLPandits";
import TestimonialsPandit from "../components/pandits/TestimonialsPandit";
import FAQPandits from "../components/pandits/FAQPandits";
import CTAPandits from "../components/pandits/CTAPandits";
import TrustPandits from "../components/pandits/TrustPandits";


const Pandits = () => {
  return (
      <main className="bg-[#050816]">
      <PanditsHero/>
      <FeaturedPandits/>
      <TrustPandits/>
      <AllPandits/>
      <TestimonialsPandit/>
      <FAQPandits/>
      <CTAPandits/>
    
    </main>

  );
};

export default Pandits;