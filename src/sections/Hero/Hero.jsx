import styles from "./HeroStyles.module.css";
import heroimg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import xLight from "../../assets/twitter-light.svg";
import xDark from "../../assets/twitter-dark.svg";
import CV from "../../assets/Deepak-Resume-2026.pdf";
import { useTheme } from "../../assets/Common/themeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? sun : moon;
  const linkedin = theme === "light" ? linkedinLight : linkedinDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const xIcon = theme === "light" ? xLight : xDark;

  const handleScrollToProjects = () => {
    const section = document.getElementById("projects");
    if (section) {
      // Offset for sticky navbar (70px)
      const y = section.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className={styles.container}>
      <img
        className={styles.colorMode}
        src={themeIcon}
        alt="color mode icon"
        onClick={toggleTheme}
        title="Toggle Theme"
      />
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroimg}
          alt="Profile picture of Deepak Kumar"
        />
      </div>
      <div className={styles.info}>
        <h1 className={styles.name}>Deepak Kumar</h1>
        <h2 className={styles.role}>Frontend Developer | React Developer</h2>

        <span className={styles.socialIcons}>
          <a href="https://github.com/Deepak7kohli" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub Icon" />
          </a>
          <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn Icon" />
          </a>
          <a href="https://x.com/home" target="_blank" rel="noopener noreferrer">
            <img src={xIcon} alt="X Icon" />
          </a>
        </span>
        <p className={styles.description}>
          I build responsive and modern web applications using React,
          JavaScript, and modern web technologies.
        </p>
        
        <div className={styles.btnContainer}>
          <button 
            className={styles.button} 
            onClick={handleScrollToProjects}
          >
            View Project
          </button>
          <a href={CV} download>
            <button className={styles.button}>Download CV</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
