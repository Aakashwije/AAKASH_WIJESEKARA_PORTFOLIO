import { motion as Motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const experiences = [
  {
    role: "Software Engineer Intern",
    company: "WSO2",
    type: "Internship",
    period: "Jun 2026 - Present",
    location: "Sri Lanka · On-site",
    // TODO: replace with your own wording — this is an inference from your listed skills + WSO2's domain
    desc: "Contributing to enterprise API management and AI gateway products — building and securing cloud-native, microservice-based services in Go, with a focus on performance, reliability, and integrating LLM providers such as OpenAI and Amazon Bedrock.",
    skills: [
      "Go",
      "Large Language Models (LLM)",
      "API Gateways",
      "AI Gateway",
      "API Security",
      "API Management",
      "REST APIs",
      "Microservices",
      "Docker",
      "Kubernetes",
      "OpenAI API",
      "Amazon Bedrock",
      "Server-Sent Events (SSE)",
      "Performance Tuning",
      "Unit Testing",
      "Git",
    ],
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="bg-[#2b2f33] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-5xl">
        {/* TITLE */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 text-center sm:mb-14 lg:mb-16"
        >
          <p className="text-yellow-400 tracking-widest mb-3">EXPERIENCE</p>
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            Professional Experience
          </h2>
        </Motion.div>

        {/* CARDS */}
        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <Motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="rounded-xl border border-transparent bg-[#1f2226] p-5 transition-all duration-300 hover:border-yellow-400 sm:p-8"
            >
              {/* HEADER */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
                <div className="flex min-w-0 items-start gap-3 sm:gap-4">
                  <div className="mt-1 shrink-0 text-2xl text-yellow-400 sm:text-3xl">
                    <FaBriefcase />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xl sm:text-2xl font-semibold">
                      {exp.role}
                    </h3>
                    <p className="text-yellow-400 font-medium">
                      {exp.company} · {exp.type}
                    </p>
                  </div>
                </div>

                <div className="text-gray-400 text-sm space-y-1 sm:text-right">
                  <p className="flex items-center gap-2 sm:justify-end">
                    <FaCalendarAlt className="text-yellow-400" />
                    {exp.period}
                  </p>
                  <p className="flex items-center gap-2 sm:justify-end">
                    <FaMapMarkerAlt className="text-yellow-400" />
                    {exp.location}
                  </p>
                </div>
              </div>

              {/* DESCRIPTION */}
              <p className="mb-6 text-left leading-relaxed text-gray-300 lg:text-justify">
                {exp.desc}
              </p>

              {/* SKILLS */}
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((s, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-yellow-400/10 text-yellow-400 px-3 py-1 rounded-full"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { Experience };
export default Experience;
