import { NavLink } from "react-router-dom";
import { FaUser, FaProjectDiagram, FaGraduationCap, FaCode, FaEnvelope } from "react-icons/fa";

export default function Navbar() {
  const links = [
    { to: "/about", icon: <FaUser />, label: "About Me" },
    { to: "/projects", icon: <FaProjectDiagram />, label: "Projects" },
    { to: "/education", icon: <FaGraduationCap />, label: "Education" },
    { to: "/skills", icon: <FaCode />, label: "Skills" },
    { to: "/contact", icon: <FaEnvelope />, label: "Contact" },
  ];

  return (
    <>
      {/* Desktop Vertical Navbar */}
      <div className="hidden md:flex fixed top-22 left-7 flex-col gap-8 bg-white/10 backdrop-blur-lg p-4 rounded-3xl shadow-lg z-50">
        {links.map((link, i) => (
          <NavLink
            key={i}
            to={link.to}
            className={({ isActive }) =>
              `text-white text-xl cursor-pointer transition-colors h-10 p-2 rounded-lg ${
                isActive ? "bg-white/20 shadow-md" : "hover:text-gray-300"
              }`
            }
          >
            {link.icon}
          </NavLink>
        ))}
      </div>

      {/* Mobile Horizontal Navbar */}
      <div className="flex md:hidden fixed z-50 top-6 left-1/2 -translate-x-1/2 flex-row items-center gap-8 bg-white/10 backdrop-blur-md rounded-2xl px-6 py-3 shadow-lg">
        {links.map((link, i) => (
          <NavLink
            key={i}
            to={link.to}
            className={({ isActive }) =>
              `text-white text-xl cursor-pointer transition-colors ${
                isActive ? "text-white" : "hover:text-gray-300"
              }`
            }
          >
            {link.icon}
          </NavLink>
        ))}
      </div>
    </>
  );
}


