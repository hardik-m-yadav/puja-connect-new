import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#050816] text-white overflow-x-hidden">
      <Navbar />

      {/* Navbar Height Compensation */}
      <main className="pt-20">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;

