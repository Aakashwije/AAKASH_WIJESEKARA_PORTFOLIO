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
    <section id="testimonials" className="bg-[#1f2329] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-10 text-center text-3xl font-bold text-white sm:mb-12 sm:text-4xl">
          Testimonials <span className="text-yellow-400">Reviews</span>
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:gap-10">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="rounded-xl border border-yellow-400/30 bg-[#2b2f36] p-5 shadow-lg transition-all duration-300 hover:border-yellow-400 sm:p-8"
            >
              <div className="flex flex-col sm:flex-row items-center gap-5 mb-6 text-center sm:text-left">
                <img
                  src={t.image}
                  alt={t.name}
                  loading="lazy"
                  decoding="async"
                  className="w-20 h-20 rounded-full object-cover border-2 border-yellow-400 mx-auto sm:mx-0"
                />

                <div className="min-w-0 flex-1">
                  <h3 className="text-xl font-semibold text-white">{t.name}</h3>
                  <p className="text-yellow-400 text-sm">{t.role}</p>
                </div>
              </div>

            <p className="mb-6 text-left leading-relaxed text-gray-300">
  "{t.description}"
</p>

              <div className="space-y-3 text-gray-300 flex flex-col items-center sm:items-start text-center sm:text-left">
  <div className="flex items-center justify-center gap-3 sm:justify-start">
    <FaPhoneAlt className="text-yellow-400" />
    <span className="text-white font-medium">{t.phone}</span>
  </div>

  <div className="flex min-w-0 items-center justify-center gap-3 sm:justify-start">
    <FaEnvelope className="text-yellow-400" />
    <a
      href={`mailto:${t.email}`}
      className="min-w-0 break-all text-yellow-400 hover:underline"
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
