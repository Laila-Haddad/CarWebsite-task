import React, { useState, useEffect } from "react";
import GridDisplay from "./GridDisplay";
import MenuDisplay from "./MenuDisplay";

const ProductDisplay = ({ displayType , items , deleteCar}) => {

  return (
    <>
      {displayType === "grid" ? (
        <div className="grid-container">
          {items.map((element, index) => (
            <GridDisplay key={index} element={element} />
          ))}
        </div>

      ) : (

        <div className="menu-container">
          {items.map((element, index) => (
            <MenuDisplay key={index} id={index} element={element}  deleteCar={deleteCar}/>
          ))}
        </div>
      )}
    </>
  );
};
export default ProductDisplay;
