import React, { useState } from "react";
import InputCheckbox from "./InputCheckbox";
import "./styles/checkboxGroup.css";

export default ({ options, defaultValue = [] }) => {
  const [values, setvalues] = useState(defaultValue);
  const onItemChange = (selected, value) => {
    if (selected) setvalues([...values, value]);
    else setvalues(values.filter(item => item !== value));
    console.log(values);
  };
  return (
    <div className="checkbox-group">
      {options.map(option => {
        return (
          <InputCheckbox
            checked={values.includes(option.name)}
            label={option.label}
            name={option.name}
            onChange={onItemChange}
          />
        );
      })}
    </div>
  );
};
