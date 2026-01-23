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
      <div className="relative z-10 max-w-[1400px] mx-auto h-full grid grid-cols-3 px-14">

        {/* LEFT */}
        <div className="flex flex-col justify-center pb-5 pl-2 text-white">
          <h1 className="text-6xl md:text-7xl xl:text-8xl font-bold leading-tight text-white">
            Aakash <br />
            Wijesekara<span className="text-yellow-400 ml-1">.</span>
          </h1>

          <br />

          <div className="h-[2px] w-12 bg-yellow-400 mb-6"></div>

          <br />

          <a
            href={resume}
            download
            className="inline-block border-2 border-yellow-400 text-yellow-400 px-12 py-5 text-lg hover:bg-yellow-400 hover:text-black transition w-fit"
          >
            MY RESUME
          </a>

          <br />

          <a
            href="#contact"
            className="border-2 border-yellow-400 text-yellow-400 px-12 py-5 text-lg hover:bg-yellow-400 hover:text-black transition w-fit"
          >
            CONTACT ME
          </a>
        </div>

        <div></div>

        {/* RIGHT */}
        <div className="flex flex-col justify-center pb-30 pl-20 text-white">
          <p className="text-yellow-400 tracking-widest text-sm mb-3">
            INTRODUCTION
          </p>

          <h2 className="text-5xl font-bold mb-6 text-white">
            UNDERGRADUATE <br /> COMPUTER SCIENCE <br /> STUDENT
          </h2>
        </div>
      </div>

      {/* HERO IMAGE */}
      <img
        src={heroImg}
        alt="Hero"
        className="absolute bottom-0 right-[32%] h-[92vh] object-contain pointer-events-none drop-shadow-2xl z-10"
      />
    </section>
  );
}

export { Hero };
export default Hero;
