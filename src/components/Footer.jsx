import { motion } from "framer-motion";

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
    <motion.footer
      variants={container}
      initial="visible"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative bg-[#1f232a] text-gray-300 pt-14 pb-6 mt-20"
    >
      {/* TOP GLOW DIVIDER */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 items-center">

        {/* LEFT */}
        <div className="text-center md:text-left">
          <h3 className="text-white text-xl font-semibold">
            Aakash Wijesekara<span className="text-yellow-400">.</span>
          </h3>
          <p className="text-sm mt-2 text-gray-400">
            Computer Science Undergraduate <br />
          </p>
        </div>

        {/* MIDDLE LINKS */}
        <div className="flex justify-center gap-6 text-sm flex-wrap">
          <a href="#home" className="hover:text-yellow-400 transition">Home</a>
          <a href="#about" className="hover:text-yellow-400 transition">About</a>
          <a href="#services" className="hover:text-yellow-400 transition">Learning</a>
          <a href="#education" className="hover:text-yellow-400 transition">Academics</a>
          <a href="#projects" className="hover:text-yellow-400 transition">Projects</a>
          <a href="#certificates" className="hover:text-yellow-400 transition">Achievements</a>
          <a href="#contact" className="hover:text-yellow-400 transition">Contact</a>
        </div>

        {/* RIGHT SOCIAL */}
        <div className="flex justify-center md:justify-end gap-5">

          <motion.a
            custom={0}
            variants={iconStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            href="https://github.com/Aakashwije"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={github}
              alt="GitHub"
              className="w-10 hover:scale-110 hover:-translate-y-1 transition"
            />
          </motion.a>

          <motion.a
            custom={1}
            variants={iconStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            href="https://www.linkedin.com/in/aakash-wijesekara-611588318/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={linkedin}
              alt="LinkedIn"
              className="w-12 hover:scale-110 hover:-translate-y-1 transition"
            />
          </motion.a>

          <motion.a
            custom={2}
            variants={iconStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            href="https://wa.me/94701566435"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={whatsapp}
              alt="WhatsApp"
              className="w-12 hover:scale-110 hover:-translate-y-1 transition"
            />
          </motion.a>

          <motion.a
            custom={3}
            variants={iconStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            href="https://mail.google.com/mail/?view=cm&fs=1&to=aakashwije92@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={email}
              alt="Email"
              className="w-12 hover:scale-110 hover:-translate-y-1 transition"
            />
          </motion.a>

        </div>

      </div>

      {/* BOTTOM LINE */}
      <div className="text-center text-xs text-gray-500 mt-8">
        © {new Date().getFullYear()} Aakash Wijesekara. All rights reserved.
      </div>
    </motion.footer>
  );
};

export { Footer };
export default Footer;
