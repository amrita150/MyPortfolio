import { SiJavascript, SiReact, SiNodedotjs } from "react-icons/si";
import  myImage from "../assets/amrita.jpg"

const AboutMe = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen px-4 ">

      <div className="max-w-3xl w-full bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-8 text-center border border-white/20">

        <h2 className="text-blue-300 tracking-widest mb-4 font-bold">ABOUT ME</h2>

        <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white/30">
          <img
            src= {myImage}
            alt="Amrita Kataria"
            className="w-full h-full object-cover"
          />
        </div>

        <h3 className="text-2xl font-bold text-white mb-4">
          Hi, I’m Amrita Kataria
        </h3>

        <p className="text-gray-200 leading-relaxed mb-6 text-sm sm:text-base">
          A passionate and curious developer with a strong foundation in computer science. 
          I completed my B.Sc. (Hons) in Computer Science from Delhi University, 
          and I’m pursuing my Master of Computer Applications (MCA) from GGSIPU, Delhi.
          Over the past few months, I’ve built applications using React.js and Tailwind CSS, while also exploring backend technologies like Node.js, Express.js, and MongoDB. 
          I truly enjoy learning new technologies, solving challenges, and continuously improving my skills as a developer. Beyond coding,
           I love collaborating with people, sharing knowledge, and creating projects that make a real impact.
        </p>

        <div className="flex justify-center gap-6 text-white text-2xl">
          <SiReact title="React.js" className="text-sky-400" />
          <SiJavascript title="JavaScript" className="text-yellow-400" />
          <SiNodedotjs title="Node.js" className="text-green-400" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
