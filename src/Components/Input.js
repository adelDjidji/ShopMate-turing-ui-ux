import React, { useRef } from "react";

export default function InputSearch({
  widthCol = 4,
  onChange,
  iconSrc,
  placeholder,
  reset,
  theme= "dark",
  style,
}) {
  const inputRef = useRef("");
  const handleKeyPress = e => {
    let value = inputRef.current.value;
    onChange && onChange(value);
  };

  return (
    <div className={`col-lg-${widthCol}`}>
      <img
        className="icon"
        src={iconSrc}
        style={{ position: "absolute", top: 10, left: 30 }}
        alt=""
      />
      <input
        ref={inputRef}
        className={`${theme}-input`}
        type="text"
        placeholder={placeholder}
        onKeyPress={handleKeyPress}
        style={style}
      />
      {reset && (
        <img
          className="icon"
          src="Icon/icons-close-small-white.png"
          style={{ position: "absolute", top: 10, marginLeft: "-23pt" }}
          alt=""
        />
      )}
    </div>
  );
}
