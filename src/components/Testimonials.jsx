import React from "react";
import riyaz from "../assets/riyaz.jpeg";
import chinthaka from "../assets/chinthaka.jpg";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function Testimonials() {
  const testimonials = [
    {
      name: "Kamal Perera",
      role: "Project Supervisor",
      image: riyaz,
      description:
        "Aakash is highly responsible and passionate in his work. He completes tasks on time and communicates clearly with the team.",
      phone: "+94 77 123 4567",
      email: "kamal.perera@gmail.com",
    },
    {
      name: "Nimali Fernando",
      role: "Senior Developer",
      image: chinthaka,
      description:
        "Aakash has strong problem-solving skills and is always eager to learn new technologies. Great teamwork and dedication.",
      phone: "+94 71 987 6543",
      email: "nimali.fernando@gmail.com",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-[#1f2329]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Testimonials <span className="text-yellow-400">Reviews</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-[#2b2f36] rounded-xl p-8 shadow-lg border border-yellow-400/30 hover:border-yellow-400 transition-all duration-300"
            >
              <div className="flex items-center gap-5 mb-6">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-20 h-20 rounded-full object-cover border-2 border-yellow-400"
                />

                <div>
                  <h3 className="text-xl font-semibold text-white">{t.name}</h3>
                  <p className="text-yellow-400 text-sm">{t.role}</p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6">
                "{t.description}"
              </p>

              {/* ✅ Contact Info With Icons */}
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center gap-3">
                  <FaPhoneAlt className="text-yellow-400" />
                  <span className="text-white font-medium">{t.phone}</span>
                </div>

                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-yellow-400" />
                  <a
                    href={`mailto:${t.email}`}
                    className="text-yellow-400 hover:underline"
                  >
                    {t.email}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
