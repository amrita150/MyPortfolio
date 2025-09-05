// // import React from "react";
// // import { AtSign, Github, Linkedin } from "lucide-react";

// // const Contact = () => {
// //   return (
// //     <div className="relative flex items-center justify-center min-h-screen px-3">
// //       {/* Glassmorphism Card */}
// //       <div className="max-w-4xl w-full bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-8 text-center border border-white/20 mt-5 mb-5">
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
// //           {/* Contact Form Section */}
// //           <div>
// //             <h2 className="text-pink-300 tracking-widest mb-6 font-bold text-center md:text-left">
// //               Get in Touch
// //             </h2>
// //             <form className="space-y-4">
// //               <div>
// //                 <label htmlFor="name" className="block text-white mb-2">
// //                   Name
// //                 </label>
// //                 <input
// //                   type="text"
// //                   id="name"
// //                   placeholder="Your name"
// //                   className="w-full p-2 rounded-lg bg-white/20 backdrop-blur-md text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder-gray-400"
// //                 />
// //               </div>
// //               <div>
// //                 <label htmlFor="email" className="block text-white mb-2">
// //                   Email
// //                 </label>
// //                 <input
// //                   type="email"
// //                   id="email"
// //                   placeholder="your.email@example.com"
// //                   className="w-full p-2 rounded-lg bg-white/20 backdrop-blur-md text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder-gray-400"
// //                 />
// //               </div>
// //               <div>
// //                 <label htmlFor="message" className="block text-white mb-2">
// //                   Message
// //                 </label>
// //                 <textarea
// //                   id="message"
// //                   rows="4"
// //                   placeholder="Your message..."
// //                   className="w-full p-2 rounded-lg bg-white/20 backdrop-blur-md text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder-gray-400"
// //                 ></textarea>
// //               </div>
// //               <button
// //                 type="submit"
// //                 className="w-full py-3 mt-4 rounded-lg font-bold text-white transition-all duration-300 hover:scale-105"
// //                 style={{
// //                   background:
// //                     "linear-gradient(to right, #ec4899, #db2777)",
// //                 }}
// //               >
// //                 Send Message
// //               </button>
// //             </form>
// //           </div>
// //           {/* Contact Info Section */}
// //           <div className="md:border-l-2 md:border-white/30 md:pl-8 text-center md:text-left">
// //             <h2 className="text-pink-300 tracking-widest mb-6 font-bold mt-8 md:mt-0">
// //               Let's Connect
// //             </h2>
// //             <p className="text-gray-300 leading-relaxed mb-6">
// //               I'm always open to discussing new projects, creative ideas, or
// //               opportunities to be part of your vision.
// //             </p>
// //             <ul className="space-y-4">
// //               <li className="flex items-center justify-center md:justify-start gap-3 text-white">
// //                 <AtSign size={20} className="text-pink-400" />
// //                 <a
// //                   href="mailto:amritakataria515@gmail.com"
// //                   className="hover:underline"
// //                 >
// //                   amritakataria515@gmail.com
// //                 </a>
// //               </li>
// //               <li className="flex items-center justify-center md:justify-start gap-3 text-white">
// //                 <Github size={20} className="text-pink-400" />
// //                 <a
// //                   href="https://github.com/amrita150"
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   className="hover:underline"
// //                 >
// //                   github.com/amrita150
// //                 </a>
// //               </li>
// //               <li className="flex items-center justify-center md:justify-start gap-3 text-white">
// //                 <Linkedin size={20} className="text-pink-400" />
// //                 <a
// //                   href="https://linkedin.com/in/amrita-kataria"
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   className="hover:underline"
// //                 >
// //                   linkedin.com/in/amrita-kataria
// //                 </a>
// //               </li>
// //             </ul>
// //             <p className="text-gray-400 text-sm mt-6">
// //               Feel free to reach out through the form or directly via email.
// //               I'll get back to you as soon as possible.
// //             </p>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Contact;


// import React, { useRef } from "react";
// import { AtSign, Github, Linkedin } from "lucide-react";
// import emailjs from '@emailjs/browser';

// const Contact = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm('service_nghv8sq', 'template_0gc0l04', form.current, {
//         publicKey: 's94p1QR-uTJ-x1rM8',
//       })
//       .then(
//         () => {
//           console.log('SUCCESS!');
//           alert("Your message has been sent!");
//           e.target.reset(); // Reset the form after successful submission
//         },
//         (error) => {
//           console.log('FAILED...', error.text);
//           alert("Failed to send message. Please try again later.");
//         },
//       );
//   };

//   return (
//     <div className="relative flex items-center justify-center min-h-screen px-3">
//       <div className="max-w-4xl w-full bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-8 text-center border border-white/20 mt-5 mb-5">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
//           <div>
//             <h2 className="text-pink-300 tracking-widest mb-6 font-bold text-center md:text-left">
//               Get in Touch
//             </h2>
//             <form ref={form} onSubmit={sendEmail} className="space-y-4">
//               <div>
//                 <label htmlFor="user_name" className="block text-white mb-2">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   id="user_name"
//                   name="user_name" // Ensure a name attribute is present
//                   placeholder="Your name"
//                   className="w-full p-2 rounded-lg bg-white/20 backdrop-blur-md text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder-gray-400"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="user_email" className="block text-white mb-2">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="user_email"
//                   name="user_email" // Ensure a name attribute is present
//                   placeholder="your.email@example.com"
//                   className="w-full p-2 rounded-lg bg-white/20 backdrop-blur-md text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder-gray-400"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="message" className="block text-white mb-2">
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message" // Ensure a name attribute is present
//                   rows="4"
//                   placeholder="Your message..."
//                   className="w-full p-2 rounded-lg bg-white/20 backdrop-blur-md text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder-gray-400"
//                 ></textarea>
//               </div>
//               <button
//                 type="submit"
//                 className="w-full py-3 mt-4 rounded-lg font-bold text-white transition-all duration-300 hover:scale-105"
//                 style={{
//                   background:
//                     "linear-gradient(to right, #ec4899, #db2777)",
//                 }}
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>
//           {/* Contact Info Section */}
//           <div className="md:border-l-2 md:border-white/30 md:pl-8 text-center md:text-left">
//             <h2 className="text-pink-300 tracking-widest mb-6 font-bold mt-8 md:mt-0">
//               Let's Connect
//             </h2>
//             <p className="text-gray-300 leading-relaxed mb-6">
//               I'm always open to discussing new projects, creative ideas, or
//               opportunities to be part of your vision.
//             </p>
//             <ul className="space-y-4">
//               <li className="flex items-center justify-center md:justify-start gap-3 text-white">
//                 <AtSign size={20} className="text-pink-400" />
//                 <a
//                   href="mailto:amritakataria515@gmail.com"
//                   className="hover:underline"
//                 >
//                   amritakataria515@gmail.com
//                 </a>
//               </li>
//               <li className="flex items-center justify-center md:justify-start gap-3 text-white">
//                 <Github size={20} className="text-pink-400" />
//                 <a
//                   href="https://github.com/amrita150"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="hover:underline"
//                 >
//                   github.com/amrita150
//                 </a>
//               </li>
//               <li className="flex items-center justify-center md:justify-start gap-3 text-white">
//                 <Linkedin size={20} className="text-pink-400" />
//                 <a
//                   href="https://linkedin.com/in/amrita-kataria"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="hover:underline"
//                 >
//                   linkedin.com/in/amrita-kataria
//                 </a>
//               </li>
//             </ul>
//             <p className="text-gray-400 text-sm mt-6">
//               Feel free to reach out through the form or directly via email.
//               I'll get back to you as soon as possible.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;