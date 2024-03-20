import React from "react";
import HomeDisplay from "./HomeDisplay";
import CartDisplay from "./CartDisplay";
import style from "./HomeDisplay.module.css";

const ProductDisplay = ({ displayType, items }) => {
  const displayClass = displayType === "grid" ? style["grid-container"] : style.cartContainer;


  return (
    <>
      <div className={displayClass}>
        {items.map((element, index) =>
          displayType === "grid" ? (
            <HomeDisplay key={index} element={element} />
          ) : (
            <CartDisplay key={index} id={index} element={element} />
          )
        )}
      </div>
    </>
  );
};
export default ProductDisplay;
