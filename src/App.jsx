import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ScrollTop from "./components/ScrollTop.jsx";
import Loader from "./components/Loader.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Experience from "./components/Experience.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Education from "./components/Education.jsx";
import Achievements from "./components/Achievements.jsx";
import Activities from "./components/Activities.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Testimonials from "./components/Testimonials.jsx";
function App() {
  const [loading, setLoading] = useState(true);

  // Hide the loader once the page has actually finished loading,
  // with a small minimum so the intro animation is visible and a
  // safety cap so we never hang if `load` never fires.
  useEffect(() => {
    const minDelay = 600;
    const start = Date.now();

    const finish = () => {
      const elapsed = Date.now() - start;
      const remaining = Math.max(0, minDelay - elapsed);
      setTimeout(() => setLoading(false), remaining);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish);
    }

    const safety = setTimeout(() => setLoading(false), 4000);

    return () => {
      window.removeEventListener("load", finish);
      clearTimeout(safety);
    };
  }, []);

  return (
    <>
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
          <Experience />
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
  );
}

export default App;
