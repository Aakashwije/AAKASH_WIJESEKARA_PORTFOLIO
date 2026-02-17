import heroImg from "../assets/hero.png";
import resume from "../assets/Aakash_cv.pdf";
import TechBackground from "./TechBackground";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#242629] overflow-hidden flex flex-col md:block" // Changed h-screen to min-h-screen
    >
      {/* TECH COMPONENT BACKGROUND */}
      <TechBackground />

      {/* CONTENT */}
      <div className="relative z-10 max-w-[1400px] mx-auto h-full px-6 md:px-14 grid md:grid-cols-3 grid-cols-1 gap-6 pt-20 md:pt-0"> {/* Added top padding for mobile */}

        {/* LEFT */}
        <div className="flex flex-col justify-center pb-5 pl-0 md:pl-2 text-white order-2 md:order-1"> {/* order changed for mobile if needed, but keeping default for now effectively */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl xl:text-8xl font-bold leading-tight text-white mt-10 md:mt-0">
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

        <div className="hidden md:block md:order-2"></div>

        {/* RIGHT */}
        <div className="flex flex-col justify-center pt-5 md:pt-0 pb-10 md:pb-30 pl-0 md:pl-20 text-white order-3">
          <p className="text-yellow-400 tracking-widest text-sm mb-3">INTRODUCTION</p>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 text-white">
            UNDERGRADUATE <br /> COMPUTER SCIENCE <br /> STUDENT
          </h2>
        </div>
      </div>

      {/* HERO IMAGE */}
      <div className="relative md:absolute md:bottom-0 md:right-[32%] w-full md:w-auto flex justify-center md:block z-0 order-1 md:order-none mt-10 md:mt-0">
        <img
          src={heroImg}
          alt="Hero"
          className="w-64 sm:w-80 md:w-auto h-auto md:h-[92vh] object-contain pointer-events-none drop-shadow-2xl"
        />
      </div>
    </section>
  );
}

export { Hero };
export default Hero;
