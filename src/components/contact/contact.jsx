import React from "react";
import "./contact.css";
import { FaTelegramPlane } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import Fade from "react-reveal/Fade";

export default function Contact() {
  
  return (
    <div style={{ backgroundColor: "hsl(240, 100%, 99%)" }}>
    <div id="contact" className="ContactSection">
      <div className="contact">
        {" "}
        <Fade top>
          <h3 className="contact-header">Reach Out to Us</h3>
        </Fade>
        <hr className="contact-line" />
        <br />
        <Fade bottom>
          <form className="form-floating">
            <div className="form-floating mb-3">
              <input
                name="name"
                type="text"
                className="form-control"
                id="floatingInput"
                required
              />
              <label htmlFor="floatingInput">Name</label>
            </div>

            <div className="form-floating mb-3">
              <input
                name="email"
                type="email"
                className="form-control"
                id="floatingInput"
                required
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                required
              />
              <label htmlFor="floatingInput">Subject</label>
            </div>

            <div className="form-floating">
              <textarea
                className="form-control"
                name="message"
                placeholder="Leave a comment here"
                id="floatingTextarea2"
                style={{ height: 100 }}
              />
              <label htmlFor="floatingInput">Message</label>
            </div>
            <button type="submit" className="contactBtn">
              Send <FaTelegramPlane style={{ fontSize: "16px" }} />
            </button>
          </form>
        </Fade>
      </div>
    </div>
    </div>
  );
}
