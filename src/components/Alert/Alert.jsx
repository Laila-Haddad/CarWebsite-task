import React, { useState, useEffect } from "react";
import "./Alert.css";

const Alert = ({ message, show, onClose }) => {
  useEffect(() => {
    let timer;
    if (show) {
      timer = setTimeout(() => {
        onClose();
      }, 2500);
    }
    return () => clearTimeout(timer);
  }, [show, onClose]);

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={`Alert-container ${show ? "slide-in" : "slide-out"}`}
    >
      {message}
    </div>
  );
};

export default Alert;
