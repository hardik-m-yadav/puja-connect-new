import { Routes, Route, useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";
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
import AdminDashboard from "./admin/AdminDashboard";
import AdminRoute from "./admin/AdminRoute";
import AdminBookings from "./admin/pages/AdminBookings";
import Bookings from "./admin/pages/Bookings";
import { Toaster } from "react-hot-toast";
import BookingDetails from "./admin/pages/BookingDetails";
import AdminCalendar from "./admin/pages/AdminCalendar";
import Payments from "./admin/pages/Payments";
import Customers from "./admin/pages/Customers";
import Settings from "./admin/pages/Settings";
import PanditLogin from "./admin/pages/PanditLogin";
import LoginGateway from "./pages/LoginGateway";
import AdminLogin from "./admin/pages/AdminLogin";
import PanditDashboard from "./admin/pages/PanditDashboard";
import AddPandit from "./admin/pages/AddPandit";
import AdminPandits from "./admin/pages/AdminPandits";
import PanditBookings from "./pandit/pages/PanditBookings";
import PanditEarnings from "./pandit/pages/PanditEarnings";
import PanditProfile from "./pandit/pages/PanditProfile";
import PanditAvailability from "./pandit/pages/PanditAvailability";
import UserLogin from "./admin/pages/UserLogin";
import UserDashboard from "./user/pages/UserDashboard";
import ProtectedRoute from "./routes/ProtectedRoute";
import UserBookings from "./user/pages/UserBookings";  
import UserProfile from "./user/pages/UserProfile";
import UserSettings from "./user/pages/UserSettings";
import UserNotifications from "./user/pages/UserNotifications";
import UserRegister from "./user/pages/UserRegister";
import UserBookingDetails from "./user/pages/UserBookingDetails";


const App = () => {
  const location = useLocation();

  // const isAdminRoute = location.pathname.startsWith("/admin");



  

  

  // const hideFooterRoutes = ["/ai-guru"];

  // const hideFooter =
  //   hideFooterRoutes.includes(location.pathname) || isAdminRoute;

  // return (
  //   <>
  //     {!isAdminRoute && <Navbar />}

  const isAdminRoute = location.pathname.startsWith("/admin");
const isPanditRoute = location.pathname.startsWith("/pandit/");
const isUserRoute = location.pathname.startsWith("/user");

const hideFooterRoutes = ["/ai-guru"];

const hideFooter =
  hideFooterRoutes.includes(location.pathname) ||
  isAdminRoute ||
  isPanditRoute ||
  isUserRoute;

return (
  <>
    {/* ❌ Hide Navbar for Admin + Pandit */}
    {!isAdminRoute && !isPanditRoute && !isUserRoute && <Navbar />}

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

        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/bookings"
          element={
            <AdminRoute>
              <AdminBookings />
            </AdminRoute>
          }
        />

        <Route
  path="/admin/bookings/:id"
  element={
    <AdminRoute>
      <BookingDetails />
    </AdminRoute>
  }
/>

<Route
  path="/admin/calendar"
  element={
    <AdminRoute>
      <AdminCalendar />
    </AdminRoute>
  }
/>



<Route
  path="/admin/pandits"
  element={
    <AdminRoute>
      <AdminPandits/>
    </AdminRoute>
  }
/>




<Route
  path="/admin/pandits/add"
  element={
    <AdminRoute>
      <AddPandit />
    </AdminRoute>
  }
/>



   <Route path="/admin/payments" element={<Payments />} />



   <Route
  path="/admin/customers"
  element={<Customers />}
/>


 <Route
  path="/admin/settings"
  element={<Settings />}
/>




<Route path="/user/login" element={<UserLogin />} />


<Route path="/register" element={<UserRegister />} />



<Route path="/user/bookings" element={<UserBookings />} />



<Route
  path="/user/bookings/:id"
  element={<UserBookingDetails />}
/>


<Route path="/user/profile" element={<UserProfile />} />
<Route path="/user/settings" element={<UserSettings />} />
<Route path="/user/notifications" element={<UserNotifications />} />



<Route
  path="/user/dashboard"
  element={
    <ProtectedRoute>
      <UserDashboard />
    </ProtectedRoute>
  }
/>

<Route path="/pandit/login" element={<PanditLogin />} />


<Route path="/login" element={<LoginGateway />} />

{/* <Route path="/" element={<Navigate to="/login" />} /> */}

<Route path="/" element={<Navigate to="/login" />} />

<Route path="/admin/login" element={<AdminLogin />} />

<Route path="/pandit/dashboard" element={<PanditDashboard />} />





<Route path="/pandit/bookings" element={<PanditBookings />} />

<Route
  path="/pandit/earnings"
  element={<PanditEarnings />}
/>

<Route
  path="/pandit/profile"
  element={<PanditProfile />}
/>









<Route
  path="/pandit/calendar"
  element={<PanditAvailability />}
/>


      </Routes>


      <Toaster
  position="top-right"
  toastOptions={{
    duration: 3000,
    style: {
      background: "#0B1120",
      color: "#fff",
      border: "1px solid rgba(255,255,255,0.1)",
    },
  }}
/>

      {!hideFooter && <Footer />}
    </>
  );
};

export default App;
