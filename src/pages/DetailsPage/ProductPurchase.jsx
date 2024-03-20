import React, { useState, useContext } from "react";
import "./DetailsPage.css";
import ColorSelector from "../../components/ColorSelector/ColorSelector";
import QuantitySelector from "../../components/QuantitySelector/QuantitySelector";
import CartContext from "../../contexts/CartProvider";
import Alert from "../../components/Alert/Alert";

const ProductPurchase = ({ colors, price, item }) => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [finalPrice, setFinalPrice] = useState(price);
  const { addToCart } = useContext(CartContext);

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const handleQuantityChange = (number) => {
    setQuantity(number);
    setFinalPrice(price * number);
  };

  const addCart = () => {
    const data = { ...item, colors: selectedColor, quantity: quantity };
    addToCart(data);

    const newMessage =
      quantity > 1
        ? `${quantity} Items have been added!`
        : "Item has been added!";
    setAlertMessage(newMessage);
    setShowAlert(true);
  };

  const buyNow = () => {};

  return (
    <div className="product-purchase-info">
      <div onClick={() => setShowAlert(false)}>
        <h6>Colors</h6>
        <ColorSelector
          handleColorSelect={handleColorSelect}
          colors={colors}
          selectedColor={selectedColor}
        />
      </div>

      <div className="quantity-price" onClick={() => setShowAlert(false)}>
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
        <button
          className="filled-btn"
          style={{ marginLeft: "20px" }}
          onClick={addCart}
        >
          Buy Now
        </button>
        <Alert
          message={alertMessage}
          show={showAlert}
          onClose={() => setShowAlert(false)}
        />
      </div>
    </div>
  );
};

export default ProductPurchase;
