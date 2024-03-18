import React from "react";
import "./ColorSelector.css"

const ColorSelector = ({ handleColorSelect, colors , selectedColor }) => {

  return (
    <div className="color-selector">
      {colors.map((color) => (
        <button
          key={color} 
          className={`color-button ${
            selectedColor === color ? "selected" : ""
          }`}
          style={{ backgroundColor: color }}
          onClick={() => handleColorSelect(color)}
        />
      ))}
    </div>
  );
};

export default ColorSelector;
