import React from "react";
import { ImMail2 } from "react-icons/im";
import { FaEnvelope, FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function AppFooter() {
  return (
    <div
      style={{
        backgroundColor: "#f8e2e7",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        padding: "40px 22%",
      }}
      id="appFooter"
    >
      <div id="contact" className="box-shadow-full">
        <div className="row">
          <div className="col-md-6">
            <div className="title-box-2">
              <h5 className="title-left">Send A Message</h5>
            </div>
            <div>
              <form
                action="https://formspree.io/xdoeonlo"
                method="POST"
                className="contactForm"
              >
                <div id="errormessage"></div>
                <div className="row">
                  <div className="col-md-12 mb-3">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                        data-rule="minlen:4"
                        data-msg="Please enter at least 4 chars"
                      />
                      <div className="validation"></div>
                    </div>
                  </div>
                  <div className="col-md-12 mb-3">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        data-rule="email"
                        data-msg="Please enter a valid email"
                      />
                      <div className="validation"></div>
                    </div>
                  </div>
                  <div className="col-md-12 mb-3">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="subject"
                        id="subject"
                        placeholder="Subject"
                        data-rule="minlen:4"
                        data-msg="Please enter at least 8 chars of subject"
                      />
                      <div className="validation"></div>
                    </div>
                  </div>
                  <div className="col-md-12 mb-3">
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        name="message"
                        rows="5"
                        data-rule="required"
                        data-msg="Please write something for us"
                        placeholder="Message"
                      ></textarea>
                      <div className="validation"></div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <button className="no-link" type="submit">
                      <span
                        style={{
                          padding: "10px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          width: "200px",
                          backgroundColor: "#f8e2e7",
                        }}
                        className="about-button"
                      >
                        <ImMail2
                          style={{ marginRight: "10px" }}
                          className="about-button-icon"
                        />
                        GET IN TOUCH
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-6">
            <div className="title-box-2 pt-4 pt-md-0">
              <h5 className="title-left">Get in Touch</h5>
            </div>
            <div className="more-info">
              <p className="lead">
                Whether you want to get in touch, talk about a project
                collaboration, or just say hi, I'd love to hear from you.
                <br />
                Simply fill the from and send me an email.
              </p>
            </div>
            <div className="socials">
              <a
                href="https://www.linkedin.com/in/ajinkyabhosale-/"
                target="blank"
                className="no-link icon-hover"
              >
                <FaLinkedinIn size={"2em"} style={{ marginRight: "25px" }} />
              </a>
              <a
                href="https://github.com/Ajinkya-B"
                target="blank"
                className="no-link icon-hover"
              >
                <FaGithub size={"2em"} style={{ marginRight: "25px" }} />
              </a>
              <a
                href="mailto:ajinkya.bhosale85@gmail.com"
                target="blank"
                className="no-link icon-hover"
              >
                <FaEnvelope size={"2em"} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
