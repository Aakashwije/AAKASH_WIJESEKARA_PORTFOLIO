import heroImg from "../assets/hero.png";
import resume from "../assets/Aakash_cv.pdf";
import TechBackground from "./TechBackground";

function Hero() {
  return (
    <section
      id="home"
      className="relative isolate min-h-[100svh] overflow-hidden bg-[#242629]"
    >
      <TechBackground />

      <div className="hero-layout">
        <div className="hero-primary flex flex-col items-center text-white lg:items-start">
          <h1 className="text-[clamp(2.75rem,13vw,4.75rem)] font-bold leading-[0.98] tracking-[-0.04em] text-white lg:text-6xl xl:text-7xl 2xl:text-8xl">
            <span className="block">Aakash</span>
            <span className="block">
              Wijesekara<span className="ml-1 text-yellow-400">.</span>
            </span>
          </h1>

          <div className="my-5 h-0.5 w-12 bg-yellow-400 sm:my-6" />
        </div>

        <div className="hero-actions flex max-w-sm flex-col gap-3 min-[360px]:max-w-none min-[360px]:flex-row lg:w-auto lg:flex-col xl:flex-row">
          <a
            href={resume}
            download
            className="inline-flex min-h-12 w-full items-center justify-center border-2 border-yellow-400 px-4 py-3 text-sm font-semibold tracking-wide text-yellow-400 transition hover:bg-yellow-400 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#242629] min-[360px]:w-auto sm:px-7 sm:text-base"
          >
            MY RESUME
          </a>

          <a
            href="#contact"
            className="inline-flex min-h-12 w-full items-center justify-center border-2 border-yellow-400 px-4 py-3 text-sm font-semibold tracking-wide text-yellow-400 transition hover:bg-yellow-400 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#242629] min-[360px]:w-auto sm:px-7 sm:text-base"
          >
            CONTACT ME
          </a>
        </div>

        <div className="hero-portrait">
          <img
            src={heroImg}
            alt="Portrait of Aakash Wijesekara"
            width="1024"
            height="1536"
            fetchPriority="high"
            decoding="async"
            className="pointer-events-none drop-shadow-2xl"
          />
        </div>

        <div className="hero-intro text-white">
          <p className="mb-3 text-xs font-medium tracking-[0.22em] text-yellow-400 sm:text-sm">
            INTRODUCTION
          </p>

          <h2 className="mb-4 text-[clamp(1.65rem,7vw,2.5rem)] font-bold leading-tight text-white lg:text-3xl xl:text-4xl 2xl:text-5xl">
            UNDERGRADUATE
            <span className="block">COMPUTER SCIENCE</span>
            <span className="block">STUDENT</span>
          </h2>

          <p className="text-base text-gray-300 sm:text-lg">
            Software Engineer Intern{" "}
            <span className="whitespace-nowrap text-yellow-400">@ WSO2</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export { Hero };
export default Hero;
