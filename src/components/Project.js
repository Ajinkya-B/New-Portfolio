import React from "react";
import Container from "react-bootstrap/Container";

export default function Project({ title, content, skillsList }) {
  return (
    <div
      style={{
        borderRadius: "6px",
        display: "flex",
        flexDirection: "flex-row",
        width: "100%",
        margin: "10px",
        padding: "24px 32px",
        color: "black",
        backgroundColor: "#fafafa",
      }}
      className="test124"
    >
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            color: "#7e57c2",
            fontSize: "22px",
            fontWeight: "500",
            marginLeft: "5px",
          }}
        >
          {title}
        </div>
        <div style={{ flex: "1", display: "flex", flexDirection: "column" }}>
          <p
            style={{
              color: "#757575",
              fontWeight: "400",
              margin: "0",
              marginLeft: "5px",
              fontSize: "16px",
              fontStyle: "italic",
              marginBottom: "10px",
              flex: "1",
            }}
          >
            {content}
          </p>

          <Container>
            {skillsList?.map((item, index) => {
              return (
                <span
                  className="me-3"
                  style={{
                    display: "inline-block",
                    whiteSpace: "pre-line",
                    padding: "2px 5px",
                    backgroundColor: "#283593",
                    color: "white",
                    borderRadius: "5px",
                    fontSize: "13px",
                    fontWeight: "600",
                    marginBottom: "0.5rem",
                  }}
                  key={index}
                >
                  {item.toUpperCase()}
                </span>
              );
            })}
          </Container>
        </div>
      </div>
    </div>
  );
}
