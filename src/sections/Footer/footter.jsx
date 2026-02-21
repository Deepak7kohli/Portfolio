import Styles from "./footerStyles.module.css";

function footter() {
  return (
    <section id="footer" className={Styles.container}>
      <p>
        &copy; 2026. Deepak Kummar. <br />
        All rights reserved.
      </p>
    </section>
  );
}

export default footter;
