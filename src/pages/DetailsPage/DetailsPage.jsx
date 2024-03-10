import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCarDetails, getCars } from "../../utils/api";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import "./DetailsPage.css";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import ProductPurchase from "./ProductPurchase";
import detailsBack from "../../assets/details-background2.png";
import ProductInfoSection from "./ProductInfoSection";
const DetailsPage = () => {
  let { id } = useParams();
  const [car, setCar] = useState({});
  const [currentImage, setCurrentImage] = useState("");

  const handleImage = (index) => {
    setCurrentImage(car.images[index]);
  };


  useEffect(() => {
    document.body.classList.add("body-background")
    return () => {
      document.body.classList.remove("body-background")
    };
  }, []); 

  useEffect(() => {
    getCarDetails(id).then((fetchedCar) => {
      setCar(fetchedCar);
      if (fetchedCar.images && fetchedCar.images.length > 0) {
        setCurrentImage(fetchedCar.imageUrl);
      }
    });
  }, [id]);

  return (
    <>
      <div className="product-details">
        {car.name && (
          <>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <div className="product-header">
                <Breadcrumb path={["Type", "Car", "Details"]} />
                <h3>{car.name}</h3>
                <h5>{car.engine}</h5>
              </div>
              <img
                className="product-img"
                src={`/${currentImage}`}
                alt={car.name}
              />

              <div className="product-media">
                <ImageSlider
                  items={car.images}
                  display="detail"
                  handleImage={handleImage}
                />
              </div>
            </div>
            <div className="product-info-details">
              <h5 style={{ color: "black" }}>Details</h5>
              <div>
                <ProductInfoSection
                  rating={car.rating}
                  description={car.description}
                />
              </div>
              <div>
                <ProductPurchase
                  colors={car.colors}
                  price={car.rentPrice}
                  item={car}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default DetailsPage;
