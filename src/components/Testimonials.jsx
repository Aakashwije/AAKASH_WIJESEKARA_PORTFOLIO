import React from "react";
import riyaz from "../assets/riyaz.jpeg";
import chinthaka from "../assets/chinthaka.jpg";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function Testimonials() {
  const testimonials = [
    {
      name: "Mr. Riyaz Aluher",
      role: "Assistant Principal/ Senior Games Master - Royal College",
      image: riyaz,
      description:
  "Aakash is an outstanding young leader who brings discipline, respect, and consistency to every responsibility. His experience as a Senior Prefect and 1st XI Hockey Captain reflects his ability to guide teams, manage pressure situations, and take confident decisions when it matters most. He communicates clearly, supports others, and builds strong team unity. His dedication to both leadership and competitive sport highlights his resilience, commitment, and ability to deliver results with professionalism."
,
      phone: "+94 77 743 1597",
      email: "riyazaluher@gmail.com",
    },
    {
      name: "Maj Gen. Chinthaka Wikramasinghe",
      role: "Deputy Vice Chancellor Defence and Administration - KDU",
      image: chinthaka,
      description:
  "I have known Aakash personally for years. From my experience, his background at Royal College and his exposure to national and international level sports have shaped him into a disciplined, and highly focused individual. He performs well under pressure and works effectively with teams qualities that strongly impact success in the IT industry. Aakash brings a professional mindset, leadership attitude, and commitment to continuous improvement into everything he does."
,
      phone: "+94 76 470 4343",
      email: "chinthaka06@yahoo.com",
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

            <p className="text-gray-300 leading-relaxed mb-6 text-justify">
  "{t.description}"
</p>

              <div className="space-y-3 text-gray-300 flex flex-col items-center text-center">
  <div className="flex items-center justify-center gap-3">
    <FaPhoneAlt className="text-yellow-400" />
    <span className="text-white font-medium">{t.phone}</span>
  </div>

  <div className="flex items-center justify-center gap-3">
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
