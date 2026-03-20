import Styles from "./footerStyles.module.css";
import linkedinIcon from "../../assets/linkedin-light.svg";
import githubIcon from "../../assets/github-light.svg";

function Footer() {
  return (
    <footer id="footer" className={Styles.container}>
      <div className={Styles.content}>
        <div className={Styles.brand}>Deepak.dev</div>
        <p className={Styles.copyright}>
          &copy; 2026 Deepak Kumar. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
