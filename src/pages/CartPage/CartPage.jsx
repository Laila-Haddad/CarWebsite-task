import React, { useState, useEffect, useContext } from "react";
import "./CartPage.css";
import ProductDisplay from "../../components/ProductCard/ProductDisplay";
import backDark from "../../assets/cart-background-dark.png";
import back from "../../assets/cart-background.png";

import { CartContext } from "../../contexts/CartProvider";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeProvider";

const CartPage = () => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

const {theme} =  useTheme()


  const fields = ["", "Products", "Color", "Price", "Quantity", "Delete"];

  return (
    <>
      <img src={theme=='dark' ?backDark: back } alt="back" className="cart-back" />
      <div className="cart-container">
        <h3>My Cart</h3>
        {cart && cart.length > 0 ? (
          <div className="cart-menu">
            {fields.map((field) => (
              <h6 key={field}>{field}</h6>
            ))}
            <ProductDisplay items={cart} displayType="menu"></ProductDisplay>
          </div>
        ) : (
          <div className="empty-cart">

            <h3 style={{marginTop: "80px"}}>There is nothing to show yet...</h3>
            <br></br>

            <button
              onClick={() => navigate("/")}
              className="filled-btn cart-btn"
            >
              Browse products
            </button>
          </div>
        )}
      </div>
    </>
  );
};
export default CartPage;
