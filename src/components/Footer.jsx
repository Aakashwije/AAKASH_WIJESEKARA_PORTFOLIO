import { motion as Motion } from "framer-motion";

import github from "../assets/github.webp";
import linkedin from "../assets/linkedln.png";
import whatsapp from "../assets/whatsapp.png";
import email from "../assets/email.png";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};


const iconStagger = {
  hidden: { opacity: 0, y: 15 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.3 + i * 0.12, duration: 0.4 },
  }),
};

const Footer = () => {
  return (
    <Motion.footer
      variants={container}
      initial="visible"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative mt-0 bg-[#1f232a] pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-12 text-gray-300 sm:mt-12 lg:mt-20 lg:pt-14"
    >
      {/* TOP GLOW DIVIDER */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" />

      <div className="mx-auto grid max-w-7xl items-center gap-9 px-4 sm:px-6 md:grid-cols-3 lg:px-8">

        {/* LEFT */}
        <div className="text-center md:text-left">
          <h3 className="text-white text-xl font-semibold">
            Aakash Wijesekara<span className="text-yellow-400">.</span>
          </h3>
          <p className="text-sm mt-2 text-gray-400">
            Computer Science Undergraduate <br />
            <span className="text-yellow-400">Software Engineer Intern @ WSO2</span>
          </p>
        </div>

        {/* MIDDLE LINKS */}
        <nav aria-label="Footer navigation" className="flex flex-wrap justify-center gap-x-5 gap-y-3 text-sm">
          <a href="#home" className="hover:text-yellow-400 transition">Home</a>
          <a href="#about" className="hover:text-yellow-400 transition">About</a>
          <a href="#services" className="hover:text-yellow-400 transition">Learning</a>
          <a href="#experience" className="hover:text-yellow-400 transition">Experience</a>
          <a href="#education" className="hover:text-yellow-400 transition">Academics</a>
          <a href="#projects" className="hover:text-yellow-400 transition">Projects</a>
          <a href="#certificates" className="hover:text-yellow-400 transition">Achievements</a>
          <a href="#testimonials" className="hover:text-yellow-400 transition">Testimonials</a>
          <a href="#contact" className="hover:text-yellow-400 transition">Contact</a>
        </nav>

        {/* RIGHT SOCIAL */}
        <div className="flex justify-center gap-3 sm:gap-4 md:justify-end">

          <Motion.a
            custom={0}
            variants={iconStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            href="https://github.com/Aakashwije"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="flex size-12 items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
          >
            <img
              src={github}
              alt="GitHub"
              loading="lazy"
              decoding="async"
              className="w-9 transition hover:-translate-y-1 hover:scale-110"
            />
          </Motion.a>

          <Motion.a
            custom={1}
            variants={iconStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            href="https://www.linkedin.com/in/aakash-wijesekara-611588318/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="flex size-12 items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
          >
            <img
              src={linkedin}
              alt="LinkedIn"
              loading="lazy"
              decoding="async"
              className="w-11 transition hover:-translate-y-1 hover:scale-110"
            />
          </Motion.a>

          <Motion.a
            custom={2}
            variants={iconStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            href="https://wa.me/94701566435"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="flex size-12 items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
          >
            <img
              src={whatsapp}
              alt="WhatsApp"
              loading="lazy"
              decoding="async"
              className="w-11 transition hover:-translate-y-1 hover:scale-110"
            />
          </Motion.a>

          <Motion.a
            custom={3}
            variants={iconStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            href="https://mail.google.com/mail/?view=cm&fs=1&to=aakashwije92@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Send email"
            className="flex size-12 items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
          >
            <img
              src={email}
              alt="Email"
              loading="lazy"
              decoding="async"
              className="w-11 transition hover:-translate-y-1 hover:scale-110"
            />
          </Motion.a>

        </div>

      </div>

      {/* BOTTOM LINE */}
      <div className="text-center text-xs text-gray-500 mt-8">
        © {new Date().getFullYear()} Aakash Wijesekara. All rights reserved.
      </div>
    </Motion.footer>
  );
};

export { Footer };
export default Footer;
