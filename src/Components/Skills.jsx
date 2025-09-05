// import {
//   FaHtml5,
//   FaCss3Alt,
//   FaJs,
//   FaReact,
//   FaNodeJs,
//   FaDatabase,
//   FaGitAlt,
//   FaGithub,
//   FaAws,
//   FaPython,
//   FaJava,
//   FaDocker,
// } from "react-icons/fa";
// import {
//   SiMongodb,
//   SiExpress,
//   SiTailwindcss,
//   SiCplusplus,
//   SiGooglecloud,
//   SiVercel,
//   SiTypescript,
//   SiPostman,
//   SiJsonwebtokens,
//   SiAxios,
//   SiBootstrap,
//   SiEjs,
// } from "react-icons/si";

// const Skills = () => {
//   const skillGroups = [
//     {
//       title: "Programming",
//       skills: [
//         { name: "Java", icon: <FaJava className="text-orange-500" /> },
//         { name: "Python", icon: <FaPython className="text-yellow-400" /> },
//         { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
//         { name: "C++", icon: <SiCplusplus className="text-blue-400" /> },
//       ],
//     },
//     {
//       title: "Web Development",
//       skills: [
//         { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
//         { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
//         { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
//         { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
//         { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
//         { name: "EJS", icon: <SiEjs className="text-yellow-300" /> },
//         { name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-400" /> },
//         { name: "Axios", icon: <SiAxios className="text-blue-300" /> },
//         { name: "JWT Auth", icon: <SiJsonwebtokens className="text-red-400" /> },
//       ],
//     },
//     {
//       title: "Database",
//       skills: [
//         { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
//         { name: "SQL", icon: <FaDatabase className="text-blue-400" /> },
//       ],
//     },
//     {
//       title: "Tools & Platforms",
//       skills: [
//         { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
//         { name: "GitHub", icon: <FaGithub className="text-gray-300" /> },
//         { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
//         { name: "Vercel", icon: <SiVercel className="text-white" /> },
//       ],
//     },
//   ];

//   return (
//     <section id="skills" className="py-10 flex justify-center">
//       <div className="max-w-5xl w-full px-26">
//         <div className="rounded-3xl p-8 bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl">
//           <h2 className="text-3xl font-bold text-center text-blue-300 mb-3">
//             My Skills
//           </h2>
//           <p className="text-center text-gray-300 mb-5">
//             Technologies and tools I work with.
//           </p>

//           <div className="space-y-10">
//             {skillGroups.map((group, idx) => (
//               <div key={idx}>
//                 <h3 className="text-2xl font-semibold text-white mb-4 border-l-4 border-blue-500 pl-3">
//                   {group.title}
//                 </h3>
//                 <div className="flex flex-wrap gap-4">
//                   {group.skills.map((skill, index) => (
//                     <div
//                       key={index}
//                       className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white shadow-md hover:bg-white/20 transition"
//                     >
//                       {skill.icon}
//                       <span>{skill.name}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;
