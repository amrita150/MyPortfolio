import React, { useState, useMemo, useEffect, useRef } from "react";
import TinderCard from "react-tinder-card";
import { ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

import AboutMe from "../Components/AboutMe";
import Education from "../Components/Education";
import Projects from "../Components/Projects";
import Skills from "../Components/Skills";
import Contact from "../Components/Contact";

const sections = [
  { id: "contact", component: <Contact /> },
  { id: "projects", component: <Projects /> },
  { id: "skills", component: <Skills /> },
  { id: "education", component: <Education /> },
  { id: "about", component: <AboutMe /> },
];

const SwipeDeck = () => {
  const [currentIndex, setCurrentIndex] = useState(sections.length - 1);
  const location = useLocation();
  const navigate = useNavigate();
  const childRefs = useRef([]);

  const pathMap = useMemo(() => {
    return sections.reduce((map, section, index) => {
      map[`/${section.id}`] = index;
      return map;
    }, {});
  }, []);

  // Sync index when path changes, handling the root path
  useEffect(() => {
    let path = location.pathname;
    // Special case for root URL and empty portfolio URL
    if (path === "/" || path === "/MyPortfolio") {
      const newIndex = pathMap["/about"];
      if (newIndex !== undefined) {
        setCurrentIndex(newIndex);
      }
    } else {
      const newIndex = pathMap[path];
      if (newIndex !== undefined) {
        setCurrentIndex(newIndex);
      }
    }
  }, [location, pathMap]);

  const swiped = (dir, index) => {
    const nextIndex = index - 1;
    setCurrentIndex(nextIndex);
    if (nextIndex >= 0) {
      navigate(`/${sections[nextIndex].id}`);
    } else {
      navigate("/");
    }
  };

  const swipe = async (dir) => {
    if (currentIndex >= 0 && childRefs.current[currentIndex]) {
      await childRefs.current[currentIndex].swipe(dir);
    }
  };

  const rewind = async () => {
    const isAtEnd = currentIndex < 0 || location.pathname === '/';

    if (isAtEnd) {
      const newIndex = sections.length - 1;
      // Loop through all cards and restore them
      for (let i = newIndex; i >= 0; i--) {
        if (childRefs.current[i]) {
          await childRefs.current[i].restoreCard();
        }
      }
      setCurrentIndex(newIndex);
      navigate(`/${sections[newIndex].id}`);
    } else {
      const newIndex = currentIndex + 1;
      if (newIndex < sections.length && childRefs.current[newIndex]) {
        await childRefs.current[newIndex].restoreCard();
        setCurrentIndex(newIndex);
        navigate(`/${sections[newIndex].id}`);
      }
    }
  };

  return (
    <div className="relative w-full h-screen flex flex-col justify-center items-center p-4">
      <div className="relative w-full sm:w-[90%] md:w-[70%] max-w-4xl h-[80vh] flex justify-center items-center">
        {sections.map((section, index) => {
          const isHidden = index < currentIndex;
          return (
            <TinderCard
              key={section.id}
              ref={(el) => (childRefs.current[index] = el)}
              className="absolute w-full h-full"
              onSwipe={(dir) => swiped(dir, index)}
              preventSwipe={["up", "down"]}
              onCardLeftScreen={() => {}}
            >
              <div
                className={`absolute inset-0 overflow-y-auto rounded-2xl hide-scrollbar transition-all duration-300 ${
                  isHidden ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
              >
                {section.component}
              </div>
            </TinderCard>
          );
        })}
      </div>

      {/* 🔹 Desktop Sidebar Buttons */}
      <div className="hidden md:flex flex-col gap-6 fixed right-6 top-1/2 -translate-y-1/2 z-50">
        <button
          onClick={() => swipe("left")}
          className="p-4 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full text-white shadow-lg hover:scale-110 transition"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={rewind}
          className="p-4 bg-gradient-to-br from-gray-500 to-gray-700 rounded-full text-white shadow-lg hover:scale-110 transition"
        >
          <RotateCcw size={24} />
        </button>
        <button
          onClick={() => swipe("right")}
          className="p-4 bg-gradient-to-br from-green-500 to-teal-500 rounded-full text-white shadow-lg hover:scale-110 transition"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* 🔹 Mobile Floating Buttons */}
      <div className="flex md:hidden gap-6 fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <button
          onClick={() => swipe("left")}
          className="p-3 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full text-white shadow-lg"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={rewind}
          className="p-3 bg-gradient-to-br from-gray-500 to-gray-700 rounded-full text-white shadow-lg"
        >
          <RotateCcw size={20} />
        </button>
        <button
          onClick={() => swipe("right")}
          className="p-3 bg-gradient-to-br from-green-500 to-teal-500 rounded-full text-white shadow-lg"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default SwipeDeck;