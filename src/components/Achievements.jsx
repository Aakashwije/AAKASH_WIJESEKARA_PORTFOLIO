import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";

const certificates = [
  {
    title: "IBM Cybersecurity Analyst",
    org: "IBM",
    file: "#", // replace with actual link if you have one
  },
  {
    title: "CompTIA Security+ (SY0-701)",
    org: "PACKT / CompTIA",
    file: "#",
  },
  {
    title: "Machine Learning Specialization",
    org: "Stanford University",
    file: "#",
  },
  {
    title: "Google UX / UI Specialization",
    org: "Google",
    file: "#",
  },
  {
    title: "Python (course)",
    org: "University of Moratuwa",
    file: "#",
  },

 
];

function Certificates() {
  return (
    <section
      id="certificates"
      className="bg-[#2b2f33] text-white py-24 px-6 md:px-20 glow-hover"
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
          <p className="text-yellow-400 tracking-widest mb-3">CERTIFICATES</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            My Achievements
          </h2>
        </motion.div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {certificates.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#1f2226] rounded-xl p-8
                border border-transparent
                hover:border-yellow-400
                transition-all duration-300"
            >
              <FaCertificate className="text-yellow-400 text-4xl mb-4" />

              <h3 className="text-lg font-semibold mb-1">
                {cert.title}
              </h3>

              <p className="text-gray-400 text-sm mb-6">
                {cert.org}
              </p>

              <a
                href={cert.file}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-yellow-400 text-yellow-400 px-4 py-2 rounded hover:bg-yellow-400 hover:text-black transition"
              >
                👁 View Certificate
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { Certificates };
export default Certificates;
