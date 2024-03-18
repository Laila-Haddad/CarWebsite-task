import React from "react";
import GridDisplay from "./GridDisplay";
import MenuDisplay from "./MenuDisplay";

const ProductDisplay = ({ displayType, items }) => {
  const displayClass = displayType === "grid" ? "grid-container" : "menu-container";

  return (
    <>
      <div className={displayClass}>
        {items.map((element, index) =>
          displayType === "grid" ? (
            <GridDisplay key={index} element={element} />
          ) : (
            <MenuDisplay key={index} id={index} element={element} />
          )
        )}
      </div>
    </>
  );
};
export default ProductDisplay;
