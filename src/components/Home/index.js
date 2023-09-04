import React from "react";
import { TypeAnimation } from "react-type-animation";
import { ImMail2 } from "react-icons/im";

export default function Home() {
  return (
    <div className="content-2" style={{ height: "100%" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2 class="text_shadows">HEY</h2>

          <div style={{ fontSize: "2.5em" }}>My name is Ajinkya.</div>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <span style={{ fontSize: "1.5em" }}>I'm a</span>
          <TypeAnimation
            sequence={[" developer", 1000, " leader", 1000]}
            speed={50}
            style={{ whiteSpace: "pre-line", fontSize: "1.5em" }}
            repeat={Infinity}
          />
        </div>

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
