import React, { useState } from "react";
import ButtonCheck from './ButtonCheck';


export default ({ options, defaultValue = null, onChange, multiple= false }) => {
  const [value, setvalue] = useState(defaultValue);
  const onItemChange = (selected, value) => {
    selected&&setvalue(value)
    onChange(value)
    console.log(selected,value)
  };
  return (
    <div className="checkbox-group">
      {options.map(option => {
        return (
          <ButtonCheck
            checked={value===option.name}
            label={option.label}
            name={option.name}
            onChange={onItemChange}
          />
        );
      })}
    </div>
  );
};
