import React from "react";
import Project from "../Project.js";
import ProfilePic from "../../assets/images/test-project.webp";

// TODO: Add off canvas for each projects to show additional info using react bootstrap offcanvas

export default function Projects() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#e2f8f3",
      }}
    >
      <div
        className="leadership"
        style={{
          padding: "100px 20%",
          width: "100%",
        }}
      >
        <span style={{ float: "right", padding: "10px", height: "100%" }}>
          <img src={ProfilePic} alt="MyImage" width={90} />
        </span>
        <div
          className="container"
          style={{
            padding: "5%",
          }}
        >
          <h3
            className=" tg__title-5--s tg__title-4--m tg__title-4--l tg__t--center--s leadership__title "
            style={{ fontWeight: "600", marginBottom: "40px" }}
          >
            Here are my favorite projects
          </h3>
          <Project
            title={"Secure Spaces"}
            content={
              "A system that aims to provide a secure solution for university students to protect their belongings in shared study spaces"
            }
            skillsList={[
              "React Native",
              "TypeScript",
              "Node.js",
              "Arduino",
              "C++",
            ]}
          />
          <Project
            title={"Ghost Board; Analytics Dashboard of ChatBots"}
            content={`An analytics dashboard that delivers clarity for businesses on Voiceflow, shedding light on why users leave chatbot conversations`}
            skillsList={[
              "React.js",
              "Node.js",
              "Express.js",
              "MongoDB",
              "REST API",
              "Netlify",
              "Google Cloud",
            ]}
          />
          <Project
            title={"2048 bot; Applying Reinforcement Learning"}
            content={
              "Worked alongside 2 students to develop a RL bot for the game 2048 using algorithms like Monte Carlo Search Trees, SARSA, and Deep-Q Learning"
            }
            skillsList={["Python", "Numpy", "Pandas", "Sklearn", "matplotlib"]}
          />
        </div>
      </div>
    </div>
  );
}
