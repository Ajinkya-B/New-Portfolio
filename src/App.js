import "./App.css";
import "animate.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavbar from "./components/AppNavbar";
import Home from "./components/Home";
import SidebarImage from "./components/SidebarImage";
import About from "./components/About";
import Projects from "./components/Projects";
import AppFooter from "./components/AppFooter";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Loading from "./components/Loading/Loading.js";
import { useState, useEffect } from "react";

function App() {
  const [scroll, setScroll] = useState(0);
  const onScroll = () => {
    const scrollTop = document.getElementById("test").scrollTop;

    setScroll(scrollTop);
  };
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="app-container">
      {loading ? (
        <Loading />
      ) : (
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
                <Skills />
                <Experience />
              </div>

              <Projects />
              <AppFooter />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
