import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

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
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
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
          }}
        ></div>
      </div>
    </div>
  );
}
