import { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Learning", link: "#services" },
  { name: "Experience", link: "#experience" },
  { name: "Projects", link: "#projects" },
  { name: "Academics", link: "#education" },
  { name: "Achievements", link: "#certificates" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const [showNav, setShowNav] = useState(true);
  const lastScroll = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      // background blur
      setScrolled(current > 50);

      // hide on scroll down, reveal on scroll up (ignore tiny moves near top)
      if (current > lastScroll.current && current > 200) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      lastScroll.current = current;

      // active section detect
      document.querySelectorAll("section").forEach((sec) => {
        const top = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        if (current >= top && current < top + height) {
          setActive(`#${sec.id}`);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  return (
    <nav
      aria-label="Primary navigation"
      className={`fixed left-0 top-0 z-50 w-full border-b border-white/5 bg-[#1f232a]/90 backdrop-blur-md transition-all duration-300 lg:border-transparent lg:bg-transparent
      ${menuOpen || showNav ? "translate-y-0" : "-translate-y-full"}
      ${scrolled ? "lg:border-white/5 lg:bg-[#1f232a]/80 lg:shadow-lg" : ""}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">

        <a
          href="#home"
          className="rounded-sm text-xl font-bold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
          aria-label="Aakash Wijesekara — home"
        >
          AW<span className="text-yellow-400">.</span>
        </a>

        <ul className="hidden items-center gap-4 text-[13px] lg:flex xl:gap-7 xl:text-sm">
          {navLinks.map((item, i) => (
            <li key={i} className="relative">
              <a
                href={item.link}
                aria-current={active === item.link ? "page" : undefined}
                className={`transition ${
                  active === item.link
                    ? "text-yellow-400"
                    : "text-gray-300 hover:text-yellow-400"
                }`}
              >
                {item.name}
              </a>

              <span
                aria-hidden="true"
                className={`absolute left-0 -bottom-1 h-[2px] bg-yellow-400 transition-all duration-300
                ${active === item.link ? "w-full" : "w-0"}`}
              />
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="flex size-11 items-center justify-center rounded-md text-xl text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full max-h-[calc(100dvh-4.25rem)] overflow-y-auto overscroll-contain border-t border-white/10 bg-[#1f232a]/98 px-4 shadow-2xl backdrop-blur-lg lg:hidden"
        >
          <ul className="flex flex-col items-center gap-1 py-3">
            {navLinks.map((item, i) => (
              <li key={i} className="w-full">
                <a
                  href={item.link}
                  onClick={() => setMenuOpen(false)}
                  aria-current={active === item.link ? "page" : undefined}
                  className={`block min-h-11 w-full rounded-md py-2.5 text-center text-base transition hover:bg-white/5 ${
                    active === item.link
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export { Navbar };
export default Navbar;
