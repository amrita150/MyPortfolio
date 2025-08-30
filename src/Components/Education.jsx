import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  const educationData = [
    {
      year: "2024 - 2026",
      degree: "M.C.A. - Software Engineering",
      school:
        "University School of Information, Communication and Technology, GGSIPU",
      score: "CGPA: 7.90 / 10",
    },
    {
      year: "2020 - 2023",
      degree: "B.Sc. Hons. - Computer Science",
      school: "Guru Gobind Singh College Of Commerce, Delhi University",
      score: "CGPA: 8.14 / 10",
    },
    {
      year: "2020",
      degree: "12th",
      school: "PSEB",
      score: "Percentage: 93.70%",
    },
    {
      year: "2018",
      degree: "10th",
      school: "PSEB",
      score: "Percentage: 84.40%",
    },
  ];

  return (
    <section className="flex justify-center items-center min-h-screen m-7">
      <div className="w-full max-w-3xl bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-13 shadow-2xl">
        <h2 className="text-2xl font-bold text-blue-300 text-center mb-8">
          Education
        </h2>
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white/30 h-full rounded-full"></div>

          <div className="space-y-6">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className={`relative flex items-center w-full px-1 ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-pink-500 rounded-full border-3 border-white z-10 flex items-center justify-center">
                  <FaGraduationCap className="text-sm text-white" />
                </div>

                {/* Card - Alternating sides */}
                <div
                  className={`bg-white/10 backdrop-blur-md border border-white/20 shadow-lg p-4 rounded-xl text-sm w-[45%] 
                  ${index % 2 === 0 ? "mr-10" : "ml-10"}`}
                >
                  <p className="text-pink-300 font-semibold">{edu.year}</p>
                  <h3 className="text-lg font-bold text-white">
                    {edu.degree}
                  </h3>
                  <p className="text-white/80">{edu.school}</p>
                  <p className="text-white/60 text-xs">{edu.score}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;