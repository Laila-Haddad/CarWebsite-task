import React from "react";
import "./DetailsPage.css";
import RatingStars from "../../components/RatingStars/RatingStars"

const ProductInfoSection = ({ rating, description }) => {


  return (
    <div className="product-info-section">
      <div className="rating-review">
        <h6>Rating And Review</h6>
        <div className="rating">
          <RatingStars rating={rating}/>
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
