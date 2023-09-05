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
      <div style={{ marginBottom: "auto" }}>
        <img
          src={ProfilePic}
          alt="Ajinkya"
          height={"300px"}
          style={{ borderRadius: "10px" }}
        />
        <span>Hi my name is AJ</span>
        <span
          style={{
            border: "solid 2px",
            padding: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ImMail2 style={{ marginRight: "10px" }} />
          GET IN TOUCH
        </span>
      </div>
    </div>
  );
}
