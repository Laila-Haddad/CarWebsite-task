import React, { createContext, useState, useEffect } from "react";
import { getCart, addCar, deleteCar } from "../utils/api";

export const CartContext = createContext({
  cart: [],
  addToCart: () => {},
  deleteFromCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    getCart().then(setCart);
  }, []);

  const addToCart = (item) => {
    if (item.quantity > 0) {
      for (let i = 0; i < item.quantity; i++) {
        setCart((currentCart) => [...currentCart, item]);
        addCar(item);
      }
    } 
  };

  const deleteFromCart = (id) => {
    setCart((currentCart) => {
      const updatedCart = currentCart.filter((_, i) => i !== id);
      deleteCar(id);
      return updatedCart;
    });
  };

  const value = {
    cart,
    addToCart,
    deleteFromCart,
  };

  return (
    <CartContext.Provider value={value}> {children} </CartContext.Provider>
  );
};

export default CartContext;
