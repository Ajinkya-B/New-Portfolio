import React from "react";
import { TypeAnimation } from "react-type-animation";
import { TbSquareRoundedChevronDownFilled } from "react-icons/tb";
import { FaEnvelope, FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <div
      className="content-2"
      style={{
        height: "100%",
        backgroundColor: "#eff8e2",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          height: "100%",
          flex: "1",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "auto",
          }}
        >
          <h2 class="text_shadows">HEY! </h2>
          <div style={{ fontSize: "2.5em" }}>My name is Ajinkya.</div>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <span style={{ fontSize: "1.5em" }}>I'm a</span>
          <TypeAnimation
            sequence={[" developer", 1000, " leader", 1000, " innovator", 1000]}
            speed={50}
            style={{
              whiteSpace: "pre-line",
              fontSize: "1.5em",
              backgroundColor: "#f6aca2",
              fontWeight: "600",
              borderRadius: "10px",
            }}
            repeat={Infinity}
          />
        </div>

        <div style={{ marginTop: "40px" }}>
          <FaLinkedinIn size={"2em"} style={{ marginRight: "25px" }} />
          <FaGithub size={"2em"} style={{ marginRight: "25px" }} />
          <FaEnvelope size={"2em"} />
        </div>

        <a
          href="#about"
          style={{
            textDecoration: "none",
            marginTop: "auto",
            marginBottom: "20px",
          }}
        >
          <TbSquareRoundedChevronDownFilled
            style={{
              width: "3em",
              height: "3em",
              color: "black",
              transition: "all 0.3s ease-in-out",
            }}
            className="scroll-down"
          />
        </a>
      </div>
    </div>
  );
}
