import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import procurax from "../assets/procurax.png";
import walletx from "../assets/walletx.png";
import portfolioImg from "../assets/aakashPort.png";
import trafficImg from "../assets/traffic.png";


const projects = [
  {
  title: "ProcuraX – Mobile App + Web Admin Dashboard (ICC)",
  desc: "A smart procurement and construction management system featuring a mobile app for project teams and a web-based admin dashboard for approvals, role management, project tracking, and procurement updates. Supports role-based access control and Google Sheets procurement link integration for real-time project visibility.",
  tech: ["Flutter", "Dart", "Next.js", "Tailwind CSS", "MongoDB", "FireBase", "Git", "TensorFlow","Python","Twilio"],
  github: "https://github.com/Aakashwije/ICC_ProcuraX.git",
  image: procurax,
}
,
  {
    title: "Wallet X – Smart Money Management App",
  desc: "A smart personal finance mobile app to track income, expenses, budgets, and transactions with a clean dashboard UI. Built with secure authentication using Clerk and a Node.js backend connected to a MySQL database for reliable data storage and management.",
  tech: ["React Native", "Node.js", "MySQL", "Clerk Auth"],
  github: "https://github.com/Aakashwije/walletX.git",
  image: walletx,
  },

  {
    title: "Personal Portfolio Website",
    desc: "Responsive portfolio website showcasing academic projects, skills and personal profile with clean UI and smooth navigation.",
    tech: ["React", "CSS", "Tailwind CSS"],
    github: "https://github.com/Aakashwije/AAKASH_WIJESEKARA_PORTFOLIO.git",
    image: portfolioImg,
  },
  {
   title: "Intimate Hygiene Enterprise Web Platform",
  desc: "Designed and developed a dynamic web platform for intimate hygiene enterprises using React. Implemented interactive UI components for enhanced user engagement and smooth navigation. Applied responsive design principles to ensure accessibility across multiple devices, integrating modern web technologies including HTML, CSS, and JavaScript for a performant and visually appealing experience.",
  tech: ["React", "HTML", "CSS", "JavaScript"],
  github: "https://github.com/your-github-link-here",
  image: procurax,
  },

];

function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section
      id="projects"
      className="bg-[#2f3338] text-white py-24 px-6 md:px-20 glow-hover"
    >
      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-yellow-400 tracking-widest mb-3">PROJECTS</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Practical Projects
          </h2>
        </motion.div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setActiveProject(project)}
              className="cursor-pointer group relative bg-[#1f2226] rounded-xl overflow-hidden shadow-lg                    
               border border-transparent
              hover:border-yellow-400"
            >

              {/* IMAGE */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <p className="text-yellow-400 font-semibold">
                  View Details
                </p>
              </div>

              {/* CONTENT */}
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm line-clamp-2">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-yellow-400/10 text-yellow-400 px-2 py-1 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-[#1f2226] rounded-xl max-w-lg w-full p-6 relative"
            >

              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <FaTimes />
              </button>

              <img
                src={activeProject.image}
                alt=""
                className="w-full h-52 object-cover rounded-lg mb-4"
              />

              <h3 className="text-2xl font-bold mb-2">
                {activeProject.title}
              </h3>

              <p className="text-gray-300 mb-4">
                {activeProject.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {activeProject.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs bg-yellow-400/10 text-yellow-400 px-2 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={activeProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 border border-yellow-400 text-yellow-400 px-4 py-2 rounded hover:bg-yellow-400 hover:text-black transition"
                >
                  <FaGithub /> GitHub
                </a>


              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export { Projects };
export default Projects;
