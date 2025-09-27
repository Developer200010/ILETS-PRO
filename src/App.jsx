import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Register";

function AppContent() {
  const location = useLocation();
  const hideNavbarPaths = ["/login", "/sign-up"];

  return (
    <div className="overflow-x-hidden">
      {/* Only show navbar if not in login/signup */}
      {!hideNavbarPaths.includes(location.pathname) && <Navbar />}
      
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Features />
              <Testimonials />
              <Footer />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
