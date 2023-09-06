import React from "react";
import ProfilePic from "../../assets/images/profile-pic.jpg";
import { ImMail2 } from "react-icons/im";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function About() {
  return (
    <div
      id="about"
      className="dummy"
      style={{
        minHeight: "100%",
        backgroundColor: "#F7F1E1",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        paddingBottom: "100px",
      }}
    >
      <span
        style={{
          fontSize: "5em",
          fontWeight: "800",
          textShadow: "rgba(0, 0, 0, 0.2) 10px 10px 0px",
          opacity: "1",
          color: "#F9DA89",
          marginBottom: "auto",
        }}
      >
        About
      </span>

      <Container
        style={{
          marginBottom: "auto",
          width: "50%",
        }}
      >
        <Row>
          <Col lg={5}>
            <img
              src={ProfilePic}
              alt="Ajinkya"
              // height={"350px"}
              width={"100%"}
              style={{ borderRadius: "10px", marginRight: "30px" }}
            />
          </Col>

          <Col lg={7}>
            <div>
              <h1>Who am I?</h1>
              <p>
                Greetings! I'm Ajinkya, a Software Engineer based in Toronto, ON
                who is experienced and passionate for crafting end-to-end
                software solutions.
              </p>
              <p>
                Currently, I'm pursuing my Computer Science degree at the
                University of Toronto, St. George, while actively contributing
                my skills at WSP Canada.
              </p>
              <p>
                My journey has involved building mobile and web applications,
                architecting robust backend systems, and orchestrating
                small-scale DevOps tasks. My commitment to transforming
                innovative ideas into practical solutions remains unwavering, as
                I continue to explore new horizons in the ever-evolving tech
                landscape.
              </p>
              <span
                style={{
                  border: "solid 2px",
                  padding: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "200px",
                }}
              >
                <ImMail2 style={{ marginRight: "10px" }} />
                GET IN TOUCH
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
