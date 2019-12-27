import React, { useState } from "react";
import InputRadio from "../Components/InputRadio";
import ButtonCheck from "../Components/ButtonCheck";
import InputRange from "../Components/InputRange";
import CheckboxGroup from "../Components/CheckboxGroup";
import RadioGroup from "../Components/RadioGroup";
import ButtonCheckGroup from "../Components/ButtonCheckGroup";
import Button from "../Components/Button";

export default ({ NbItems = 0 }) => {
  const [color, setcolor] = useState("blue");
  const [size, setsize] = useState("M");
  const handleApplyFilters = () => {
    console.log("apply filters");
  };

  const handleColorChange = value => {
    console.log(value)
    setcolor(value);
  };
  const handleSizeChange = value => {
    setcolor(value);
  };
  const checkBoxOptions = [
    { name: "Abdercobi", label: "Abdercobi" },
    { name: "Abdercobi2", label: "Abdercobi2" },
    { name: "Abdercobi3", label: "Abdercobi3" },
    { name: "Abdercobi4", label: "Abdercobi4" },
    { name: "Abdercobi5", label: "Abdercobi5" },
    { name: "Abdercobi6", label: "Abdercobi6" }
  ];
  const SizeOptions = [
    { name: "XS", label: "XS" },
    { name: "S", label: "S" },
    { name: "M", label: "M" },
    { name: "L", label: "L" },
    { name: "XL", label: "XL" },
    { name: "XXL", label: "XXL" }
  ];
  const ColorOptions = [
    { name: "filterColor", label: null, theme: "blue" },
    { name: "filterColor", label: null, theme: "cyan" },
    { name: "filterColor", label: null, theme: "red" },
    { name: "filterColor", label: null, theme: "orange" },
    { name: "filterColor", label: null, theme: "yellow" },
    { name: "filterColor", label: null, theme: "green" },
    { name: "filterColor", label: null, theme: "purple" }
  ];
  return (
    <div className="filters">
      <div className="filters-header">
        <h3>
          <b>Filter {NbItems} items</b>
        </h3>
      </div>
      <div className="filters-body">
        <h3 className="filter-title">Color</h3>
        <RadioGroup
          options={ColorOptions}
          defaultValue={color}
          onChange={handleColorChange}
        />

        <h3 className="filter-title">Size</h3>
        <ButtonCheckGroup
          options={SizeOptions}
          defaultValue={size}
          onChange={handleSizeChange}
        />

        <h3 className="filter-title">Price</h3>
        <InputRange />

        <h3 className="filter-title">Brand</h3>

        <CheckboxGroup options={checkBoxOptions} defaultValue={[]} />

        <Button onClick={handleApplyFilters} label="Apply" />
      </div>
    </div>
  );
};
