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
      <h1 className="sectionTitle">Contact</h1>
      <br />
      <br />

      <form ref={form} onSubmit={sendEmail}>
        <div className="formGroup">
          <input
            type="text"
            name="name"
            placeholder="Enter your Name"
            required
          />
        </div>

        <div className="formGroup">
          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            required
          />
        </div>

        <div className="formGroup">
          <textarea
            name="message"
            placeholder="Enter your Message"
            required
          ></textarea>
        </div>

        <input type="submit" className="hover btn" value="Submit" />
      </form>
    </section>
  );
}

export default Contact;