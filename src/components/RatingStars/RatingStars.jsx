import React from "react";
import "./RatingStars.css"

const RatingStars = ({ rating }) => {
  return (
    <div className="stars">
      {Array.from({ length: 5 }, (_, index) => {
        return (
          <span
            key={index}
            className={`star ${index < rating ? "filled" : "empty"}`}
          >
            {index < rating ? "★" : "☆"}
          </span>
        );
      })}
      
    </div>
  );
};

export default RatingStars;
