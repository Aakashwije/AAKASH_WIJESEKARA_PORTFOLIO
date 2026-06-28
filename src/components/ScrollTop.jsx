import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function ScrollTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`
        fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-50 sm:bottom-6 sm:right-6
        flex items-center justify-center
        size-11 rounded-full sm:size-12
        bg-yellow-400 text-black
        transition-all duration-300
        hover:scale-110 hover:shadow-[0_0_25px_rgba(255,204,0,0.8)]
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#242629]
        ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"}
      `}
      aria-label="Scroll to top"
    >
      <FaArrowUp className="text-lg" />
    </button>
  );
}

export { ScrollTop };
export default ScrollTop;
