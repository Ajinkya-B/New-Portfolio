import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
