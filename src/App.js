import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavbar from "./components/AppNavbar";
import Home from "./components/Home";
import SidebarImage from "./components/SidebarImage";

function App() {
  return (
    <div className="app-container">
      <div className="app">
        <AppNavbar />
        <div className="page-content-container">
          <div className="page-content">
            <SidebarImage />
            <Home />
            <div
              id="about"
              className="dummy"
              style={{
                height: "100%",
                backgroundColor: "#F7F1E1",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
