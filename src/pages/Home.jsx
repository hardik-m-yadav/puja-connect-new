// import Layout from "../components/layout/Layout";
import Hero from "../components/sections/Hero";
import RitualShowcase from "../components/sections/RitualShowcase";
//  import AIGuru from "../components/sections/AIGuru";
 import Pandits from "../components/sections/Pandits";
 import HowItWorks from "../components/sections/HowItWorks.jsx";
 import Testimonials from "../components/sections/Testimonials.jsx";
 import WhyChooseUs from "../components/sections/WhyChooseUs.jsx";
   import CTA from "../components/sections/CTA"
 import FAQ from "../components/sections/FAQ.jsx";
import AIGuruCTA from "../components/sections/AICTA.jsx";



const Home = () => {
  return (
    <>
      <Hero />
       <RitualShowcase/>
       <HowItWorks/>
       <Pandits/> 
        <Testimonials/>
        <AIGuruCTA/>
        <WhyChooseUs/>
         <FAQ/>
         <CTA/>
    </>
  );
};

export default Home;
