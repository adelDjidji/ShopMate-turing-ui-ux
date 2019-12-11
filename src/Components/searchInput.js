import React, { useState, useRef } from "react";

export default function InputSearch({ widthCol = 4, onSearch }) {
  const inputRef = useRef("");
  const handleKeyPress = e => {
    let value = inputRef.current.value;
    if (e.key === "Enter") {
      onSearch(value);
    }
  };

  return (
    <div className={`col-lg-${widthCol}`}>
      <img
        className="icon"
        src="Icon/icons-search-white.png"
        style={{ position: "absolute", top: 10, left: 30 }}
        alt=""
      />
      <input
        ref={inputRef}
        className="dark-input"
        type="text"
        placeholder="Search anything"
        // onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        // value={CurrentValue}
      />
      <img
        className="icon"
        src="Icon/icons-close-small-white.png"
        style={{ position: "absolute", top: 10, marginLeft: "-23pt" }}
        alt=""
      />
    </div>
  );
}
