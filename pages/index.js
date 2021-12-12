import Home from "../components/Home";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Skills from "../components/Skills";

export default function index() {
  return (
    <div>
      <Home />
      <About />
      <Skills />
      <Projects />
     <Contact />
    </div>
  );
}
