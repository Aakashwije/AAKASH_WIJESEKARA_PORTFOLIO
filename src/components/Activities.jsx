import { motion } from "framer-motion";
import {
  FaStar,
  FaMedal,
  FaRunning,
  FaUsers,
  FaFlag,
  FaTrophy,
  FaCrown,
  FaShieldAlt,
} from "react-icons/fa";


const activities = [
  {
    year: "2025",
    title: "Represented the Mercantile Hockey Team",
    place: "Mercantile Hockey",
    desc: "Competed in national-level mercantile hockey tournaments representing the Mercantile team.",
    icon: <FaFlag />,
  },
  {
    year: "2024",
    title: "Co-Chair – Blue & Gold Hockey 7s Tournament",
    place: "Royal College Hockey Club (RCHC)",
    desc: "Co-chaired the Blue & Gold Hockey 7s, the largest hockey tournament in Sri Lanka, managing operations and event coordination.",
    icon: <FaTrophy />,
  },
  {
    year: "2023 - 2025",
    title: "Represented the National Hockey Team",
    place: "Sri Lanka National Team",
    desc: "Represented Sri Lanka at competitive events, showcasing discipline, leadership, and teamwork at the highest level.",
    icon: <FaShieldAlt />,
  },
  {
    year: "2024 - Present",
    title: "Representing CIAP (Pvt) Ltd Hockey Team",
    place: "CIAP (Pvt) Ltd",
    desc: "Currently representing the CIAP (Pvt) Ltd hockey team in competitive tournaments.",
    icon: <FaMedal />,
  },
  {
    year: "2023/24",
    title: "Senior Prefect",
    place: "Royal College, Colombo 07",
    desc: "Served as a Senior Prefect, contributing to student leadership, event coordination, and discipline management.",
    icon: <FaCrown />,
  },
  {
    year: "2021 - 2024",
    title: "Double Coloursman (Hockey & Squash)",
    place: "Royal College, Colombo 07",
    desc: "Awarded Double Colours for outstanding performance in Hockey and Squash across three years.",
    icon: <FaStar />,
  },
  {
    year: "2023",
    title: "Captain – Royal College 1st XI Hockey Team",
    place: "Royal College, Colombo 07",
    desc: "Led the 1st XI Hockey team as Captain, focusing on performance, teamwork, and match leadership.",
    icon: <FaTrophy />,
  },
  {
    year: "2019",
    title: "Represented the National Squash Team",
    place: "Sri Lanka National Team",
    desc: "Represented Sri Lanka in squash competitions, demonstrating high-level skill and competitive performance.",
    icon: <FaMedal />,
  },
];

function Activities() {
  return (
    <section
      id="activities"
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
          <p className="text-yellow-400 tracking-widest mb-3">
            ACTIVITIES & LEADERSHIP
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Beyond Academics
          </h2>
        </motion.div>

        {/* CARDS GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {activities.map((item, i) => (
            <motion.div
  key={i}
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: i * 0.1 }}
  viewport={{ once: true }}
  className="
    bg-[#1f2226] rounded-xl p-6 text-center
    border border-transparent
    hover:border-yellow-400
    transition-all duration-300 
  "
>
  <div className="flex justify-center mb-4">
    <span className="text-yellow-400 text-4xl">
      {item.icon}
    </span>
  </div>

  <h3 className="text-lg font-semibold mb-3">
    {item.title}
  </h3>

  <p className="text-gray-400 text-sm leading-relaxed">
    {item.desc}
  </p>
</motion.div>

          ))}

        </div>
      </div>
    </section>
  );
}

export { Activities };
export default Activities;
