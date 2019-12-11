import React, { useState } from "react";
import InputRadio from "./InputRadio";

export default ({ options, defaultValue, onChange }) => {
  const [value, setvalue] = useState(defaultValue);
  const onItemChange = e => {
        setvalue(e.target.value);
        onChange&&onChange(e.target.value)
  };
  return (
    <div className="radio-group">
      {options.map(option => {
        return (
          <InputRadio
            name={option.name}
            theme={option.theme}
            value={option.theme}
            onChange={onItemChange}
            checked={value === option.theme}
          />
        );
      })}
    </div>
  );
};
