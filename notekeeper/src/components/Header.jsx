import React from "react";

const divStyle = {
  backgroundColor: "#f5ba13",
  margin: "auto -16px",
  padding: "16px 32px",
  boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.3)",
};

const textStyle = {
  color: "#fff",
  fontFamily: "McLaren, cursive",
  fontWeight: 200,
};

function Header() {
  return (
    <div style={divStyle}>
      <h1 style={textStyle}>Notekeeper</h1>
    </div>
  );
}

export default Header;
