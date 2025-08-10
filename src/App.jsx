import AboutMe from "./Components/AboutMe"
import HeroLayout from "./Components/HeroLayout"
import NavBar from "./Components/NavBar"

function App() {
  return (
     <div >
        <NavBar />
        <HeroLayout> <AboutMe/> </HeroLayout>
     </div>
  )
}

export default App
