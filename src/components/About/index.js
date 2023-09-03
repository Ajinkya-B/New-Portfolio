import React from "react";
import { TypeAnimation } from "react-type-animation";

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
    </div>
  );
}
