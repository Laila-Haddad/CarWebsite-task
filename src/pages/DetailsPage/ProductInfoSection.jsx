import React from "react";
import "./DetailsPage.css";

const ProductInfoSection = ({ rating, description }) => {
  const stars = Array.from({ length: 5 }, (_, index) => {
    return (
      <span
        key={index}
        className={`star ${index < rating ? "filled" : "empty"}`}
      >
        {index < rating ? "★" : "☆"}
      </span>
    );
  });

  return (
    <div className="product-info-section">
      <div className="rating-review">
        <h6>Rating And Review</h6>
        <div className="rating">
          <div className="stars">{stars}</div>
          <p className="rating-number">{rating.toFixed(1)}</p>
        </div>
      </div>
      <div className="description">
        <h6>Description</h6>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProductInfoSection;
