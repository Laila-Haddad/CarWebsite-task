import React, { useState, useEffect } from "react";
import ImageSlide from "./ImageSlide";
import "./ImageSlider.css";

import SlideForward from "../../assets/slide-forward.png";
import SlideBack from "../../assets/slide-back.png";
import ArrowForward from "../../assets/arrow-right.png";
import ArrowBack from "../../assets/arrow-left.png";

const ImageSlider = ({ items, display , handleImage=null}) => {
  const [offset, setOffset] = useState(0);

  const changeSlide = (n) => {
    let newOffset = n;
    if (n <= 0) {
      newOffset = items.length - 1;
    } else if (n >= items.length) {
      newOffset = 0;
    }
    setOffset(newOffset);
    handleImage && handleImage(newOffset)
  };

  const displaySlides = () => {
    let display = [];
    for (let i = 0; i < 4; i++) {
      let index = (offset + i) % items.length;
      display.push(items[index]);
    }
    return display;
  };

  let slides = displaySlides();
  return (
    <div
      className={display === "detail" ?   " detail-slider"  : "slider"}
    >
      {display === "home" && <div className="slider-background"></div>}

      <div
        className="slider-window"
        style={display === "detail" ? { padding: "0 30px" } : {}}
      >
        <img
          src={display === "home" ? SlideBack : ArrowBack}
          alt="SlideBack"
          onClick={() => changeSlide(offset - 1)}
          className="left-control"
        />
        {slides.map((item, index) => (
          <ImageSlide key={index} index={index} item={item} display={display} />
        ))}

        <img
          src={display === "home" ? SlideForward : ArrowForward}
          alt="SlideForward"
          onClick={() => changeSlide(offset + 1)}
          className="right-control"
        />
      </div>
    </div>
  );
};

export default ImageSlider;
