import React from "react";
import "./styles/button.css";

export default ({ label, onClick, white, style }) => {
  return (
    <button
      style={style}
      onClick={onClick}
      className={`btn ${white ? "white" : ""}`}
    >
      {label}
    </button>
  );
};
