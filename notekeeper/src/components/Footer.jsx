import React from "react";

const divStyle = {
  position: "absolute",
  textAlign: "center",
  bottom: "0",
  width: "100%",
  height: "2.5rem",
};

const textStyle = {
  color: "#ccc",
};

function Footer() {
  return (
    <div style={divStyle}>
      <p style={textStyle}>Copywright @ 2024</p>
    </div>
  );
}

export default Footer;
