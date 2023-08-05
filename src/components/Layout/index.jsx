// importing components
import Navbar from "../Navbar";
import Footer from "../Footer";

// layout component
export default function Layout({ children }) {
  return (
    <div className="layout font-sans">
      <div className="layout__navbar flex items-center justify-center py-5 mb-10">
        <Navbar />
      </div>
      {children}
      <div className="layout__footer">
        <Footer />
      </div>
    </div>
  );
}