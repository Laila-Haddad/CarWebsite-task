import React from "react";
import "./QuantitySelector.css";
import { useTheme } from "../../contexts/ThemeProvider";


const QuantitySelector = ({ quantity, handleQuantityChange }) => {

  const {theme} = useTheme()
  const increment = () => {
    handleQuantityChange(Math.max(1, quantity + 1));
  };

  const decrement = () => {
    handleQuantityChange(Math.max(1, quantity - 1));
  };

  return (
    <div className="counter">
      <button className="quantity-button plus bordered-btn" onClick={decrement}>
        -
      </button>
      <input
        type="number"
        className="quantity-input"
        value={quantity}
        onChange={(e) => handleQuantityChange(parseInt(e.target.value, 10))}
        min="1" 
        disabled
        style={theme==='dark'? {color: "white"}: null}
      />
      <button className="quantity-button minus filled-btn" onClick={increment}>
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
