import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import AppNavbar from "./components/AppNavbar";
import Home from "./components/Home";
import SidebarImage from "./components/SidebarImage";
import About from "./components/About";

function App() {
  const languages = [
    "JavaScript",
    "HTML5",
    "CSS3",
    "Typescript",
    "Python",
    "Java",
    "PostgreSQL",
    "C",
  ];

  const frameworks = [
    "React.js",
    "Node.js",
    "Express.js",
    "Nest.js",
    "MongoDB",
    "React Native",
    "NumPy",
    "Pandas",
    "Dash",
  ];

  const devTools = [
    "Microsoft Azure",
    "App Service",
    "SQL Server",
    "Power BI",
    "GitHub",
    "Firebase",
    "Figma",
    "Postman",
  ];
  return (
    <div className="app-container">
      <div className="app">
        <AppNavbar />
        <div className="page-content-container">
          <div className="page-content">
            <SidebarImage />
            <Home />
            <About />
            <div
              style={{
                minHeight: "100%",
                backgroundColor: "#F3E2F8",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                paddingBottom: "40px",
              }}
            >
              <div
                style={{
                  width: "60%",
                  backgroundColor: "white",
                  borderRadius: "20px",
                  marginTop: "-80px",
                  boxShadow:
                    "rgba(0, 0, 0, 0.10) 1.95px 1.95px 2.6px, rgba(0, 0, 0, 0.05) -1.95px -1.95px 2.6px",
                  height: "100%",
                  padding: "20px",
                }}
              >
                <p
                  className="section-title"
                  style={{
                    textAlign: "center",
                    width: "100%",
                    fontWeight: "600",
                    fontSize: "1.5rem",
                  }}
                >
                  Skills
                </p>

                <p
                  style={{
                    color: "#3f51b5",
                    fontWeight: "600",
                    fontSize: "1.25rem",
                    marginTop: "20px",
                  }}
                >
                  Languages I speak:{" "}
                </p>
                <Container style={{ width: "100%" }}>
                  {languages.map((item, index) => (
                    <span className="tag me-3" key={index}>
                      {item}
                    </span>
                  ))}
                </Container>

                <p
                  style={{
                    color: "#3f51b5",
                    fontWeight: "600",
                    fontSize: "1.25rem",
                    marginTop: "10px",
                  }}
                >
                  Frameworks I use:{" "}
                </p>
                <Container style={{ width: "100%" }}>
                  {frameworks.map((item, index) => (
                    <span className="tag me-3" key={index}>
                      {item}
                    </span>
                  ))}
                </Container>

                <p
                  style={{
                    color: "#3f51b5",
                    fontWeight: "600",
                    fontSize: "1.25rem",
                    marginTop: "10px",
                  }}
                >
                  Dev Tools:{" "}
                </p>
                <Container style={{ width: "100%" }}>
                  {devTools.map((item, index) => (
                    <span className="tag me-3" key={index}>
                      {item}
                    </span>
                  ))}
                </Container>
              </div>
              <div style={{ width: "60%", marginTop: "100px" }}>
                <span className="demo-1">Where I've worked</span>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                  <Row>
                    <Col sm={3}>
                      <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                          <Nav.Link eventKey="first">WSP Canada</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">
                            UofT Seismic Design...
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third">HIPPOS Software</Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Col>
                    <Col sm={9}>
                      <Tab.Content>
                        <Tab.Pane eventKey="first">
                          <div className="hSMFmU fade-enter-done">
                            <h3>
                              <span>Software Engineer</span>
                              <span className="company">
                                &nbsp;@&nbsp;
                                <a
                                  href="https://www.jet-contractors.com/"
                                  className="inline-link"
                                  rel="noopener noreferrer"
                                  target="_blank"
                                >
                                  WSP Canada
                                </a>
                              </span>
                            </h3>
                            <p className="range">Mar 2020 - Present</p>
                            <div>
                              <ul>
                                <li>
                                  Developing Web applications with Spring
                                  Framework
                                </li>
                                <li>
                                  Maintain the performance of applications
                                  developed using spring boot and angular
                                </li>
                                <li>
                                  Refactoring the code of a scalable web
                                  application from Angularjs to Angular
                                </li>
                                <li>
                                  Collaborate with the UX/UI team to design and
                                  develop a REST API
                                </li>
                              </ul>
                            </div>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <div className="hSMFmU fade-enter-done">
                            <h3>
                              <span>Software Engineer</span>
                              <span className="company">
                                &nbsp;@&nbsp;
                                <a
                                  href="https://www.jet-contractors.com/"
                                  className="inline-link"
                                  rel="noopener noreferrer"
                                  target="_blank"
                                >
                                  UofT Seismic Design Team
                                </a>
                              </span>
                            </h3>
                            <p className="range">Mar 2020 - Present</p>
                            <div>
                              <ul>
                                <li>
                                  Developing Web applications with Spring
                                  Framework
                                </li>
                                <li>
                                  Maintain the performance of applications
                                  developed using spring boot and angular
                                </li>
                                <li>
                                  Refactoring the code of a scalable web
                                  application from Angularjs to Angular
                                </li>
                                <li>
                                  Collaborate with the UX/UI team to design and
                                  develop a REST API
                                </li>
                              </ul>
                            </div>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <div className="hSMFmU fade-enter-done">
                            <h3>
                              <span>Software Engineer</span>
                              <span className="company">
                                &nbsp;@&nbsp;
                                <a
                                  href="https://www.jet-contractors.com/"
                                  className="inline-link"
                                  rel="noopener noreferrer"
                                  target="_blank"
                                >
                                  HIPPOS Software
                                </a>
                              </span>
                            </h3>
                            <p className="range">Mar 2020 - Present</p>
                            <div>
                              <ul>
                                <li>
                                  Developing Web applications with Spring
                                  Framework
                                </li>
                                <li>
                                  Maintain the performance of applications
                                  developed using spring boot and angular
                                </li>
                                <li>
                                  Refactoring the code of a scalable web
                                  application from Angularjs to Angular
                                </li>
                                <li>
                                  Collaborate with the UX/UI team to design and
                                  develop a REST API
                                </li>
                              </ul>
                            </div>
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Col>
                  </Row>
                </Tab.Container>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
