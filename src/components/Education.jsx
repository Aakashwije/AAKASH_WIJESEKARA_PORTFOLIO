import { motion } from "framer-motion";

const educationData = [
  {
    year: "2025 - Present",
    title: "BSc (Hons) Computer Science",
    place: "University Of Westminster ",
    desc: "Studying core computer science subjects including software engineering, algorithms, databases, and web technologies with hands-on project experience.",
  },
 {
  year: "2022",
  title: "Assured Diploma in Information Technology",
  place: "ESOFT Metro Campus (Pearson)",
  desc: "Completed a strong foundation in IT and programming, covering core computing concepts, problem-solving, and basic software development skills.",
},
  {
    year: "2010 - 2020",
    title: "GCE Ordinary Level",
    place: "Royal Collage, Colombo 7",
    desc: "Active student: Senior Prefect, Senior Scout, Volleyball Player, and strong academic performer.",
  },
  {
  year: "2020 - 2023",
  title: "GCE Advanced Level",
  place: "Royal College, Colombo 07",
  desc: "Served as a Senior Prefect and actively participated in sports and leadership activities alongside academics.",
},

];

function Education() {
  return (
    <section
      id="education"
      className="bg-[#2b2f33] text-white py-24 px-6 md:px-20 glow-hover"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-yellow-400 tracking-widest mb-3">EDUCATION</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            My Academic Journey
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute md:left-1/2 left-4 md:transform md:-translate-x-1/2 h-full w-[2px] bg-yellow-400/30"></div>

          <div className="space-y-20">

            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
              >

                {/* Dot */}
                <span className="absolute md:left-1/2 left-4 md:transform md:-translate-x-1/2 w-5 h-5 bg-yellow-400 rounded-full border-4 border-[#2b2f33] z-10"></span>

                {/* Card */}
                <div
                  className={`bg-[#1f2226] rounded-xl p-6 w-full md:w-[45%]
                    border border-transparent
                    hover:border-yellow-400
                    transition-all duration-300
                    ${
                    index % 2 === 0
                      ? "md:mr-auto md:text-right"
                      : "md:ml-auto md:text-left"
                  }`}
                >
                  <p className="text-yellow-400 text-sm mb-1">{item.year}</p>

                  <h3 className="text-xl font-semibold mb-1">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 mb-3">
                    {item.place}
                  </p>

                  <p className="text-gray-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}

export { Education };
export default Education;
