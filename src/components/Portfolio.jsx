import { useEffect, useState } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { FaGithub, FaTimes } from "react-icons/fa";
import procurax from "../assets/procurax.png";
import walletx from "../assets/walletx.png";
import portfolioImg from "../assets/aakashPort.png";
import intimate from "../assets/intimate.png";
import enerbide from "../assets/enerbrige.png";
import SRS from "../assets/SRS.png";


const projects = [
  {
    title: "ProcuraX – Mobile App + Web Admin Dashboard (ICC)",
    desc: "A smart procurement and construction management system featuring a mobile app for project teams and a web-based admin dashboard for approvals, role management, project tracking, and procurement updates. Supports role-based access control and Google Sheets procurement link integration for real-time project visibility.",
    tech: ["Flutter", "Dart", "Next.js", "Tailwind CSS", "MongoDB", "FireBase", "Git", "TensorFlow", "Python", "Twilio"],
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
    image: intimate,
  },
  {
    title: "Climate Action Web Platform",
    desc: "Designed and developed a dynamic web platform for climate action using HTML, CSS, and JavaScript. Implemented interactive UI components for data visualization and user engagement, with responsive design to ensure accessibility across different devices.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Aakashwije/ENERBRIDGE.git",
    image: enerbide,
  },
  {
    title: "Student Management System",
    desc: "Developed a Student Management System application to manage student records efficiently, including adding, updating, searching, and deleting student details. Implemented a user-friendly interface with validation and structured data handling to ensure accuracy and smooth system performance.",
    tech: ["C#", ".NET", "Windows Forms", "SQL Server"],
    github: "https://github.com/Aakashwije/STUDENT_ENROLEMT_SYSTEM_C-.git",
    image: SRS,
  },






];

function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    if (!activeProject) return undefined;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setActiveProject(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [activeProject]);

  return (
    <section
      id="projects"
      className="glow-hover bg-[#2f3338] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* TITLE */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 text-center sm:mb-14 lg:mb-16"
        >
          <p className="text-yellow-400 tracking-widest mb-3">PROJECTS</p>
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            Practical Projects
          </h2>
        </Motion.div>

        {/* GRID */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">

          {projects.map((project, i) => (
            <Motion.article
              key={i}
              role="button"
              tabIndex={0}
              aria-label={`View details for ${project.title}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setActiveProject(project)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setActiveProject(project);
                }
              }}
              className="group relative cursor-pointer overflow-hidden rounded-xl border border-transparent bg-[#1f2226] text-left shadow-lg transition hover:border-yellow-400 focus-visible:border-yellow-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#2f3338]"
            >

              {/* IMAGE */}
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                decoding="async"
                className="h-44 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-48"
              />

              {/* OVERLAY */}
              <div className="pointer-events-none absolute inset-x-0 top-0 flex h-44 items-center justify-center bg-black/60 opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100 sm:h-48">
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
            </Motion.article>
          ))}

        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {activeProject && (
          <Motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/75 p-3 backdrop-blur-sm sm:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
          >
            <Motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.3 }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-dialog-title"
              onClick={(event) => event.stopPropagation()}
              className="relative max-h-[calc(100dvh-1.5rem)] w-full max-w-lg overflow-y-auto overscroll-contain rounded-xl bg-[#1f2226] p-4 shadow-2xl sm:max-h-[calc(100dvh-2rem)] sm:p-6"
            >

              <button
                type="button"
                onClick={() => setActiveProject(null)}
                aria-label="Close project details"
                className="absolute right-3 top-3 z-10 flex size-11 items-center justify-center rounded-full bg-[#1f2226]/95 text-gray-300 shadow-md transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
              >
                <FaTimes size={20} />
              </button>

              <img
                src={activeProject.image}
                alt={activeProject.title}
                className="mb-4 h-40 w-full rounded-lg object-cover sm:h-52"
              />

              <h3 id="project-dialog-title" className="mb-2 pr-9 text-xl font-bold sm:text-2xl">
                {activeProject.title}
              </h3>

              <p className="mb-4 text-sm leading-relaxed text-gray-300 sm:text-base">
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

              <div className="flex flex-wrap gap-4">
                <a
                  href={activeProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex min-h-11 items-center justify-center gap-2 rounded border border-yellow-400 px-4 py-2 text-yellow-400 transition hover:bg-yellow-400 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300"
                >
                  <FaGithub /> GitHub
                </a>


              </div>

            </Motion.div>
          </Motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export { Projects };
export default Projects;
