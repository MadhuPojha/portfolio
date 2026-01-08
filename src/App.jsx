import styles from "./App.module.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Skills from "./components/Skills";
import ScrollToTop from "./components/ScrollToTop";


function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <ScrollToTop />
      
    </div>
  );
}

export default App;
