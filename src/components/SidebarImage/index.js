import React from "react";
import EarthPic from "../../assets/images/earth.png";

export default function SidebarImage() {
  return (
    <div className="bg-image fade-in-bounce">
      <img src={EarthPic} alt="BackgroundImage" />
    </div>
  );
}
