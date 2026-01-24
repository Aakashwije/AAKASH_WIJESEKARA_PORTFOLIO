import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";

const certificates = [
  {
    title: "IBM Cybersecurity Analyst",
    org: "IBM",
    file: "https://www.linkedin.com/in/aakash-wijesekara-611588318/details/certifications/1757352151478/single-media-viewer/?profileId=ACoAAFCH_W0Bi8TNPhWZgueJF5NmQtwHntvpg_M", 
  },
  {
    title: "CompTIA Security+ Certification",
    org: "PACKT / CompTIA",
    file: "https://www.linkedin.com/in/aakash-wijesekara-611588318/details/certifications/1758828732284/single-media-viewer/?profileId=ACoAAFCH_W0Bi8TNPhWZgueJF5NmQtwHntvpg_M",
  },
  {
    title: "Machine Learning Specialization",
    org: "Stanford University",
    file: "https://www.linkedin.com/in/aakash-wijesekara-611588318/details/certifications/1756321905372/single-media-viewer/?profileId=ACoAAFCH_W0Bi8TNPhWZgueJF5NmQtwHntvpg_M",
  },
  {
    title: "Google UX / UI Specialization",
    org: "Google",
    file: "https://www.linkedin.com/in/aakash-wijesekara-611588318/details/certifications/1756145259626/single-media-viewer/?profileId=ACoAAFCH_W0Bi8TNPhWZgueJF5NmQtwHntvpg_M",
  },
  {
    title: "Designing User Interfaces and Experiences (UI/UX)",
    org: "IBM",
    file: "https://www.linkedin.com/in/aakash-wijesekara-611588318/details/certifications/1769287487798/single-media-viewer/?profileId=ACoAAFCH_W0Bi8TNPhWZgueJF5NmQtwHntvpg_M",
  },
  {
    title: "Database Structures and Management with MySQL",
    org: "IBM",
    file: "https://www.linkedin.com/in/aakash-wijesekara-611588318/details/certifications/1767878814971/single-media-viewer/?profileId=ACoAAFCH_W0Bi8TNPhWZgueJF5NmQtwHntvpg_M",
  },
  {
    title: "Java Development with Databases",
    org: "SkillUp",
    file: "https://www.linkedin.com/in/aakash-wijesekara-611588318/details/certifications/1769287814497/single-media-viewer/?profileId=ACoAAFCH_W0Bi8TNPhWZgueJF5NmQtwHntvpg_M",
  },
   {
    title: "Spring Framework for Java Development",
    org: "SkillUp",
    file: "https://www.linkedin.com/in/aakash-wijesekara-611588318/details/certifications/1769288043682/single-media-viewer/?profileId=ACoAAFCH_W0Bi8TNPhWZgueJF5NmQtwHntvpg_M",
  },
   {
    title: "Version Control",
    org: "Meta",
    file: "https://www.linkedin.com/in/aakash-wijesekara-611588318/details/certifications/1769288251086/single-media-viewer/?profileId=ACoAAFCH_W0Bi8TNPhWZgueJF5NmQtwHntvpg_M",
  },
  {
    title: "Advanced React",
    org: "Meta",
    file: "https://www.linkedin.com/in/aakash-wijesekara-611588318/details/certifications/1769288555395/single-media-viewer/?profileId=ACoAAFCH_W0Bi8TNPhWZgueJF5NmQtwHntvpg_M",
  },
  {
    title: "Django Web Framework Certification",
    org: "Meta",
    file: "https://www.linkedin.com/in/aakash-wijesekara-611588318/details/certifications/1769288688072/single-media-viewer/?profileId=ACoAAFCH_W0Bi8TNPhWZgueJF5NmQtwHntvpg_M",
  },
  {
    title: "Python Certification",
    org: "University of Moratuwa",
    file: "https://www.linkedin.com/in/aakash-wijesekara-611588318/details/certifications/1748926614435/single-media-viewer/?profileId=ACoAAFCH_W0Bi8TNPhWZgueJF5NmQtwHntvpg_M",
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
  className="
    bg-[#1f2226] rounded-xl p-8 text-center
    border border-transparent
    hover:border-yellow-400
    transition-all duration-300
  "
>
  {/* Center Icon */}
  <div className="flex justify-center mb-4">
    <FaCertificate className="text-yellow-400 text-4xl" />
  </div>

  <h3 className="text-lg font-semibold mb-1">
    {cert.title}
  </h3>

  <p className="text-gray-400 text-sm mb-6">
    {cert.org}
  </p>

  {/* Center Button */}
  <a
    href={cert.file}
    target="_blank"
    rel="noopener noreferrer"
    className="
      inline-flex items-center gap-2
      border border-yellow-400 text-yellow-400
      px-4 py-2 rounded
      hover:bg-yellow-400 hover:text-black transition
      mx-auto
    "
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
