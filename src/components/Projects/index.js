import React from "react";
import Project from "../Project.js";
import ProfilePic from "../../assets/images/test-project.webp";

// TODO: Add off canvas for each projects to show additional info using react bootstrap offcanvas

export default function Projects() {
  return (
    <div
      className="leadership"
      style={{
        padding: "100px 20%",
        width: "100%",
      }}
    >
      <span style={{ float: "right", padding: "10px", height: "100%" }}>
        <img src={ProfilePic} alt="Really good picture" width={90} />
      </span>
      <div
        className="container"
        style={{
          backgroundColor: "whitesmoke",
          padding: "5%",
          borderRadius: "10px",
          backgroundColor: "#f8e2e7",
        }}
      >
        <h3
          className=" tg__title-5--s tg__title-4--m tg__title-4--l tg__t--center--s leadership__title "
          style={{ color: "#3f51b5", fontWeight: "600" }}
        >
          Project Work
        </h3>
        <Project
          title={"Secure Spaces"}
          content={
            "A system that aims to provide a secure solution for users to protect their belongings in shared study spaces"
          }
        />
        <Project
          title={"Ghost Board; ChatBot Analytics Dashboard"}
          content={"content"}
        />
        <Project
          title={"2048 bot; Using Reinforcement Learning"}
          content={"content"}
        />
      </div>
    </div>
  );
}
