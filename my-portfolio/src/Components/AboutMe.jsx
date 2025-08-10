import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import { SiCplusplus, SiJavascript, SiMongodb } from "react-icons/si";
import profileImage from "../assets/amrita.jpg";

const AboutMeCard = () => {
  return (
    <div className="pt-24 relative min-h-screen bg-gradient-to-br from-[#0d012f] via-[#14043b] to-[#0b022e] flex items-center justify-center  px-4">
      {/* Glass Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full max-w-3xl bg-white/5 backdrop-blur-xl border border-white/10 text-white rounded-[2rem] p-10 shadow-2xl"
      >
        <h2 className="text-center text-blue-300 text-lg tracking-wider font-semibold mb-4">
          ABOUT ME
        </h2>

        <div className="flex flex-col items-center text-center">
          <img
            src={profileImage}
            alt="Amrita Kataria"
            className="w-32 h-32 rounded-full object-cover border-4 border-white/20 mb-4 shadow-md"
          />
          <h1 className="text-2xl font-bold mb-3">Hi, I’m Amrita Kataria</h1>
          <p className="text-white/80 text-sm leading-relaxed">
            A passionate and curious developer with a strong foundation in computer science. I completed
            my B.Sc. (Hons) in Computer Science from Sri Guru Gobind Singh College of Commerce, Delhi
            University, and I’m pursuing my Master of Computer Applications (MCA) from GGSIPU, Delhi. <br />
            I love building real-world projects that solve meaningful problems. Over the past few months,
            I’ve developed applications using React.js and Tailwind CSS, and explored backend technologies
            including Node.js, Express.js, and MongoDB for integration. I enjoy learning new technologies,
            solving challenges, and continuously improving my craft.
          </p>
        </div>

        {/* Icons */}
        <div className="flex justify-center gap-8 mt-6 text-blue-200 text-2xl">
          <FaGraduationCap title="Education" />
          <SiCplusplus title="C++" />
          <SiJavascript title="JavaScript" />
          <SiMongodb title="MongoDB" />
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMeCard;
// import React from 'react';
// import profile from '../assets/amrita.jpg';
// const AboutMe = () => {
//   return(
//      <div>
//         <h2>About Me</h2>
//         <img src={profile} alt="my-profile" className='w-32 h-32 rounded-full' />
//         <h1 className="text-2xl font-bold">Hi, I’m Amrita Kataria</h1>
//         <p className="text-black/80 ">
//           A passionate and curious developer with a strong foundation in computer science. I completed
//           my B.Sc. (Hons) in Computer Science from Sri Guru Gobind Singh College of Commerce, Delhi
//           University, and I’m pursuing my Master of Computer Applications (MCA) from GGSIPU, Delhi. <br />
//           I love building real-world projects that solve meaningful problems. Over the past few months,
//           I’ve developed applications using React.js and Tailwind CSS, and explored backend technologies
//           including Node.js, Express.js, and MongoDB for integration. I enjoy learning new technologies,
//           solving challenges, and continuously improving my craft.
//         </p>
//      </div>
//   )
// }

// export default AboutMe;