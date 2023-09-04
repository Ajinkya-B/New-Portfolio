import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavbar from "./components/AppNavbar";
import About from "./components/About";

function App() {
  const [rotate, setRotate] = useState(0);
  return (
    <div className="app-container">
      <div className="app">
        <AppNavbar />
        <div className="page-content-container">
          <div className="page-content">
            <div className="bg-image">
              <img
                style={{
                  transform: `rotate(${rotate}deg)`,
                  transformOrigin: "right top",
                }}
                src="https://th.bing.com/th/id/R.a955733fe7dd92597a9857ddc0b108ee?rik=tbkv76DsQRdfHw&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fcartoon-earth-transparent%2fcartoon-earth-transparent-15.png&ehk=N6lnTsE6EF57J45C%2bMhy5q9RqA46SHhlO6dSKqxgYYA%3d&risl=1&pid=ImgRaw&r=0"
                alt="BackgroundImage"
              />
            </div>
            <About />
            <div className="dummy" style={{ height: "1000px" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
