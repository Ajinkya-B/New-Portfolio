import React from "react";
import ProfilePic from "../../assets/images/profile-pic.jpg";
import { ImMail2 } from "react-icons/im";

export default function About() {
  return (
    <div
      id="about"
      className="dummy"
      style={{
        height: "100%",
        backgroundColor: "#F7F1E1",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span
        style={{
          fontSize: "5em",
          fontWeight: "800",
          textShadow: "rgba(0, 0, 0, 0.2) 10px 10px 0px",
          opacity: "1",
          color: "#F9DA89",
          marginBottom: "auto",
        }}
      >
        About
      </span>

      <div
        style={{
          marginBottom: "auto",
          display: "flex",
          flexDirection: "row",
          width: "50%",
        }}
      >
        <img
          src={ProfilePic}
          alt="Ajinkya"
          height={"350px"}
          style={{ borderRadius: "10px", marginRight: "30px" }}
        />
        <div>
          <h1>Who am I?</h1>
          <p>
            Greetings! I'm Ajinkya, a Software Engineer based in Toronto, ON who
            is experienced and passionate for crafting end-to-end software
            solutions.
          </p>
          <p>
            Currently, I'm pursuing my Computer Science degree at the University
            of Toronto, St. George, while actively contributing my skills at WSP
            Canada.
          </p>
          <p>
            My journey has involved building mobile and web applications,
            architecting robust backend systems, and orchestrating small-scale
            DevOps tasks. My commitment to transforming innovative ideas into
            practical solutions remains unwavering, as I continue to explore new
            horizons in the ever-evolving tech landscape.
          </p>
          <span
            style={{
              border: "solid 2px",
              padding: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "200px",
            }}
          >
            <ImMail2 style={{ marginRight: "10px" }} />
            GET IN TOUCH
          </span>
        </div>
      </div>
    </div>
  );
}
