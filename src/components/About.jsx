import { motion } from "framer-motion";
import { FaPython, FaJava, FaJs, FaReact, FaDatabase, FaNodeJs } from "react-icons/fa";
import { SiFlutter, SiReact, SiMongodb, SiFirebase } from "react-icons/si";


const skills = [
  { name: "Python", percent: 85, icon: <FaPython className="text-yellow-300" /> },
  { name: "Java", percent: 80, icon: <FaJava className="text-red-400" /> },
  { name: "JavaScript", percent: 75, icon: <FaJs className="text-yellow-400" /> },
  { name: "React", percent: 70, icon: <FaReact className="text-cyan-400" /> },
  { name: "Flutter", percent: 70, icon: <SiFlutter className="text-blue-400" /> },
  { name: "React Native", percent: 65, icon: <SiReact className="text-cyan-400" /> },
  { name: "Node.js", percent: 65, icon: <FaNodeJs className="text-green-400" /> },
  { name: "MySQL", percent: 65, icon: <FaDatabase className="text-blue-400" /> },
  { name: "MongoDB", percent: 60, icon: <SiMongodb className="text-green-500" /> },
  { name: "Firebase", percent: 60, icon: <SiFirebase className="text-yellow-400" /> },
];


function About() {
  return (
    <section id="about" className="bg-[#2b2f33] text-white py-16 md:py-28 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-yellow-400 tracking-widest mb-3">ABOUT ME</p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Who I Am
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            I’m currently pursuing a BSc (Hons) in Computer Science (University of Westminster award) at IIT, Sri Lanka, and have built practical experience designing and delivering end-to-end web and mobile solutions (projects include ProcuraX, EnerBridge, and portfolio work). I hold certifications in cybersecurity and ML and regularly apply modern stacks such as React, Flutter, Node.js, and SQL/NoSQL databases in both individual and team projects. My coursework and project work have given me hands-on experience in UI design, backend integration, real-time features, and secure system design.
          </p>

          <p className="text-gray-400 leading-relaxed mb-6 text-left md:text-justify">
            Beyond academics, I’ve held significant leadership roles at Royal College, Colombo 07 — serving as a Senior Prefect and as Captain of the 1st XI Hockey team (led the team to the Hockey Big Match victory after a nine-year gap). I also co-chaired the Blue & Gold Hockey 7s, the largest hockey tournament in Sri Lanka, and have represented both school and national teams in hockey and squash. These experiences taught me strategic leadership, clear communication under pressure, squad management, and how to motivate diverse teams to perform on deadline.

          </p>

          <p className="text-gray-400 leading-relaxed text-left md:text-justify">
            I combine that leadership with disciplined technical work: I’m comfortable taking a project from concept to delivery, mentoring peers during group work, and adapting quickly to new tools and methods. My strengths are problem solving, rapid prototyping, secure coding practices, and an eagerness to learn — especially in full-stack development, mobile apps, cybersecurity, and machine learning. I’m actively seeking internship or junior-level roles where I can contribute to meaningful products, continue developing technically, and apply the teamwork and leadership skills I gained through prefectship and sport.

          </p>

        </motion.div>

        {/* RIGHT SKILLS */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h3 className="text-3xl font-bold mb-6">Technical Skills</h3>

          <div className="space-y-7 mt-8">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3 font-medium">
                    <span className="text-xl">{skill.icon}</span>
                    {skill.name}
                  </div>
                  <span className="text-yellow-400">{skill.percent}%</span>
                </div>

                <div className="w-full h-3 bg-[#1f2226] rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-yellow-300 to-yellow-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percent}%` }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export { About };
export default About;
