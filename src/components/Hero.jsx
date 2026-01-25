import heroImg from "../assets/hero.png";
import resume from "../assets/Aakash_cv.pdf";
import TechBackground from "./TechBackground";

function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen bg-[#242629] overflow-hidden"
    >
      {/* TECH COMPONENT BACKGROUND */}
      <TechBackground />

      {/* CONTENT */}
      <div className="relative z-10 max-w-[1400px] mx-auto h-full px-6 md:px-14 grid md:grid-cols-3 grid-cols-1 gap-6">

        {/* LEFT */}
        <div className="flex flex-col justify-center pb-5 pl-0 md:pl-2 text-white">
          <h1 className="text-4xl sm:text-5xl md:text-7xl xl:text-8xl font-bold leading-tight text-white">
            Aakash <br />
            Wijesekara<span className="text-yellow-400 ml-1">.</span>
          </h1>

          <div className="h-[2px] w-12 bg-yellow-400 my-6"></div>

          <a
            href={resume}
            download
            className="inline-block border-2 border-yellow-400 text-yellow-400 px-6 py-3 sm:px-10 sm:py-4 text-base sm:text-lg hover:bg-yellow-400 hover:text-black transition w-fit mb-4"
          >
            MY RESUME
          </a>

          <a
            href="#contact"
            className="inline-block border-2 border-yellow-400 text-yellow-400 px-6 py-3 sm:px-10 sm:py-4 text-base sm:text-lg hover:bg-yellow-400 hover:text-black transition w-fit"
          >
            CONTACT ME
          </a>
        </div>

        <div className="hidden md:block"></div>

        {/* RIGHT */}
        <div className="flex flex-col justify-center pt-10 md:pt-0 pb-10 md:pb-30 pl-0 md:pl-20 text-white">
          <p className="text-yellow-400 tracking-widest text-sm mb-3">INTRODUCTION</p>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 text-white">
            UNDERGRADUATE <br /> COMPUTER SCIENCE <br /> STUDENT
          </h2>
        </div>
      </div>

      {/* HERO IMAGE - uses a small public fallback at /assets/hero-mobile.png when available */}
      <picture>
        {/* Prefer a PNG mobile image if you add one at public/assets/hero-mobile.png */}
        <source media="(max-width: 640px)" srcSet="/assets/hero-mobile.png" type="image/png" />
        {/* Fallback SVG (already present) */}
        <source media="(max-width: 640px)" srcSet="/assets/hero-mobile.svg" type="image/svg+xml" />
        <img
          src={heroImg}
          alt="Hero"
          className="absolute bottom-0 right-0 md:right-[32%] h-36 sm:h-48 md:h-[92vh] object-contain pointer-events-none drop-shadow-2xl z-10"
        />
      </picture>
    </section>
  );
}

export { Hero };
export default Hero;
