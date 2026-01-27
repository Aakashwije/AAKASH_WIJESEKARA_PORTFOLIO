import { motion } from "framer-motion";
import {
  FaCode,
  FaProjectDiagram,
  FaUsers,
  FaShieldAlt,
  FaMobileAlt,
  FaLock,
  FaTasks,
  FaRobot,
  FaCloud,
} from "react-icons/fa";

const services = [
  {
    title: "Software Development Fundamentals",
    desc: "Strong understanding of programming concepts, data structures, and problem-solving using Python and Java through academic projects.",
    icon: <FaCode />,
  },
  {
    title: "Web Application Development",
    desc: "Experience building responsive web applications using HTML, CSS, JavaScript, and React as part of coursework and personal projects.",
    icon: <FaProjectDiagram />,
  },
  {
    title: "Team Project Collaboration",
    desc: "Worked in team-based development environments, contributing to design, coding, testing, and documentation phases of projects.",
    icon: <FaUsers />,
  },
  {
    title: "Basic System Security Concepts",
    desc: "Exposure to authentication methods and security principles through academic learning and project implementations.",
    icon: <FaShieldAlt />,
  },

  // New entries
  {
    title: "Mobile Application Development",
    desc: "Designing and building cross-platform mobile apps using Flutter and React Native, focusing on smooth UX, performance, and native integrations.",
    icon: <FaMobileAlt />,
  },
  {
    title: "Cybersecurity Expertise",
    desc: "Practical knowledge in secure coding, threat modelling, vulnerability assessment, and implementing authentication & encryption for resilient systems.",
    icon: <FaLock />,
  },
  {
    title: "Project Management",
    desc: "Coordinating teams, managing timelines, and applying Agile practices to deliver projects on time with clear documentation and stakeholder communication.",
    icon: <FaTasks />,
  },
  {
    title: "Machine Learning & AI",
    desc: "Applied ML workflows for predictive models and data-driven features using Python — data preprocessing, model training, evaluation, and deployment.",
    icon: <FaRobot />,
  },
  {
    title: "Cloud & DevOps",
    desc: "Familiarity with cloud deployments, containerization, and CI/CD pipelines to build scalable, maintainable production-ready applications.",
    icon: <FaCloud />,
  },
];

function Services() {
  return (
    <section id="services" className="bg-[#24282c] text-white py-28 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-yellow-400 tracking-widest mb-3">WHAT I DO</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Areas of Learning & Practice
          </h2>
        </motion.div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="bg-[#1f2226] rounded-xl p-6 sm:p-8 text-center hover:scale-[1.03]                     
                border border-transparent hover:border-yellow-400 transition-transform duration-300"
            >
              <div className="text-yellow-400 text-4xl mb-5 flex justify-center">
                {s.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">{s.title}</h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { Services };
export default Services;
