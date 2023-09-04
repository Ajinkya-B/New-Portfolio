import React from "react";
import { TypeAnimation } from "react-type-animation";
import { ImMail2 } from "react-icons/im";

export default function About() {
  return (
    <div class="content-2">
      <h2 class="text_shadows">hey</h2>
      <div style={{ fontSize: "2em" }}>My name is Ajinkya.</div>
      <div>
        I'm a
        <TypeAnimation
          sequence={[" developer", 1000, " leader", 1000]}
          speed={50}
          style={{ whiteSpace: "pre-line", fontSize: "1em" }}
          repeat={Infinity}
        />
      </div>

      <span style={{ border: "solid 2px", padding: "10px" }}>
        <ImMail2 />
        GET IN TOUCH
      </span>
    </div>
  );
}
