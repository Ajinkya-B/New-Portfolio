import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaEnvelope, FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Home({ scrollHeight }) {
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
            marginBottom: "32px",
          }}
        >
          {/* <h2 class="text_shadows">HEY! </h2> */}
          <div
            style={{
              fontSize: "calc((22 / 16) * 1rem)",
              letterSpacing: "2px",
            }}
          >
            AJINKYA BHOSALE
          </div>
          <span
            style={{ width: "400px", height: "1px", backgroundColor: "#000" }}
          ></span>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <span style={{ fontSize: "4em" }}>I'm a </span>
          <TypeAnimation
            sequence={[" developer", 1000, " leader", 1000, " innovator", 1000]}
            speed={10}
            style={{
              whiteSpace: "pre-line",
              fontSize: "4em",
              backgroundColor: "#f6aca2",
              fontWeight: "600",
              borderRadius: "10px",
            }}
            repeat={Infinity}
          />
        </div>

        <div style={{ marginTop: "40px" }}>
          <a
            href="https://www.linkedin.com/in/ajinkyabhosale-/"
            target="blank"
            className="no-link icon-hover"
          >
            <FaLinkedinIn size={"2em"} style={{ marginRight: "25px" }} />
          </a>
          <a
            href="https://github.com/Ajinkya-B"
            target="blank"
            className="no-link icon-hover"
          >
            <FaGithub size={"2em"} style={{ marginRight: "25px" }} />
          </a>
          <a
            href="mailto:ajinkya.bhosale85@gmail.com"
            target="blank"
            className="no-link icon-hover"
          >
            <FaEnvelope size={"2em"} />
          </a>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "auto",
            marginBottom: "50px",
          }}
        >
          <a
            href="#about"
            data-status="entered"
            data-hidden={scrollHeight > 20 ? true : false}
            className="mouseAnime"
          >
            <span
              className="testanime"
              style={{
                width: "2px",
                height: "8px",
                background: "rgb(246, 172, 162)",
                borderRadius: "4px",
                marginTop: "6px",
                marginLeft: "1px",
              }}
            ></span>
          </a>
        </div>
      </div>
    </div>
  );
}
