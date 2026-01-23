import { useEffect, useState } from "react";

const navLinks = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Learning", link: "#services" },
  { name: "Projects", link: "#projects" },
  { name: "Academics", link: "#education" },
  { name: "Achievements", link: "#certificates" },
  { name: "Contact", link: "#contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const [showNav, setShowNav] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      // background blur
      setScrolled(current > 50);

      // active section detect
      document.querySelectorAll("section").forEach((sec) => {
        const top = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        if (current >= top && current < top + height) {
          setActive(`#${sec.id}`);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300
      ${showNav ? "translate-y-0" : "-translate-y-full"}
      ${scrolled ? "bg-[#1f232a]/80 backdrop-blur-md shadow-lg" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <a href="#home" className="text-white font-bold text-xl">
          AW<span className="text-yellow-400">.</span>
        </a>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-10 text-sm">
          {navLinks.map((item, i) => (
            <li key={i} className="relative">
              <a
                href={item.link}
                className={`transition ${
                  active === item.link
                    ? "text-yellow-400"
                    : "text-gray-300 hover:text-yellow-400"
                }`}
              >
                {item.name}
              </a>

              {/* underline */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-yellow-400 transition-all duration-300
                ${active === item.link ? "w-full" : "w-0"}`}
              ></span>
            </li>
          ))}
        </ul>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-[#1f232a]/95 backdrop-blur-lg">
          <ul className="flex flex-col items-center py-6 gap-6">
            {navLinks.map((item, i) => (
              <li key={i}>
                <a
                  href={item.link}
                  onClick={() => setMenuOpen(false)}
                  className={`transition ${
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
