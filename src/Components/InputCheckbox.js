import React from "react";

export default ({ label, onChange, name, key, checked = false }) => {
  const handleChange = e => {
    // if(e.target.checked) {
    onChange(e.target.checked, e.target.value);
    // }
  };
  return (
    <span className="checkbox-item">
      <input
        onChange={handleChange}
        type="checkbox"
        value={name}
        id={`${name}-${key}`}
        checked={checked}
      />
      <label htmlFor={`${name}-${key}`}>{label}</label>
    </span>
  );
};
