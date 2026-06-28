import { motion as Motion } from "framer-motion";

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
      className="glow-hover bg-[#2b2f33] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section Title */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center sm:mb-16 lg:mb-20"
        >
          <p className="text-yellow-400 tracking-widest mb-3">EDUCATION</p>
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            My Academic Journey
          </h2>
        </Motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute bottom-0 left-2 top-0 w-[2px] bg-yellow-400/30 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-10 sm:space-y-14 lg:space-y-20">

            {educationData.map((item, index) => (
              <Motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col pl-8 md:flex-row md:pl-0 ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                  }`}
              >

                {/* Dot */}
                <span className="absolute left-2 z-10 size-5 -translate-x-1/2 rounded-full border-4 border-[#2b2f33] bg-yellow-400 md:left-1/2" />

                {/* Card */}
                <div
                  className={`bg-[#1f2226] rounded-xl p-5 sm:p-6 w-full md:w-[45%]
                    border border-transparent
                    hover:border-yellow-400
                    transition-all duration-300
                    ${index % 2 === 0
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

              </Motion.div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}

export { Education };
export default Education;
