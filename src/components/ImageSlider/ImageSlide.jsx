import React, { useState, useEffect } from "react";
import "./ImageSlider.css";

const ImageSlide = ({ item, display, index }) => {
  if (!item) return <div>Item not found</div>;

  const image = display === "home" ? item.image : `/${item}`;
  const altText = display === "home" ? item.brand : item;
  const imageText = display === "home" ? item.brand : item.name;

  const darkOverlay = index === 1 ? "slider-image" : "slider-image darkOverlay";

  return (
    <div className="slider-item">

      <img
        src={image}
        alt={altText}
        className={display === "home" ? "home-slider-image" : darkOverlay}
      />
            {display === "home" && (
        <span className="slider-item-name">{imageText}</span>
      )}
    </div>
  );
};

export default ImageSlide;
