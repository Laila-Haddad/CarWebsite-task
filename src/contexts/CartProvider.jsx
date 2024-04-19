import React, { createContext, useState, useEffect } from "react";
import { getCart, addCar, deleteCar } from "../utils/api";
import { useCookies } from "react-cookie";

export const CartContext = createContext({
  cart: [],
  addToCart: () => {},
  deleteFromCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [cookies, setCookie] = useCookies(["cart", "consent"]);
  const [cart, setCart] = useState(() =>
    cookies.consent == true ? cookies.cart || [] : []
    //const saved = localStorage.getItem("cart");
    // return JSON.parse(saved) || [];
  );

  const [cartLength, setCartLength] = useState(
    cart.reduce((sum, car) => {
      return sum + car.quantity;
    }, 0)
  );

  // useEffect(() => {
  // try {
  //   const saved = localStorage.getItem("cart");
  //   if (saved) {
  //     setCart(JSON.parse(saved));
  //   }
  //   getCart().then(setCart)
  // } catch (error) {
  //   console.error("could not fetch data" + error);
  // }
  // }, []);

  useEffect(() => {
    // localStorage.setItem("cart", JSON.stringify(cart));
    const expires = new Date();
    expires.setTime(expires.getTime() + 10 * 24 * 60 * 60 * 1000);
    setCookie("cart", cart, { path: "/", expires: expires });
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
    setCartLength((current) => current - cart[index].quantity);
    setCart((currentCart) => {
      const updatedCart = currentCart.filter((_, i) => i !== index);
      deleteCar(index);
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
