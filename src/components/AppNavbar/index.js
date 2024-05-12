import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function AppNavbar({ scrollHeight }) {
  return (
    <div>
      <Navbar
        expand="md"
        bg="dark"
        data-bs-theme="dark"
        className="bg-body-tertiary app-navbar animate__animated animate__rubberBand"
      >
        <Container>
          <Navbar.Brand href="#home" style={{ height: "100%" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "2.5em",
              }}
            >
              <div className="content">
                <h2>Ajinkya</h2>
                <h2>Ajinkya</h2>
              </div>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#experience">Work</Nav.Link>
              <Nav.Link href="#appFooter">Contact</Nav.Link>
              <Nav.Link
                href="https://www.linkedin.com/in/ajinkyabhosale-/"
                target="blank"
              >
                <div>
                  <FaGithub color="white" style={{ marginRight: "15px" }} />
                  <FaLinkedinIn color="white" />
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div
        style={{
          height: "6px",
          width: "100%",
          backgroundColor: "whitesmoke",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${scrollHeight}%`,
            backgroundColor: "orange",
            borderTopRightRadius: "2px",
            borderBottomRightRadius: "2px",
          }}
        ></div>
      </div>
    </div>
  );
}
