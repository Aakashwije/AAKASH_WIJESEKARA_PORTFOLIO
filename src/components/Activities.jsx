import { motion } from "framer-motion";
import { FaUsers, FaMedal, FaRunning, FaStar } from "react-icons/fa";

const activities = [
  {
    title: "Senior Prefect",
    desc: "Demonstrated leadership, discipline, and responsibility in managing student activities and maintaining school standards.",
    icon: <FaStar />,
  },
  {
    title: "Senior Scout",
    desc: "Developed teamwork, survival skills, and community service values through scouting programs and leadership camps.",
    icon: <FaMedal />,
  },
  {
    title: "Volleyball Player",
    desc: "Active member of school volleyball team, gaining experience in teamwork, strategy, and competitive sportsmanship.",
    icon: <FaRunning />,
  },
  {
    title: "Team Collaboration",
    desc: "Experienced in working with diverse teams in academic and project environments using agile teamwork practices.",
    icon: <FaUsers />,
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
          <h2 className="text-4xl md:text-5xl font-bold">
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
              <div className="text-yellow-400 text-4xl mb-4">
                {item.icon}
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
