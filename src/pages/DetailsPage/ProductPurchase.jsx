import React, { useState } from "react";
import "./DetailsPage.css";
import ColorSelector from "../../components/ColorSelector/ColorSelector";
import QuantitySelector from "../../components/QuantitySelector/QuantitySelector";
import {addToCart} from "../../utils/api"

const ProductPurchase = ({ colors, price , item}) => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [finalPrice, setFinalPrice] = useState(price);

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const handleQuantityChange = (number) => {
    setQuantity(number);
    setFinalPrice(price * number )
  };

  const addCart = () => {
    const data= {...item, colors: selectedColor , quantity:quantity}
    addToCart(data)
  };

  const buyNow = () => {
    // console.log("Buy now:", { selectedColor, quantity });
  };

  return (
    <div className="product-purchase-info">
      <div>
        <h6>Colors</h6>
        <ColorSelector
          handleColorSelect={handleColorSelect}
          colors={colors}
          selectedColor={selectedColor}
        />
      </div>

      <div className="quantity-price">
        <QuantitySelector
          quantity={quantity}
          handleQuantityChange={handleQuantityChange}
        />
        <h6 className="price">Price: {finalPrice} $</h6>
      </div>

      <div className="action-buttons">
        <button className="bordered-btn" onClick={addCart}>
          Add To Cart
        </button>
        <button className="filled-btn" style={{marginLeft: "20px"}} onClick={buyNow}>
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductPurchase;
