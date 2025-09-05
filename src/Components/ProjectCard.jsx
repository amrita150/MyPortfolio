// import React from "react";
// import { Github, ExternalLink } from "lucide-react";

// const ProjectCard = ({ title, image, description, tech, github, live }) => {
//   return (
//     <div className="w-80 h-96 perspective">
//       <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group hover:rotate-y-180">

//         {/* Front Side */}
//         <div className="absolute inset-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg flex flex-col justify-between items-center p-4 backface-hidden">
//           <div className="flex flex-col items-center">
//             <div className="w-full h-40 overflow-hidden rounded-xl mb-4">
//               <img
//                 src={image}
//                 alt={title}
//                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//               />
//             </div>
//             <h2 className="text-xl font-bold text-white mb-2">{title}</h2>
//             <p className="text-gray-300 text-center text-sm line-clamp-3">{description}</p>
//           </div>

//           {/* Static Links */}
//           <div className="flex gap-4 mt-4">
//             <a
//               href={github}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-white/20 text-white p-2 rounded-full shadow hover:scale-110 transition"
//             >
//               <Github size={20} />
//             </a>
//             <a
//               href={live}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-white/20 text-white p-2 rounded-full shadow hover:scale-110 transition"
//             >
//               <ExternalLink size={20} />
//             </a>
//           </div>
//         </div>

//         {/* Back Side */}
//         <div className="absolute inset-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg flex flex-col justify-center items-center p-6 rotate-y-180 backface-hidden">
//           <h2 className="text-2xl font-bold mb-4 text-white text-center">{title}</h2>
//           <div className="flex flex-wrap gap-2 justify-center mb-4">
//             {tech.map((item, index) => (
//               <span
//                 key={index}
//                 className="bg-white/20 text-white text-xs px-3 py-1 rounded-full shadow-md"
//               >
//                 {item}
//               </span>
//             ))}
//           </div>

//           {/* Static Links */}
//           <div className="flex gap-4">
//             <a
//               href={github}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-white/20 text-white p-2 rounded-full shadow hover:scale-110 transition"
//             >
//               <Github size={20} />
//             </a>
//             <a
//               href={live}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-white/20 text-white p-2 rounded-full shadow hover:scale-110 transition"
//             >
//               <ExternalLink size={20} />
//             </a>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default ProjectCard;
