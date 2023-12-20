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
import Projects from "./components/Projects";
import AppFooter from "./components/AppFooter";
import { useState } from "react";

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
  const [scroll, setScroll] = useState(0);
  const onScroll = () => {
    const scrollTop = document.getElementById("test").scrollTop;

    setScroll(scrollTop);
  };

  return (
    <div className="app-container">
      <div className="app">
        <AppNavbar />
        <div className="page-content-container">
          <div className="page-content" onScroll={onScroll} id="test">
            <SidebarImage />
            <Home scrollHeight={scroll} />
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
                                  WSP in Canada
                                </a>
                              </span>
                            </h3>
                            <p className="range">May 2023 - August 2023</p>
                            <div>
                              <ul>
                                <li>
                                  Developed a full-stack web app housing
                                  multiple web tools, catering to the needs of
                                  over 200 employees
                                </li>
                                <li>
                                  Leveraged the Adobe Platform Services API to
                                  deliver data management and 3D Viewer web
                                  tools, improving workflow efficiency for over
                                  100 engineers
                                </li>
                                <li>
                                  Integrated GitHub workflows into development
                                  lifecycle to to Azure App Service
                                </li>
                                <li>
                                  Enhanced the robustness of a C++ tool serving
                                  as an Autodesk Revit extension
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
                            <p className="range">September 2022 - Present</p>
                            <div>
                              <ul>
                                <li>
                                  Maintained the front-end to deliver a
                                  comfortable and easy-to-use UI/UX
                                </li>
                                <li>
                                  Migrated to Firebase and developed REST API,
                                  reducing locally stored data by 80%
                                </li>
                                <li>
                                  Supported software development by following a
                                  Agile methodology
                                </li>
                                <li>
                                  Automated Plesk deployment with GitHub Actions
                                  and added source code testing workflows
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
                            <p className="range">
                              September 2019 - December 2019
                            </p>
                            <div>
                              <ul>
                                <li>
                                  Developed a mobile application, which provides
                                  quick access to sales breakdowns for over 50
                                  client-owned businesses
                                </li>
                                <li>
                                  Implemented a login authentication system
                                  using AUTH token API
                                </li>
                                <li>
                                  Used GET and PUT APIs to manage sales data for
                                  a business
                                </li>
                                <li>
                                  Reported over 20 critical bugs by creating
                                  detailed reproduction steps
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

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                backgroundColor: "#e2f8f3",
              }}
            >
              <Projects />
            </div>
            <AppFooter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
