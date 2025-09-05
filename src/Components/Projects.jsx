import React from "react";
import ProjectCard from "./ProjectCard";
import studySync from "../assets/studySync.jpg";
import restapi from "../assets/restApi.jpg";

const projectData = [
  {
    title: "StudySync",
    description:
      "StudySync is an AI-powered collaborative learning platform built for students. It enables real-time study sessions, live video calls using WebRTC, and intelligent content organization. It provides AI-driven flashcards, topic summaries, and group chat features to make remote studying seamless. The platform also includes a responsive UI for mobile and desktop, with secure Firebase authentication and Firestore database integration.",
    tech: [
      "React.js",
      "Tailwind CSS",
      "Firebase Auth",
      "Firestore",
      "WebRTC",
      "AI Integration",
    ],
    image: studySync,
    live: "https://amrita150.github.io/StudySyncc/",
    github: "https://github.com/amrita150/StudySyncc",
  },
  {
    title: "RESTful API Project",
    description:
      "A fully functional backend API built with Node.js, Express.js, and MongoDB, designed for scalability and security. This project demonstrates CRUD operations, authentication using JWT, password encryption, and efficient database schema design with Mongoose. Includes structured API endpoints, robust error handling, validation layers, and deployment-ready configuration to serve as a strong foundation for any full-stack application.",
    tech: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT Auth",
      "REST Architecture",
    ],
    image: restapi,
    live: "https://github.com/amrita150/REST-API-using-Node.js-Express-and-MongoDB",
    github:
      "https://github.com/amrita150/REST-API-using-Node.js-Express-and-MongoDB",
  },
];

const Projects = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen px-4">
      {/* Glassmorphism Container */}
      <div className="max-w-4xl w-full bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-8 text-center border border-white/20">
        <h2 className="text-blue-300 tracking-widest mb-10 font-bold">
          FEATURED PROJECTS
        </h2>
        <div className="flex flex-wrap justify-center items-stretch gap-8">
          {projectData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;