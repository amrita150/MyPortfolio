// import HeroLayout from "../src/Components/HeroLayout";
// import AboutMe from "../src/Components/AboutMe";
// import Navbar from "../src/Components/NavBar";
// import Skills from "../src/Components/Skills";
// import Projects from "../src/Components/Projects"
// import Education from "../src/Components/Education";
// import Contact from "../src/Components/Contact";

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// export default function App() {
//   return (
//     <Router basename="/MyPortfolio">
      
//       <HeroLayout>
//         {/* Navbar on top of content */}
//         <Navbar />

//         {/* Routed content */}
//         <div className="flex items-center justify-center">
//           <Routes>
//             <Route path="/" element={<AboutMe />} />
//             <Route path="/about" element={<AboutMe />} />
//             <Route path="/projects" element={<Projects />} />
//             <Route path="/education" element={<Education />} />
//             <Route path="/skills" element={<Skills />} />
//             <Route path="/contact" element={<Contact />} />
//           </Routes>
//         </div>
//       </HeroLayout>
      
//     </Router>
    
//   );
// }

import HeroLayout from "../src/Components/HeroLayout";
// import Navbar from "../src/Components/NavBar";
// import SwipeDeck from "../src/Components/SwipeDeck";
import { BrowserRouter as Router } from "react-router-dom";

export default function App() {
  return (
    <Router basename="/MyPortfolio">
      <HeroLayout>
        {/* <Navbar /> */}
        {/* <SwipeDeck /> */}
      </HeroLayout>
    </Router>
  );
}
