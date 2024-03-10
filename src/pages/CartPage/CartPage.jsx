import React, { useState, useEffect } from "react";
import "./CartPage.css";
import ProductDisplay from "../../components/ProductCard/ProductDisplay";
import { getCart, deleteItem } from "../../utils/api";
import back from "../../assets/cart-background.png";

const CartPage = () => {
  const [cart, setCart] = useState([]);

  const fields = ["", "Products", "Price", "Color", "Delete"];

  const deleteCar = (id, key) => {
    // let newCart= []
    // setCart(prevCart => [...prevCart , prevCart[key]= null])
    // deleteItem(id)
  };

  useEffect(() => {
    getCart().then(setCart);
    // deleteItem(id).deleteCar(id)
  }, [cart]);

  return (
    <>
      <img src={back} alt="back" className="cart-back" />
      <div className="cart-container">
        <h3>My Cart</h3>
        {cart[0] ? (
          <div className="cart-menu">
            {fields.map((field) => (
              <h6 key={field}>{field}</h6>
            ))}
            <ProductDisplay
              items={cart}
              displayType="menu"
              deleteCar={deleteCar}
            ></ProductDisplay>
          </div>
        ) : (
          <h2>There is nothing to show yet...</h2>
        )}
      </div>
    </>
  );
};
export default CartPage;
