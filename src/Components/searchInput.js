import React, { useState, useRef } from "react";

export default function InputSearch({
  widthCol = 4,
  onSearch,
  animated = false
}) {
  const inputRef = useRef("");
  const [open, setOpen] = useState(false);
  const handleKeyPress = e => {
    let value = inputRef.current.value;
    if (e.key === "Enter") {
      onSearch(value);
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={`col-lg-${widthCol}`}>
      {animated ? (
            <span className={`search-input-container ${open?"open-input":"close-input"}`}>
              <img
                className="icon"
                src="Icon/icons-search-white.png"
                style={{ position: "absolute", top: 10, left: 30 }}
                alt=""
                onClick={handleOpen}
              />
              <input
                ref={inputRef}
                className="search-input"
                type="text"
                placeholder="Search anything"
                onKeyPress={handleKeyPress}
                onBlur={handleClose}
              />
              <img
                className="icon close"
                src="Icon/icons-close-small-white.png"
                style={{ position: "absolute", top: 10, marginLeft: "-23pt" }}
                alt=""
              />
        </span>
      ) : (
        <span>
          <img
            className="icon"
            src="Icon/icons-search-white.png"
            style={{ position: "absolute", top: 10, left: 30 }}
            alt=""
          />
          <input
            ref={inputRef}
            className="search-input"
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
        </span>
      )}
    </div>
  );
}
