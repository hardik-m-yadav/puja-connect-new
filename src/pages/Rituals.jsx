// import Navbar from "../components/layout/Navbar";
import CTASection from "../components/rituals/CTARituals";
import PanditSection from "../components/rituals/FeaturedPandits";
import FeaturedRituals from "../components/rituals/FeaturedRituals";
import HowItWorks from "../components/rituals/HowItWorksRituals";
import RitualCategories from "../components/rituals/RitualCategories";
import RitualHero from "../components/rituals/RitualHero";
import UpcomingFestivals from "../components/rituals/UpcomingFestivals";

const Rituals = () => {
  return (
    <main className="bg-[#050816]">
      <RitualHero />
      <RitualCategories/>
      <UpcomingFestivals/>
      <FeaturedRituals/>
      <HowItWorks/>
      <CTASection/>
    </main>
  );
};

export default Rituals;