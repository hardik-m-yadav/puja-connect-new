// import { Routes, Route } from "react-router-dom";

// import Home from "./pages/Home";
// import Rituals from "./pages/Rituals";
// import Pandits from "./pages/Pandits";
// import AIGuru from "./pages/ai-guru/AIGuru";
// import RitualDetails from "./pages/RitualDetails";
// import PanditDetail from "./components/pandits/PanditsDetails";
// import Navbar from "./components/layout/Navbar";
// import Footer from "./components/layout/Footer";
// import Privacy from  "./pages/Privacy";
// import Terms from "./pages/Terms";
// import Support from "./pages/Support";
// import Booking from "./pages/Booking";
// import BookingSuccess from "./pages/BookingSuccess";





// const App = () => {
//   return (
//     <>
//       <Navbar />

//       <Routes>
//         {/* Home */}
//         <Route path="/" element={<Home />} />

//         {/* Rituals */}
//         <Route path="/rituals" element={<Rituals />} />
//         <Route path="/rituals/:id" element={<RitualDetails />} />

//         {/* Pandits */}
//         <Route path="/pandits" element={<Pandits />} />
//         <Route path="/pandits/:id" element={<PanditDetail />} />

//         {/* AI */}
//         <Route path="/ai-guru" element={<AIGuru />} />

//        {/* Privacy */}
//         <Route path="/privacy" element={<Privacy />} />

//         {/* Terms */}
//         <Route path="/terms" element={<Terms />} />

//         {/* Support */}
//         <Route path="/support" element={<Support />} />



//         <Route path="/booking/:id" element={<Booking />} />

//         <Route path="/booking-success" element={<BookingSuccess />} />

       

//       </Routes>

//       <Footer />
//     </>
//   );
// };

// export default App;




import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import Rituals from "./pages/Rituals";
import Pandits from "./pages/Pandits";
import AIGuru from "./pages/ai-guru/AIGuru";
import RitualDetails from "./pages/RitualDetails";
import PanditDetail from "./components/pandits/PanditsDetails";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Support from "./pages/Support";

import BookingPage from "./pages/booking/Booking";

const App = () => {
  const location = useLocation();

  const hideFooterRoutes = [
    "/ai-guru",
  ];

  const hideFooter = hideFooterRoutes.includes(
    location.pathname
  );

  return (
    <>
      <Navbar />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Rituals */}
        <Route path="/rituals" element={<Rituals />} />
        <Route path="/rituals/:id" element={<RitualDetails />} />

        {/* Pandits */}
        <Route path="/pandits" element={<Pandits />} />
        <Route path="/pandits/:id" element={<PanditDetail />} />

        {/* AI Guru */}
        <Route path="/ai-guru" element={<AIGuru />} />

        {/* Privacy */}
        <Route path="/privacy" element={<Privacy />} />

        {/* Terms */}
        <Route path="/terms" element={<Terms />} />

        {/* Support */}
        <Route path="/support" element={<Support />} />

        {/* Booking */}
       <Route path="/booking" element={<BookingPage />} />
      </Routes>

      {!hideFooter && <Footer />}
    </>
  );
};

export default App;