import React, { createContext, useState , useEffect } from "react";
import {getCart} from '../utils/api'

export const CartContext = createContext({ cart: [], addToCart: () => {} });

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    getCart().then(setCart)
  }, [])

  const addToCart = (item) => {
    setCart((currentCart)=>{
    item= {...item, colors : item.colors[0]}
      return [...currentCart,item ];
      // const itemIndex = currentCart.findIndex((i) => i.id === item.id);
      // if (itemIndex > -1) {
      //   const newItems = [...currentCart];
      //   newItems[itemIndex].quantity += item.quantity;
      //   return newItems;
      // } else {
      //}
    })

  };

  const value = {
    cart,
    addToCart
  };

  return (
    <CartContext.Provider value={value}> {children} </CartContext.Provider>
  );
};

export default CartContext;
