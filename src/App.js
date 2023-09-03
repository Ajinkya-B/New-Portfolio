import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavbar from "./components/AppNavbar";
import About from "./components/About";

function App() {
  return (
    <div className="app-container">
      <div className="app">
        <AppNavbar />
        <div className="page-content-container">
          <div className="page-content">
            <About />
            <div className="dummy" style={{ height: "1000px" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
