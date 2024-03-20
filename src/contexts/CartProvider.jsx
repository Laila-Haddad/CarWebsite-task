import React, { createContext, useState, useEffect } from "react";
import { getCart, addCar, deleteCar } from "../utils/api";

export const CartContext = createContext({
  cart: [],
  addToCart: () => {},
  deleteFromCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return JSON.parse(saved) || [];
  });
  const [cartLength, setCartLength] = useState(
    cart.reduce((sum, car) => {
      return sum + car.quantity;
    }, 0)
  );

  useEffect(() => {
    // try {
    //   const saved = localStorage.getItem("cart");
    //   if (saved) {
    //     setCart(JSON.parse(saved));
    //   }
    //   getCart().then(setCart)
    // } catch (error) {
    //   console.error("could not fetch data" + error);
    // }
  }, [])
  
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    const existingItem = cart.find(
      (e) => e.id === item.id && e.colors === item.colors
    );
    if (existingItem) {
      const updatedCart = cart.map((e) => {
        if (e.id === item.id && e.colors === item.colors) {
          return { ...e, quantity: e.quantity + item.quantity };
        } else {
          return e;
        }
      });
      setCart(updatedCart);
    } else {
      setCart([...cart, item]);
    }

    addCar(item);
    setCartLength((prev) => prev + item.quantity);
  };

  const deleteFromCart = (index) => {
    setCart((currentCart) => {
      const updatedCart = currentCart.filter((_, i) => i !== index);
      deleteCar(index);
      setCartLength((current) => current - currentCart[index].quantity);
      return updatedCart;
    });
  };

  const value = {
    cart,
    addToCart,
    deleteFromCart,
    cartLength,
  };

  return (
    <CartContext.Provider value={value}> {children} </CartContext.Provider>
  );
};

export default CartContext;
