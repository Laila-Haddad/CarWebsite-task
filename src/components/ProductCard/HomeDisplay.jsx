import React, { useContext , useState } from "react";
import seats from "../../assets/seat-icon.png";
import milage from "../../assets/milage-icon.png";
import wheel from "../../assets/wheel-icon.png";
import { truncateString } from "../../utils/utils";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/CartProvider";
import Alert from "../Alert/Alert";
import style from "./HomeDisplay.module.css";



const HomeDisplay = ({ element }) => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div
      className={style["car-card"]}
      onClick={() => {
        navigate(`/cars/${element.id}`);
      }}
    >
      <div>
        <img
          src={`${element.imageUrl}`}
          alt={`Image of ${element.name}`}
          className={style["car-image"]}
        />
        <span className={style["car-image-name"]}>Press for details</span>
      </div>
      <div className={style["car-info"]}>
        <h4 className={style["car-name"]}>{truncateString(element.name)}</h4>
        <div className={style["car-details"]}>
          <p className={style["car-seats"]}>
            <img src={seats} alt="number of seats" />
            <span>&nbsp;{element.numOfSeats} Seater</span>
          </p>
          <p className={style["car-transmission"]}>
            <img src={wheel} alt="car type" />
            <span>&nbsp;{element.type}</span>
          </p>
          <p className={style["car-mileage"]}>
            <img src={milage} alt="miles/liter of gas" />
            <span>&nbsp;{element.mileagePerGas}</span>
          </p>
        </div>
        <p className={style["car-price"]}>Starting at ${element.rentPrice}/Day</p>
        <div className={style["car-actions"]}>
          <button
            className="bordered-btn"
            onClick={() => {
              navigate(`/cars/${element.id}`);
            }}
          >
            Details &gt;
          </button>
          <button
            className="filled-btn"
            onClick={(e) => {
              e.stopPropagation();
              addToCart({ ...element, colors: element.colors[0], quantity: 1 })
              setShowAlert(true);

            }}
          >
            Buy Now
          </button>
          <Alert
        message="Item added to cart!"
        show={showAlert}
        onClose={() => setShowAlert(false)}
      />
        </div>
      </div>
    </div>
  );
};

export default HomeDisplay;
