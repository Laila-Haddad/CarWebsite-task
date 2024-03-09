import React, { useState, useEffect } from "react";
import "./ImageSlider.css";

const ImageSlide = ({ item, display }) => {
    if (!item) return <div>Item not found</div>;
  
    const imageUrl = display === "home" ? item.imageUrl : `/${item}`;
    const altText = display === "home" ? item.name : item;
  
    return (
      <div className="slider-item">
        <img src={imageUrl} alt={altText} className="slider-image"  />
        {display === "home" && <span className="slider-item-name">{item.name}</span>}
      </div>
    );
  };
  
export default ImageSlide;
  