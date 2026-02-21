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
import CV from "../../assets/Deepak-resume.pdf";
import { useTheme } from "../../assets/Common/themecontext";
// import {HeroStyle.module.css} from './HeroStyles.module.css'

function Hero() {
  const {theme,toggleTheme}=useTheme();
  const themeIcon =theme==='light'?sun:moon;
  const linkedin =theme==='light'?linkedinLight:linkedinDark;
  const githubIcon =theme==='light'?githubLight:githubDark;
  const xIcon =theme==='light'?xLight:xDark;
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModecontainer}>
        <img
          className={styles.hero}
          src={heroimg}
          alt="Progile of Deepak Kumar Not Availaible"
        />
        <img className={styles.colorMode} src={themeIcon} alt="color mode icon"
        onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Deepak
          <br />
          Kumar
        </h1>
        <h2>Front End Devloper</h2>

        <span>
          <a href="https://github.com/Deepak7kohli" target="_blank">
            <img src={githubIcon} alt="Git-hub Icon"/>  
          </a>

          <a href='https://www.linkedin.com/feed/' target="_blank">
            <img src={linkedin} alt="Linked Icon"/>  
          </a>
          
          <a href='https://x.com/home' target="_blank">
            <img src={xIcon} alt="X Icon"/>  
          </a>
        </span>
        <p className="style.description">
          With a passion for developing modern
          React web apps for commercial
          businesses. 
        </p>
        <a href={CV} download>
          <button className={styles.button}>Download CV</button>
        </a>
      </div>
    </section>
    
  );
}

export default Hero;










