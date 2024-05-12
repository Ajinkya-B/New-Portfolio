import React from "react";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import ProfilePic from "../../assets/images/question.png";

export default function Experience() {
  return (
    <div
      id="experience"
      style={{ width: "60%", marginTop: "100px", position: "relative" }}
    >
      <img
        src={ProfilePic}
        className="hi"
        alt="Ajinkya"
        style={{
          height: "10em",
          position: "absolute",
          right: "-3rem",
          top: "0",
        }}
      />
      <span className="demo-1">Where I've worked</span>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">WSP Canada</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">UofT Seismic Design...</Nav.Link>
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
                        Developed a full-stack web app housing multiple web
                        tools, catering to the needs of over 200 employees
                      </li>
                      <li>
                        Leveraged the Adobe Platform Services API to deliver
                        data management and 3D Viewer web tools, improving
                        workflow efficiency for over 100 engineers
                      </li>
                      <li>
                        Integrated GitHub workflows into development lifecycle
                        to to Azure App Service
                      </li>
                      <li>
                        Enhanced the robustness of a C++ tool serving as an
                        Autodesk Revit extension
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
                        Maintained the front-end to deliver a comfortable and
                        easy-to-use UI/UX
                      </li>
                      <li>
                        Migrated to Firebase and developed REST API, reducing
                        locally stored data by 80%
                      </li>
                      <li>
                        Supported software development by following a Agile
                        methodology
                      </li>
                      <li>
                        Automated Plesk deployment with GitHub Actions and added
                        source code testing workflows
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
                  <p className="range">September 2019 - December 2019</p>
                  <div>
                    <ul>
                      <li>
                        Developed a mobile application, which provides quick
                        access to sales breakdowns for over 50 client-owned
                        businesses
                      </li>
                      <li>
                        Implemented a login authentication system using AUTH
                        token API
                      </li>
                      <li>
                        Used GET and PUT APIs to manage sales data for a
                        business
                      </li>
                      <li>
                        Reported over 20 critical bugs by creating detailed
                        reproduction steps
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
  );
}
