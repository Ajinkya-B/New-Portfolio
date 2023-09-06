import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavbar from "./components/AppNavbar";
import Home from "./components/Home";
import SidebarImage from "./components/SidebarImage";
import About from "./components/About";

function App() {
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
                height: "100%",
                backgroundColor: "#F3E2F8",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: "60%",
                  backgroundColor: "#fafafa",
                  borderRadius: "20px",
                  marginTop: "-80px",
                  boxShadow:
                    "rgba(0, 0, 0, 0.10) 1.95px 1.95px 2.6px, rgba(0, 0, 0, 0.05) -1.95px -1.95px 2.6px",
                  height: "90%",
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

                    marginTop: "40px",
                  }}
                >
                  Languages I speak:{" "}
                </p>

                <p
                  style={{
                    color: "#3f51b5",
                    fontWeight: "600",
                    fontSize: "1.25rem",
                  }}
                >
                  Dev Tools:{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
