import ContactButton from "./Components/ContactButton";
import Navbar from "./Components/Navbar";
import ScrollTop from "./Components/ScrollTop";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import GithubCalendar from "./Pages/GithubCalendar";
import GitStats from "./Pages/GitStats";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";

function App() {
  return (
    <div style={{backgroundColor:"pink"}}>
       <Navbar/>
       <ScrollTop/>
       <ContactButton/>
       <Home/>
       <About/>
       <Skills/>
       <Projects/>
       <GitStats/>
       <GithubCalendar/>
       <Contact/>
    </div>
  );
}

export default App;
