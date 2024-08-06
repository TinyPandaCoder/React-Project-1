import "./contact.css";
import Lottie from "lottie-react";
import { useForm, ValidationError } from "@formspree/react";
import done from "../../../public/animation/done.json";
import email from "../../../public/animation/email.json";

const Contact = () => {
  const [state, handleSubmit] = useForm("xeojkjqe");
  return (
    <section className="contact-us">
      <h1 className="title">
        <span className="icon-envelope"></span>
        Contact Us
      </h1>
      <p className="sub-title">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident id
        quis vitae autem?
      </p>
      <div className="flex">
        <form onSubmit={handleSubmit} >
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input required type="email" id="email" name="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message">Your Message:</label>
            <textarea required name="message" id="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button type="submit" disabled={state.submitting} className="submit">
            {state.submitting ? "Submitting...." : "Submit"}
          </button>
          {state.succeeded && (
            <h3
              className="flex"
              style={{ marginTop: "20px", color: "#999", columnGap: "5px" }}
            >
              <Lottie
                style={{ height: 30 }}
                animationData={done}
                loop={false}
              />
              I recieved your Message, Thanks!
            </h3>
          )}
        </form>

      </div>
    </section>
  );
};

export default Contact;
