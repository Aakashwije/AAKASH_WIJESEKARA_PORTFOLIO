import { useEffect, useState } from "react";
import MobileBlock from "./components/MobileBlock.jsx";
import { AnimatePresence, motion } from "framer-motion";
import ScrollTop from "./components/ScrollTop.jsx";
import Loader from "./components/Loader.jsx";
import Cursor from "./components/Cursor.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Education from "./components/Education.jsx";
import Achievements from "./components/Achievements.jsx";
import Activities from "./components/Activities.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Testimonials from "./components/Testimonials.jsx";
function App() {
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Loader timer
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  // Detect mobile screen
  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <>
      {/* MOBILE BLOCK PAGE */}
      {isMobile ? (
        <MobileBlock />
      ) : (
        <>
          {/* DESKTOP ONLY UI */}
          <Cursor />
          <Navbar />
          <ScrollTop />

          <AnimatePresence>
            {loading && <Loader />}
          </AnimatePresence>

          {!loading && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Hero />
              <About />
              <Services />
              <Portfolio />
              <Education />
              <Achievements />
              <Activities />
              <Testimonials />
              <Contact />
              <Footer />
            </motion.div>
          )}
        </>
      )}
    </>
  );
}

export default App;
