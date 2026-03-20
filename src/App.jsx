import { useEffect } from "react";
import "./App.css";
import Navbar from "./sections/Navbar/Navbar.jsx";
import Hero from "./sections/Hero/Hero.jsx";
import Projects from "./sections/Projects/Projects.jsx";
import Skills from "./sections/skill/skills.jsx";
import Contact from "./sections/Contact/Contact.jsx";
import Footter from "./sections/Footer/footter.jsx";

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    sections.forEach((sec) => sec.classList.add("reveal"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => {
      sections.forEach((sec) => observer.unobserve(sec));
    };
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footter />
    </>
  );
}

export default App;
