import Styles from "./ContactStyles.module.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_7qsbbl1",
      "template_0m6hsza",
      form.current,
      {
        publicKey: "fAQNg5nQZ8WW2X_Eg",
      }
    )
      .then(
        () => {
          alert("Message Sent Successfully ✅");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send ❌");
          console.log(error);
        }
      );
  };

  return (
    <section id="contact" className={Styles.container}>
      <h1 className="sectionTitle">Get In Touch</h1>
      <p className={Styles.description}>
        I'm always open to discussing product design work or partnership opportunities.
      </p>

      <a href="mailto:deepakdkay201617@gmail.com" className={Styles.emailLink}>
        deepakdkay201617@gmail.com
      </a>

      <form ref={form} onSubmit={sendEmail} className={Styles.contactForm}>
        <div className={Styles.formGroup}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className={Styles.input}
          />
        </div>

        <div className={Styles.formGroup}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className={Styles.input}
          />
        </div>

        <div className={Styles.formGroup}>
          <textarea
            name="message"
            placeholder="Message"
            required
            className={Styles.textarea}
          ></textarea>
        </div>

        <input type="submit" className={`btn ${Styles.submitBtn}`} value="Submit" />
      </form>
    </section>
  );
}

export default Contact;