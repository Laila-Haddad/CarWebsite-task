import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import "./DetailsPage.css";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import ProductPurchase from "./ProductPurchase";
import ProductInfoSection from "./ProductInfoSection";
import { useNavigate, useLocation } from "react-router-dom";
import CarContext from "../../contexts/CarProvider";
import Spinner from "../../components/Spinner/Spinner";
import { useTheme } from "../../contexts/ThemeProvider";

const DetailsPage = () => {
  const { getCarDetails } = useContext(CarContext);
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();

  let { id } = useParams();
  const [car, setCar] = useState({});
  const [currentImage, setCurrentImage] = useState("");
  const [error, setError] = useState(false);
  let navigate = useNavigate();

  const handleImage = (index) => {
    setCurrentImage(car.images[index]);
  };

  useEffect(() => {
    setLoading(true);
    getCarDetails(id)
      .then((fetchedCar) => {
        setCar(fetchedCar);
        if (fetchedCar.images && fetchedCar.images.length > 0) {
          setCurrentImage(fetchedCar.images[0]);
        }
      })
      .catch((error) => {
        setError(true);
        navigate("/notFound", { replace: true });
      })
      .finally(setLoading(false));
  }, [id]);

  return (
    <>
      <img src={theme==='light'? "/details-background.png" : "/details-background-dark.png" }  className="body-background"></img>
      {!error && car.name && !loading ? (
        <div className="product-details">
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <div className="product-header">
              <Breadcrumb path={["Type", "Car", "Details"]} />
              <h3>{car.brand + " " + car.name}</h3>
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
        </div>
      ) : (
        <div className="productPage">
          <Spinner />
        </div>
      )}
    </>
  );
};

export default DetailsPage;
